<style lang="scss">
  footer.oo-footer {
    font-size: 12px;
    line-height: 2;
    text-shadow: 0 -1px 1px hsla(0,0%,0%,.1);
    text-align: center;
    padding: 1em;
    > * {
      white-space: nowrap;
    }
    > a {
      color: #09f;
    }
    span {
      color: #f06;
      > a {
        color: #f60;
      }
    }
    .police {
      position: relative;
      &::before {
        content: "";
        position: relative;
        top: 4px;
        display: inline-block;
        width: 18px;
        height: 20px;
        background-image: url("../assets/police.png");
        background-repeat: no-repeat;
        background-size: 100%;
        margin: 0 2px 0 5px;
      }
    }
  }
</style>

<template>
  <footer class="oo-footer">
    <a href="http://www.beian.miit.gov.cn" target="_blank" class="red">浙ICP备16015127号</a>
    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602005267" target="_blank" class="police red">浙公网安备 33010602005267号</a>
    <span>Copyright©2015-2018 <a href="http://weibo.com/u/3887741159" target="_blank" class="azure">Shiro</a> All Rights Reserved</span>
  </footer>
</template>

<script>
  export default {}
</script>