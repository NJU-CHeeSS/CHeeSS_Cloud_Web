<template>
  <div class="body-wrapper">
    <layout>
      <company-banner></company-banner>
      <company-header></company-header>
      <div class="container">

        <company-keyword v-if="currentShowing==='companyDetails'"></company-keyword>
        <company-jobs v-if="currentShowing==='companyDetails'"></company-jobs>

        <company-salary-level v-if="currentShowing==='companyLevel' && companySalary !== null"
                              :companySalary="companySalary"></company-salary-level>
        <company-rank v-if="currentShowing==='companyLevel' && companyRank !== null"
                      :companyRank="companyRank"></company-rank>

        <company-related-list v-if="currentShowing==='companyRelated' && relatedCompanies !== null"
                              :companyList="relatedCompanies"></company-related-list>

      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import CompanyBanner from '../components/Banner/CompanyBanner.vue'
  import CompanyHeader from '../components/CompanyDetails/CompanyHeader.vue'
  import CompanyKeyword from '../components/CompanyDetails/CompanyKeyword.vue'
  import CompanyJobs from '../components/CompanyDetails/CompanyJobs.vue'
  import CompanySalaryLevel from '../components/CompanyLevel/CompanySalaryLevel.vue'
  import CompanyRank from '../components/CompanyLevel/CompanyRank.vue'
  import CompanyRelatedList from '../components/CompanyRelated/CompanyRelatedList.vue'
  import {mapState} from 'vuex'
  import {store} from '../main'

  export default {
    name: 'company-details-page',
    components: {
      Layout,
      CompanyBanner,
      CompanyHeader,
      CompanyKeyword,
      CompanyJobs,
      CompanySalaryLevel,
      CompanyRank,
      CompanyRelatedList
    },
    computed: {
      ...mapState('company', {
        currentShowing: state => state.currentShowing,
        companyRank: state => state.companyRank,
        companySalary: state => state.companySalary,
        relatedCompanies: state => state.relatedCompanies
      })
    },
    data() {
      return {}
    },
    methods: {},
    beforeRouteUpdate(to, from, next) {
      console.error(to.params.companyId, from.params.companyId)
      store.commit('company/saveCompanyInfo', null)
      store.commit('company/saveCompanyJobs', [])
      store.commit('company/saveRelatedCompanies', [])
      store.commit('company/saveCompanySalary', null)
      store.dispatch('company/fetchCompanyInfo', {
        companyId: to.params.companyId,
        onSuccess: (success) => {
          store.dispatch('company/fetchCompanyJobs', to.params.companyId)
          store.dispatch('company/fetchRelatedCompanies', to.params.companyId)
          store.dispatch('company/fetchCompanyRank')
          store.dispatch('company/fetchCompanySalary', to.params.companyId)
        }
      })
      next(true)
    },
    beforeRouteEnter(to, from, next) {
      store.dispatch('company/fetchCompanyInfo', {
        companyId: to.params.companyId,
        onSuccess: (success) => {
          store.dispatch('company/fetchCompanyJobs', to.params.companyId)
          store.dispatch('company/fetchRelatedCompanies', to.params.companyId)
          store.dispatch('company/fetchCompanyRank')
          store.dispatch('company/fetchCompanySalary', to.params.companyId)
        }
      })
      next(true)
    }
  }
</script>
