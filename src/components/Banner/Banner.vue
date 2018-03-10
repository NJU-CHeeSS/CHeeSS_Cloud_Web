<template>
  <div class="banner-wrapper">
    <div class="img-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
      <!--<el-input class="search-input"-->
                <!--placeholder=""-->
                <!--suffix-icon="el-icon-search"-->
                <!--v-model="input"-->
      <!--&gt;-->
      <!--</el-input>-->
    </div>
  </div>

</template>

<script>
  import { Input } from 'element-ui'

  export default {
    name: 'banner',
    components: {
      elInput: Input
    },
    data () {
      let name = 'banner.jpeg'
      return {
        bannerUrl: require('../../assets/img/' + name),
        input: ''
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Banner.css"></style>
