<template>

  <div>
    <single-job v-for="item in 10"></single-job>

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
  import { Pagination } from 'element-ui'

  export default {
    name: 'job-list-body',
    components: {
      SingleJob,
      elPagination: Pagination
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./JobListBody.css"></style>
