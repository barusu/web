<template>
  <table class="o-doc">
    <thead>
      <tr v-if="type === 'doc'">
        <th>Property <span class="cn">属性</span></th>
        <th>Description <span class="cn">说明</span></th>
        <th>Type <span class="cn">类型</span></th>
        <th>Default <span class="cn">默认值</span></th>
      </tr>
      <tr v-if="type === 'event'">
        <th>EventName <span class="cn">事件名称</span></th>
        <th>Description <span class="cn">说明</span></th>
        <th>CallbackParamet <span class="cn">回调参数</span></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in list" v-if="type === 'doc'">
        <td v-html="i.property"></td>
        <td is="o-td" :value="i.description"></td>
        <td is="o-td" :value="i.type"></td>
        <td is="o-td" :value="i.default || '—'"></td>
      </tr>
      <tr v-for="i in list" v-if="type === 'event'">
        <td v-html="i.eventName"></td>
        <td is="o-td" :value="i.description"></td>
        <td is="o-td" :value="i.callbackParamet || '—'"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      list: null,
      type: {
        type: String,
        default: 'doc'
      }
    },
    components: {
      oTd: {
        render(creatE) {
          const key = ['String', 'Boolean', 'Length', 'false', 'true', 'auto', 'disabled', 'Object', 'Integer', 'Function', 'Array', 'Color', 'Number', 'placeholder', 'base', 'class', 'value', 'input', 'single'];
          var v = this.value;
          key.forEach(i => {
            v = v.replace(new RegExp(i, 'g'), 'ø' + i + 'ø');
          });
          v = v.split('ø').map(i => {
            if(key.some(k => k == i)) {
              return creatE('span', {class: 'code'}, i);
            }
            return i;
          });
          return creatE('td', v);
        },
        props: ['value']
      }
    }
  };
</script>

<style lang="scss">
  table.o-doc {
    width: 100%;
    margin: 8px 0 16px;
    border: 1px solid #ebedf0;
    line-height: 1.5;
    font-size: .14rem;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    th, td {
      border: 1px solid #ebedf0;
      padding: 1em 1.5em;
      text-align: left;
    }
    th {
      white-space: nowrap;
      color: #678;
      font-weight: 500;
      background: rgba(0, 0, 0, 0.02);
      .cn {
        font-size: 12px;
        padding-left: .5em;
      }
    }
    td {
      color: #333;
      font-size: 12px;
      .code {
        margin: 0 1px;
        background: #f2f4f5;
        padding: .2em .4em;
        border-radius: 3px;
        font-size: 12px;
        border: 1px solid #eee;
      }
      &:first-child {
        font-weight: 500;
        width: 20%;
        font-size: inherit;
      }
      &:nth-child(3) {
        width: 22%;
      }
      &:last-child {
        width: 13%;
      }
    }
  }
</style>