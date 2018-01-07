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
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'color'}">Color</router-link> </li>
            <li class="oo-menu-item"> <router-link :to="{name: 'button'}">Button</router-link> </li>
          </ul>
        </p>
        <input type="checkbox" id="ck_feedback" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_feedback" class="oo-menu-group-title">
            <div>Feedback</div>
            <span class="oo-arrow"></span>
          </label>
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'message'}">Message</router-link> </li>
          </ul>
        </p>
        <p class="oo-menu-item"> <router-link :to="{name: 'ui'}">UI</router-link> </p>
      </div>
    </div>
    <router-view class="content"></router-view>
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
    label {
      cursor: pointer;
    }
  }
  .oo-menu-group-title,
  .oo-menu-item,
  .oo-menu-title {
    height: .4rem;
    line-height: .4rem;
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
  .oo-menu-item {
    padding: 0 .16rem 0 .4rem;
    overflow: hidden;
    transition: height .34s ease-in-out, margin .34s linear;
    > a {
      color: #444;
    }
  }
  .oo-menu-item-list {
    > .oo-menu-item {
      padding-left: .6rem;
    }
  }
  .oo-arrow {
    position: absolute;
    top: 50%;
    right: .16rem;
    width: .1rem;
    height: .1rem;
    transform: translateY(-50%);
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: .04rem; left: .04rem;
      vertical-align: baseline;
      background: #666;
      width: .06rem;
      height: .02rem;
      border-radius: 2px;
      transition: all 0.34s cubic-bezier(0.645,0.045,0.355,1);
      transform-origin:16.7% 50%;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(135deg);
    }
  }
  .oo-ck {
    position: absolute;
    clip: rect(0,0,0,0);
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
    .oo-menu-item {
      height: 0;
      margin-bottom: 0;
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
      text-align: left;
      padding: 1em 2em;
      h2 {
        font-size: .28rem;
        font-family: Helvetica, Arial, sans-serif;
        line-height: 2.5;
        .chinese {
          font-size: .26rem;
        }
      }
      h3 {
        font-size: .24rem;
        font-family: Helvetica, Arial, sans-serif;
        line-height: 2.5;
        margin-top: 1em;
        .chinese {
          font-size: .22rem;
        }
        span {
          font-weight: 300;
        }
      }
      p {
        line-height: 1.5;
        color: #678;
        font-size: .14rem;
        margin-bottom: 1em;
        &.tip {
          display: inline-block;
          margin: 0;
          line-height: 1;
          border-radius: 1px;
          background: #fdbc40;
          box-shadow: 0 0 0 0.5em #fdbc40;
          font-size: 12px;
          color: #fff;
        }
        .keyword {
          color: #ff3102;
        }
      }
    }
    .footer {
      border-top: 1px solid $borderColor;
    }
  }
</style>
