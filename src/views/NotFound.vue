<template>
  <div id="msg">
    <h1>Sorry, {{ $route.params.catchAll }} is not found.</h1>
    <h3>
      Try <router-link to="/">home</router-link>
    </h3>
  </div>
</template>

<style scoped>

#msg a {
  text-decoration: none;
  font-weight: bold;
  color: #42b983;
}

</style>