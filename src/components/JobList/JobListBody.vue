<template>

  <div>
    <single-job v-for="item in jobList" :key="item.jobId" :singleJob="item"></single-job>

    <div class="pagination-wrapper">
      <el-pagination
        layout="prev, pager, next"
        :total="1000"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>

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
      return {}
    },
    computed: {
      ...mapState('job', {
        jobList: state => state.jobList,
        filterInfo: state => state.filterInfo,
      })
    },
    methods: {
      ...mapMutations('job', [
        'saveCurrentPage'
      ]),
      ...mapActions('job', [
        'fetchJobList'
      ]),
      handleCurrentChange(val) {
        this.saveCurrentPage(val)
        let searchInfo = {
          keyword: this.filterInfo,
          order: this.filterOrder,
          page: this.currentPage,
        }
        this.fetchJobList({
          searchInfo: searchInfo,
          onSuccess: (success) => {
            Message({
              message: '成功获得招聘信息！',
              type: 'success'
            })
          },
          onError: (error) => {
            Message.error(error)
          }
        })
      }
    }
  }
</script>

<style scoped src="./JobListBody.css"></style>
