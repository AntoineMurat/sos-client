<template>
  <div>
    <div class="card row s12" id="topRow">
      <div class="col m6 s12">
        <RecapSos :typeSos="this.typeSos" :optionsSos="this.optionsSos"/>
      </div>
      <div class="col m6 s12 right">
        <button class="btn waves-effect waves-light" @click="$emit('retour')">Modifier
          <i class="material-icons right">edit</i>
        </button>
      </div>
    </div>
    <Coordonnees ref="coordonnees"/>
    <div class="card col s12">
      <div class="row" id="bottomRow">
        <div class="col m6 s12">
          <vue-recaptcha id="recaptcha" sitekey="6LciiD0UAAAAACYTVhsD0B1Mc0p244x7QuKimCqT"
            @verify="validerRecaptcha" @expired="annulerRecaptcha"/>
        </div>
        <div class="col m6 s12 right">
          <button :class="(this.reponseRecaptcha === null || this.chargement ? 'disabled ' : '') + 'btn waves-effect waves-light'" type="submit" name="action" @click="envoyer">Ca part !
            <i class="material-icons right" v-if="chargement">timer</i>
            <i class="material-icons right" v-else>send</i>
          </button>
          <div class="card red" v-if="this.erreur">
            {{ this.erreur }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Coordonnees from './Coordonnees'
import RecapSos from '@/components/client/RecapSos'
import VueRecaptcha from 'vue-recaptcha'
const axios = require('axios')

export default {
  name: 'ValidationSos',
  components: {
    Coordonnees,
    VueRecaptcha,
    RecapSos
  },
  props: ['typeSos', 'optionsSos'],
  data () {
    return {
      reponseRecaptcha: null,
      chargement: false,
      erreur: false
    }
  },
  methods: {
    validerRecaptcha (reponse) {
      this.reponseRecaptcha = reponse
    },
    annulerRecaptcha () {
      this.reponseRecaptcha = null
    },
    envoyer () {
      this.$refs.coordonnees.$validator.validateAll()
      .then(result => {
        if (!result) throw Error('Valider tout le formulaire.')
        this.chargement = true
        return axios.post('/sos/new/', {
          type: this.typeSos.type,
          options: this.optionsSos,
          coordonnees: this.$refs.coordonnees.coordonnees,
          recaptcha: this.reponseRecaptcha
        })
      })
      .then(response => {
        this.chargement = false
        this.erreur = response.data.error
        if (!this.erreur) this.$emit('valider', this.$refs.coordonnees.coordonnees)
      })
      .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
.right {
  height: 78px;
  position: relative;
}

.right .btn{
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

#topRow .right {
  height: 100px;
}

#bottomRow {
  margin-top: 20px;
}

#bottomRow .col {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>

<style>
#recaptcha div {
  margin-left: auto;
  margin-right: auto;
}
</style>
