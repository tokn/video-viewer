<template>
<div id="app">
  <router-view />
</div>
</template>

<style lang="scss">
*,
*:after,
*:before {
    box-sizing: border-box;
}
body {
    margin: 0;
    background: #333;
    color: #ccc;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

header {
    height: 4rem;
    padding: 10px;
}
</style>
