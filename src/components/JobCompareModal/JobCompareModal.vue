<template>

  <modal
    name="job-compare-modal"
    :height="650"
    :adaptive="true">

    <div class="job-compare-modal-wrapper">
      <el-button
        class="close-button"
        type="primary"
        icon="el-icon-close"
        @click="closeBox"></el-button>

    </div>

  </modal>

</template>

<script>
  import { Button } from 'element-ui'

  export default {
    name: 'job-compare-modal',
    components: {
      elButton: Button
    },
    data () {
      return {}
    },
    methods: {
      closeBox () {
        this.$modal.hide('job-compare-modal')
      }
    }
  }
</script>

<style scoped src="./JobCompareModal.css"></style>

