<template>
  <div class="content">
    <aside class="left">
      <img src="../assets/pic.jpg" alt="" style="width: 125px;height:125px;border-radius:65px;margin-top:50px">
      <p style="font-size: 24px;font-weight: 700">张燕</p>
      <p>前端开发</p>
      <div style="text-align: left;">
        <div><i class="el-icon-phone-outline left-icon"></i>1510108xxxx</div>
        <div><i class="el-icon-message left-icon"></i>keepamiss@163.com</div>
        <div><i class="el-icon-location-information left-icon"></i>北京</div>
        <div><i class="el-icon-phone-outline left-icon"></i>软件工程</div>
      </div>

      <div>
        <h2 style="color: #56CCF2;">工作经历</h2>
        <div style="text-align:left">
          <p>2021.12 ~ 至今</p>
          <div class="flex-space"><span>广联达科技股份有限公司 - 高级前端开发工程师</span></div>
          <p>2017.07 ~ 2021.09</p>
          <div class="flex-space"><span>北京星网锐捷网络技术有限公司 - 前端开发工程师</span></div>
        </div>
      </div>

      <div>
        <h2 style="color: #56CCF2;">教育经历</h2>
        <div style="text-align:left">
          <p>2015.09 ~ 2017.07</p>
          <div class="flex-space"><span>天津工业大学 - 软件工程专业</span></div>
          <p>2012.09 ~ 2015.07</p>
          <div class="flex-space"><span>天津大学 - 计算机信息管理专业</span></div>
        </div>
      </div>

    </aside>
    <div class="right">
      <div style="font-size: 12px;text-align: left">
        <h2 style="color: #56CCF2;">专业技能</h2>
        <p>具备扎实的javascript基础</p>
        <p>熟练掌握html、css，有丰富的响应式布局经验</p>
        <p>熟练掌握react，并对其原理有深入研究</p>
        <p>熟练掌握vue2、vue3，并能完成大型项目开发</p>
        <p>熟练使用chorme工具、devtool、charles、vConsole等工具对web端、手机端进行调试</p>
        <p>熟练使用git，有丰富地多人协作项目管理经验</p>
        <p>熟练使用webpack对大型项目进行打包、优化</p>
        <p>掌握自动化部署，有接入前端项目流水线部署经验</p>
        <p>熟练掌握selenium编写自动化用例</p>
        <p>英语可以做到日常沟通以及阅读英文文档无障碍</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'resumePage',
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.content {
  display: flex;
  height: 100%;
  width: 1024px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  position: relative;

  .left {
    height: 100%;
    flex-basis: 250px;
    background: #174180;
    color: white;
    padding: 10px;

    .left-icon {
      margin-right: 5px;
    }
  }

  .right {
    height: 100%;
    flex: 1;
    margin-left: 5px;
  }
  .flex-space{
    display: flex;
    justify-content: space-between;
  }

}
</style>
