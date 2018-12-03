<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <div id="content">
            <router-view />
        </div>
    </div>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  background: #f1f1f1;
  position: absolute;
  width: 200px;
  height: 100%;
  a {
    display: block;
    font-weight: bold;
    color: #2c3e50;
    padding: 10px 0;
    font-size: 18px;
    text-decoration: none;
    text-indent: 2em;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#content{
    padding-left: 200px;
}
</style>
