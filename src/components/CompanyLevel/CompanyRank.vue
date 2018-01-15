<template>

  <div class="rank-wrapper">

    <div-header :header="'同类公司排行'"></div-header>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'company-rank',
    components: {
      DivHeader,
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyRank.css"></style>
