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
import axios from 'axios';

@Component({
  components: {
    MessageView,
    MessageForm,
  },
})
export default class MessageThread extends Vue {
  public messages: Message[] = [];
  public userId: string = '';

  public async created() {
    this.userId = this.$route.params.userId || '';
    this.messages = await this.fetchMessage();
    console.log(this.messages);
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
    axios.post('http://localhost:3000/push', {
      userId: this.userId,
      message,
    }).then((res) => {
      console.log(res.data);
    });
  }

  private async fetchMessage(): Promise<Message[]> {
    const res = await axios.post('http://localhost:3000/messages', {
      userId: this.userId,
    });
    const messages: Message[] = res.data.messages;
    return messages;
  }
}
</script>
