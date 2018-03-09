<template>

  <div class="related-list-wrapper">

    <single-company-related v-for="item in companyList" :key="item.companyId"
                            :singleCompany="item"></single-company-related>

    <div :style="{textAlign: 'center'}">
      <el-pagination
        layout="prev, pager, next"
        :total=totalPage
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>

  </div>

</template>

<script>

  import SingleCompanyRelated from '../ListItem/SingleCompanyRelated.vue'
  import {Pagination} from 'element-ui'
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'company-related-list',
    components: {
      SingleCompanyRelated,
      elPagination: Pagination
    },
    props: ['companyList', 'totalCount'],
    data() {
      return {
        totalPage: this.totalCount / 10
      }
    },
    computed: {
      ...mapState('search', {
        keyword: state => state.keyword
      })
    },
    methods: {
      ...mapActions('search', [
        'fetchCompanySearchResult',
      ]),
      handleCurrentChange(val) {
        window.scrollTo(0, 0)
        let searchInfo = {
          keyword: this.keyword,
          page: val
        }
        this.fetchCompanySearchResult({
          searchInfo: searchInfo,
          onSuccess: () => {
          },
          onError: () => {
          }
        })
      }
    }
  }
</script>

<style scoped src="./CompanyBriefList.css"></style>
