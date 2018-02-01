<style lang="scss">
  $errorColor: #f56c6c;
  $forgiveColor: #67c23a;
  .o-list {
    &.border {
      border: 1px solid #ccc;
      border-radius: 4px;
      li {
        border-top: 1px solid #ccc;
      }
    }
    li {
      line-height: 2;
      padding: 0 .5em;
      &:first-child {
        border: 0;
      }
    }
    li.diamond,
    &.diamond li {
      &::before {
        content: '';
        display: inline-block;
        width: 5px;
        height: 5px;
        background: #777;
        transform: rotate(45deg);
        vertical-align: middle;
        margin-right: 5px;
        margin-top: -3px;
        border: 2px solid #777;
        border-color: #111 #444 #666 #999;
      }
      &.error {
        color: $errorColor;
        &::before {
          background: $errorColor;
          border-color: darken($errorColor, 20%) darken($errorColor, 10%) lighten($errorColor, 10%) lighten($errorColor, 20%);
        }
      }
      &.forgive {
        color: darken($forgiveColor, 8%);
        &::before {
          background: $forgiveColor;
          border-color: darken($forgiveColor, 15%) darken($forgiveColor, 8%) lighten($forgiveColor, 10%) lighten($forgiveColor, 20%);
        }
      }
    }
  }
</style>

<template>
  <ul class="o-list">
    <li v-for="(l, i) in list" v-html="l.text || l" :class="[l.type || type, l.status || status]"></li>
    <li v-if="list.length === 0">No Data</li>
  </ul>
</template>

<script>
  export default {
    props: ['list', 'type', 'status']
  };
</script>