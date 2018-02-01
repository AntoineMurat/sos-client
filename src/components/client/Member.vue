<template>
  <div class="col l4 m6 s12">
    <div :class="(hidden ? 'scale-out ' : '') + 'card scale-transition hoverable'">
      <div class="card-image">
        <img :src="photo" class="clickable">
        <span class="card-title">{{ blaz }}</span>
      </div>
      <div class="card-content center-align">
        <p class="member-description">{{ role }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Member',
  props: ['blaz', 'role', 'photo', 'description', 'index'],
  data () {
    return {
      hidden: true
    }
  },
  mounted () {
    setTimeout(_ => {
      this.hidden = false
    }, 150 * this.index)
  }
}
</script>

<style scoped>
</style>
