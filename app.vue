<template>
  <div id="app">
    <NuxtPage></NuxtPage>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";

html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
  /* outline: solid 1px red; */
}
body {
  min-width: 20em;
  background-color: $Wh;
  margin: 0rem auto;
}
</style>
