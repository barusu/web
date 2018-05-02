<style lang="scss">
  .code {
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
  <div class="code">
    <h2><span>Code Snippet</span></h2>
    <div class="clearfix">
      <div class="item full">
        <o-input v-model="params.a" label="Title" skin="single"></o-input>
      </div>
      <div class="item full">
        <o-textarea v-model="params.f" label="Code"></o-textarea>
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
      type: 4,
      a: '',
      b: '',
      c: '',
      f: ''
    };
  }

  export default {
    data() {
      return {
        data: [],
        params: getEmpty()
      };
    },
    methods: {
      save() {
        $.post('resource/game/add', this.params, data => {
          if(data == '1') {
            this.$msg.success('新增成功');
            this.ship = getEmpty();
            this.update();
          }else {
            this.$msg.error('添加失败');
          }
        });
      },
      update() {
        $.get('resource/game/list', {type: 4}, data => {
          this.data = data;
        });
      }
    },
    mounted() {
      this.update();
    }
  }
</script>
