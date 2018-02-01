<template>
  <div class="row">
    <div class="col s12">
      <div class="card large">
        <div class="card-image">
          <img :src="photo">
          <span class="card-title">{{ nom }}</span>
        </div>
        <div class="card-content">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: ['description', 'nom', 'photo']
}
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}

.card-image {
    max-height: 80% !important;
}
</style>
