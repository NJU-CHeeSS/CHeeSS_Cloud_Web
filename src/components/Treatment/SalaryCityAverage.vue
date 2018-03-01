<template>

  <div class="salary-average-wrapper">
    <div-header :header="'城市平均薪资'"></div-header>

    <div class="average-wrapper">
      ¥ {{average}}
    </div>

    <div class="average-bottom-wrapper">
      <div class="min-wrapper">
        最低薪资
        <div class="min-data-wrapper">¥ {{low}}/月</div>
      </div>

      <div class="max-wrapper">
        最高薪资
        <div class="max-data-wrapper">¥ {{high}}/月</div>
      </div>
    </div>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'salary-city-average',
    components: {
      DivHeader
    },
    props: ['average', 'low', 'high'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./SalaryAverage.css"></style>
