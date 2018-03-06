<template>

  <div class="details-wrapper">

    <div class="job-header">
      <span class="back" @click="backToPreviousPage"> << </span>
      <img src="../../assets/img/companyIcon.png"/>
      <span class="company-name">{{currentJob.companyName}}</span>
    </div>

    <div class="job-body">

      <div class="job-recommend">

        <div class="header">
          <p>相关职位推荐</p>
        </div>

        <single-job-recommend v-for="item in relateJobs"
                              :key="item.jobId"
                              :singleJobRecommend="item">
        </single-job-recommend>

      </div>

      <div class="job-info">
        <h2>{{currentJob.jobName}}</h2>
        <p class="time">发布于 {{currentJob.releaseDate}}</p>

        <button class="apply-button" @click="">发送申请</button>
        <p class="people-num">已有 2,030 人申请</p>


        <div class="section-wrapper">

          <div class="section">
            <p class="introduction-head">职位简介</p>
            <p class="introduction">{{currentJob.information}}</p>
          </div>

          <div class="section">
            <p class="introduction-head">职位地点</p>
            <p class="introduction">{{currentJob.location}}</p>
          </div>

          <div class="section">
            <p class="introduction-head">职位薪资</p>
            <p class="introduction">{{currentJob.minSalary}} ~ {{currentJob.maxSalary}} / 月</p>
          </div>

          <div class="section">
            <span class="introduction-head">职位要求</span>
            <el-tree :data="data" :props="defaultProps" @node-click=""></el-tree>
          </div>

        </div>

      </div>

    </div>

  </div>


</template>

<script>
  import {Tree} from 'element-ui'
  import SingleJobRecommend from '../ListItem/SingleJobRecommend.vue'
  import {router} from '../../main'
  import {mapState} from 'vuex'

  export default {
    name: 'job-details',
    components: {
      SingleJobRecommend,
      elTree: Tree
    },
    data() {
      return {
        data: [{
          label: '学位要求',
          children: [{
            label: this.currentJob.diploma
          }]
        }, {
          label: '工作经历要求',
          children: [{
            label: this.currentJob.minExperience + '年~' + this.currentJob.maxExperience + '年'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    props: ['currentJob', 'relateJobs'],
//    computed: {
//      ...mapState('job', {
//        currentJob: state => state.currentJob
//      })
//    },
    methods: {
      backToPreviousPage() {
        router.go(-1)
      }
    }
  }
</script>

<style scoped src="./JobDetails.css"></style>

