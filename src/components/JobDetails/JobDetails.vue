<template>

  <div class="details-wrapper">

    <div class="job-header">
      <span class="back" @click="backToPreviousPage"> << </span>
      <img src="../../assets/img/icon.png"/>
      <span class="company-name" @click="goToCompanyDetails">{{currentJob.companyName}}</span>
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

        <button class="apply-button" @click="apply">发送申请</button>
        <p class="people-num">已有 {{jobApply}} 人申请</p>


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
            <span class="introduction-head">学位要求</span>
            <p class="introduction">{{currentJob.diploma}}</p>
          </div>

          <div class="section">
            <span class="introduction-head">工作经历要求</span>
            <p class="introduction" v-if="currentJob.minExperience !== currentJob.maxExperience">
              {{currentJob.minExperience}} ~ {{currentJob.maxExperience}} 年</p>
            <p class="introduction"
               v-if="currentJob.minExperience === currentJob.maxExperience && currentJob.maxExperience !== 0">
              至少 {{currentJob.minExperience}} 年</p>
            <p class="introduction"
               v-if="currentJob.minExperience === currentJob.maxExperience && currentJob.maxExperience === 0">
              无</p>
          </div>

        </div>

      </div>

    </div>

  </div>


</template>

<script>
  import SingleJobRecommend from '../ListItem/SingleJobRecommend.vue'
  import {router} from '../../main'
  import {mapState, mapActions} from 'vuex'
  import {Message} from 'element-ui'

  export default {
    name: 'job-details',
    components: {
      SingleJobRecommend
    },
    data() {
      return {}
    },
    props: ['currentJob', 'relateJobs', 'jobApply'],
    computed: {
      ...mapState('company', {
        companyInfo: state => state.companyInfo
      }),
      ...mapState('auth', {
        user: state => state.user
      })
    },
    methods: {
      ...mapActions('auth', [
        'applyJob'
      ]),
      ...mapActions('company', [
        'fetchCompanyInfoByName'
      ]),
      backToPreviousPage() {
        router.go(-1)
      },
      goToCompanyDetails() {
        this.fetchCompanyInfoByName({
          companyName: this.currentJob.companyName,
          onSuccess: (success) => {
            router.push({name: 'CompanyDetailsPage', params: {companyId: this.companyInfo.companyId}})
          }
        })
      },
      apply() {
        if (this.user === null) {
          Message.error('请先登录!')
        } else {
          let jobInfo = {
            jobId: this.currentJob.jobId
          }
          this.applyJob({
            jobInfo: jobInfo,
            onSuccess: (success) => {
              Message.success('已发送申请!')
            },
            onError: (error) => {
              Message.warning(error)
            }
          })
        }
      }
    }
  }
</script>

<style scoped src="./JobDetails.css"></style>

