<template>
  <div id="app">
    <o-header></o-header>
    <router-view/>
  </div>
</template>

<script>
  import header from '@/components/header';

  export default {
    name: 'app',
    components: {
      oHeader: header
    }
  }
</script>

<style>
  html {
    font-size: 100px;
  }
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
    color: #2c3e50;
    background: #fafafa;
  }
  /* reset css */
  html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, a, cite, img, sub, sup, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    border: 0;
    margin: 0;
    padding: 0;
    font-weight: normal;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, main {
    display: block;
  }
  button {
    outline: none;
  }
  ol, ul {
    margin: 0;
    padding: 0;
  }
  ol, ul, li {
    list-style: none;
  }
  i, em {
    font-style: normal;
  }
  blockquote {
    quotes: none;
  }
  blockquote:before, blockquote:after {
    content: '';
    content: none;
  }
  a {
    outline: none;
    text-decoration: none;
  }
  input, textarea{
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    outline: none;
    border: 0;
    margin: 0;
    padding: 0;
  }
  select, option{
    font-family: inherit;
  }
  *::before,
  *::after,
  * {
    box-sizing: border-box;
  }
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
    float: none;
    *zoom: 1;
  }
  .clear-box {
    display: table;
    clear: both;
    float: none;
    *zoom: 1;
  }
  @keyframes rotateY {
    from {transform: rotateY(0deg);}
    to   {transform: rotateY(360deg);}
  }
  @keyframes moveBG {
    from {background-position: 0% 0%;}
    to   {background-position: -400% -200%;}
  }
  @keyframes slantMove {
    0% {transform: translate3d(0, 0, 0);}
    25% {transform: translate3d(-5%, -50%, 0);}
    50% {transform: translate3d(-30%, -65%, 0);}
    75% {transform: translate3d(-55%, -35%, 0);}
    100%   {transform: translate3d(-75%, -50%, 0);}
  }
</style>

<!-- chart style -->
<style lang="scss">
  .o-chart {
    font-size: .14rem;
    text-align: left;
    .chart-content {
      height: 100%;
      padding: .5em 1em;
      background: #fff;
    }
    .chart-head {
      text-align: left;
      height: 3em;
      .title {
        display: inline-block;
        font-weight: 600;
        line-height: 3;
        text-indent: 1em;
      }
    }
    .chart-wrapper {
      height: 100%;
      margin-top: -3em;
      padding-top: 3em;
      .chart {
        height: 100%;
      }
    }
    &.no-title {
      .chart-head {
        display: none;
      }
      .chart-wrapper {
        margin: 0;
        padding: 0;
      }
    }
  }
</style>

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
  .oo-menu-item a,
  .oo-menu-title {
    height: .4rem;
    line-height: .4rem;
    margin: 0 0 .02rem;
    user-select: none;
  }
  .oo-menu-title {
    font-size: .18rem;
    > a {
      display: block;
      padding: 0 .16rem 0 .3rem;
      color: #333;
      transition: all .34s;
      &:hover {
      color: #50bfff;
      }
    }
  }
  .oo-menu-group-title {
    position: relative;
    display: block;
    font-size: .14rem;
    padding: 0 .16rem 0 3em;
    color: #9c9c9c;
  }
  .oo-menu-item a {
    display: block;
    padding: 0 .16rem 0 .4rem;
    overflow: hidden;
    transition: height .34s ease-in-out, margin .34s linear;
    color: #444;
    transition: all .34s;
    .key {
      // color: #999;
      padding-left: 1em;
      font-size: 12px;
      opacity: .5;
    }
    &:hover {
      color: #50bfff;
    }
    &.router-link-active {
      background: lighten(#50bfff, 25%);
      color: darken(#50bfff, 20%);
      border-right: 2px solid #50bfff;
      box-shadow: 1px 0 0 0 #50bfff;
    }
  }
  .oo-menu-item-list {
    > .oo-menu-item a {
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
    .oo-menu-item a {
      height: 0;
      margin-bottom: 0;
    }
  }
</style>