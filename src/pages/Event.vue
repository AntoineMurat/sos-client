<template>
<div class="container">
  <div class="slider">
    <ul class="slides">
      <li>
        <img :src="require('@/assets/img/affiche-A4-0.jpg')"> <!-- random image -->
       <div class="caption center-align">
         <h3>This is our big Tagline!</h3>
         <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
       </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Event'
}
</script>

<style scoped>

</style>
