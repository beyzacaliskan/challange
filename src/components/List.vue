<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="4"
      >
        <v-select
          :items="items"
          label="Order by"
          outlined
          v-model="sortBy"
        ></v-select>
      </v-col>
    </v-row>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        absolute
        top
        color="error"
        outlined
        right
      >
      <span>{{deletedItem.name}} removed</span>
    </v-snackbar>

    <ListItem v-for="(link, key) in sort(visiblePages)" :key="key" :link="link" @popup="popupState"/>

    <v-pagination
      v-if="links.length > 0"
      v-model="page"
      :length="Math.ceil(links.length/perPage)"
      color="success"
    ></v-pagination>
   
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import ListItem from '@/components/ListItem.vue'

export default {
  components: { ListItem },
  data: () => ({
    items: ['most', 'less'],
    page: 1,
    perPage: 5,
    snackbar: false,
    timeout: 2000,
    deletedItem: ''
  }),

  computed: {
    ...mapState({
      links: state => state.links
    }),
    sortBy: {
      get () { return this.$store.state.sortBy },
      set (value) { this.$store.commit('update_sorting', value) }
    },
    visiblePages () {
      return this.links.slice((this.page - 1)* this.perPage, this.page* this.perPage)
   }
  },
  methods: {
    sort: function (arr) {
      console.log(this.sortBy)
      return arr.slice().sort((a, b) => {
        if (this.sortBy === 'most') {
          return b.points - a.points
        } else {
          return a.points - b.points
        }
      })
    },
    popupState(val) {
      this.deletedItem = val;
      this.snackbar = true;
    }
  }
}
</script>