<template>
  <div id="app">
    <el-button  v-print="'#printResume'">打印</el-button>
    <resumePage id="printResume"></resumePage>
  </div>
</template>

<script>
import resumePage from './page/resume.vue'


export default {
  name: 'App',
  components: {
    resumePage
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
  width: 100%;
  height: 100%;
}

html {
  height: 100%;
  width: 100%;
}

body {
  width: 100%;
  height: 100%;
  -webkit-print-color-adjust: exact;
}

p {
  margin: 5px 0 5px 0;
}

h3 {
  margin: 10px 0 10px 0;
}

@media print {
  body {
    overflow-y: hidden !important;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .print-page {
    page-break-inside: auto;
  }

  p {
    page-break-inside: avoid;
  }
}
</style>
