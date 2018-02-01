<template>
  <li :class="{active: $route.path == link}"><router-link :to="link">{{ title }}</router-link></li>
</template>

<script>

export default {
  name: 'NavLink',
  props: {
    link: {
      default: '#'
    },
    title: {
      default: 'Undefined link'
    }
  }
}
</script>

<style scoped>
li#enFaitNon {
  font-family: 'aniron';
}
</style>
