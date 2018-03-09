<template>
  <div>
    <div class="list-wrapper">
      <div-header :header="'我关注的公司'"></div-header>
      <div class="company-names-wrapper" v-if="followCompanies.length !== 0">
        <el-row :gutter="10">
          <single-company-name v-for="item in followCompanies" :key="item.companyId"
                               :name="item.name" :id="item.companyId"></single-company-name>
        </el-row>
      </div>
    </div>

    <div class="list-wrapper">
      <div-header :header="'搜索公司'"></div-header>

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
        </div>
        <div v-if="searchResult !== null && searchResult.length === 0" class="empty-result">
          暂无搜索结果，换个关键词试试～
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import {Row} from 'element-ui'

  import DivHeader from '../Util/DivHeader.vue'
  import LetterFilter from '../Util/LetterFilter.vue'
  import SearchInput from '../Util/SearchInput.vue'
  import SingleCompanyCard from '../ListItem/SingleCompanyCard.vue'
  import SingleCompanyName from '../ListItem/SingleCompanyName.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'company-name-list',
    components: {
      elRow: Row,
      DivHeader,
      LetterFilter,
      SearchInput,
      SingleCompanyCard,
      SingleCompanyName
    },
    computed: {
      ...mapState('company', {
        searchResult: state => state.searchResult,
      }),
      ...mapState('auth', {
        followCompanies: state => state.followCompanies
      })
    },
    data() {
      return {
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'
          , 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'
          , 'V', 'W', 'X', 'Y', 'Z', '#']
      }
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyNameList.css"></style>
