<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
          <salary-filter></salary-filter>
          <salary-analyse></salary-analyse>
      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import SalaryFilter from '../components/Filter/SalaryFilter.vue'
  import SalaryAnalyse from '../components/Treatment/SalaryAnalyse.vue'

  export default {
    name: 'salary-page',
    components: {
      Layout,
      SalaryFilter,
      SalaryAnalyse
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped style="./SalaryPage.css"></style>
