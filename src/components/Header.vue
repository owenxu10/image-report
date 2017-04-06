<template>
    <div id="AppHeader" class="header">
        <div class="logo"></div>
        <div class="contactUs">
            <a href="https://www.synyi.com/">{{contactUs}}</a>
        </div>
    </div>

</template>

<script>
export default {
  name: 'AppHeader',
  data: function () {
    return { contactUs: '联系我们' }
  }
}
</script>
<style scoped>
.header {
    width: 100%;box-shadow: black 0 -1px 3px;
    height:80px;
    margin-bottom:20px;
}

.logo {
    display: inline-block;
    float:left;
    width: 150px;
    height: 80px;
    overflow: hidden;
    margin-left: 20px;
    background: url("../assets/logo.png");
    background-size: contain;
}
.contactUs{
    float:right;
    margin:30px;
}
</style>
