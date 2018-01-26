<template>

  <div class="details-wrapper">

    <div class="job-header">
      <span class="back"> << </span>
      <img src="../../assets/img/companyIcon.png"/>
      <span class="company-name">Facebook</span>
    </div>

    <div class="job-body">

      <div class="job-recommend">

        <div class="header">
          <p>相关职位推荐</p>
        </div>

        <single-job-recommend v-for="item in 10"></single-job-recommend>

      </div>

      <div class="job-info"></div>

    </div>

  </div>


</template>

<script>

  import SingleJobRecommend from '../ListItem/SingleJobRecommend.vue'

  export default {
    name: 'job-details',
    components: {
      SingleJobRecommend,
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./JobDetails.css"></style>

