<template>
    <div id="reportTable">
        <el-card class="box-card">
            <div id="selectType">
                <el-checkbox-group v-model="checkedTypes" @change="handleCheckedTypesChange">
                    <el-checkbox v-for="type in types" :label="type">{{type}}</el-checkbox>
                </el-checkbox-group>
            </div>

            <div class="line"></div>

            <div id="list">
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            label="内容">
                        <template scope="scope">
                                        <span style="margin-left: 10px" @click="handleClick(scope.$index,scope.row)">
                                            {{ scope.row.name }}
                                        </span>
                        </template>
                    </el-table-column>
                </el-table>

                <div class="line"></div>

                <div class="pagniation">
                    <el-pagination
                            small
                            @current-change="handleCurrentChange"
                            :current-page="1"
                            layout="prev, pager, next"
                            :total="1000">
                    </el-pagination>
                </div>
            </div>
        </el-card>


    </div>
</template>

<script>
const Options = ['CT', 'MR']
export default {
  name: 'reportTable',
  data: function () {
    return {
      checkedTypes: ['CT', 'MR'],
      types: Options,
      tableData: [{
        name: '王小虎'
      }, {
        name: '王小虎'
      }, {
        name: '王小虎'
      }, {
        name: '王小虎'
      }]
    }
  },
  methods: {
    handleCheckedTypesChange (value) {
      console.log(value)
    },
    handleCurrentChange (value) {
      console.log(value)
    },
    handleClick (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped>
    .pagniation{
        text-align: center;
    }
    .line{
        height: 1px;
        margin: 15px;
    }
</style>

