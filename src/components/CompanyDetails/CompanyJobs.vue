<template>

  <div class="jobs-wrapper">

    <div-header :header="'公司所有职位'"></div-header>
    <job-list v-if="jobList!==null" :jobList="jobList"></job-list>


  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import JobList from '../JobList/JobListBody.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'company-jobs',
    components: {
      DivHeader,
      JobList
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
