<template>
  <div id='app'>
    aa
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log('1')
    setTimeout(() => {
      console.log('2')
    }, 120)
  },
  computed: {
    a () {
      console.log(4)
      return 0
    }
  },
  mounted () {
    setTimeout(() => {
      console.log('3')
    }, 20)
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
