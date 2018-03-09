<template>

  <div class="list-wrapper">
    <div-header :header="'关注度最高公司'"></div-header>

    <div class="list-body">
      <single-company-card v-for="item in popularCompanies" :key="item.companyId"
                           :companyInfo="item"></single-company-card>
    </div>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SingleCompanyCard from '../ListItem/SingleCompanyCard.vue'
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'company-card-list',
    components: {
      DivHeader,
      SingleCompanyCard
    },
    computed: {
      ...mapState('company', {
        popularCompanies: state => state.popularCompanies
      })
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyCardList.css"></style>
