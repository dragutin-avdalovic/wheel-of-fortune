<template>
  <div class="home">
      <PlayArea></PlayArea>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayArea from '@/components/PlayArea.vue'

export default {
  name: 'home',
  components: {
      PlayArea
  }
}
</script>
<style>
  @import url(http://fonts.googleapis.com/css?family=Changa+One);
</style>
