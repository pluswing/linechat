<template>
  <v-content>
    <v-container v-for="type in types" :key="type" fluid grid-list-md grey lighten-4>
      <v-subheader class="headline font-weight-bold">{{ type }}</v-subheader>
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex v-for="user in users" :key="user.id" xs12 sm6 md4>
          <v-card class="mx-auto" color="#268e66" dark max-width="400">
            <v-card-title>
              <v-list-tile-avatar color="grey darken-3">
                <v-img class="elevation-6" :src="user.image"></v-img>
              </v-list-tile-avatar>
              <span class="title font-weight-bold">{{ user.name }}</span>
            </v-card-title>
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
import moment from 'moment';

class User {
  public id: string = '123456';
  public name: string = 'ユーザ';
  public image: string = 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light';
  public lastMessage: string = 'めっせーじ';
  public lastActions: string = 'received';
  public timestamp = new Date();
  public since() {
    return moment(this.timestamp).fromNow();
  }
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
