<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">

        <job-details :currentJob="currentJob" :relateJobs="relateJobs" :jobApply="jobApply"></job-details>

      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import JobDetails from '../components/JobDetails/JobDetails.vue'
  import {Message} from 'element-ui'
  import {store} from '../main'
  import {mapState} from 'vuex'

  export default {
    name: 'job-details-page',
    components: {
      Layout,
      JobDetails,
      Message
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('job', {
        currentJob: state => state.currentJob,
        relateJobs: state => state.relateJobs,
        jobApply: state => state.jobApply
      })
    },
    methods: {},
    beforeRouteUpdate(to, from, next) {
      store.commit('job/currentJob', {})
      store.commit('job/relateJobs', [])
      console.log(to.params.jobId)
      store.dispatch('auth/refreshUser', {
        onSuccess: (success) => {
          store.dispatch('job/fetchJobApply', to.params.jobId)
        },
        onError: (error) => {
          Message.error(error)
        }
      })
      store.dispatch('job/fetchJobInfo', to.params.jobId)
      store.dispatch('job/fetchRelateJobs', to.params.jobId)
      next(true)
    },
    beforeRouteEnter(to, from, next) {
      console.log(to.params.jobId)
      store.dispatch('auth/refreshUser', {
        onSuccess: (success) => {
          store.dispatch('job/fetchJobApply', to.params.jobId)
        },
        onError: (error) => {
          Message.error(error)
        }
      })
      store.dispatch('job/fetchJobInfo', to.params.jobId)
      store.dispatch('job/fetchRelateJobs', to.params.jobId)
      next(true)
    }
  }
</script>

