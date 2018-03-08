<template>

  <el-col :xs="12" :sm="8" :md="6" :lg="6">
    <span class="name-span" @click="goToCompanyDetailsPage">{{name}}</span>
  </el-col>


</template>

<script>
  import {Col} from 'element-ui'
  import {router} from '../../main.js'
  import {mapMutations} from 'vuex'

  export default {
    name: 'single-name-card',
    components: {
      elCol: Col
    },
    data() {
      return {}
    },
    props: ['name', 'id'],
    methods: {
      ...mapMutations('company', [
        'saveCurrentShowing'
      ]),
      goToCompanyDetailsPage() {
        this.saveCurrentShowing('companyDetails')
        router.push({name: 'CompanyDetailsPage', params: {companyId: this.id}})
      }
    }
  }
</script>

<style scoped src="./SingleCompanyName.css"></style>
