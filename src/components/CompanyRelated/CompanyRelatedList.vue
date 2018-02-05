<template>

  <div class="related-list-wrapper">

    <div-header :header="'相关公司推荐'"></div-header>
    <single-company-related v-for="item in 10" :key="item"></single-company-related>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SingleCompanyRelated from '../ListItem/SingleCompanyRelated.vue'

  export default {
    name: 'company-related-list',
    components: {
      DivHeader,
      SingleCompanyRelated
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyRelatedList.css"></style>
