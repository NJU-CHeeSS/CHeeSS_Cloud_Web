<template>
  <div class="header-wrapper">

    <div class="container">

      <div class="up-wrapper">
        <div class="company-icon">
          <img src="../../assets/img/icon.png"/>
        </div>

        <div class="company-info">
          <p v-if="companyInfo !== null">{{companyInfo.name}}</p>
          <span v-if="companyInfo !== null">{{companyInfo.introduction}}</span>
        </div>

        <div class="follow-wrapper">
          <button @click="followCompany">关注</button>
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

  import {mapMutations, mapState} from 'vuex'

  export default {
    name: 'company-header',
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapState('company', {
        currentShowing: state => state.currentShowing,
        companyInfo: state => state.companyInfo
      })
    },
    methods: {
      ...mapMutations('company', [
        'saveCurrentShowing'
      ]),
      goToCompanyDetails() {
        this.saveCurrentShowing('companyDetails')
      },
      goToCompanyLevel() {
        this.saveCurrentShowing('companyLevel')
      },
      goToCompanyRelated() {
        this.saveCurrentShowing('companyRelated')
      },
      followCompany() {

      }
    }
  }
</script>

<style scoped src="./CompanyHeader.css"></style>
