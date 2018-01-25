<template>
  <div class="col s12 m6 l4">
    <div class="card medium hoverable" @click.prevent="select">
      <div class="card-image waves-effect waves-block waves-light">
        <img :src="imageFile">
      </div>
      <div class="card-content">
        <span class="card-title grey-text text-darken-4">{{ title }}</span>
        <p>{{ description }}
          <slot></slot>
          </slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeSos',
  props: {
    type: {
      default: 'default'
    },
    title: {
      default: 'titre par défaut'
    },
    description: {
      default: ''
    }
  },
  computed: {
    imageFile () {
      return require('@/assets/img/' + this.type + '.jpg')
    }
  },
  methods: {
    select () {
      this.$emit('select')
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
