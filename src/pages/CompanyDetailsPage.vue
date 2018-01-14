<template>
  <div class="body-wrapper">
    <layout>
      <company-banner></company-banner>
      <company-header></company-header>
      <div class="container">


      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import CompanyBanner from '../components/Banner/CompanyBanner.vue'
  import CompanyHeader from '../components/CompanyDetails/CompanyHeader.vue'

  export default {
    name: 'company-details-page',
    components: {
      Layout,
      CompanyBanner,
      CompanyHeader
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
