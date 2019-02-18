<template>
  <v-content>
    <v-container v-for="type in types" :key="type" fluid grid-list-md grey lighten-4>
      <v-subheader class="headline font-weight-bold">{{ type }}</v-subheader>
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex v-for="user in users" :key="user.id" xs12 sm6 md4>
          <v-card class="mx-auto" color="#268e66" dark max-width="400">
            <router-link :to="{ name: 'MessageThread', params: { userId: 123 }}">
              <v-card-title>
                <v-list-tile-avatar color="dark darken-3">
                  <v-img class="elevation-6" :src="user.image"></v-img>
                </v-list-tile-avatar>
                <span class="title font-weight-bold">{{ user.name }}</span>
              </v-card-title>
            </router-link>
            <v-card-text>{{ user.lastMessage }}</v-card-text>
            <v-card-actions>
              <v-list-tile class="grow">
                <v-list-tile-content>
                  <v-list-tile-title>{{ user.since() }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import User from '@/entities/User';
import axios from 'axios';

@Component
export default class UserList extends Vue {
  public types: string[] = ['新着', '返信済'];
  public users: User[] = [
    new User(),
    new User(),
    new User(),
  ];

  public mounted() {
    axios.post('http://localhost:3000/users', {}).then((res) => {
      this.users = res.data.users.map((r: User) => {
        const u = new User();
        u.id = r.name;
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
