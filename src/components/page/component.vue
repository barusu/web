<template>
  <main class="component">
    <div class="sidebar">
      <div class="oo-menu">
        <p class="oo-menu-title"> <span>Component</span> </p>
        <input type="checkbox" id="ck_general" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_general" class="oo-menu-group-title">
            <div>General</div>
            <span class="oo-arrow"></span>
          </label>
        </p>
        <p class="oo-menu-item"> <router-link :to="{name: 'ui'}">UI</router-link> </p>
      </div>
    </div>
    <div class="content">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        <br>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
    </div>
    <div class="clear-box"></div>
    <o-footer class="footer"></o-footer>
  </main>
</template>

<script>
  import oFooter from '@/components/footer';
  export default {
    components: {
      oFooter
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- menu -->
<style lang="scss">
  .oo-menu {
    margin-top: 1em;
    text-align: left;
    font-family: Helvetica, Arial, sans-serif;
    font-size: .14rem;
  }
  .oo-menu-group-title,
  .oo-menu-item,
  .oo-menu-title {
    height: .4rem;
    line-height: .4rem;
    padding: 0 .16rem 0 .4rem;
    margin: 0 0 .02rem;
    user-select: none;
  }
  .oo-menu-title {
    font-size: .18rem;
    padding: 0 .16rem 0 .3rem;
  }
  .oo-menu-group-title {
    position: relative;
    display: block;
    font-size: .14rem;
    padding: 0 .16rem 0 3em;
    color: #9c9c9c;
  }
  .oo-arrow {
    position: absolute;
    top: 50%;
    right: .16rem;
    width: .1rem;
    height: .1rem;
    transform: translateY(-50%);
    // background: rgba(0,0,0,.2);
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: .04rem; left: .04rem;
      vertical-align: baseline;
      background: #333;
      width: .06rem;
      height: .02rem;
      border-radius: 2px;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin:16.7% 50%;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(135deg);
    }
  }
  .oo-ck:checked + .oo-menu-group {
    .oo-arrow {
      &::before {
      transform: rotate(-45deg);
      }
      &::after {
        transform: rotate(225deg);
      }
    }
  }
</style>

<style lang="scss">
  $borderColor: #ddd;
  .component {
    font-size: .16rem;
    .sidebar {
      min-height: 100px;
      width: 20%;
      float: left;
      box-shadow: 1px 0 0 0 $borderColor;
    }
    .content {
      overflow: hidden;
      border-left: 1px solid $borderColor;
    }
    .footer {
      border-top: 1px solid $borderColor;
    }
  }
</style>
