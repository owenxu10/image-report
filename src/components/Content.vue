<template>
    <div id="content" >
        <h1 class="title">{{title}}</h1>
        <div class="content">
            <el-row :gutter="24">
                <el-col :span="7" :offset="2">
                    <report-table></report-table>
                </el-col>
                <el-col :span="14">
                    <result-board></result-board>
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
      title: '医学影像报告'
    }
  }
}
</script>

<style scoped>
    .title {
        font-size: 5rem;
    }

    .content{
        text-align: left;
    }

</style>
