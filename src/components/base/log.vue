<template>
  <div class="o-log">
    <div v-for="l in log">
      <o-text type="time" class="date">{{l.date}}</o-text>
      <o-list class="diamond" :list="l.log"></o-list>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['log']
  };
</script>

<style lang="scss">
  .o-log {
    > div {
      position: relative;
      padding-left: 6em;
      margin-bottom: .5em;
      font-size: 12px;
    }
    .date {
      position: absolute;
      left: 0; top: 3px;
    }
    p {
      font-size: 12px;
      margin: 0;
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
    }
  }
</style>