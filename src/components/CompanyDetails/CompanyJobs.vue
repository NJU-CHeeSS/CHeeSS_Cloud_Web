<template>

  <div class="jobs-wrapper">

    <div-header :header="'公司所有职位'"></div-header>
    <job-list></job-list>


  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import JobList from '../JobList/JobListBody.vue'

  export default {
    name: 'company-jobs',
    components: {
      DivHeader,
      JobList
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyJobs.css"></style>
