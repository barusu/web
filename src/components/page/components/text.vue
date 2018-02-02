<style lang="scss">
  .text {
  }
</style>

<template>
  <div class="text">
    <h2><span>Text</span> <span class="chinese">文本</span></h2>
    <p>文本上的一些修饰.</p>
    <h3><span>Tooltip</span></h3>
    <p><o-text title="体は剣で出来ている">I am the bone of my sword.</o-text></p>
    <p><o-text title="血潮は鉄で 心は硝子">Steel is my body,and fire is my blood.</o-text></p>
    <p><o-text title="几たびの戦场を越えて不败">I have created over a thousand blades.</o-text></p>
    <p><o-text title="ただの一度も败走はなく">Unknown to Death.</o-text></p>
    <p><o-text title="ただの一度も理解されない">Nor known to Life.</o-text></p>
    <p><o-text title="彼の者は常に独り 剣の丘で胜利に酔う">Have withstood pain to create many weapons.</o-text></p>
    <p><o-text title="故に、生涯に意味はなく">Yet, those hands will never hold anything.</o-text></p>
    <p><o-text title="その体は、きっと剣で出来ていた">So as I pray, Unlimited Blade Works.</o-text></p>
    <h3><span>Color</span></h3>
    <p><o-text>Not sure if you know this</o-text></p>
    <p><o-text>But when we first met</o-text></p>
    <p><o-text hidden>I got so nervous I couldn't speak</o-text></p>
    <p><o-text transparent title="你知道的太多了">In that very moment</o-text></p>
    <p><o-text conceal>I found the one and</o-text></p>
    <p><o-text>My life had found this missing piece</o-text></p>
    <p><o-text>So as long as I live I love you</o-text></p>
    <p><o-text>Will have and hold you</o-text></p>
    <p><o-text>You look so beautiful in white</o-text></p>
    <p><o-text>And from now to my very last breathe</o-text></p>
    <p><o-text>This day I'll cherish</o-text></p>
    <p><o-text>You look so beautiul in white</o-text></p>
    <p><o-text>Tonight</o-text></p>
    <p><o-text>What we have is timeless</o-text></p>
    <p><o-text>My love is endless</o-text></p>
    <p><o-text>And with this dream I</o-text></p>
    <p><o-text>Say to the world</o-text></p>
    <p><o-text>You're my every reason you're all that I believe in</o-text></p>
    <p><o-text>With all my heart I mean every word</o-text></p>
    <p><o-text>So as long as I live I love you</o-text></p>
    <p><o-text>Will have and hold you</o-text></p>
    <p><o-text>You look so beautiful in white</o-text></p>
    <p><o-text>And from now to my very last breath</o-text></p>
    <p><o-text>This day I'll cherish</o-text></p>
    <p><o-text>You look so beautiful in white</o-text></p>
    <p><o-text>Tonight</o-text></p>
    <p><o-text>oooh oh</o-text></p>
    <p><o-text>You look so beautiful in white</o-text></p>
    <p><o-text>Na na na na</o-text></p>
    <p><o-text>So beautiful in white</o-text></p>
    <p><o-text>Tonight</o-text></p>
    <p><o-text>And if our daughter is what our future holds</o-text></p>
    <p><o-text>I hope she has your eyes</o-text></p>
    <p><o-text>Finds love like you and I did</o-text></p>
    <p><o-text>Yeah, if she falls in love, I will let her go</o-text></p>
    <p><o-text>I'll walk her down the aisle</o-text></p>
    <p><o-text>She looks so beautiful in white</o-text></p>
    <p><o-text>You look so beautiful in white</o-text></p>
    <p><o-text>So as long as I live I love you</o-text></p>
    <p><o-text>Will have hold you</o-text></p>
    <p><o-text>You look so beautiful in white</o-text></p>
    <p><o-text>And from now to my very last breath</o-text></p>
    <p><o-text>This day I'll cherish</o-text></p>
    <p><o-text>You look so beautiful in white</o-text></p>
    <p><o-text>Tonight</o-text></p>
    <p><o-text>You look so beautiful in white</o-text></p>
    <p><o-text>Tonight</o-text></p>
    <h3><span>API</span></h3>
    <o-doc :list="doc"></o-doc>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        doc: [
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
