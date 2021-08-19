<template>
  <v-container>
    <v-card class="mx-auto ma-3" max-width="400" @mouseover="isMouseOver = true" @mouseleave="isMouseOver = false">

      <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >

        <template v-slot:activator="{ on }">
            <v-btn v-show="isMouseOver" class="mx-2 delete-btn" fab small color="error" v-on="on">
            <v-icon dark>mdi-minus</v-icon>
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="text-h5 grey lighten-3">
            Remove Link
          </v-card-title>
  
          <v-card-text class="pa-6" style="font-size:18px">
            Do you want to remove?
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
             <v-btn
              color="error"
              @click="dialog = false"
            >
              Cancel
            </v-btn>
            <v-btn
              color="success"
              @click="deleteItem(link)"
            >
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
      <v-row>
        <v-col
          class="d-flex justify-center align-center"
          cols="12"
          sm="5"
        >
        <div class="point">
          <p class="text-h3 font-weight-bold">{{ link.points }}</p>
          <p class="text-uppercase">Points</p>
        </div>
        </v-col>

        <v-col
          class="d-flex justify-center flex-column"
          cols="12"
          sm="7"
        >
          <p class="font-weight-bold text-h4">{{ link.name }}</p>
          <a :href="link.url" target="_blank" class="link-url">{{ link.url }}</a>

          <div class="mt-4">
            <span class="success--text" style="cursor: pointer" @click="upVote(link)">
              <v-icon color="success">mdi-arrow-up</v-icon>
              Up vote
            </span>
            <span class="error--text" style="cursor: pointer;" @click="downVote(link)">
              <v-icon color="error">mdi-arrow-down</v-icon>
              Down vote
            </span>
          </div>
        </v-col>
      </v-row> 
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    link: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      isMouseOver: false,
      dialog: false
    }
  },
  computed:
    mapState({
      links: state => state.links
    }),
  methods: {
    upVote (link) {
      this.$store.commit('upVote', link)
    },
    downVote (link) {
      this.$store.commit('downVote', link)
    },
    deleteItem(item) {
      this.links.splice(this.links.indexOf(item), 1);
      this.dialog = false;
      this.$emit('popup', this.link);
    }
  }
}
</script>

<style lang="scss">
.point {
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 30px;
  display: inline-flex;
  flex-direction: column;
  border-radius: 5px;
}

.link-url {
  color: grey !important;
  text-decoration: none;
}
.delete-btn {
  position: absolute;
  left: 92%;
}
</style>