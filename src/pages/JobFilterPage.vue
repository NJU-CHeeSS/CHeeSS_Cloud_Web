<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <div class="left-wrapper">
          <job-filter></job-filter>
          <job-list :type="'filter'" v-if="jobList!==null" :jobList="jobList"></job-list>
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
        jobList: state => state.jobList
      })
    },
    methods: {},
    beforeRouteEnter(to, from, next) {
      store.dispatch('job/fetchJobList', {
        searchInfo: {
          keyword: '不限',
          order: '不限',
          page: 1,
        },
        onSuccess: (success) => {
          Message({
            message: '成功获得招聘信息！',
            type: 'success'
          })
        },
        onError: (error) => {
          Message.error(error)
        }
      })
      store.commit('job/saveType', 'filter')
      next(true)
    }
  }
</script>

<style scoped style="./JobFilterPage.css"></style>
