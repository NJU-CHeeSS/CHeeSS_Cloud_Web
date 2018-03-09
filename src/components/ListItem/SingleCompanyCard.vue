<template>

  <div class="single-company-card-wrapper">

    <div class="company-info" @click="goToCompanyDetailsPage">
      <div class="card-header">
        <p>{{companyInfo.name}}</p>
      </div>

      <div class="img-wrapper" :style="{ backgroundImage: 'url(' + photoUrl + ')' }">

      </div>
    </div>

    <div class="follow-wrapper">
      <!--<p>已有 2,063 人关注</p>-->
      <div class="keywords-wrapper">
        <span v-for="item in companyInfo.keywords" :key="item">{{item}}</span>
      </div>
      <button v-if="checkFollow === true" @click="unfollow">取关</button>
      <button v-else @click="follow">关注</button>
    </div>

  </div>


</template>

<script>
  import {router, store} from '../../main.js'
  import {mapMutations, mapActions, mapState} from 'vuex'
  import {Message} from 'element-ui'

  export default {
    name: 'single-company-card',
    components: {
      Message
    },
    data() {
      return {
        photoUrl: 'https://images.unsplash.com/photo-1494707924465-e1426acb48cb?auto=format&fit=crop&w=1650&q=80'
      }
    },
    props: ['companyInfo'],
    computed: {
      ...mapState('company', {
        checkFollow: state => state.checkFollow
      })
    },
    methods: {
      ...mapMutations('company', [
        'saveCurrentShowing'
      ]),
      ...mapActions('auth', [
        'followCompany',
        'unfollowCompany',
        'checkFollowCompany',
        'refreshUser'
      ]),
      goToCompanyDetailsPage() {
        this.saveCurrentShowing('companyDetails')
        router.push({name: 'CompanyDetailsPage', params: {companyId: this.companyInfo.companyId}})
      },
      unfollow() {
        this.unfollowCompany(this.companyInfo.companyId)
        this.checkFollow = false
      },
      follow() {
        this.followCompany(this.companyInfo.companyId)
        this.checkFollow = true
      }
    },
    created() {
      this.checkFollowCompany(this.companyInfo.companyId)
    },
    beforeRouteEnter(to, from, next) {
      store.dispatch('auth/refreshUser', {
        onSuccess: (success) => {
        },
        onError: (error) => {
          Message.error(error)
        }
      })
      next(true)
    }
  }
</script>

<style scoped src="./SingleCompanyCard.css"></style>
