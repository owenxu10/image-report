<template>
    <div id="resultBoard">
        <el-card class="box-card">
            <slot>
                This will only be <mark>displayed </mark>if there is no content
                to be distributed.
              </slot>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'resultBoard'
}
</script>
