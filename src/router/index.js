import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/IndexPage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import JobFilterPage from '@/pages/JobFilterPage'
import JobRecommendPage from '@/pages/JobRecommendPage'
import JobDetailsPage from '@/pages/JobDetailsPage'
import CompanyDisplayPage from '@/pages/CompanyDisplayPage'
import CompanyDetailsPage from '@/pages/CompanyDetailsPage'
import TreatmentPage from '@/pages/TreatmentPage'
import SkillPage from '@/pages/SkillPage'
import UserHomePage from '@/pages/UserHomePage'
import SearchResultPage from '@/pages/SearchResultPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/jobs/filter',
      name: 'JobFilterPage',
      component: JobFilterPage
    },
    {
      path: '/jobs/recommend',
      name: 'JobRecommendPage',
      component: JobRecommendPage
    },
    {
      path: '/company/display',
      name: 'CompanyDisplayPage',
      component: CompanyDisplayPage
    },
    {
      path: '/company/:companyId',
      name: 'CompanyDetailsPage',
      component: CompanyDetailsPage
    },
    {
      path: '/job/:jobId',
      name: 'JobDetailsPage',
      component: JobDetailsPage
    },
    {
      path: '/salary',
      name: 'TreatmentPage',
      component: TreatmentPage
    },
    {
      path: '/skill',
      name: 'SkillPage',
      component: SkillPage
    },
    {
      path: '/user/home',
      name: 'UserHomePage',
      component: UserHomePage
    },
    {
      path: '/search/:keyword',
      name: 'SearchResultPage',
      component: SearchResultPage
    }
  ]
})
