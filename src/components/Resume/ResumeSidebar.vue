<template>

  <div class="sidebar-wrapper">

    <div class="resume-header">
      <p>我的简历</p>
      <button @click="goToUserHomePage">修改</button>
    </div>

    <div class="resume-body">
      <p>性别：女</p>
      <p>年龄：20</p>
      <p>学历：本科</p>
      <p>所在地：南京</p>
    </div>

    <div class="resume-body">
      <p>行业：IT</p>
      <p>工作经历：2年</p>
    </div>

    <div class="resume-body">
      <p>技能：</p>
    </div>

  </div>

</template>

<script>
  import {router} from '../../main'

  export default {
    name: 'resume-sidebar',
    components: {},
    data() {
      return {}
    },
    methods: {
      goToUserHomePage() {
        router.push({name: 'UserHomePage'})
      }
    }
  }
</script>

<style scoped src="./ResumeSidebar.css"></style>
