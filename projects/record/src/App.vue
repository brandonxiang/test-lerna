<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="requestName"/>
    <HelloWorld :msg="utilsName"/>
    <HelloWorld :msg="requestNextName"/>
    <!-- <HelloWorld :msg="testUtilName"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { request, requestNext } from 'brandon-request'
import { utils } from 'brandon-utils'
// const testUtil = require('base-test')
import { testUtil } from 'base-test'


export default {
  name: 'app',
  components: {
    HelloWorld
  },

  data()  {
    return {
      requestName: request(),
      utilsName: utils(),
      requestNextName: requestNext(),
      testUtilName: testUtil(),
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
