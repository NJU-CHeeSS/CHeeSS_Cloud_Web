<template>

    <modal
      name="job-compare-modal"
      :height="650"
      :adaptive="true">

      <job-compare-form v-if="compareResult" :compareResult="compareResult"></job-compare-form>

    </modal>


</template>

<script>
  import {Button, Table, TableColumn} from 'element-ui'
  import {mapState, mapMutations} from 'vuex'
  import JobCompareForm from './JobCompareForm.vue'

  export default {
    name: 'job-compare-modal',
    components: {
      JobCompareForm
    },
    computed: {
      ...mapState('job', {
        compareResult: state => state.compareResult
      })
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./JobCompareModal.css"></style>

