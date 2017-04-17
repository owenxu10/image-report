<template>
  <div id="resultBoard">
    <el-card class="box-card">
      <span v-html="prefix" v-show="!report"></span>

      <span v-for="r in report">

        <span class="text" v-html="r.context"></span>

        <el-popover
          v-if="r.type == 'text'"
          placement="top-start"
          v-bind:title="r.title"
          width="200"
          trigger="hover"
          v-bind:content="r.desc">
          <el-button type="text" class="text" slot="reference">{{r.keyword}}</el-button>
        </el-popover>

        <el-button v-if="r.type == 'highlight'" type="text" class="text" slot="reference">{{r.keyword}}</el-button>

        <el-popover
          v-if="r.type == 'pic'"
          placement="right"
          width="600"
          trigger="hover">
          <img src="../assets/spine.jpg" width="600" class="image">
        <el-button type="text" class="text" slot="reference">{{r.keyword}}</el-button>
        </el-popover>

      </span>

    </el-card>
    <div class="line"></div>
    <el-card class="box-card" >
      *此处为调试显示*
      <div class="line" v-show="keywords"></div>
      <div v-for="word in keywords" v-show="keywords">
        {{word}}
      </div>

    </el-card>
    <div>

    </div>
  </div>
</template>

<script>
  import ElPopover from '../../node_modules/element-ui/packages/popover/src/main'

  export default {
    components: {ElPopover},
    name: 'resultBoard',
    title: 'popover1',
    props: ['report', 'prefix', 'keywords']
  }
</script>

<style scoped>

  .text {
    font-size: 20px;
  }

  .line {
    height: 1px;
    margin: 15px;
  }
</style>
