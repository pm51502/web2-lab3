<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/facts">Facts</router-link> |
    <router-link to="/fact-generator">Generator</router-link>
  </div>
  <router-view class="container wrapper" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#nav {
  padding: 30px;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.wrapper {
  width: 50%;
}

</style>
