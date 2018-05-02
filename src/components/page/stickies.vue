<style lang="scss">
  .stickies {
    font-size: .16rem;
    .ana {
      margin: 0 auto;
      width: 90%;
      padding-top: 1em;
      > .content {
        display: block;
        text-align: left;
        font-family: cursive, serif;
        font-weight: 600;
        font-size: .18rem;
        &::before {
          content: '“';
        }
        &::after {
          content: '”';
        }
      }
      > .author {
        display: block;
        text-align: right;
        font-size: .12rem;
        &::before {
          content: '—— ';
        }
      }
    }
    .body {
      padding: 1em 5%;
    }
    .item {
      float: left;
      width: 25%;
      padding: .07rem;
    }
    .card {
      box-shadow: 1px 1px 6px rgba(0,0,0,.1);
      .img {
        padding-top: 30.9%;
        background: center / cover;
      }
      p.title {
        padding: 0 1em;
        text-align: left;
        line-height: 2;
        font-weight: 600;
        font-size: .18rem;
        font-family: cursive, serif;
      }
      p.intro {
        font-size: .13rem;
        padding: 0 1em;
        text-align: left;
        line-height: 1.5;
        font-family: cursive, serif;
      }
    }
  }
  @media only screen and (max-width: 500px) {}
</style>

<template>
  <main class="stickies">
    <div class="ana">
      <span class="content">年轻人不应该害怕走弯路，因为只有这样，你才能打开通往新世界的大门。</span>
      <span class="author">美国哲学家 比利·海灵顿</span>
    </div>
    <div class="body clearfix">
      <div class="item" v-for="i in 9">
        <div class="card">
          <div class="img"></div>
          <p class="title">死神小学生</p>
          <p class="intro">一个被死神附身的高中生被喂药后身体变小然后伪装成小学生不断杀人的故事</p>
          <div><span>最新话: </span><span>当前: 0</span></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import $ from '@/libs/ajax';

  export default {
    data() {
      return {
        data: []
      };
    },
    methods: {
      updateData() {
        $.get('resource/game/list', {type: 4}, data => {
          this.data = data;
        });
      }
    },
    mounted() {
      this.updateData();
    }
  };
</script>