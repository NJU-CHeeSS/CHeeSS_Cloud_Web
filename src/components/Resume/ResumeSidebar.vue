<template>

  <div class="sidebar-wrapper">

    <div class="resume-header">
      <p>我的简历</p>
      <button @click="goToUserHomePage">修改</button>
    </div>

    <div class="resume-body" v-if="user">
      <p>性别：{{user.sex === 1 ? '男' : '女'}}</p>
      <p>年龄：{{user.age}}</p>
      <p>学历：{{user.diploma}}</p>
      <p>所在地：{{user.city}}</p>
    </div>

    <div class="resume-body" v-if="user">
      <p>行业：{{user.major}}</p>
      <p>工作经历：{{user.experience}}</p>
    </div>

    <div class="resume-body" v-if="user">
      <p>技能：{{user.skill}}</p>
    </div>

  </div>

</template>

<script>
  import {router} from '../../main'
  import {mapState} from 'vuex'

  export default {
    name: 'resume-sidebar',
    components: {},
    computed: {
      ...mapState('auth', {
        user: state => state.user
      })
    },
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
