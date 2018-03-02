<template>

  <div class="distribution-wrapper">
    <div-header :header="header"></div-header>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'salary-distribution',
    components: {
      DivHeader
    },
    data() {
      return {}
    },
    props: ['header'],
    methods: {}
  }
</script>

<style scoped src="./SalaryDistribution.css"></style>
