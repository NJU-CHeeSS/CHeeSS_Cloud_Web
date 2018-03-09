<template>

  <div class="search-result-wrapper">

    <div class="key-wrapper">
      <h1>"{{keyword}}" <span>  搜索结果</span></h1>
    </div>

    <button class="back-button" @click="goBack"><< 返回</button>
    <el-tabs>
      <el-tab-pane>
        <span slot="label">
          公司
        </span>

        <div class="list-wrapper">
          <company-brief-list v-if="companySearchResult !== null && companySearchResult.length !== 0"
                              :companyList="companySearchResult" :totalCount="companyTotalCount"></company-brief-list>
          <div v-if="companySearchResult === null" :style="{textAlign: 'center'}">
            <img src="../../assets/img/loading.gif" width="200"/>
          </div>
          <p v-if="companySearchResult !== null && companySearchResult.length === 0" class="empty-result">
            暂无搜索结果，换个关键词试试～</p>
        </div>

      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          职位
        </span>

        <div class="list-wrapper">
          <job-list-body v-if="jobSearchResult !== null && jobSearchResult.length !== 0"
                         :jobList="jobSearchResult" :totalCount="jobTotalCount"></job-list-body>
          <div v-if="jobSearchResult === null" :style="{textAlign: 'center'}">
            <img src="../../assets/img/loading.gif" width="200"/>
          </div>
          <p v-if="jobSearchResult !== null && jobSearchResult.length === 0" class="empty-result">暂无搜索结果，换个关键词试试～</p>
        </div>

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
        keyword: state => state.keyword,
        jobTotalCount: state => state.jobTotalCount,
        companyTotalCount: state => state.companyTotalCount
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
