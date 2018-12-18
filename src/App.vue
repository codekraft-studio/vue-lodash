<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="motto">
      <h1>Vue Lodash</h1>
      <h2>from great <strong>powers</strong> comes great <strong>filters</strong></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

strong {
  color: #41b883;
}

.motto h1 {
  margin: 0 0 10px;
}

.motto h2 {
  margin: 0;
  color: #696969;
}
</style>
