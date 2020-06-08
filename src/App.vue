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
    transition: color 1s, background 1.6s;
    &.video--playing {
        background: black;
        color: black;
    }
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

header {
    height: 5rem;
    padding: 10px;
}
</style>
