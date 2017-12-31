<template>
  <li><a :href="link">{{ title }}</a></li>
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
