<style lang="scss">
  .text {
  }
</style>

<template>
  <div class="text">
    <h2><span>Text</span> <span class="chinese">文本</span></h2>
    <p>给文本上添加一些效果.</p>
    <h3><span>Tooltip</span></h3>
    <p>[title = "String"] 有点类似于title的效果,hover时会出现提示信息.</p>
    <h5><o-text title="静夜思">A Tranquil Night</o-text></h5>
    <p><o-text title="床前明月光">Before my bed a pool of night</o-text></p>
    <p><o-text title="疑是地上霜">Can it be hoarfrost on the ground</o-text></p>
    <p><o-text title="举头望明月">Looking up, I find the moon bright</o-text></p>
    <p><o-text title="低头思故乡">Bowing, In homesickness I‘m drowned</o-text></p>
    <h3><span>Color & Type</span></h3>
    <p>为了方便统一修改弄了几个情景类型,以及几个视觉上隐藏文字的样式.</p>
    <p><o-text conceal>时光静好 与君语</o-text> [conceal] 涂黑的文字,hover或选中时即可看到,有默认的Tooltip(你知道的太多了).</p>
    <p><o-text hidden>细水流年 与君同</o-text> [hidden] 涂黑的文字,可复制到其它地方查看.</p>
    <p><o-text transparent>繁华落尽 与君老</o-text> [transparent] 透明的文字,可复制到其它地方查看.</p>
    <p>[type = "title"] <o-text type="title">3月8日港区改建公告</o-text></p>
    <p>[type = "tag"] <o-text type="tag">年度游戏</o-text></p>
    <p>[type = "code"] <o-text type="code">String</o-text><o-text type="code">Number</o-text></p>
    <p>[type = "time"] <o-text type="time">2017-02-10</o-text></p>
    <h3><span>API</span></h3>
    <o-doc :list="doc"></o-doc>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        doc: [
          {property: 'type', description: '情景色: title/tag/time; 特殊样式: code', type: 'String', default: ''},
          {property: 'title', description: '添加额外的提示信息,会在鼠标移到文字上时显示', type: 'String', default: ''},
          {property: 'transparent', description: '透明文字,可复制但不可见', type: '存在即启用', default: ''},
          {property: 'hidden', description: '涂黑的文字,可复制但不可直接阅读', type: '存在即启用', default: ''},
          {property: 'conceal', description: '涂黑的文字,可复制且选中文字即可见', type: '存在即启用', default: ''}
        ]
      };
    },
    methods: {}
  }
</script>
