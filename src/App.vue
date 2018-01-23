<template>
  <div id="app">
    <Header title="Site of the Lord"/>
    <Container>
      <router-view/>
    </Container>
  </div>
</template>

<script>
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import Container from '@/components/shared/Container'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Container
  }
}
</script>

<style>
#app {
  overflow: hidden;
}
</style>
