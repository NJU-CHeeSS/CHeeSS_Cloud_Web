<template>

  <div class="job-list-wrapper">
    <job-list-header :type="type"></job-list-header>
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
    props: ['type', 'jobList'],
    methods: {}
  }
</script>

<style scoped src="./JobList.css"></style>
