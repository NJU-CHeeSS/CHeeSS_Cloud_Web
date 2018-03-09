<template>

  <div class="single-company-related-wrapper">

    <div class="logo-wrapper" @click="goToCompanyDetails">
      <img src="../../assets/img/icon.png"/>
    </div>

    <div class="info-wrapper">
      <p @click="goToCompanyDetails">{{singleCompany.name}}</p>
      <button @click="goToCompanyDetails">查看</button>
      <br/>
      <span>{{singleCompany.industry}}</span>
      <br/>
      <span class="keywords-wrapper" v-for="item in singleCompany.keywords">{{item}}</span>
    </div>

  </div>


</template>

<script>

  import {router} from '../../main'
  import {mapMutations} from 'vuex'

  export default {
    name: 'single-company-related',
    components: {},
    data() {
      return {}
    },
    props: ['singleCompany'],
    methods: {
      ...mapMutations('company', [
        'saveCurrentShowing'
      ]),
      goToCompanyDetails() {
        this.saveCurrentShowing('companyDetails')
        router.push({name: 'CompanyDetailsPage', params: {companyId: this.singleCompany.companyId}})
      }
    }
  }
</script>

<style scoped src="./SingleCompanyRelated.css"></style>
