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
    methods: {}
  }
</script>
