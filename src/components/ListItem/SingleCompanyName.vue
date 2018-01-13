<template>

  <el-col :xs="12" :sm="8" :md="6" :lg="6">
    <span class="name-span">Facebook</span>
  </el-col>


</template>

<script>
  import { Col } from 'element-ui'

  export default {
    name: 'single-name-card',
    components: {
      elCol: Col
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./SingleCompanyName.css"></style>
