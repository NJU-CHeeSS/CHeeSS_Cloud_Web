<template>

  <div class="keyword-wrapper">

    <div-header :header="'公司关键词标签'"></div-header>

    <el-tag v-for="item in keywords" :key="item">{{item}}</el-tag>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {Tag} from 'element-ui'
  import {mapState} from 'vuex'

  export default {
    name: 'company-keyword',
    components: {
      DivHeader,
      elTag: Tag
    },
    computed: {
      ...mapState('company', {
        keywords: state => state.companyInfo === null ? null : state.companyInfo.keywords
      })
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyKeyword.css"></style>
