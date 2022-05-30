<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
html {
  background: white;
  color: #1c1e21;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
  text-align: right;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #1c1e21;
    padding: 0px 10px;

    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
}
</style>
