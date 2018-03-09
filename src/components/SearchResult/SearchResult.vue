<template>

  <div class="search-result-wrapper">

    <div class="key-wrapper">
      <h1>"{{keyword}}" <span>  搜索结果</span></h1>
    </div>

    <button class="back-button" @click="goBack"><< 返回</button>
    <el-tabs>
      <el-tab-pane>
        <span slot="label">
          <!--<img src="../../assets/img/album.png" width="20"/>-->
          公司
        </span>
        <company-brief-list v-if="companySearchResult.length !== 0"
                            :companyList="companySearchResult"></company-brief-list>
        <p v-else class="empty-result">暂无搜索结果，换个关键词试试～</p>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <!--<img src="../../assets/img/users.png" width="18"/>-->
          职位
        </span>

        <job-list-body v-if="jobSearchResult.length !== 0"
                       :jobList="jobSearchResult"></job-list-body>
        <p v-else class="empty-result">暂无搜索结果，换个关键词试试～</p>
        <!--<el-row v-else :gutter="25">-->
        <!--<user-icon v-for="item in searchResult.users"-->
        <!--:users="item"></user-icon>-->
        <!--</el-row>-->
      </el-tab-pane>
    </el-tabs>

  </div>

</template>

<script>
  import CompanyBriefList from '../../components/CompanyList/CompanyBriefList.vue'
  import JobListBody from '../../components/JobList/JobListBody.vue'
  import {mapState, mapActions} from 'vuex'
  import {store, router} from '../../main'
  import {Tabs, TabPane, Message, Row} from 'element-ui'

  export default {
    name: 'search-result',
    components: {
      CompanyBriefList,
      JobListBody,
      Message,
      elTabs: Tabs,
      elTabPane: TabPane,
      elRow: Row
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('auth', {
        user: state => state.user,
      }),
      ...mapState('search', {
        companySearchResult: state => state.companySearchResult,
        jobSearchResult: state => state.jobSearchResult,
        keyword: state => state.keyword
      })
    },
    methods: {
      goBack() {
        router.go(-1)
      }
    },
  }

</script>

<style scoped src="./SearchResult.css"></style>
