<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">

        <job-details :currentJob="currentJob"></job-details>


      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import JobDetails from '../components/JobDetails/JobDetails.vue'
  import {store} from '../main'
  import {mapState} from 'vuex'

  export default {
    name: 'job-details-page',
    components: {
      Layout,
      JobDetails
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('job', {
        currentJob: state => state.currentJob
      })
    },
    methods: {},
    beforeRouteEnter(to, from, next) {
      console.log(to.params.jobId)
      store.dispatch('job/fetchJobInfo', to.params.jobId)
      next(true)
    }
  }
</script>

