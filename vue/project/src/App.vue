<template>

  <FooterMoon />

</template>

<script>
// import HelloMoon from './components/HelloMoon.vue' 
import FooterMoon from './components/FooterMoon.vue'

export default {
  name: 'App',
  components: {
    // HelloMoon,
    FooterMoon
  },
  data(){
    return {
      fname: "Mostafijur",
      name : "I am from app component",
    }
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
