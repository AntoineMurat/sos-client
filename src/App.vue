<template>
  <div id="app">
    <Header title="Site of the Lord"/>
    <Container>
      <component :is="currentView"/>
    </Container>
  </div>
</template>

<script>
import Router from '@/router.js'

import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import Container from '@/components/shared/Container'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Container,
    ...Router.pages
  },
  computed: {
    currentRoute () {
      return window.location.pathname
    },
    currentView () {
      return Router.routes[this.currentRoute] || Router.notFound
    }
  }
}
</script>

<style>
#app {
  overflow: hidden;
}
</style>
