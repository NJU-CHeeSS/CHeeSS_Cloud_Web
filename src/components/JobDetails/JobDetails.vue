<template>

  <div class="details-wrapper">

    <div class="job-header">
      <span class="back" @click="backToPreviousPage"> << </span>
      <img src="../../assets/img/companyIcon.png"/>
      <span class="company-name">Facebook</span>
    </div>

    <div class="job-body">

      <div class="job-recommend">

        <div class="header">
          <p>相关职位推荐</p>
        </div>

        <single-job-recommend v-for="item in 8" :key="item"></single-job-recommend>

      </div>

      <div class="job-info">
        <h2>Manager, Manufacturing Engineering (Manager Operations)</h2>
        <p class="time">发布于 2017-10-11</p>

        <button class="apply-button">发送申请</button>
        <p class="people-num">已有 2,030 人申请</p>


        <div class="section-wrapper">

          <div class="section">
            <p class="introduction-head">职位简介</p>
            <p class="introduction">职位简介职位简介职位简介职位简介职位简介职位简介职位简介职位简介职位简介职位简介职位简介职位简介职位简介职位简介职位简介职位简介职位简介</p>
          </div>

          <div class="section">
            <p class="introduction-head">职位地点</p>
            <p class="introduction">江苏 南京</p>
          </div>

          <div class="section">
            <p class="introduction-head">职位薪资</p>
            <p class="introduction">xxxxxxxxxxx</p>
          </div>

          <div class="section">
            <span class="introduction-head">职位要求</span>
            <button class="chart-button">查看需求图</button>
            <el-tree :data="data" :props="defaultProps" @node-click=""></el-tree>
          </div>

          <div class="section">
            <span class="introduction-head">职位福利</span>
            <el-tree :data="data" :props="defaultProps" @node-click=""></el-tree>
          </div>

        </div>

      </div>

    </div>

  </div>


</template>

<script>
  import { Tree } from 'element-ui'
  import SingleJobRecommend from '../ListItem/SingleJobRecommend.vue'
  import { router } from '../../main'

  export default {
    name: 'job-details',
    components: {
      SingleJobRecommend,
      elTree: Tree
    },
    data () {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      backToPreviousPage () {
        router.go(-1)
      }
    }
  }
</script>

<style scoped src="./JobDetails.css"></style>

