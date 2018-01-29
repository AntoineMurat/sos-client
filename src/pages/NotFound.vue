<template>
  <div id="notFound-vue" class="center">
    <img :src="require('@/assets/img/gandalf.png')"><br>
    Désolé, page introuvable... mais tu devrais arrêter de gratter nos URL !
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
