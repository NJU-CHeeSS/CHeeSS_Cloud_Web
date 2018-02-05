<template>

  <div class="skill-wrapper">
    <div-header :header="'技能关键词'"></div-header>

    <div>
      计算机&nbsp;&nbsp;&nbsp;
      python&nbsp;&nbsp;&nbsp;
      大数据&nbsp;&nbsp;&nbsp;
      数据处理&nbsp;&nbsp;&nbsp;
      Java&nbsp;&nbsp;&nbsp;
      Hadoop&nbsp;&nbsp;&nbsp;
    </div>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'skill-keyword',
    components: {
      DivHeader
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./Skill.css"></style>
