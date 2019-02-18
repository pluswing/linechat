<template>
  <v-layout>
    <!-- user message -->
    <v-layout justify-start pb-3 v-if="!message.operator">
      <v-flex xs2 pr-2>
        <v-avatar color="grey lighten-4">
          <img :src="message.image" alt="avatar">
        </v-avatar>
      </v-flex>
      <v-flex xs8>
        <v-card class="mx-auto" color="#26c6da" dark>
          <v-card-text>{{message.message}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- operator message -->
    <v-layout row justify-end pb-3 v-if="message.operator">
      <v-flex xs8>
        <v-card color="#26c6da" dark>
          <v-card-text>{{message.message}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 pl-2>
        <v-avatar color="grey lighten-4">
          <img :src="message.image" alt="avatar">
        </v-avatar>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Message from '@/entities/Message.vue';

@Component({
  components: {
  },
})
export default class MessageView extends Vue {
  @Prop() public message!: Message;
}
</script>
