<template>
  <v-container>
    <v-layout v-for="message in messages" :key="message.id">
      <MessageView :message="message"/>
    </v-layout>
    <MessageForm @send="sendMessage"/>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Message from '@/entities/Message';
import MessageView from '@/components/MessageView.vue';
import MessageForm from '@/components/MessageForm.vue';

@Component({
  components: {
    MessageView,
    MessageForm,
  },
})
export default class MessageThread extends Vue {
  public messages: Message[] = [];

  public created() {
    const ms: Message[] = [];
    for (let i = 0; i < 10; i++) {
      ms.push(this.createDummyMessage());
    }
    this.messages = ms;
  }

  public createDummyMessage(): Message {
    const msg = new Message();
    msg.id = '' + (Math.random() * 100000);
    msg.name = 'aaaa';
    msg.operator = Math.random() > 0.5;
    msg.message = 'hogehoge';
    msg.image = 'https://vuetifyjs.com/apple-touch-icon-180x180.png';
    return msg;
  }

  public sendMessage(message: string) {
    // TODO call push API
  }
}
</script>
