<template>

  <div class="single-company-card-wrapper">

    <div class="company-info" @click="goToCompanyDetailsPage">
      <div class="card-header">
        <p>公司名称</p>
      </div>

      <div class="img-wrapper" :style="{ backgroundImage: 'url(' + photoUrl + ')' }">

      </div>
    </div>

    <div class="follow-wrapper">
      <p>已有 2,063 人关注</p>
      <button>关注</button>
    </div>

  </div>


</template>

<script>
  import { router } from '../../main.js'
  import { mapMutations } from 'vuex'

  export default {
    name: 'single-company-card',
    components: {},
    data () {
      return {
        photoUrl: 'https://images.unsplash.com/photo-1494707924465-e1426acb48cb?auto=format&fit=crop&w=1650&q=80'
      }
    },
    methods: {
      ...mapMutations('company', [
        'saveCurrentShowing'
      ]),
      goToCompanyDetailsPage () {
        this.saveCurrentShowing('companyDetails')
        router.push({name: 'CompanyDetailsPage', params: {companyId: 1}})
      }

    }
  }
</script>

<style scoped src="./SingleCompanyCard.css"></style>
