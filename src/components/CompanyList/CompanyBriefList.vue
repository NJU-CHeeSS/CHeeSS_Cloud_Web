<template>

  <div class="related-list-wrapper">

    <single-company-related v-for="item in companyList" :key="item.companyId"
                            :singleCompany="item"></single-company-related>

  </div>

</template>

<script>

  import SingleCompanyRelated from '../ListItem/SingleCompanyRelated.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'company-related-list',
    components: {
      SingleCompanyRelated
    },
    props: ['companyList'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyBriefList.css"></style>
