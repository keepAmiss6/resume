<template>
  <div class="content">
    <el-card class="box-card" style="margin-bottom: 20px">
      <div slot="header" class="clearfix">
        <div style="display: flex;width: 100%">
          <img src="../assets/picture/myself.jpg" alt="" class="infor-img">
          <div class="flex-column" style="margin-left: 20px;width: 100%">
            <p style="">张燕 | web前端开发工程师</p>
            <div class="infor">
              <div><i class="el-icon-user icon"></i><span>1995年9月</span></div>
              <div><i class="el-icon-location-information icon"></i><span>北京</span></div>
            </div>
          </div>

        </div>
      </div>
      <div class="text item flex-column" style="text-align: left">
        <div class="flex-row-space">
          <div><i class="el-icon-phone-outline icon"></i><span>1510108xxxx</span></div>
          <div><i class="el-icon-message icon"></i><span>keepamiss@163.com</span></div>
          <div>
            <img src="../assets/picture/github.jpg" style="width: 16px;height: 16px;border-radius: 50%;margin-right: 8px;"><span>https://github.com/keepAmiss6</span>
          </div>
        </div>
        <div>
          <a href="https://keepamiss6.github.io/resume/" target="_blank"><i class="el-icon-link icon"></i><span>网页版简历地址：https://keepamiss6.github.io/resume/</span></a>
        </div>
      </div>
    </el-card>
    <div class="bottom">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <p style="text-align: left" class="title">工作经历</p>
        </div>
        <el-table :data="tableData" :show-header="false">
          <el-table-column
              prop="name"
              label="公司/学校"
          >
            <template slot-scope="scope">
              <img src="../assets/picture/glodon.jpg" class="litter-img">{{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column
              prop="postion"
              label="岗位"
          >
          </el-table-column>
          <el-table-column
              prop="date"
              label="时间"
          >
          </el-table-column>
        </el-table>
      </el-card>
      <el-card class="box-card" style="margin-top:20px">
        <div slot="header" class="clearfix">
          <p style="text-align: left" class="title">专业技能</p>
        </div>
        <el-table :data="skill" :show-header="false">
          <el-table-column
              type="index"
              width="40">
          </el-table-column>
          <el-table-column
              prop="item"
              label="岗位"
          >
          </el-table-column>
        </el-table>
      </el-card>
      <h2>项目经历</h2>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="title">项目一：施工算量企业服务</span>
          <span style="float: right; padding: 3px 0" type="text">2023年02月 - 至今</span>
        </div>
        <div class="text item">
          <p>施工算量企业服务系统是通过帮助客户建立企业数字化标准和规则，建立全场景数字化工程量计算和管控的能力，
            帮助客户进行项目精细化管理，为每个项目创造工程量收益。</p>
          <p><strong class="title">技术选型</strong>：Vue、Element UI、Webpack、Scss、Qiankun</p>
          <strong>项目成果和亮点</strong>
          <div class="result">
            <p>
              基于elementUi封装了81个业务组件，其中20个具备较高的复杂性，列如表单套表格组件、表格套表格组件、二开表格等。</p>
            <p>首屏渲染时间在wifi与4g网速下300ms以内打开，在低速网下1s以内渲染完成，lighthouse评分90。</p>
            <p>识别系统存在的业务、技术漏洞，并把漏洞点全部补齐，提高了系统的安全性和用户体验。</p>
            <p>
              持续维护了通俗易懂的开发文档，使用UML加入流程图、用例图等图列，对专业术语简称进行额外说明、重要部分提供伪代码、采用由总到分的表达结构</p>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="title">项目二：项目协同重构</span>
          <span style="float: right; padding: 3px 0" type="text">2022年01月 - 2022年12月</span>
        </div>
        <div class="text item">
          <p>
            【云协同】项目是为企业客户提供高效联动的协同建模算量解决方案，对多个项目进行管理，数据分析等工作，为客户缩短周期，提高效率，控制算量成本。该项目是一个历史项目，首页存在严重的效率问题。</p>
          <p><strong>技术选型</strong>：Vue、Jenkins</p>
          <strong>项目成果和亮点</strong>
          <div class="result">
            <p>屏渲染速度得到极大提升，在4g与wifi网速下首屏展示由4s提升到500ms，3g网速下1s内打开。</p>
            <p>
              基于webpack重构该项目，解决样式污染问题，实现了模块化管理，打包体积由原来的20M减小到10M，提高了开发体验，减少开发成本。</p>
            <p>
              为该项目加入自动化部署，部署时间由原来的10分钟减少到3s，避免了手工操作的出错情况，极大地提高了部署效率。</p>
            <p>解决git效率问题，项目拉取、提交速度由原来的5s减少到1s完成，提高开发体验。</p>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="title">项目三：Relax服务系统（pc端&手机端）</span>
          <span style="float: right; padding: 3px 0" type="text">2017年07月 - 2021年09月</span>
        </div>
        <div class="text item">
          <p>Relax是一个面向政府、医疗、教育等不同企业的B端全流程处理系统，可以帮助企业进行事务处理、资产管理、人
            员管理、分析决策等</p>
          <div class="flex-space"><strong>手机端</strong><strong>2020年 - 2021年</strong></div>
          <p><strong>技术选型</strong>：react、react-redux、redux-saga、react-hooks</p>
          <strong>项目成果和亮点</strong>
          <div class="result" style="margin-bottom: 20px">
            <p>使用rem完美解决了不同机型的布局兼容性问题，提高了用户的整体体验。</p>
            <p>使用断点续传思路重构了大文件上传功能，并添加了安全校验。</p>
            <p>二次封装weui的page组件，解决苹果手机适配问腿</p>
            <p class="">不同场景、不同数据下，动态完成复杂表格的渲染，单元格、表头合并，帮助用户更直观地了解资产情况。</p>
          </div>
          <div class="flex-space"><strong>pc端</strong><strong>2017年 - 2021年</strong></div>
          <p><strong>技术选型</strong>：Javascript、RequireJs、JQuery</p>
          <strong>项目成果和亮点</strong>
          <div class="result">
            <p>用户有自定义表单的需求，实现了通过灵活的配置和可视化编辑，用户可以自定义表单字段、验证规则和布局。</p>
            <p>主导了流程引擎的自定义、流程实例管理和流程节点的处理，通过合理的设计和优化，实现了高效的管理功能。</p>
            <p>
              为了满足不同交付群体对首页大厅的定制需求，设计并开发了首页可配置功能，由之前的交付前硬编码方式变为配置，可灵活搭配需要的功能模块、布局等，使交付时间提高了80%。</p>
            <p>用户有换肤的需求，设计并主导了换肤功能，提供三种常用的主题，并且为用户提供自定义修改主题的入口。</p>
            <p>使用selenium进行100%功能覆盖。</p>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="title">最近在学</span>
        </div>
        <div class="flex">
          <img src="../assets/picture/react.jpg" class="litter-img">
          <span>react hook</span>
        </div>
      </el-card>
      <section>
        <h2>简历网页链接</h2>
        <a href="https://keepamiss6.github.io/resume/" target="_blank">https://keepamiss6.github.io/resume/</a>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'resumePage',
  data() {
    return {
      tableData: [
        {name: '广联达科技股份有限公司', postion: '高级前端开发工程师', date: '2021.12 ~ 至今'},
        {name: '北京星网锐捷网络技术有限公司', postion: '前端开发工程师', date: '2017.07 ~ 2021.09'},
        {name: '天津工业大学', postion: '软件工程专业', date: '2015.09 ~ 2017.07'},
        {name: '天津大学', postion: '计算机信息管理专业', date: '2012.09 ~ 2015.07'},
      ],
      skill: [
        {item: '具备扎实的javascript基础'},
        {item: '熟练掌握html、css，有丰富的响应式布局经验'},
        {item: '熟练掌握react，并对其原理有深入研究'},
        {item: '熟练掌握vue2、vue3，并能完成大型项目开发'},
        {item: '熟练使用chorme工具、devtool、charles、vConsole等工具对web端、手机端进行调试'},
        {item: '熟练使用git，有丰富地多人协作项目管理经验'},
        {item: '熟练使用webpack对大型项目进行打包、优化'},
        {item: '掌握自动化部署，有接入前端项目流水线部署经验'},
        {item: '熟练掌握selenium编写自动化用例'},
        {item: '英语可以做到日常沟通以及阅读英文文档无障碍'}
      ]
    }
  },
  methods() {

  }
}
</script>
<style scoped lang="scss">
$grayColor: #afb8c1;
@media print {
  .content {
    width: 100% !important;
  }
}

.litter-img {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 10px;
}

.content {
  height: 100%;
  width: 794px;
  margin-left: auto;
  margin-right: auto;

  .infor-img {
    width: 60px;
    height: 60px;
    border-radius: 65px;
    border: 1px solid $grayColor
  }

  .infor {
    display: flex;
    justify-content: space-between;
    width: 100%;
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
  .icon{
    margin-right: 8px;
  }
}

.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flex-row {
  display: flex;
  justify-content: center;
}

.flex-row-space {
  display: flex;
  justify-content: space-between;
}

//.content {
//
//
//  //display: flex;
//  //flex-direction: column;
//  height: 100%;
//  width: 794px;
//
//  //overflow: auto;
//  background-color: #fff;
//  //box-shadow: 0 0 5px #ccc;
//  //border-radius: 10px;
//  margin-left: auto;
//  margin-right: auto;
//  font-size: 14px;
//  position: relative;
//  //border: 1px solid #E8E8E8;
//
//  .title {
//    font-weight: 800;
//  }
//
//  //section {
//  //  text-align: left;
//  //}
//
//  .flex {
//    display: flex;
//  }
//
//  .flex-space {
//    display: flex;
//    justify-content: space-between;
//  }
//
//  //.name-box {
//  //  display: flex;
//  //  flex-direction: column;
//  //  justify-content: center;
//  //  flex-basis: 35%;
//  //}
//
//  //.top {
//  //  flex-basis: 180px;
//  //  height: 180px;
//  //  border-bottom: 1px solid #E8E8E8;
//  //
//  //  .person-infor {
//  //    text-align: left;
//  //    display: flex;
//  //    flex-direction: column;
//  //    font-weight: 700;
//  //    justify-content: end;
//  //    margin-left: 40px;
//  //
//  //    div {
//  //      margin-bottom: 5px;
//  //
//  //      span {
//  //        margin-left: 5px;
//  //      }
//  //    }
//  //  }
//  //}
//
//  .bottom {
//    flex: 1;
//    //padding:20px;
//
//
//    .icon {
//      margin-right: 10px;
//    }
//
//
//
//
//    .red {
//      color: #BE1931;
//    }
//
//    .project {
//      margin-bottom: 20px;
//    }
//  }
//
//  .result p::before {
//    content: "";
//    display: inline-block;
//    width: 5px;
//    height: 5px;
//    border-radius: 50%;
//    background: #BE1931;
//    margin-right: 5px;
//  }
//
//}
</style>
<style lang="scss">
.el-card.is-always-shadow {
  box-shadow: none !important;
}

.el-card {
  margin-bottom: 20px;
  text-align: left;
}
</style>
