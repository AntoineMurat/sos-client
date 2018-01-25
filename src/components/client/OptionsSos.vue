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
          <a href="#" @click="$emit('retour')">Changer de SOS</a>
          <a href="#" @click="suivant">Suivant</a>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div v-if="!validForm" class="valign-wrapper pink lighten-4 z-depth-2">
        <p class="flow-text error center-align">
          N'oublie pas de sélectionner ton SOS !
        </p>
      </div>
      <div v-for="parameter in typeSos.parameters">
        <h4>{{ parameter.name }}</h4>
        <div v-if="parameter.multi">
          <p v-for="(value, index2) in parameter.values">
            <input v-validate="(parameter.required) ? 'required' : ''" :name="'extra-'+parameter.code+'-'+value.code" v-model="options[parameter.code][value.code]" type="checkbox" :id="'extra-'+parameter.code+'-'+value.code"/>
            <label :for="'extra-'+parameter.code+'-'+value.code">{{ value.name }}</label>
          </p>
        </div>
        <div v-else>
          <p v-for="(value, index2) in parameter.values">
            <input v-validate="(parameter.required) ? 'required' : ''" :name="'extra-'+parameter.code" v-model="options[parameter.code]" type="radio" :id="'extra-'+parameter.code+'-'+value.code" :value="value.code"/>
            <label :for="'extra-'+parameter.code+'-'+value.code">{{ value.name }}</label>
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
      return require('@/assets/img/' + this.typeSos.type + '.jpg')
    }
  },
  data () {
    const options = {}
    this.typeSos.parameters.forEach(parameter => {
      if (parameter.multi) {
        const eachValue = {}
        parameter.values.forEach(value => {
          eachValue[value.code] = false
        })
        options[parameter.code] = eachValue
      } else {
        options[parameter.code] = ''
      }
    })
    return {
      options,
      validForm: true
    }
  },
  methods: {
    suivant () {
      this.$validator.validateAll()
      .then(result => {
        if (!result) throw Error(`N'oublie pas de sélectionner tes options !`)
        this.validForm = true
        return this.$emit('selectionner', this.getOptions())
      })
      .catch(error => {
        console.error(error)
        this.validForm = false
      })
    },
    getOptions () {
      return JSON.parse(JSON.stringify(this.options))
    }
  }
}
</script>

<style scoped>
.error {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}
</style>
