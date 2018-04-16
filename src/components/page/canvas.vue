<template>
  <main class="canvas">
    <div class="sidebar">
      <div class="oo-menu">
        <p class="oo-menu-title"> <router-link :to="{name: 'canvas'}">Canvas</router-link> </p>
        <input type="checkbox" id="ck_general" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_general" class="oo-menu-group-title">
            <div>BaseDemo</div>
            <span class="oo-arrow"></span>
          </label>
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'canvas-music'}">Music</router-link> </li>
          </ul>
        </p>
      </div>
    </div>
    <router-view class="content"></router-view>
    <div class="clear-box"></div>
  </main>
</template>

<script>
  export default {
    data () {
      return {};
    }
  }
</script>

<style lang="scss">
  $borderColor: #ddd;
  .canvas {
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
    }
  }
</style>
