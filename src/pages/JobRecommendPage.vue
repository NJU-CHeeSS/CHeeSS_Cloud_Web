<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <div class="left-wrapper">
          <resume-sidebar></resume-sidebar>
          <job-list :type="'recommend'"></job-list>
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
  import {store} from '../main'
  import {Message} from 'element-ui'

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
      store.commit('job/saveType', 'recommend')
      next(true)
    }
  }
</script>

<style scoped style="./JobRecommendPage.css"></style>
