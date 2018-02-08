<style lang="scss">
  .layout {
    p {
      svg {
        height: 1.5em;
        vertical-align: sub;
      }
      a {
        color: inherit;
      }
    }
  }
</style>

<template>
  <div class="layout">
    <h2><span>Layout</span> <span class="chinese">自定义布局</span></h2>
    <p>提供用户自定义页面布局.</p>
    <h3><span>Download</span></h3>
    <p><a href="https://github.com/barusu/web/blob/master/src/components/page/components/layout.vue" target="blank"><o-svg type="github"></o-svg>GayHub</a></p>
    <h3><span>Tip</span></h3>
    <p>这个是iframe版本的精简版,只保留了位置和大小的修改功能.</p>
    <h3><span>Use</span></h3>
    <p>由于需要保持位置信息到数据库,需要Ajax库的支持,如使用其它库需支持get, post, delete三个快捷请求方式,参数形式类似Jquery的get.</p>
    <p>为了减少依赖删除了内部的相关组件引用,内部只保留了保存按钮,开启编辑、外边框与列表边框的设置改由props传参设置.</p>
    <p>
      <o-button type="info" @click="isEdit = true">修改</o-button>
      <o-checkbox v-model="config.borderType">边框</o-checkbox>
      <o-checkbox v-model="config.listType">列表间隙</o-checkbox>
    </p>
    <o-layout id="test" :isEdit="isEdit" :config="config" :items="['oUpload', 'oUpload', 'oUpload', 'oUpload']" @saved="isEdit = false" host="http://192.68.68.77:8888/rest/v1/"></o-layout>
    <h3><span>API</span></h3>
    <o-doc :list="doc"></o-doc>
    <h3><span>Update</span></h3>
    <o-log :log="log"></o-log>
  </div>
</template>

<script>
  import oLayout from '@/components/page/components/layout.vue';
  import vColor from '@/components/page/components/color';

  export default {
    components: {oLayout, vColor},
    data() {
      return {
        isEdit: false,
        config: {
          borderType: false,
          listType: true
        },
        height: 500,
        doc: [
          {property: 'id', description: '数据归属标识,如需让每个用户都能独立可修改各自的布局,传入用户的唯一标识即可（不可为空）', type: 'String', default: ''},
          {property: 'host', description: '保存、修改接口的服务器地址,未传入会使用相对路径发送请求,所以也是不可为空（格式:http://192.68.68.77:8888/rest/v1/）', type: 'String', default: ''},
          {property: 'isEdit', description: '控制页面布局是否可编辑', type: 'Boolean', default: 'false'},
          {property: 'config', description: '边框控制, borderType: 外部边框, listType: 内容块之间的边框', type: 'Object', default: '{borderType: false, listType: false }'},
          {property: 'items', description: '内容块组件的名字数组, 组件需先全局注册或者在layout.vue内进行局部注册（不可为空）', type: 'Array', default: ''}
        ],
        log: [
          {
            date: '2017-02-08',
            log: [
              {text: '.vue版本提前修改完成', status: 'forgive'},
              {text: '同步iframe版中修正的内容块的宽度取整产生的积累性误差', status: 'forgive'},
              {text: '同步iframe版中修正的内容块的宽度与偏移计算的基准数不同产生的偏移', status: 'forgive'}
            ]
          }
        ]
      };
    },
    methods: {
      resize() {
        if(this.$refs.iframe) {
          this.height = this.$refs.iframe.contentDocument.body.clientHeight || this.$refs.iframe.contentDocument.documentElement.scrollHeight;
        }
        setTimeout(this.resize, 500);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.resize();
      });
    }
  }
</script>
