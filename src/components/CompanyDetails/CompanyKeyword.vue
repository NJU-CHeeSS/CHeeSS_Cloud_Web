<template>

  <div class="keyword-wrapper">

    <div-header :header="'公司关键词标签'"></div-header>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'company-keyword',
    components: {
      DivHeader
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyKeyword.css"></style>
