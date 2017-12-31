<template>
  <div>
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img :src="sosImage">
          <span class="card-title">{{ typeSos.title }}</span>
        </div>
        <div class="card-content">
          <p>{{ typeSos.description }}</p>
        </div>
        <div class="card-action">
          <a href="#" @click="$emit('retour')">Annuler</a>
          <a href="#" @click="suivant">Suivant</a>
        </div>
      </div>
    </div>
    <div class="coll s12 m6">
      <div v-for="(parameter, index) in typeSos.parameters">
        <div v-if="typeof parameter.values === 'string'">
          <div class="input-field col s12 m6">
            <input :id="'extra-'+index" type="text" required/>
            <label :for="'extra-'+index">{{ parameter.name }}</label>
          </div>
        </div>
        <div v-else>
          <h4>{{ parameter.name }}</h4>
          <p v-for="(value, index2) in parameter.values">
            <input :name="'extra-'+index" type="radio" :id="'extra-'+index+'-'+index2" required/>
            <label :for="'extra-'+index+'-'+index2">{{ value }}</label>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionsSos',
  props: ['typeSos'],
  computed: {
    sosImage () {
      return require('@/assets/img/kebab.jpg')
    }
  },
  methods: {
    formIsValid () {
      return true
    },
    suivant () {
      if (this.formIsValid()) {
        return this.$emit('selectionner', this.getOptions())
      }
    },
    getOptions () {
      return Array.from(document.getElementsByTagName('input')).map(e => ({name: e.name, value: e.value}))
    }
  }
}
</script>
