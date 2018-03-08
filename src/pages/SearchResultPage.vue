<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <search-result v-if="companySearchResult || jobSearchResult"></search-result>
      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout'
  import SearchResult from '../components/SearchResult/SearchResult'
  import {Message} from 'element-ui'
  import {router, store} from '../main'
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: 'search-result-page',
    components: {
      Layout,
      SearchResult,
      Message
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('search', {
        companySearchResult: state => state.companySearchResult,
        jobSearchResult: state => state.jobSearchResult
      })
    },
    methods: {},
    beforeRouteEnter(to, from, next) {
      store.dispatch('auth/refreshUser', {
        onSuccess: (success) => {
        },
        onError: (error) => {
          Message.error(error)
        }
      })
      store.commit('search/saveKeyword', to.params.keyword)
      store.dispatch('search/fetchSearchResult', {
        searchInfo: {
          keyword: to.params.keyword,
          page: 1
        },
        onSuccess: () => {
        }
      })
      next(true)
    }
  }
</script>

<style scoped></style>
