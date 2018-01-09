<template>

  <div class="job-list-wrapper">
    <job-list-header></job-list-header>
    <job-list-body></job-list-body>

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
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./JobList.css"></style>
