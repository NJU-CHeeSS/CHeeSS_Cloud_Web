<template>

  <div class="salary-analyse-wrapper">
    <salary-city-average></salary-city-average>
    <salary-country-average></salary-country-average>
    <salary-distribution :header="'薪资范围分布'"></salary-distribution>
    <salary-distribution :header="'地区薪资分布'"></salary-distribution>
    <salary-affection :header="'不同企业规模薪资分布'"></salary-affection>
    <salary-affection :header="'不同学历薪资分布'"></salary-affection>
    <salary-affection :header="'不同工作年限薪资分布'"></salary-affection>
    <salary-affection :header="'不同性别薪资分布'"></salary-affection>
  </div>

</template>

<script>
  import SalaryCityAverage from './SalaryCityAverage.vue'
  import SalaryCountryAverage from './SalaryCountryAverage.vue'
  import SalaryDistribution from './SalaryDistribution.vue'
  import SalaryAffection from './SalaryAffection.vue'

  export default {
    name: 'salary-analyse',
    components: {
      SalaryCityAverage,
      SalaryCountryAverage,
      SalaryDistribution,
      SalaryAffection
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./SalaryAnalyse.css"></style>
