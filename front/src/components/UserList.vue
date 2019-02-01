<template>
  <v-content>
    <v-container v-for="type in types" :key="type" fluid grid-list-md grey lighten-4>
      <v-subheader>{{ type }}</v-subheader>
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex v-for="user in users" :key="user.id" xs12 sm6 md4>
          <v-card>
            {{ user.name }}
            <v-icon>{{ user.image }}</v-icon>
            {{ user.lastActions }}
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

class User {
  public id: string = '123456';
  public name: string = 'ユーザ';
  public image: string = 'remove_circle_outline';
  public lastActions: string = 'received';
  public timestamp = new Date();
}

@Component
export default class UserList extends Vue {
  public types: string[] = ['新着', '返信済'];
  public users: User[] = [
    new User(),
    new User(),
    new User(),
  ];
  public getImage(): number {
    const min = 550;
    const max = 560;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
</script>

<style>
</style>
