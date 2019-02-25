<template>
  <v-content>
    <v-container v-for="type in types" :key="type" fluid grid-list-md grey lighten-4>
      <v-subheader class="headline font-weight-bold">{{ type }}</v-subheader>
      <v-layout row wrap>
        <v-flex v-for="user in users" :key="user.id" xs12 sm6 md4>
          <UserView :user="user"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserView from '@/components/UserView.vue';
import User from '@/entities/User';
import axios from 'axios';

@Component({
  components: {
    UserView,
  },
})
export default class UserList extends Vue {
  public types: string[] = ['新着', '返信済'];
  public users: User[] = [];

  public mounted() {
    axios.post('http://localhost:3000/users', {}).then((res) => {
      this.users = res.data.users.map((r: User) => {
        const u = new User();
        u.id = r.id;
        u.name = r.name;
        u.image = r.image;
        return u;
      });
      console.log(this.users);
      console.log(res.data.users);
    });
  }
}
</script>
