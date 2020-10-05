<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Checkout />
  </div>
</template>

<script>
import Checkout from './components/pages/Checkout'

export default {
  name: 'App',
  components: {
    Checkout
  }
}
</script>

<style>
*{
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
}
#_op_data_r , #_op_data_antifraud {
  display: none;
}
</style>
