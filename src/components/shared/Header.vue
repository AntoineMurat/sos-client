<template>
  <div class="header">
    <Navbar>{{ title }}</Navbar>
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'Header',
  components: {
    Navbar
  },
  props: {
    title: {
      default: 'Default title.'
    }
  }
}
</script>