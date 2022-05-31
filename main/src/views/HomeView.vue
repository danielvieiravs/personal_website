<template>
  <div class="home">
    <h1>Daniel Vieira</h1>

    <h4>Software Developer <span>&#183;</span> Engineer</h4>

    <div class="icons">
      <img alt="Github logo" src="../assets/social/github.svg">
      <img alt="Linkedin logo" src="../assets/social/linkedin.svg">
    </div>

    <img class="profile" alt="Profile picture" src="../assets/avatar/profile.png">
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.icons {
  & img {
    height: 30px;
  }
}

.profile {
  object-fit: cover;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  padding-top: 50px;
}
</style>