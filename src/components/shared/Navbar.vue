<template>
  <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container">
      <router-link :to="'/'" id="logo-container" href="/" class="brand-logo">
        <slot></slot>
      </router-link>
      <ul class="right hide-on-med-and-down">
        <NavLink v-for="navlink in navlinks" :key="navlink.link" :title="navlink.title" :link="navlink.link"/>
      </ul>

      <ul id="nav-mobile" class="side-nav">
        <NavLink v-for="navlink in navlinks" :key="navlink.link" :title="navlink.title" :link="navlink.link"/>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
  </nav>
</template>

<script>
import NavLink from './NavLink'
import $ from 'jquery'
import '@/assets/js/materialize.js'

export default {
  name: 'Navbar',
  components: {
    NavLink
  },
  mounted () {
    $('.button-collapse').sideNav()
  },
  data () {
    return {
      navlinks: [
        {
          title: 'Team',
          link: '/team'
        },
        {
          title: 'SOS',
          link: '/sos'
        }
      ]
    }
  }
}
</script>
