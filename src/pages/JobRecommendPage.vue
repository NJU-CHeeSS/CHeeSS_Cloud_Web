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

  export default {
    name: 'job-recommend-page',
    components: {
      Layout,
      ResumeSidebar,
      JobList
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped style="./JobRecommendPage.css"></style>
