<template>
    <div>
      <HelloWorld/>
      <hello-world/>
      <img src="./assets/logo.png" alt="logo" class="logo">
    </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld'
    export default {
        name: "App",
        components:{
          HelloWorld
        }
    }
</script>
<style>
  .logo{
    width: 150px;
    height: 150px;
  }
</style>
