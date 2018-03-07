<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <salary-filter></salary-filter>
        <salary-analyse v-if="treatment!==null" :treatment="treatment"></salary-analyse>
      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import SalaryFilter from '../components/Filter/SalaryFilter.vue'
  import SalaryAnalyse from '../components/Treatment/SalaryAnalyse.vue'
  import {mapState} from 'vuex'
  import {router, store} from '../main'

  export default {
    name: 'salary-page',
    components: {
      Layout,
      SalaryFilter,
      SalaryAnalyse
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('treatment', {
        treatment: state => state.treatment
      })
    },
    methods: {},
    beforeRouteEnter(to, from, next) {
      store.dispatch('treatment/fetchTreatmentInfo',
        {
          searchInfo: {
            jobType: '物流',
            city: '上海'
          }
        })
      next(true)
    }
  }
</script>

<style scoped style="./SalaryPage.css"></style>
