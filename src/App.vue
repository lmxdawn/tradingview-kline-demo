<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
function getUrlParam(name) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  } else {
    return null;
  }
}
import {mapActions} from "vuex";
export default {
  created() {
    const superior = getUrlParam('superior')
    this.setSuperior(superior)
  },
  methods: {
    ...mapActions(["setSuperior"]),
  }
}
</script>

<style lang="less">
@import './assets/base.less';
html {
  height: 100%;
}
body {
  height: 100%;
  overflow: hidden;
}
#app {
  height: 100%;
}
</style>
