<template>

  <div>
    <single-job v-for="item in 10"></single-job>
  </div>
</template>

<script>

  import SingleJob from '../ListItem/SingleJob.vue'

  export default {
    name: 'job-list-body',
    components: {
      SingleJob
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./JobListBody.css"></style>
