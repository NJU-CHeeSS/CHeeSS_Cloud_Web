<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <div class="left-wrapper">
          <job-filter></job-filter>
          <job-list></job-list>
        </div>
        <div class="right-wrapper">

        </div>

      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import JobFilter from '../components/Filter/JobFilter.vue'
  import JobList from '../components/JobList/JobList.vue'

  export default {
    name: 'job-filter-page',
    components: {
      Layout,
      JobFilter,
      JobList
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped style="./JobFilterPage.css"></style>
