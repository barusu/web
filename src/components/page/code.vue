<template>
  <main class="code-page">
    <div class="sidebar">
      <div class="oo-menu">
        <p class="oo-menu-title"> <router-link :to="{name: 'code'}">Code</router-link> </p>
        <input type="checkbox" id="ck_css" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_css" class="oo-menu-group-title">
            <div>Css</div>
            <span class="oo-arrow"></span>
          </label>
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'code_button'}">Button</router-link> </li>
            <li class="oo-menu-item"> <router-link :to="{name: 'code_text'}">Text</router-link> </li>
            <li class="oo-menu-item"> <router-link :to="{name: 'code_checkbox'}">Checkbox</router-link> </li>
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
      return {};
    }
  }
</script>

<style lang="scss">
  $borderColor: #ddd;
  .code-page {
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
        margin-top: .5em;
        .chinese {
          font-size: .22rem;
        }
        span {
          font-weight: 300;
        }
      }
      h5 {
        font-size: .16rem;
        font-family: Helvetica, Arial, sans-serif;
        line-height: 2.5;
        margin-top: .5em;
      }
      p {
        line-height: 1.5;
        color: #678;
        font-size: .14rem;
        margin-bottom: .5em;
        &.tip {
          display: inline-block;
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
      pre {
        font-size: .12rem;
        margin: 0;
      }
      .preview {
        margin-bottom: .5em;
      }
      .code-wrapper {
        margin-bottom: 1em;
        > div {
          width: 50%;
          float: left;
          height: 100%;
          padding: 10px 5px 0 0;
        }
        .code-control {
          float: right;
          font-weight: 900;
          margin-right: .5em;
          cursor: pointer;
          span {
            font-weight: inherit;
            opacity: 0;
          }
        }
        .code-control-ck:checked + div {
          .code-control span {
            opacity: 1;
          }
          .code-head {
            border-radius: 2px 2px 0 0;
          }
          pre {
            height: 42em;
            &.m {
              height: 24em;
            }
            &.s {
              height: 11em;
            }
          }
        }
      }
      .code-head {
        font-weight: 600;
        padding: .5em;
        margin: 0;
        background: #41423d;
        border-radius: 2px;
        .svg-icon {
          vertical-align: top;
          height: 1.5em;
        }
        &.html {
          color: #e44e24;
        }
        &.scss {
          color: #cf6499;
        }
      }
      pre {
        height: 0em;
        border-radius: 0 0 2px 2px;
        overflow: hidden;
        transition: height 340ms;
        code {
          height: 100%;
          overflow: auto;
        }
      }
    }
    .footer {
      border-top: 1px solid $borderColor;
    }
  }
</style>
