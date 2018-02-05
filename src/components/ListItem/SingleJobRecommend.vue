<template>

  <div class="single-job-recommend-wrapper">

    <p class="name">Manager, Manufacturing Engineering (Manager Operations)</p>
    <p class="address">江苏 常州</p>
    <button class="compare-button" @click="showJobCompareModal">+ 对比</button>

  </div>


</template>

<script>

  import { router } from '../../main'

  export default {
    name: 'single-job-recommend',
    components: {},
    data () {
      return {}
    },
    methods: {
      showJobCompareModal () {
        this.$modal.show('job-compare-modal')
      }
    }
  }
</script>

<style scoped src="./SingleJobRecommend.css"></style>
