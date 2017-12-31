<template>
  <div id="notFound-vue" class="center">
    <img :src="imageFile"><br>
    Désolé, page introuvable... mais tu devrais arrêter de gratter nos URL !
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  computed: {
    imageFile () {
      return require('@/assets/img/notfound.png')
    }
  }
}
</script>
