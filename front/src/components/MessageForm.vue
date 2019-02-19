<template>
  <v-layout>
    <v-layout row>
      <v-flex offset-xs2 xs8>
        <v-textarea
          v-model="message"
          v-on:keyup.enter="submit()"
          solo
          rows="2"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class MessageForm extends Vue {
  public message: string = '';

  public submit() {
    this.send(this.message);
    this.message = '';
  }

  @Emit()
  public send(message: string) {
  }
}
</script>
