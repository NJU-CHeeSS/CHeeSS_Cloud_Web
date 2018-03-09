<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <div class="left-wrapper">
          <job-filter></job-filter>
          <job-list :pageType="'filter'" v-if="jobList!==null" :jobList="jobList"></job-list>
        </div>
        <div class="right-wrapper">

        </div>

      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import JobFilter from '../components/Filter/JobFilter.vue'
  import JobList from '../components/JobList/JobList.vue'
  import {Message} from 'element-ui'
  import {router, store} from '../main'
  import {mapState} from 'vuex'

  export default {
    name: 'job-filter-page',
    components: {
      Layout,
      JobFilter,
      JobList,
      Message
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('job', {
        jobList: state => state.jobList,
      })
    },
    methods: {},
    beforeRouteEnter(to, from, next) {
      store.commit('job/savePageType', 'filter')
      store.commit('job/saveJobList', [])
      store.dispatch('auth/refreshUser', {
        onSuccess: (success) => {
        },
        onError: (error) => {
          Message.error(error)
        }
      })
      store.dispatch('job/fetchJobList', {
        searchInfo: {
          order: 'date',
          page: 1,
          location: '不限',
          diploma: '不限',
          earlyReleaseDate: '不限',
          property: '不限'
        },
        onSuccess: (success) => {
          Message.success(success)
        },
        onError: (error) => {
          Message.error(error)
        }
      })
      next(true)
    }
  }
</script>

<style scoped style="./JobFilterPage.css"></style>
