<template>
  <div class="content">
    <el-card class="box-card">
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
        <div class="flex-row-space" style="margin-bottom:5px">
          <div><i class="el-icon-phone-outline icon"></i><span>15101089180</span></div>
          <div><i class="el-icon-message icon"></i><span>keepamiss@163.com</span></div>
          <div>
            <img src="../assets/picture/github.jpg"
                 style="width: 16px;height: 16px;border-radius: 50%;margin-right: 8px;"><span>https://github.com/keepAmiss6</span>
          </div>
        </div>
        <div class="flex-row-start">
          <a href="https://keepamiss6.github.io/resume/" target="_blank" style="">
            <i class="el-icon-link icon"></i><span>网页版简历地址：https://keepamiss6.github.io/resume/</span>
          </a>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">工作经历</span>
      </div>
      <el-table :data="tableData" :show-header="false">
        <el-table-column
            prop="name"
            label="公司/学校"
            width="280px"
        >
          <template slot-scope="scope">
            <img :src="require(`../assets/picture/${scope.row.img}.jpg`)"
                 class="litter-img"><span>{{ scope.row.name }}</span>
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
            align="right"
        >
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">专业技能</span>
      </div>
      <el-table :data="skill" :show-header="false" class="skill-table">
        <el-table-column
            type="index"
            class="index"
            width="30">
        </el-table-column>
        <el-table-column
            prop="item"
            label="sill"
            class="skill"
        >
        </el-table-column>
      </el-table>
    </el-card>
    <h2 style="margin-left: 20px;page-break-before:always">项目经历</h2>
    <el-card class="box-card project print-break-avoid">
      <div slot="header" class="clearfix">
        <span class="title">项目一：施工算量企业服务</span>
        <span style="float: right; padding: 3px 0" type="text">2023年02月 - 至今</span>
      </div>
      <div class="text item">
        <p>施工算量企业服务系统是通过帮助客户建立企业数字化标准和规则，建立全场景数字化工程量计算和管控的能力，
          帮助客户进行项目精细化管理，为每个项目创造工程量收益。</p>
        <div class="flex-row-start">
          <span>技术选型</span>：
          <div class="tag-block"><img src="../assets/tool_img/vue.jpg" class="litter-img2">Vue</div>
          <div class="tag-block"><img src="../assets/tool_img/elementui.jpg" class="litter-img2">Element UI</div>
          <div class="tag-block"><img src="../assets/tool_img/webpack.jpg" class="litter-img2">Webpack</div>
          <div class="tag-block"><img src="../assets/tool_img/scss.jpg" class="litter-img2">Scss</div>
          <div class="tag-block"><img src="../assets/tool_img/qiankun.png" class="litter-img2">Qiankun</div>
        </div>
        <p>项目成果和亮点</p>
        <div class="result">
          <p>基于elementUi封装了<span class="tag-block-import">81个</span>业务组件，其中20个具备较高复杂性，列如表单套表格、表格套表格、二开表格等。
          </p>
          <p>首屏渲染时间在wifi与4g网速下<span class="tag-block-import">300ms</span>以内打开，在低速网下1s以内渲染完成，lighthouse评分<span
              class="tag-block-import">90</span>。</p>
          <p>识别系统存在的业务、技术漏洞，并把漏洞点全部补齐，提高了系统的安全性和用户体验。</p>
          <p>持续维护了通俗易懂的开发文档，使用UML加入流程图、用例图等图列，对专业术语简称进行额外说明、重要部分提供伪代码、采用由总到分的表达结构</p>
        </div>
      </div>
    </el-card>
    <el-card class="box-card project print-break-avoid">
      <div slot="header" class="clearfix">
        <span class="title">项目二：项目协同重构</span>
        <span style="float: right; padding: 3px 0" type="text">2022年01月 - 2022年12月</span>
      </div>
      <div class="text item">
        <p>
          【云协同】项目是为企业客户提供高效联动的协同建模算量解决方案，对多个项目进行管理，数据分析等工作，为客户缩短周期，提高效率，控制算量成本。该项目是一个历史项目，首页存在严重的效率问题。</p>
        <div><span>技术选型</span>：
          <div class="tag-block"><img src="../assets/tool_img/vue.jpg" class="litter-img2">Vue</div>
          <div class="tag-block"><img src="../assets/tool_img/jenkins.jpg" class="litter-img2">Jenkins</div>
          <div class="tag-block"><img src="../assets/tool_img/git.jpg" class="litter-img2">git</div>
        </div>
        <p>项目成果和亮点</p>
        <div class="result">
          <p>屏渲染速度得到极大提升，在4g与wifi网速下首屏展示由4s提升到<span class="tag-block-import">500ms</span>，3g网速下1s内打开。
          </p>
          <p>基于webpack重构该项目，解决样式污染问题，实现了模块化管理，打包体积由原来的20M减小到<span
              class="tag-block-import">10M</span>。</p>
          <p>为该项目加入自动化部署，部署时间由原来的10分钟减少到<span class="tag-block-import">3s</span>，避免手工操作错误，极大提高了部署效率。
          </p>
          <p>解决git效率问题，项目拉取、提交速度由原来的5s减少到<span class="tag-block-import">1s</span>完成，提高开发体验。
          </p>
        </div>
      </div>
    </el-card>
    <div class="project3-box">
      <el-card class="box-card project ">
        <div slot="header" class="clearfix">
          <span class="title">项目三：Relax服务系统（pc端&手机端）</span>
          <span style="float: right; padding: 3px 0" type="text">2017年07月 - 2021年09月</span>
        </div>
        <div class="text item">
          <p>Relax是一个面向政府、医疗、教育等不同企业的B端全流程处理系统，可以帮助企业进行事务处理、资产管理、人
            员管理、分析决策等</p>
          <div class="flex-row-space"><p>手机端</p><span>2020年 - 2021年</span></div>
          <div class="flex-row-start">
            <span>技术选型</span>：
            <div class="tag-block"><img src="../assets/picture/react.jpg" class="litter-img2">react</div>
            <div class="tag-block">react-redux</div>
            <div class="tag-block">redux-saga</div>
            <div class="tag-block">react-hooks</div>
          </div>
          <p>项目成果和亮点</p>
          <div class="result" style="margin-bottom: 20px">
            <p>使用rem完美解决了不同机型的布局兼容性问题，提高了用户的整体体验。</p>
            <p>使用<span class="tag-block-import">断点续传思</span>路重构了大文件上传功能，并添加了安全校验。</p>
            <p>二次封装weui的page组件，解决苹果<span class="tag-block-import">手机适配</span>问腿</p>
            <p class="">不同场景、不同数据下，动态完成复杂表格的渲染，单元格、表头合并，帮助用户更直观地了解资产情况。</p>
          </div>
          <div class="flex-row-space"><p>pc端</p><span>2017年 - 2021年</span></div>
          <div class="flex-row-start">
            <span>技术选型</span>：
            <div class="tag-block"><img src="../assets/tool_img/js.png" class="litter-img2">Javascript</div>
            <span class="tag-block"><img src="../assets/tool_img/requirejs.jpg" class="litter-img2">RequireJs</span>
            <span class="tag-block"><img src="../assets/tool_img/jq.jpg" class="litter-img2">JQuery</span></div>
          <p>项目成果和亮点</p>
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
    </div>
    <el-card class="box-card project">
      <div slot="header" class="clearfix">
        <span class="title">最近在学</span>
      </div>
      <div class="flex-row-start">
        <img src="../assets/picture/react.jpg" class="litter-img">
        <span>react hook</span>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'resumePage',
  data() {
    return {
      tableData: [
        {name: '广联达科技股份有限公司', postion: '高级前端开发工程师', date: '2021.12 - 至今', img: 'glodon'},
        {name: '北京星网锐捷网络技术有限公司', postion: '前端开发工程师', date: '2017.07 - 2021.09', img: 'ruijie'},
        {name: '天津工业大学', postion: '软件工程专业', date: '2015.09 - 2017.07', img: 'gd'},
        {name: '天津大学', postion: '计算机信息管理专业', date: '2012.09 - 2015.07', img: 'td'},
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

  .project3-box {
    page-break-before: always;
  }
  .project3-box::before {
    content: "";
    display: block;
    height: 10px; /* 设置留白的高度 */
  }

}

.litter-img {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 10px;
}

.litter-img2 {
  width: 16px;
  height: 16px;
  border-radius: 10px;
  margin-right: 5px;
}

.content {
  height: 100%;
  width: 794px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;

  p {
    margin: 10px 0 10px 0;
    line-height: 23px;
  }

  .title {
    font-weight: 700;
  }

  a {
    color: #303133;
    text-decoration: none
  }

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

  .result p {
    border-bottom: 1px solid #EBEEF5;
    line-height: 35px;
  }

  .result p::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: $grayColor;
    margin-right: 5px;
  }

  .icon {
    margin-right: 8px;
  }
}

.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flex-row-center {
  display: flex;
  justify-content: center;
}

.flex-row-start {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.flex-row-space {
  display: flex;
  justify-content: space-between;
}

.tag-block {
  border: 1px solid #EAEAEAEA;
  padding: 0 7px 0 7px;
  border-radius: 16px;
  display: inline-flex;
  margin-right: 5px;
  height: 20px;
  line-height: 20px;
  justify-content: center;
  align-items: center;
}

.tag-block-import {
  color: #EA3331;
  background: rgba(234, 51, 49, 0.1);
  padding: 0 6px 0 6px;
  border-radius: 4px;
  display: inline-block;
  height: 20px;
  line-height: 20px;
}

</style>
<style lang="scss">
$grayColor: #afb8c1;
.el-card.is-always-shadow {
  box-shadow: none !important;
}

.el-card {
  margin: 20px;
  text-align: left;
  border: 1px solid #ebeef5 !important;
}

.el-card__body, .el-main {
  padding-top: 10px !important;
}

.el-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1) !important;
}

/*.el-card__header {
  border-bottom: 1px solid $grayColor !important;
}*/

.el-table .cell {
  display: flex !important;
  color: #303133;
}

.el-table__cell {
  padding: 8px 0 !important;
}

.skill-table {
  .cell {
    padding-right: 0 !important;
  }

  .el-table__row {
    td:nth-child(2) {
      .cell {
        padding-left: 0 !important;
      }
    }

  }
}
</style>
