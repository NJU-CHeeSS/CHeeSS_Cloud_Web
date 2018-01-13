<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <company-card-list></company-card-list>
        <company-name-list></company-name-list>
      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import CompanyCardList from '../components/CompanyList/CompanyCardList.vue'
  import CompanyNameList from '../components/CompanyList/CompanyNameList.vue'

  export default {
    name: 'company-display-page',
    components: {
      Layout,
      CompanyCardList,
      CompanyNameList
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped style="./CompanyDisplayPage.css"></style>
