<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <skill-filter></skill-filter>
        <skill-analyse></skill-analyse>
      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import SkillFilter from '../components/Filter/SkillFilter.vue'
  import SkillAnalyse from '../components/Skill/SkillAnalyse.vue'
  import {Message} from 'element-ui'
  import {router, store} from '../main'

  export default {
    name: 'skill-page',
    components: {
      Layout,
      SkillFilter,
      SkillAnalyse,
      Message
    },
    data() {
      return {}
    },
    beforeRouteEnter(to, from, next) {
      store.dispatch('auth/refreshUser', {
        onSuccess: (success) => {
        },
        onError: (error) => {
          Message.error(error)
        }
      })
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
