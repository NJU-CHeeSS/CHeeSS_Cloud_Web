<template>

  <div class="list-wrapper">
    <div-header :header="'关注度最高公司'"></div-header>

    <div class="list-body">
      <single-company-card v-for="item in 8" :key="item"></single-company-card>
    </div>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SingleCompanyCard from '../ListItem/SingleCompanyCard.vue'

  export default {
    name: 'company-card-list',
    components: {
      DivHeader,
      SingleCompanyCard
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyCardList.css"></style>
