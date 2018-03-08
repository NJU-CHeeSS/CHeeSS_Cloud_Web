<template>

  <div class="single-job-wrapper">
    <div class="job-name">
      <p @click="goToJobDetailsPage">{{singleJob.companyName}} / {{singleJob.jobName}}</p>
      <span>{{singleJob.releaseDate}}</span>
    </div>
    <div class="left-wrapper">
      <span class="place">{{singleJob.location}}</span>
      <br>
      <span
        class="info">* 学历要求：{{singleJob.diploma}}，</span>
      <span class="info" v-if="singleJob.minExperience !== singleJob.maxExperience">工作经验要求：{{singleJob.minExperience}} ~ {{singleJob.maxExperience}} 年</span>
      <span class="info"
            v-if="singleJob.minExperience === singleJob.maxExperience && singleJob.maxExperience !== 0">工作经验要求：至少 {{singleJob.minExperience}} 年</span>
      <span class="info"
            v-if="singleJob.minExperience === singleJob.maxExperience && singleJob.maxExperience === 0">工作经验要求：无</span>

    </div>

    <div class="right-wrapper">
      <span class="salary">{{singleJob.minSalary}} ~ {{singleJob.maxSalary}} / 月</span>
    </div>


  </div>


</template>

<script>
  import {router} from '../../main'
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: 'single-job',
    components: {},
    data() {
      return {}
    },
    props: ['singleJob'],
    methods: {
      ...mapMutations('job', [
        'saveCurrentJob'
      ]),
      goToJobDetailsPage() {
        this.saveCurrentJob(this.singleJob)
        router.push({name: 'JobDetailsPage', params: {jobId: this.singleJob.jobId}})
      }
    }
  }
</script>

<style scoped src="./SingleJob.css"></style>
