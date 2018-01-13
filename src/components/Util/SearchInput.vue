<template>
  <div class="input-wrapper">
    <el-input class="search-input"
              placeholder=""
              suffix-icon="el-icon-search"
              v-model="input"
    >
    </el-input>
  </div>

</template>

<script>

  import { Input } from 'element-ui'

  export default {
    name: 'search-input',
    components: {
      elInput: Input
    },
    data () {
      return {
        input: ''
      }
    },
    props: ['letter'],
    methods: {}
  }
</script>

<style scoped src="./SearchInput.css"></style>
