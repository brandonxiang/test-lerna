<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="requestName"/>
    <HelloWorld :msg="utilsName"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { request } from 'brandon-request'
import { utils } from 'brandon-utils'


export default {
  name: 'app',
  components: {
    HelloWorld
  },

  data()  {
    return {
      requestName: request(),
      utilsName: utils()
      // name: utils()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
