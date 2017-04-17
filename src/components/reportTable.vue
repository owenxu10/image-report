<template>
  <div id="reportTable">
    <el-card class="box-card">
      <div id="selectType">
        <el-checkbox-group v-model="checkedTypes" @change="handleCheckedTypesChange">
          <el-checkbox v-for="type in types" :label="type" :key="type.id">{{type}}</el-checkbox>
        </el-checkbox-group>
      </div>

      <div class="line"></div>

      <div id="list">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column label="报告类型" prop="_type" width="100">
          </el-table-column>
          <el-table-column label="报告内容" prop="_source.report">
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template scope="scope">
              <el-button @click="handleClick(scope.row._id,scope.row._source.report)" type="text" size="small">分析

              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <div class="line"></div>

        <div class="pagniation">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page=currentPage
            :page-size="10"
            layout="prev, pager, next, total"
            :total=total>
          </el-pagination>
        </div>
      </div>
    </el-card>


  </div>
</template>

<script>
  import api from '../api/api'
  const Options = ['CT', 'MR']
  export default {
    name: 'reportTable',
    data: function () {
      return {
        checkedTypes: ['CT', 'MR'],
        types: Options,
        tableData: [],
        currentPage: 1,
        total: 0,
        type: 'ALL'
      }
    },
    mounted () {
      this.getList(this.type, this.currentPage)
    },
    methods: {
      getList (type, page) {
        api.getList(type, page)
          .then(res => {
            this.total = res.data['total']
            this.tableData = res.data['hits']
          })
          .catch(err => {
            console.log(err)
          })
      },
      handleCheckedTypesChange (type) {
        this.currentPage = 1
        if (type.length === 2) {
          this.type = 'ALL'
          this.getList(this.type, this.currentPage)
        } else if (type.length === 1) {
          this.type = type[0]
          this.getList(this.type, this.currentPage)
        } else {
          this.tableData = []
          this.$emit('handleClick', '点击左侧表格中的分析按钮，<b>显示详细分析</b>')
        }
      },
      handleCurrentChange (value) {
        this.getList(this.type, value)
      },
      handleClick (id, content) {
        console.log(id)
        api.getDetail(id, content)
          .then(res => {
            this.$emit('handleClick', res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
  .pagniation {
    text-align: center;
  }

  .line {
    height: 1px;
    margin: 15px;
  }
</style>

