<template>
  <div class="header-wrapper">

    <div class="container">

      <div class="up-wrapper">
        <div class="company-icon">
          <img src="../../assets/img/icon.png"/>
        </div>

        <div class="company-info">
          <p v-if="companyInfo !== null">{{companyInfo.name}}</p>
          <span v-if="companyInfo !== null">{{companyInfo.introduction}}</span>
        </div>

        <div class="follow-wrapper">
          <button v-if="checkFollow === true" @click="unfollow">取消关注</button>
          <button v-else @click="follow">关注</button>
        </div>
      </div>

      <div class="down-wrapper">

        <div class="tab-wrapper">
          <button v-bind:class="{ active: currentShowing==='companyDetails' }" @click="goToCompanyDetails">公司详情</button>
          <button v-bind:class="{ active: currentShowing==='companyLevel' }" @click="goToCompanyLevel">公司水平</button>
          <button v-bind:class="{ active: currentShowing==='companyRelated' }" @click="goToCompanyRelated">相关公司</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import {router} from '../../main.js'
  import {mapMutations, mapState, mapActions} from 'vuex'
  import {Message} from 'element-ui'

  export default {
    name: 'company-header',
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapState('company', {
        currentShowing: state => state.currentShowing,
        companyInfo: state => state.companyInfo
      }),
      ...mapState('auth', {
        checkFollow: state => state.checkFollow,
        user: state => state.user
      })
    },
    methods: {
      ...mapMutations('company', [
        'saveCurrentShowing',
      ]),
      ...mapMutations('auth', [
        'saveCheckFollow',
      ]),
      ...mapActions('auth', [
        'followCompany',
        'unfollowCompany',
        'checkFollowCompany',
        'refreshUser'
      ]),
      goToCompanyDetails() {
        this.saveCurrentShowing('companyDetails')
      },
      goToCompanyLevel() {
        this.saveCurrentShowing('companyLevel')
      },
      goToCompanyRelated() {
        this.saveCurrentShowing('companyRelated')
      },
      follow() {
        if (this.user === null) {
          Message.error('请先登录!')
        } else {
          let companyInfo = {
            companyId: this.companyInfo.companyId
          }
          this.followCompany({
            companyInfo: companyInfo,
            onSuccess: (success) => {
              Message.success('已关注!')
              this.saveCheckFollow(true)
            },
            onError: (error) => {
              Message.error(error)
            }
          })
        }
      },
      unfollow() {
        if (this.user === null) {
          Message.error('请先登录!')
        } else {
          let companyInfo = {
            companyId: this.companyInfo.companyId
          }
          this.unfollowCompany({
            companyInfo: companyInfo,
            onSuccess: (success) => {
              Message.success('已取消关注!')
              this.saveCheckFollow(false)
            },
            onError: (error) => {
              Message.error(error)
            }
          })
        }
      }
    }
  }
</script>

<style scoped src="./CompanyHeader.css"></style>
