<template>
  <div class="content">
    <div class="top">
      <div style="width: 45px;height: 60px;background: #BE1931;position: absolute;top: 40px"></div>
      <div style="margin-left: 50px;display: flex;;padding: 15px 20px 20px 50px">
        <div class="name-box">
          <p style="font-size: 24px;font-weight: 700">张燕</p>
          <p style="font-size: 24px;font-weight: 700;margin-bottom: 10px">web前端开发工程师</p>
        </div>
        <img src="../assets/picture/myself.jpg" alt=""
             style="width: 125px;height:125px;border-radius:65px;border:1px solid #E8E8E8">
        <div style="text-align: left;" class="person-infor">
          <div><i class="el-icon-user left-icon"></i><span>1995年9月</span></div>
          <div><i class="el-icon-location-information left-icon"></i><span>北京</span></div>
          <div><i class="el-icon-phone-outline left-icon"></i><span>1510108xxxx</span></div>
          <div><i class="el-icon-message left-icon"></i><span>keepamiss@163.com</span></div>
          <div><img src="../assets/picture/github.jpg" style="width: 16px;height: 16px;border-radius: 50%"><span>https://github.com/keepAmiss6</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="flex expirse">
        <section style="flex-basis: 50%">
          <h2>工作经历</h2>
          <div style="text-align:left">
            <p class="flex"><img src="../assets/picture/glodon.jpg" class="litter-img"><span>2021.12 ~ 至今</span></p>
            <p style="margin-bottom: 10px">广联达科技股份有限公司 - 高级前端开发工程师</p>
            <p class="flex"><img src="../assets/picture/ruijie.jpg" class="litter-img"><span>2017.07 ~ 2021.09</span>
            </p>
            <p>北京星网锐捷网络技术有限公司 - 前端开发工程师</p>
          </div>
        </section>

        <section style="flex: 1">
          <h2>教育经历</h2>
          <div style="text-align:left">
            <p class="flex"><img src="../assets/picture/gd.jpg" class="litter-img"><span>2015.09 ~ 2017.07</span></p>
            <p style="margin-bottom: 10px">天津工业大学 - 软件工程专业</p>
            <p class="flex"><img src="../assets/picture/td.jpg" class="litter-img"><span>2012.09 ~ 2015.07</span></p>
            <p>天津大学 - 计算机信息管理专业</p>
          </div>
        </section>

        <section>
          <h2>最近在学</h2>
          <div class="flex">
            <img src="../assets/picture/react.jpg" class="litter-img">
            <span>react hook</span>
          </div>
        </section>
      </div>

      <section>
        <h2>专业技能</h2>
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
      </section>
      <section>
        <h2>项目经历</h2>
        <div class="project">
          <div class="flex-space"><h3>项目一：施工算量企业服务</h3> <strong>2023年02月 - 至今</strong></div>
          <p>施工算量企业服务系统是通过帮助客户建立企业数字化标准和规则，建立全场景数字化工程量计算和管控的能力，
            帮助客户进行项目精细化管理，为每个项目创造工程量收益。</p>
          <p><strong class="title">技术选型</strong>：Vue、Element UI、Webpack、Scss、Qiankun</p>
          <strong>项目成果和亮点：</strong>
          <div class="result">
            <p>基于elementUi封装了81个业务组件，其中20个具备较高的复杂性，列如表单套表格组件、表格套表格组件、二开表格等。</p>
            <p>首屏渲染时间在wifi与4g网速下300ms以内打开，在低速网下1s以内渲染完成，lighthouse评分90。</p>
            <p>识别系统存在的业务、技术漏洞，并把漏洞点全部补齐，提高了系统的安全性和用户体验。</p>
            <p>持续维护了通俗易懂的开发文档，使用UML加入流程图、用例图等图列，对专业术语简称进行额外说明、重要部分提供伪代码、采用由总到分的表达结构</p>
          </div>
        </div>

        <div class="project print-page">
          <div class="flex-space"><h3>项目二：项目协同重构</h3> <strong>2022年01月 - 2022年12月</strong></div>
          <p>【云协同】项目是为企业客户提供高效联动的协同建模算量解决方案，对多个项目进行管理，数据分析等工作，为客户缩短周期，提高效率，控制算量成本。该项目是一个历史项目，首页存在严重的效率问题。</p>
          <p><strong>技术选型</strong>：Vue、Jenkins</p>
          <strong>项目成果和亮点：</strong>
          <div class="result">
            <p>屏渲染速度得到极大提升，在4g与wifi网速下首屏展示由4s提升到500ms，3g网速下1s内打开。</p>
            <p>基于webpack重构该项目，解决样式污染问题，实现了模块化管理，打包体积由原来的20M减小到10M，提高了开发体验，减少开发成本。</p>
            <p>为该项目加入自动化部署，部署时间由原来的10分钟减少到3s，避免了手工操作的出错情况，极大地提高了部署效率。</p>
            <p>解决git效率问题，项目拉取、提交速度由原来的5s减少到1s完成，提高开发体验。</p>
          </div>
        </div>

        <div class="project ">
          <div class="flex-space"><h3>项目三：Relax服务系统（pc端&手机端）</h3> <strong>2017年07月 - 2021年09月</strong></div>
          <p>Relax是一个面向政府、医疗、教育等不同企业的B端全流程处理系统，可以帮助企业进行事务处理、资产管理、人
            员管理、分析决策等</p>
          <div class="flex-space"><strong>手机端</strong><strong>2020年 - 2021年</strong></div>
          <p><strong>技术选型</strong>：react、react-redux、redux-saga、react-hooks</p>
          <strong>项目成果和亮点：</strong>
          <div class="result" style="margin-bottom: 20px">
            <p>使用rem完美解决了不同机型的布局兼容性问题，提高了用户的整体体验。</p>
            <p>使用断点续传思路重构了大文件上传功能，并添加了安全校验。</p>
            <p>二次封装weui的page组件，解决苹果手机适配问腿</p>
            <p class="">不同场景、不同数据下，动态完成复杂表格的渲染，单元格、表头合并，帮助用户更直观地了解资产情况。</p>
          </div>
          <div class="flex-space"><strong>pc端</strong><strong>2017年 - 2021年</strong></div>
          <p><strong>技术选型</strong>：Javascript、RequireJs、JQuery</p>
          <strong>项目成果和亮点：</strong>
          <div class="result">
            <p>用户有自定义表单的需求，实现了通过灵活的配置和可视化编辑，用户可以自定义表单字段、验证规则和布局。</p>
            <p>主导了流程引擎的自定义、流程实例管理和流程节点的处理，通过合理的设计和优化，实现了高效的管理功能。</p>
            <p>为了满足不同交付群体对首页大厅的定制需求，设计并开发了首页可配置功能，由之前的交付前硬编码方式变为配置，可灵活搭配需要的功能模块、布局等，使交付时间提高了80%。</p>
            <p>用户有换肤的需求，设计并主导了换肤功能，提供三种常用的主题，并且为用户提供自定义修改主题的入口。</p>
            <p>使用selenium进行100%功能覆盖。</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'resumePage',
  data() {
    return {}
  },
  methods() {

  }
}
</script>
<style scoped lang="scss">
@media print {
  .content{
    width: 100% !important;
  };
}

.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 1024px;

  overflow: auto;
  background-color: #fff;
  //box-shadow: 0 0 5px #ccc;
  //border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  position: relative;
  //border: 1px solid #E8E8E8;

  section {
    text-align: left;
  }

  .flex {
    display: flex;
  }

  .flex-space {
    display: flex;
    justify-content: space-between;
  }

  .name-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 40%;
  }

  .top {
    flex-basis: 180px;
    height: 180px;
    border-bottom: 1px solid #E8E8E8;

    .person-infor {
      text-align: left;
      display: flex;
      flex-direction: column;
      font-weight: 700;
      justify-content: end;
      margin-left: 40px;

      div {
        margin-bottom: 5px;

        span {
          margin-left: 5px;
        }
      }
    }
  }

  .bottom {
    flex: 1;
    padding: 30px 80px 0 80px;


    .left-icon {
      margin-right: 10px;
    }


    .litter-img {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      margin-right: 10px;
    }

    .red {
      color: #BE1931;
    }

    .project {
      margin-bottom: 20px;
    }
  }

  .result p::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #BE1931;
    margin-right: 5px;
  }
}
</style>
