<template>
  <main class="about">
    <o-list :list="backlog" class="border" type="diamond" status="forgive"></o-list>
  </main>
</template>

<script>
  import $ from '@/libs/ajax';

  export default {
    data() {
      return {
        backlog: []
      };
    },
    mounted() {
      $.get('resource/game/list', {type: 3}, data => {
        if(Array.isArray(data)) {
          this.backlog = data;
        }
      });
    }
  };
</script>

<style lang="scss">
  .about {
    padding: 1em 2em;
    font-size: .16rem;
    text-align: left;
  }
</style>