<template>
  <div id="app">
    <Header title="La Lord"/>
    <main :class="{onHome: $route.path == '/'}">
      <Container>
        <router-view/>
      </Container>
    </main>
    <Footer/>
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
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.onHome {
  background: url(http://chtigres.fr/wp-content/uploads/2017/02/13022017-DSC_4986.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
}

main {
  flex: 1 0 auto;
}
</style>
