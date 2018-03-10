<template>
  <div>
    <div class="list-wrapper" v-if="followCompanies.length !== 0">
      <div-header :header="'我关注的公司'"></div-header>
      <div class="list-body">
        <div class="company-names-wrapper">
          <el-row :gutter="10">
            <single-company-name v-for="item in followCompanies" :key="item.companyId"
                                 :name="item.name" :id="item.companyId"></single-company-name>
          </el-row>
        </div>
      </div>
    </div>

    <div class="list-wrapper">
      <div-header :header="'搜索公司列表'"></div-header>

      <div class="list-body">
        <div class="input-wrapper">
          <search-input></search-input>
        </div>
        <!--<div class="letters-wrapper">-->
        <!--<letter-filter v-for="item in letters" :key="item" :letter="item"></letter-filter>-->
        <!--</div>-->

        <div class="company-names-wrapper" v-if="searchResult !== null && searchResult.length !== 0">
          <el-row :gutter="10">
            <single-company-name v-for="item in searchResult" :key="item.companyId"
                                 :name="item.name" :id="item.companyId"></single-company-name>

          </el-row>
          <div :style="{textAlign: 'center'}">
            <el-pagination
              v-if="totalCount !== null"
              layout="prev, pager, next"
              :total=totalCount/10
              @current-change="handleCurrentChange">
            </el-pagination>
          </div>
        </div>
        <div v-if="searchResult !== null && searchResult.length === 0" class="empty-result">
          暂无搜索结果，换个关键词试试～
        </div>
        <div v-if="searchResult === null && searchResult !== ['']" :style="{textAlign: 'center'}">
          <img src="../../assets/img/loading.gif" width="200"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import {Row, Pagination} from 'element-ui'

  import DivHeader from '../Util/DivHeader.vue'
  import LetterFilter from '../Util/LetterFilter.vue'
  import SearchInput from '../Util/SearchInput.vue'
  import SingleCompanyCard from '../ListItem/SingleCompanyCard.vue'
  import SingleCompanyName from '../ListItem/SingleCompanyName.vue'
  import {mapState, mapActions, mapMutations} from 'vuex'

  export default {
    name: 'company-name-list',
    components: {
      elRow: Row,
      elPagination: Pagination,
      DivHeader,
      LetterFilter,
      SearchInput,
      SingleCompanyCard,
      SingleCompanyName
    },
    computed: {
      ...mapState('company', {
        searchResult: state => state.searchResult,
        searchKeyword: state => state.searchKeyword,
        totalCount: state => state.totalCount
      }),
      ...mapState('auth', {
        followCompanies: state => state.followCompanies
      })
    },
    data() {
      return {
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'
          , 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'
          , 'V', 'W', 'X', 'Y', 'Z', '#'],
        totalPage: this.totalCount / 10
      }
    },
    methods: {
      ...mapActions('company', [
        'searchCompany'
      ]),
      ...mapMutations('company', [
        'saveSearchResult'
      ]),
      handleCurrentChange(val) {
//        this.saveSearchResult(null)
        this.searchCompany({
          searchInfo: {
            keyword: this.searchKeyword,
            page: val
          }
        })
      }
    }
  }
</script>

<style scoped src="./CompanyNameList.css"></style>
