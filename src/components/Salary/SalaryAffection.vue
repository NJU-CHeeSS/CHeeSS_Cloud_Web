<template>

  <div class="affection-wrapper">
    <div-header :header="header"></div-header>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'salary-affection',
    components: {
      DivHeader
    },
    data() {
      return {
        header: ''
      }
    },
    props: ['header'],
    methods: {}
  }
</script>

<style scoped src="./SalaryAffection.css"></style>
