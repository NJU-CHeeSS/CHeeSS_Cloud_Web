<template>

  <div class="salary-average-wrapper">
    <div-header :header="'中国平均薪资'"></div-header>

    <div class="average-wrapper">
      ¥ 350,000
    </div>

    <div class="average-bottom-wrapper">
      <div class="min-wrapper">
        最低薪资
        <div class="min-data-wrapper">¥ 100,000</div>
      </div>

      <div class="max-wrapper">
        最高薪资
        <div class="max-data-wrapper">¥ 700,000</div>
      </div>
    </div>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'salary-country-average',
    components: {
      DivHeader
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./SalaryAverage.css"></style>
