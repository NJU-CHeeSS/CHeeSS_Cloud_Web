<template>
  <div class="input-wrapper">
    <el-input class="search-input"
              placeholder=""
              v-model="input"
              @keyup.enter.native="handleSearch"
    >
      <i slot="suffix" class="el-input__icon el-icon-search" @click="handleSearch"></i>
    </el-input>
  </div>

</template>

<script>

  import {Input} from 'element-ui'
  import {mapActions} from 'vuex'

  export default {
    name: 'search-input',
    components: {
      elInput: Input
    },
    data() {
      return {
        input: ''
      }
    },
    props: ['letter'],
    methods: {
      ...mapActions('company', [
        'searchCompany'
      ]),
      handleSearch() {
        console.log(this.input)
        this.searchCompany({
          searchInfo: {
            keyword: this.input
          }
        })
      }
    }
  }
</script>

<style scoped src="./SearchInput.css"></style>
