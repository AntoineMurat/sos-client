<template>
  <div class="col s12 m4 l3">
    <div class="card small sticky-action">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="imageFile" @click="hideContactPic">
      </div>
      <div class="card-content">
        <div v-if="contactPic !== null"
          :style="`background-image: url('${contactPic}');opacity:${hidePic ? '0' : '1'};`"
          class="contact-pic"
        ></div>
        <span class="card-title activator grey-text text-darken-4" @click="hideContactPic">{{ title }}<i class="material-icons right">more_vert</i></span>
        <p>{{ coordonnees.firstname }} {{ coordonnees.lastname }}</p>
      </div>
      <div class="card-action">
        <a v-if="supprimable" @click.prevent="supprimer">Mettre fin</a>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{ title }}<i class="material-icons right" @click="showContactPic">close</i></span>
        <p>
          {{ coordonnees.firstname }} {{ coordonnees.lastname }}<br>
          <span class="card-title grey-text text-darken-4">Détails</span>
          <b>ENSIMAG</b> : {{ coordonnees.ensimag ? 'Oui' : 'Peut-être' }}<br>
          <b>Téléphone</b> : {{ coordonnees.phone }}<br>
          <b>Adresse</b> : {{ coordonnees.address }}<br>
          <b>Ville</b> : {{ coordonnees.city }}<br>
          <b>Options</b><br>
          <span v-for="(valeur, nom) in options">
            <b>{{ nom }}</b> : {{ valeur }}<br>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Sos',
  props: {
    acceptable: {
      default: true
    },
    supprimable: {
      default: true
    },
    coordonnees: {
      default: {
        firstname: 'No firstname',
        lastname: 'No lastname',
        address: 'No address',
        coordinates: 'No coordinates',
        city: 'No city',
        phone: 'No phone',
        comment: 'No comment'
      }
    },
    type: {
      default: 'Default type'
    },
    options: {
      default: {}
    },
    id: {
      default: null
    },
    contactPic: {
      default: null
    }
  },
  data () {
    return {
      hidePic: false
    }
  },
  computed: {
    imageFile () {
      return require('@/assets/img/sos/' + this.type + '.jpg')
    },
    title () {
      return 'SOS ' + this.type
    }
  },
  methods: {
    hideContactPic () {
      this.hidePic = true
    },
    showContactPic () {
      this.hidePic = false
    },
    supprimer () {
      this.$emit('supprimer')
      axios.get(`/admin/sos/supprimer/${this.id}`)
      .then(res => {
        if (res.data.error) console.log(res.data.error)
      })
    }
  }
}
</script>

<style scoped>
.contact-pic{
  border-radius: 100%;
  top: 20px;
  width: 75px;
  height: 75px;
  z-index: 2;
  position: absolute;
  background-size: cover;
  box-shadow: 0 0 4px rgba( 0,0,0,0.3 );
  transition: all 0.25s;
}
</style>
