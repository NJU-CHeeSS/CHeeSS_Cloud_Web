<template>
  <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="6">
    <div class="single-intro">
      <div class="img-wrapper" :style="{ backgroundImage: 'url(' + photoUrl + ')' }">
        <p>{{intro}}</p>
      </div>
    </div>
  </el-col>
</template>

<script>
  import { Col } from 'element-ui'

  export default {
    name: 'index-card',
    components: {
      elCol: Col
    },
    props: ['photoName', 'intro'],
    data () {
      let name = this.photoName
      return {
        photoUrl: require('/Users/st/code/CHeeSS_Cloud_Web/src/assets/img/' + name),
      }
    },
    methods: {}
  }

</script>

<style scoped src="./IndexCard.css"></style>
