<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <div class="left-wrapper">
          <resume-sidebar></resume-sidebar>
          <job-list :pageType="'recommend'" v-if="jobList!==null" :jobList="jobList"></job-list>
        </div>
        <div class="right-wrapper">

        </div>

      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import ResumeSidebar from '../components/Resume/ResumeSidebar.vue'
  import JobList from '../components/JobList/JobList.vue'
  import {store, router} from '../main'
  import {Message} from 'element-ui'
  import {mapState} from 'vuex'

  export default {
    name: 'job-recommend-page',
    components: {
      Layout,
      ResumeSidebar,
      JobList,
      Message
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('job', {
        jobList: state => state.jobList
      }),
      ...mapState('auth', {
        user: state => state.user
      })
    },
    methods: {},
    beforeRouteEnter(to, from, next) {
      store.commit('job/savePageType', 'recommend')
      store.commit('job/saveJobList', [])
      store.dispatch('auth/refreshUser', {
        onSuccess: (success) => {
          store.dispatch('job/fetchRecommendJobList', {
            searchInfo: {
              order: 'date',
              page: 1,
            },
            onSuccess: (success) => {
              Message.success(success)
            },
            onError: (error) => {
              Message.error(error)
            }
          })
        },
        onError: (error) => {
          Message.error(error)
          router.push({name: 'LoginPage'})
        }
      })
      next(true)
    }
  }
</script>

<style scoped style="./JobRecommendPage.css"></style>
