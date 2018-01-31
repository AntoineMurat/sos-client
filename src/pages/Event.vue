<template>
  <div class="slider">
    <ul class="slides">
      <li>
        <img src="static/img/affiche-A4-0.jpg"> <!-- random image -->
       <div class="caption center-align">
         <h3>This is our big Tagline!</h3>
         <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
       </div>
      </li>
      <li>
        <img src="static/img/affiche-A4-1.jpg"> <!-- random image -->
       <div class="caption center-align">
         <h3>This is our big Tagline!</h3>
         <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
       </div>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Event',
  mounted () {
    // $('.carousel.carousel-slider').carousel({fullWidth: true})
    $(document).ready(function () {
      $('.slider').slider()
    })
  }
}
</script>

<style scoped>

</style>
