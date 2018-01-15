<template>
  <div class="body-wrapper">
    <layout>
      <company-banner></company-banner>
      <company-header></company-header>
      <div class="container">

        <company-keyword v-if="currentShowing==='companyDetails'"></company-keyword>
        <company-jobs v-if="currentShowing==='companyDetails'"></company-jobs>

        <company-salary-level v-if="currentShowing==='companyLevel'"></company-salary-level>
        <company-rank v-if="currentShowing==='companyLevel'"></company-rank>

        <company-related-list v-if="currentShowing==='companyRelated'"></company-related-list>

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

  import { mapState } from 'vuex'

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
        currentShowing: state => state.currentShowing
      })
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
