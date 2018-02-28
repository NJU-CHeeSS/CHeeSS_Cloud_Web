<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">

        <user-info></user-info>

      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import UserInfo from '../components/Admin/UserInfo.vue'

  export default {
    name: 'user-home-page',
    components: {
      Layout,
      UserInfo
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
