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
                    v-model="keyword"
                    @keyup.enter.native="handleSearch"
          >
            <i slot="suffix" class="el-input__icon el-icon-search" @click="handleSearch"></i>
          </el-input>
        </div>


        <div class="button-wrapper">

          <div v-if="user === null">
            <el-button type="text" @click="goToLoginPage">登录</el-button>
            <el-button type="text" @click="goToRegisterPage">注册</el-button>
          </div>

          <div v-else>
            <el-dropdown placement="bottom-start" @command="handleCommand">
            <span class="el-dropdown-link">{{user.username}}<i class="el-icon-caret-bottom el-icon--right"></i>
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

    </div>

    <job-compare-modal v-if="compareResult !== null" :compareResult="compareResult"></job-compare-modal>

  </div>
</template>


<script>
  import JobCompareModal from '../../components/JobCompareModal/JobCompareModal.vue'
  import {Input, Button, Dropdown, DropdownMenu, DropdownItem, Message} from 'element-ui'
  import {router} from '../../main'
  import {mapActions, mapMutations, mapState} from 'vuex'

  export default {
    name: 'navigator',
    components: {
      elInput: Input,
      elButton: Button,
      elDropdown: Dropdown,
      elDropdownMenu: DropdownMenu,
      elDropdownItem: DropdownItem,
      Message,
      JobCompareModal
    },
    data() {
      return {
        keyword: ''
      }
    },
    computed: {
//      ...mapState('search', {
//        keyword: state => state.keyword
//      })
      ...mapState('auth', {
        user: state => state.user
      }),
      ...mapState('job', {
        compareResult: state => state.compareResult
      })
    },
    methods: {
      ...mapActions('search', [
        'fetchSearchResult'
      ]),
      ...mapActions('auth', [
        'signOut'
      ]),
      ...mapMutations('search', [
        'saveKeyword'
      ]),
      goToIndexPage() {
        router.push({name: 'IndexPage'})
      },
      goToLoginPage() {
        router.push({name: 'LoginPage'})
      },
      goToRegisterPage() {
        router.push({name: 'RegisterPage'})
      },
      goToJobPage() {
        router.push({name: 'JobFilterPage'})
      },
      goToCompanyPage() {
        router.push({name: 'CompanyDisplayPage'})
      },
      goToTreatmentPage() {
        router.push({name: 'TreatmentPage'})
      },
      goToSkillPage() {
        router.push({name: 'SkillPage'})
      },
      handleCommand(command) {
        if (command !== 'signOut') {
          if (command === 'UserHomePage') {
            router.push({name: 'UserHomePage', params: {userId: this.user.userId}})
          } else {
            router.push({name: command})
          }
          router.push({name: command})
        } else {
          this.signOut({
            onSuccess: (username) => {
              Message({
                message: 'Goodbye, ' + username + '!',
                type: 'success'
              })
            }
          })
        }
      },
      handleSearch() {
        if (this.keyword.length === 0) {
          Message.warning('请输入搜索内容！')
        } else {
          this.saveKeyword(this.keyword)
          this.fetchSearchResult({
            searchInfo: {
              keyword: this.keyword,
              page: 1
            },
            onSuccess: (success) => {
              router.push({name: 'SearchResultPage', params: {keyword: this.keyword}})
            }
          })
        }
      }
    }
  }
</script>

<style scoped src="./Navigator.css"></style>
