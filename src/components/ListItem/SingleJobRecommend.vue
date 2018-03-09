<template>

  <div class="single-job-recommend-wrapper">

    <p class="name" @click="goToJobDetailsPage">{{singleJobRecommend.jobName}}</p>
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
      ...mapMutations('job', [
        'saveCurrentJob'
      ]),
      ...mapActions('job', [
        'fetchCompareResult',
        'fetchRelateJobs'
      ]),
      showJobCompareModal() {
        let jobIds = {}
        jobIds.jobId1 = this.currentJob.jobId
        jobIds.jobId2 = this.singleJobRecommend.jobId

        this.fetchCompareResult(jobIds)
        this.$modal.show('job-compare-modal')
      },
      goToJobDetailsPage() {
        this.fetchRelateJobs(this.singleJobRecommend.jobId)
        this.saveCurrentJob(this.singleJobRecommend)
        router.push({name: 'JobDetailsPage', params: {jobId: this.singleJobRecommend.jobId}})
      }
    }
  }
</script>

<style scoped src="./SingleJobRecommend.css"></style>
