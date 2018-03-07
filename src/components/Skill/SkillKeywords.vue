<template>

  <div class="skill-wrapper">
    <div-header :header="'技能关键词'"></div-header>

    <div class="skill-keywords-wrapper">
      <single-skill-keyword v-for="item in keywords"
                            :key="item.keywords"
                            :keyword="item.keywords">
      </single-skill-keyword>
    </div>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SingleSkillKeyword from '../ListItem/SingleSkillKeyword.vue'
  import {mapState, mapActions} from 'vuex'
  import {store} from '../../main'

  export default {
    name: 'skill-keyword',
    components: {
      DivHeader,
      SingleSkillKeyword
    },
    props: ['keywords'],
    data() {
      return {}
    }
  }
</script>

<style scoped src="./Skill.css"></style>
