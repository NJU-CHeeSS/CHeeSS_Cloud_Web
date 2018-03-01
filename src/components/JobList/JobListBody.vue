<template>

  <div>
    <single-job v-for="item in jobList" :key="item.jobId" :singleJob="item"></single-job>

    <div class="pagination-wrapper">
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>

  </div>
</template>

<script>

  import SingleJob from '../ListItem/SingleJob.vue'
  import {Pagination} from 'element-ui'
  import {mapState} from 'vuex'

  export default {
    name: 'job-list-body',
    components: {
      SingleJob,
      elPagination: Pagination
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('job', {
        jobList: state => state.jobList
      })
    },
    methods: {}
  }
</script>

<style scoped src="./JobListBody.css"></style>
