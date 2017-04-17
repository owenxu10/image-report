<template>
  <div id="content">
      <h1 class="title">{{title}}</h1>
  <div class="content">
    <el-row :gutter="20">
      <el-col :xs="22" :sm="13" :md="13" :offset="1">
        <report-table v-on:handleClick="selectReport"></report-table>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8">
        <result-board v-bind:report=report v-bind:prefix=prefix v-bind:keywords=keywords></result-board>
      </el-col>
    </el-row>
  </div>
  </div>
</template>

<script>
  import ResultBoard from './resultBoard'
  import ReportTable from './reportTable'

  export default {
    components: {ReportTable, ResultBoard},
    name: 'content',
    data: function () {
      return {
        title: '医学影像报告',
        report: '',
        prefix: '点击左侧表格中的分析按钮，<b>显示详细分析</b>',
        keywords: [],
        annotations: []
      }
    },
    methods: {
      selectReport: function (value) {
        if (value['result']) {
          this.report = value['result']
          this.keywords = value['keywords']
        } else {
//          this.prefix = value
          this.report = ''
          this.keywords = value['keywords']
        }
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 5rem;
  }

  .content {
    text-align: left;

  }


</style>
