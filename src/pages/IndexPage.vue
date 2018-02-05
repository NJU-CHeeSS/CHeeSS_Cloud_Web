<template>
  <div class="body-wrapper">
    <layout>

      <banner></banner>

      <div class="container">

        <div class="brief-intro-wrapper">
          <el-row :gutter="20">
            <index-card v-for="item in 4"
                        :key="item"
                        :photoName="photoNames[item - 1]"
                        :intro="intros[item - 1]"
                        :link="link[item - 1]"></index-card>
          </el-row>
        </div>

      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Banner from '../components/Banner/Banner.vue'
  import IndexCard from '../components/Card/IndexCard.vue'
  import { Row } from 'element-ui'

  export default {
    name: 'index-page',
    components: {
      Layout,
      Banner,
      IndexCard,
      elRow: Row,
    },
    data () {
      let reward = 'reward.jpg'
      return {
        photoNames: ['job.jpg', 'company.jpg', 'reward.jpg', 'skill.jpg'],
        intros: ['职位', '公司', '待遇', '技能'],
        link: ['JobFilterPage', 'CompanyDisplayPage', 'SalaryPage', 'SkillPage']
      }
    },
    methods: {
      goToDetailPage () {

      }
    }
  }
</script>

<style scoped src="./IndexPage.css"></style>
