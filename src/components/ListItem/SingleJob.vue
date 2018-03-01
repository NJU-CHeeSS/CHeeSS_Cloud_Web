<template>

  <div class="single-job-wrapper">
    <div class="job-name">
      <p @click="goToJobDetailsPage">{{singleJob.companyName}} / {{singleJob.jobName}}</p>
      <span>{{singleJob.releaseDate}}</span>
    </div>
    <div class="left-wrapper">
      <span class="place">{{singleJob.location}}</span>
      <br>
      <span class="info">* 至少两年工作经验</span>

    </div>

    <div class="right-wrapper">
      <span class="salary">{{singleJob.minSalary}} ~ {{singleJob.maxSalary}} / 年</span>
    </div>


  </div>


</template>

<script>
  import {router} from '../../main'

  export default {
    name: 'single-job',
    components: {},
    data() {
      return {}
    },
    props: ['singleJob'],
    methods: {
      goToJobDetailsPage() {
        router.push({name: 'JobDetailsPage', params: {jobId: 1}})
      }
    }
  }
</script>

<style scoped src="./SingleJob.css"></style>
