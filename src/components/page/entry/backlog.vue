<style lang="scss">
  .backlog {
    .item {
      float: left;
      width: 33.33%;
      padding: 0;
      margin: 0 0 .1rem;
      padding: 0 .05rem;
      font-size: .14rem;
      line-height: 2.5;
      border-radius: 4px;
      color: #333;
      border: 1px solid transparent;
      &.full {
        width: 100%;
      }
    }
  }
</style>

<template>
  <div class="backlog">
    <h2><span>Backlog</span></h2>
    <div class="clearfix">
      <div class="item">
        <o-textarea v-model="params.a" label="Title" type="single"></o-textarea>
      </div>
      <div class="item">
        <o-input v-model="params.b" label="Status" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="params.c" label="Type" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="params.d" label="Level" type="single"></o-input>
      </div>
      <div class="item">
        <o-input v-model="params.d" label="Level" type="single"></o-input>
      </div>
    </div>
    <div class="clearfix">
      <div class="item">
        <o-button @click="save">保存</o-button>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from '@/libs/ajax';

  function getEmpty() {
    return {
      type: 3,
      a: '',
      b: '',
      c: '',
      d: ''
    };
  }

  export default {
    data() {
      return {
        params: getEmpty()
      };
    },
    methods: {
      save() {
        $.post('resource/game/add', this.params, data => {
          if(data == '1') {
            this.$msg.success('新增成功');
            this.ship = getEmpty();
          }else {
            this.$msg.error('添加失败');
          }
        });
      }
    }
  }
</script>
