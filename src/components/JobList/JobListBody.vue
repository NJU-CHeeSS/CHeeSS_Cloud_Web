<template>

  <div v-if="jobList.length !== 0">
    <single-job v-for="item in jobList" :key="item.jobId" :singleJob="item"></single-job>

    <div class="pagination-wrapper">
      <el-pagination
        layout="prev, pager, next"
        :total=totalCount/10
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>

  </div>

  <div v-else :style="{textAlign: 'center'}">
    <p>暂无搜索结果！</p>
  </div>
</template>

<script>

  import SingleJob from '../ListItem/SingleJob.vue'
  import {Pagination, Message} from 'element-ui'
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'job-list-body',
    components: {
      SingleJob,
      elPagination: Pagination,
      Message
    },
    data() {
      return {
        totalPage: this.totalCount / 10
      }
    },
    computed: {
      ...mapState('job', {
//        jobList: state => state.jobList,
        filterInfo: state => state.filterInfo,
        filterOrder: state => state.filterOrder,
        currentPage: state => state.currentPage,
        pageType: state => state.pageType
      }),
      ...mapState('search', {
        keyword: state => state.keyword
      })
    },
    props: ['jobList', 'totalCount'],
    methods: {
      ...mapMutations('job', [
        'saveCurrentPage'
      ]),
      ...mapActions('job', [
        'fetchJobList',
        'fetchRecommendJobList'
      ]),
      ...mapActions('search', [
        'fetchJobSearchResult',
      ]),
      handleCurrentChange(val) {
        this.saveCurrentPage(val)
        if (this.pageType === 'filter') {
          window.scrollTo(0, 0)
          let searchInfo = {
            order: this.filterOrder,
            page: this.currentPage,
            location: this.filterInfo.location,
            diploma: this.filterInfo.diploma,
            earlyReleaseDate: this.filterInfo.earlyReleaseDate,
            property: this.filterInfo.property
          }
          this.fetchJobList({
            searchInfo: searchInfo,
            onSuccess: (success) => {
              Message({
                message: success,
                type: 'success'
              })
            },
            onError: (error) => {
              Message.error(error)
            }
          })
        } else if (this.pageType === 'recommend') {
          window.scrollTo(0, 0)
          let searchInfo = {
            order: this.filterOrder,
            page: this.currentPage,
          }
          this.fetchRecommendJobList({
            searchInfo: searchInfo,
            onSuccess: (success) => {
              Message({
                message: success,
                type: 'success'
              })
              document.documentElement.scrollTop = 0
            },
            onError: (error) => {
              Message.error(error)
            }
          })
        } else {
          window.scrollTo(0, 0)
          let searchInfo = {
            keyword: this.keyword,
            page: val
          }
          this.fetchJobSearchResult({
            searchInfo: searchInfo,
            onSuccess: () => {
            },
            onError: () => {
            }
          })
        }
      }
    }
  }
</script>

<style scoped src="./JobListBody.css"></style>
