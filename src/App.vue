<template>
  <div id="app">
  <NavBar></NavBar>
  <router-view/>

  <client-list></client-list>
   <!-- <img alt="Vue logo" src="./assets/logo.png"> 
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

      
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

import ClientList from './components/ClientList.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    ClientList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
