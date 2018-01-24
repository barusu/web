<template>
  <main class="entry">
    <div class="sidebar">
      <div class="oo-menu">
        <p class="oo-menu-title"> <span>Entry</span> </p>
        <input type="checkbox" id="ck_general" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_general" class="oo-menu-group-title">
            <div>Base Data</div>
            <span class="oo-arrow"></span>
          </label>
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'azurlane'}">Azurlane</router-link> </li>
            <li class="oo-menu-item"> <router-link :to="{name: 'bill'}">Bill</router-link> </li>
          </ul>
        </p>
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

<style lang="scss">
  $borderColor: #ddd;
  .entry {
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
