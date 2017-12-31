<template>
  <div class="card" >
    <div class="card-content">
      <span class="card-title grey-text text-darken-4">{{ typeSos.title }}</span>
      <p>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecapSos',
  props: ['typeSos', 'optionsSos']
}
</script>
