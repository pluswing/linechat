<template>
  <v-content>
    <v-card class="mx-auto" color="#268e66" dark max-width="400">
      <router-link :to="{ name: 'MessageThread', params: { userId: user.id }}">
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
  </v-content>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import User from '@/entities/User';
import axios from 'axios';

@Component
export default class UserView extends Vue {
  @Prop() public user!: User;
}
</script>
