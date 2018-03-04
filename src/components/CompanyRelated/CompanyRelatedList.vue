<template>

  <div class="related-list-wrapper">

    <div-header :header="'相关公司推荐'"></div-header>
    <single-company-related v-for="item in relatedCompanies" :key="item.companyId" :singleCompany="item"></single-company-related>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SingleCompanyRelated from '../ListItem/SingleCompanyRelated.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'company-related-list',
    components: {
      DivHeader,
      SingleCompanyRelated
    },
    computed: {
      ...mapState('company', {
        relatedCompanies: state => state.relatedCompanies
      })
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyRelatedList.css"></style>
