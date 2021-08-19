<template>
  <v-container>
    <v-btn text @click="returnToLinksClick()">
      <v-icon left>
        mdi-arrow-left
      </v-icon>
        Return to List
    </v-btn>

    <v-row class="flex-column align-center">
      <v-col
          cols="12"
          sm="6"
        >
        <label>Link Name</label>
          <v-text-field
            outlined
            v-model="linkName"
            placeholder="alphabet"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
        <label>Link URL</label>
          <v-text-field
            outlined
            v-model="linkUrl"
            placeholder="http://abc.xyz"
          ></v-text-field>
        </v-col>
    </v-row>

   <v-row class="justify-end">
     <v-btn color="success" large @click="addLink()">Add</v-btn>
     <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      absolute
      top
      color="success"
      outlined
      right
    >
    <span><strong>{{ linkName }}</strong> added</span>
    </v-snackbar>
   </v-row>
      

  </v-container>
</template>

<script>
export default {
  data () {
    return {
      linkName: '',
      linkUrl: '',
      snackbar: false,
      timeout: 2000,
    }
  },
  methods: {
    returnToLinksClick () {
      this.$store.commit('submitClicked', false)
    },
    addLink () {
      const link = {
        name: this.linkName,
        url: this.linkUrl,
        points: 0
      }
      this.snackbar = true;
      console.log(this.snackbar);
      console.log('addLink', link)

      setTimeout(() => {
        this.$store.commit('addLink', link)
        this.$store.commit('submitClicked', false)
      }, 2000);
    }
  }
}
</script>