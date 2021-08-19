<template>
    <v-container class="pa-5 text-center">
      <v-btn color="warning" large @click="submitClick()">
        <v-icon left large>
          mdi-plus
        </v-icon>
        Submit A Link
      </v-btn>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SubmitLink',
  methods: {
    submitClick () {
      this.$store.commit('submitClicked', true)
    },
  },
  computed:
    mapState({
      submitClicked: state => state.submitClicked
    })
}
</script>