<template>

  <div class="jobs-wrapper">

    <div-header :header="'公司所有职位'"></div-header>
    <company-job-list v-if="jobList!==null" :jobList="jobList"></company-job-list>
    <!--<job-list v-if="jobList!==null" :jobList="jobList"></job-list>-->


  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import JobList from '../JobList/JobListBody.vue'
  import CompanyJobList from './CompanyJobList.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'company-jobs',
    components: {
      DivHeader,
      JobList,
      CompanyJobList
    },
    computed: {
      ...mapState('company', {
        jobList: state => state.companyJobs
      })
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyJobs.css"></style>
