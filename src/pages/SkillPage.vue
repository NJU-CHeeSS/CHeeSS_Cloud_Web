<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <skill-filter></skill-filter>
        <skill-analyse v-if="keywords.length!==0" :keywords="keywords"></skill-analyse>
      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import SkillFilter from '../components/Filter/SkillFilter.vue'
  import SkillAnalyse from '../components/Skill/SkillAnalyse.vue'
  import {mapState} from 'vuex'
  import {router, store} from '../main'

  export default {
    name: 'skill-page',
    components: {
      Layout,
      SkillFilter,
      SkillAnalyse
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('skill', {
        keywords: state => state.keywords
      })
    },
    methods: {},
    beforeRouteEnter(to, from, next) {
      store.dispatch('skill/fetchSkillInfo',
        {
          searchInfo: {
            jobType: '物流'
          }
        })
      next(true)
    }
  }
</script>
