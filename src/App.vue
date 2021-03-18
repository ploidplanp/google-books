<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link tag="h3" id="mybrand" class="nav-brand" to="/">Google-Books</router-link>
    </div>
  </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#mybrand {
  margin-left: 2vw;
  color: white;
  cursor: pointer;
}
</style>
