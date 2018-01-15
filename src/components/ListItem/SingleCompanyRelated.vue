<template>

  <div class="single-company-related-wrapper">

    <div class="logo-wrapper" @click="goToCompanyDetails">
      <img src="../../assets/img/companyIcon.png"/>
    </div>

    <div class="info-wrapper">
      <p>公司名称</p>
      <button>关注</button>
      <br/>
      <span>江苏 南京</span>
      <br/>
      <span>公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</span>
    </div>

  </div>


</template>

<script>

  import { router } from '../../main'
  import { mapMutations } from 'vuex'

  export default {
    name: 'single-company-related',
    components: {},
    data () {
      return {}
    },
    methods: {
      goToCompanyDetails () {
        this.saveCurrentShowing('companyDetails')
        router.push({name: 'CompanyDetailsPage', params: {companyId: 1}})
      },
      ...mapMutations('company', [
        'saveCurrentShowing'
      ])
    }
  }
</script>

<style scoped src="./SingleCompanyRelated.css"></style>
