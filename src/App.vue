<template>
  <v-app>
    <div id="app">
      <Header />
      <SubmitLink />
      <List v-if="!submitClicked" />
      <CreateListItem v-else />
      <router-view/>
    </div>
  </v-app>
</template>


<script>
import { mapState } from 'vuex'
import Header from '@/components/Header.vue'
import SubmitLink from '@/components/SubmitLink.vue'
import List from '@/components/List.vue'
import CreateListItem from '@/components/CreateListItem.vue'

export default {
  name: 'app',
  components: { Header, SubmitLink, List, CreateListItem},

  computed:
    mapState({
      submitClicked: state => state.submitClicked,
      links: state => state.links
    })
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
