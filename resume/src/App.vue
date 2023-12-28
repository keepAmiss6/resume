<template>
  <div id="app">
    <resumePage id="printResume"></resumePage>
    <el-button v-print="'#printResume'" type="primary" class="print-btn">打印该简历</el-button>
  </div>
</template>

<script>
import resumePage from './page/resume.vue'


export default {
  name: 'App',
  components: {
    resumePage
  },
  methods: {
    // printPDF() {
    //   this.$printJS({
    //     printable:'html',
    //     type: 'pdf',
    //     header: 'PrintJS - PDF Demo',
    //     documentTitle: 'PrintJS - PDF Demo',
    //   })
    // },
  },
}
</script>

<style>
#app {
  /*font-family: SimHei,Avenir, Helvetica, Arial, sans-serif;*/
  font-family: SimHei,Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303133;
  width: 100%;
  height: 100%;
  font-size: 14px;
}
.print-btn{
  position: fixed;
  left: 10px;
  top: 10px;
}
html {
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  width: 100%;
  height: 100%;
  -webkit-print-color-adjust: exact;
  color: #303133;
}

p {
  margin: 10px 0 10px 0;
  line-height: 23px;
}

h3 {
  margin: 10px 0 10px 0;
}

@media print {
  @page{
    size: A4;
    margin-top: 10px;
  }
  body {
    overflow-y: hidden !important;
    height: auto !important;
    font-size: 14px;
    a{
      font-size: 14px;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .print-break-avoid {
    page-break-inside: avoid;
  }

  p {
    page-break-inside: avoid;
  }
}
</style>
