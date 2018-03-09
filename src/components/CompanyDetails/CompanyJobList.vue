<template>

  <div v-if="jobList.length !== 0">
    <single-job v-for="item in jobList" :key="item.jobId" :singleJob="item"></single-job>

  </div>

  <div v-else :style="{textAlign: 'center'}">
    <p>暂无职位</p>
  </div>
</template>

<script>

  import SingleJob from '../ListItem/SingleJob.vue'
  import {Pagination, Message} from 'element-ui'
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'company-job-list',
    components: {
      SingleJob,
      Message
    },
    data() {
      return {}
    },
    computed: {},
    props: ['jobList'],
    methods: {
      ...mapMutations('job', [
        'saveCurrentPage'
      ]),
      ...mapActions('job', [
        'fetchJobList',
        'fetchRecommendJobList'
      ])
    }
  }
</script>

<style scoped ></style>
