<template>
  <div class="nav-wrapper">
    <div class="container">
      <div class="left-wrapper" @click="goToIndexPage">
        <img src="../../assets/img/icon.png" width="30">
      </div>

      <div class="right-wrapper">

        <div class="button-wrapper">
          <el-button type="text" @click="goToJobPage">职位</el-button>
          <el-button type="text" @click="goToCompanyPage">公司</el-button>
          <el-button type="text" @click="goToTreatmentPage">待遇</el-button>
          <el-button type="text" @click="goToSkillPage">技能</el-button>
        </div>

        <div class="input-wrapper">
          <el-input class="search-input"
                    placeholder=""
                    suffix-icon="el-icon-search"
                    v-model="input2"
          >
          </el-input>
        </div>


        <div class="button-wrapper">

          <el-button type="text" @click="goToLoginPage">登录</el-button>
          <el-button type="text" @click="goToRegisterPage">注册</el-button>

          <el-dropdown placement="bottom-start" @command="handleCommand">
            <span class="el-dropdown-link">用户<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="UserHomePage">个人主页</el-dropdown-item>
              <el-dropdown-item command="AccountPage">修改资料</el-dropdown-item>
              <el-dropdown-item command="signOut">退出账号</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>

    </div>

    <job-compare-modal></job-compare-modal>

  </div>
</template>


<script>
  import { Input, Button, Dropdown, DropdownMenu, DropdownItem, Message } from 'element-ui'
  import { router } from '../../main'
  //  import { mapMutations, mapState, mapActions } from 'vuex'
  import JobCompareModal from '../../components/JobCompareModal/JobCompareModal.vue'

  //  Vue.use(Input)

  export default {
    name: 'navigator',
    components: {
      elInput: Input,
      elButton: Button,
      elDropdown: Dropdown,
      elDropdownMenu: DropdownMenu,
      elDropdownItem: DropdownItem,
      JobCompareModal
    },
    data () {
      return {
        input2: ''
      }
    },
    computed: {},
    methods: {
      goToIndexPage () {
        router.push({name: 'IndexPage'})
      },
      goToLoginPage () {
        router.push({name: 'LoginPage'})
      },
      goToRegisterPage () {
        router.push({name: 'RegisterPage'})
      },
      goToJobPage () {
        router.push({name: 'JobFilterPage'})
      },
      goToCompanyPage () {
        router.push({name: 'CompanyDisplayPage'})
      },
      goToTreatmentPage () {
        router.push({name: 'TreatmentPage'})
      },
      goToSkillPage () {
        router.push({name: 'SkillPage'})
      },
      handleCommand(command) {
        router.push({name: command})
      }
    }
  }
</script>

<style scoped src="./Navigator.css"></style>
