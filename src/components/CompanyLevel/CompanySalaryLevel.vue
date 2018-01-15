<template>

  <div class="salary-level-wrapper">

    <div-header :header="'公司平均薪资水平'"></div-header>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'company-salary-level',
    components: {
      DivHeader
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./CompanySalaryLevel.css"></style>
