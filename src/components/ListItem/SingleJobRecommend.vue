<template>

  <div class="single-job-recommend-wrapper">

    <p class="name">{{singleJobRecommend.jobName}}</p>
    <p class="address">{{singleJobRecommend.location}}</p>
    <button class="compare-button" @click="showJobCompareModal">+ 对比</button>

  </div>


</template>

<script>

  import {router} from '../../main'
  import {mapState, mapActions, mapMutations} from 'vuex'

  export default {
    name: 'single-job-recommend',
    components: {},
    data() {
      return {}
    },
    props: ['singleJobRecommend'],
    computed: {
      ...mapState('job', {
        currentJob: state => state.currentJob
      })
    },
    methods: {
      ...mapActions('job', [
        'fetchCompareResult'
      ]),
      showJobCompareModal() {
        let jobIds = {}
        jobIds.jobId1 = this.currentJob.jobId
        jobIds.jobId2 = this.singleJobRecommend.jobId

        this.fetchCompareResult(jobIds)
        this.$modal.show('job-compare-modal')
      }
    }
  }
</script>

<style scoped src="./SingleJobRecommend.css"></style>
