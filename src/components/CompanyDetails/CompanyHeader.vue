<template>
  <div class="header-wrapper">

    <div class="container">

      <div class="up-wrapper">
        <div class="company-icon">
          <img src="../../assets/img/companyIcon.png"/>
        </div>

        <div class="company-info">
          <p>公司名称</p>
          <span>公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍
          公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</span>
        </div>

        <div class="follow-wrapper">
          <button>关注</button>
        </div>
      </div>

      <div class="down-wrapper">

        <div class="tab-wrapper">
          <button v-bind:class="{ active: currentShowing==='companyDetails' }" @click="goToCompanyDetails">公司详情</button>
          <button v-bind:class="{ active: currentShowing==='companyLevel' }" @click="goToCompanyLevel">公司水平</button>
          <button v-bind:class="{ active: currentShowing==='companyRelated' }" @click="goToCompanyRelated">相关公司</button>
        </div>
      </div>
    </div>


  </div>

</template>

<script>

  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'company-header',
    components: {},
    data () {
      return {}
    },
    computed: {
      ...mapState('company', {
        currentShowing: state => state.currentShowing
      })
    },
    methods: {
      ...mapMutations('company', [
        'saveCurrentShowing'
      ]),
      goToCompanyDetails () {
        this.saveCurrentShowing('companyDetails')
      },
      goToCompanyLevel () {
        this.saveCurrentShowing('companyLevel')
      },
      goToCompanyRelated () {
        this.saveCurrentShowing('companyRelated')
      }
    }
  }
</script>

<style scoped src="./CompanyHeader.css"></style>
