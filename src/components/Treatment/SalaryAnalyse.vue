<template>

  <div class="salary-analyse-wrapper">
    <div v-if="treatment!==null">
      <salary-city-average :average="treatment.cityAverage"
                           :low="treatment.cityLow"
                           :high="treatment.cityHigh"></salary-city-average>
      <salary-country-average :average="treatment.countryAverage"
                              :low="treatment.countryLow"
                              :high="treatment.countryHigh"></salary-country-average>

      <salary-distribution :header="'薪资范围分布'"></salary-distribution>
      <bar-chart :x="distribution.x" :y="distribution.y"></bar-chart>

      <salary-distribution :header="'地区薪资分布'"></salary-distribution>
      <multiple-bar-chart :x="area.x" :average="area.average" :low="area.low" :high="area.high"></multiple-bar-chart>

      <salary-distribution :header="'不同企业规模薪资分布'"></salary-distribution>
      <multiple-bar-chart :x="size.x" :average="size.average" :low="size.low" :high="size.high"></multiple-bar-chart>

      <salary-distribution :header="'不同学历薪资分布'"></salary-distribution>
      <multiple-bar-chart :x="education.x" :average="education.average" :low="education.low"
                          :high="education.high"></multiple-bar-chart>

      <salary-distribution :header="'不同工作年限薪资分布'"></salary-distribution>
      <multiple-bar-chart :x="experience.x" :average="experience.average" :low="experience.low"
                          :high="experience.high"></multiple-bar-chart>
    </div>
    <div v-else :style="{textAlign: 'center', padding: '70px'}">
      <img src="../../assets/img/loading.gif" width="80"/>
    </div>
  </div>

</template>

<script>
  import SalaryCityAverage from './SalaryCityAverage.vue'
  import BarChart from '../Chart/barChart.vue'
  import MultipleBarChart from '../Chart/multipleBarChart.vue'
  import SalaryCountryAverage from './SalaryCountryAverage.vue'
  import SalaryDistribution from './SalaryDistribution.vue'
  import {Loading} from 'element-ui'
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'salary-analyse',
    components: {
      SalaryCityAverage,
      SalaryCountryAverage,
      SalaryDistribution,
      BarChart,
      MultipleBarChart
    },
    data() {
      return {}
    },
    props: ['treatment'],
    computed: {
      distribution: {
        get: function () {
          let tempX = []
          let tempY = []
          this.treatment.distribution.forEach((distribution, index) => {
            tempX.push(distribution.salary)
            tempY.push(distribution.number)
          })

          let temp = {}
          temp.x = tempX
          temp.y = tempY
          return temp
        }
      },
      area: {
        get: function () {
          let tempX = []
          let tempAverage = []
          let tempLow = []
          let tempHigh = []
          this.treatment.areaSalary.forEach((areaSalary, index) => {
            tempX.push(areaSalary.area)
            tempAverage.push(areaSalary.averageSalary)
            tempLow.push(areaSalary.lowSalary)
            tempHigh.push(areaSalary.highSalary)
          })

          let temp = {}
          temp.x = tempX
          temp.average = tempAverage
          temp.low = tempLow
          temp.high = tempHigh
          return temp
        }
      },
      size: {
        get: function () {
          let tempX = []
          let tempAverage = []
          let tempLow = []
          let tempHigh = []
          this.treatment.sizeSalary.forEach((sizeSalary, index) => {
            tempX.push(sizeSalary.size)
            tempAverage.push(sizeSalary.averageSalary)
            tempLow.push(sizeSalary.lowSalary)
            tempHigh.push(sizeSalary.highSalary)
          })

          let temp = {}
          temp.x = tempX
          temp.average = tempAverage
          temp.low = tempLow
          temp.high = tempHigh
          return temp
        }
      },
      education: {
        get: function () {
          let educationX = []
          let educationAverage = []
          let educationLow = []
          let educationHigh = []
          this.treatment.educationSalary.forEach((educationSalary, index) => {
            educationX.push(educationSalary.education)
            educationAverage.push(educationSalary.averageSalary)
            educationLow.push(educationSalary.lowSalary)
            educationHigh.push(educationSalary.highSalary)
          })

          let temp = {}
          temp.x = educationX
          temp.average = educationAverage
          temp.low = educationLow
          temp.high = educationHigh
          return temp
        }
      },
      experience: {
        get: function () {
          let experienceX = []
          let experienceAverage = []
          let experienceLow = []
          let experienceHigh = []
          this.treatment.experienceSalary.forEach((experienceSalary, index) => {
            experienceX.push(experienceSalary.experience)
            experienceAverage.push(experienceSalary.averageSalary)
            experienceLow.push(experienceSalary.lowSalary)
            experienceHigh.push(experienceSalary.highSalary)
          })

          let temp = {}
          temp.x = experienceX
          temp.average = experienceAverage
          temp.low = experienceLow
          temp.high = experienceHigh
          return temp
        }
      }
    }
  }
</script>

<style scoped src="./SalaryAnalyse.css"></style>
