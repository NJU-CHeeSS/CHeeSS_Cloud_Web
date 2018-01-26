<template>

  <div class="single-job-wrapper">
    <div class="job-name">
      <p @click="goToJobDetailsPage">GC - Project Manager 项目经理</p>
      <span>2017-10-12</span>
    </div>
    <div class="left-wrapper">
      <span class="place">海拉 江苏常州</span>
      <br>
      <span class="info">* 至少两年工作经验</span>

    </div>

    <div class="right-wrapper">
      <span class="salary">35,0000 / 年</span>
    </div>


  </div>


</template>

<script>
  import { router } from '../../main'

  export default {
    name: 'single-job',
    components: {},
    data () {
      return {}
    },
    methods: {
      goToJobDetailsPage () {
        router.push({name: 'JobDetailsPage', params: {jobId: 1}})
      }
    }
  }
</script>

<style scoped src="./SingleJob.css"></style>
