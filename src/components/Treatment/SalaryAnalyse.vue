<template>

  <div class="salary-analyse-wrapper">
    <salary-city-average :average="treatment.cityAverage"
                         :low="treatment.cityLow"
                         :high="treatment.cityHigh"></salary-city-average>
    <salary-country-average :average="treatment.countryAverage"
                            :low="treatment.countryLow"
                            :high="treatment.countryHigh"></salary-country-average>
    <salary-distribution :header="'薪资范围分布'"></salary-distribution>
    <salary-distribution :header="'地区薪资分布'"></salary-distribution>
    <salary-distribution :header="'不同企业规模薪资分布'"></salary-distribution>
    <salary-distribution :header="'不同学历薪资分布'"></salary-distribution>
    <salary-distribution :header="'不同工作年限薪资分布'"></salary-distribution>
  </div>

</template>

<script>
  import SalaryCityAverage from './SalaryCityAverage.vue'
  import SalaryCountryAverage from './SalaryCountryAverage.vue'
  import SalaryDistribution from './SalaryDistribution.vue'
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'salary-analyse',
    components: {
      SalaryCityAverage,
      SalaryCountryAverage,
      SalaryDistribution
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('treatment', {
        treatment: state => state.treatment,
      })
    },
    methods: {
      ...mapActions('treatment', [
        'fetchTreatmentInfo'
      ])
    },
    created() {
      this.fetchTreatmentInfo()
    }
  }
</script>

<style scoped src="./SalaryAnalyse.css"></style>
