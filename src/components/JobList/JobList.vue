<template>

  <div class="job-list-wrapper">
    <job-list-header :pageType="pageType" :totalCount="totalCount"></job-list-header>
    <job-list-body v-if="jobList!==null" :jobList="jobList"></job-list-body>

  </div>

</template>

<script>
  import JobListHeader from './JobListHeader.vue'
  import JobListBody from './JobListBody.vue'

  export default {
    name: 'job-list',
    components: {
      JobListHeader,
      JobListBody
    },
    data() {
      return {}
    },
    props: ['pageType', 'jobList', 'totalCount'],
    methods: {}
  }
</script>

<style scoped src="./JobList.css"></style>
