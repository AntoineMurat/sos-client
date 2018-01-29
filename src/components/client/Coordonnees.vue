<template>
  <form class="col s12">
    <div class="row">

      <div class="input-field col s6 l4 control">
        <i class="material-icons prefix">account_circle</i>

        <input id="firstname" name="firstname" data-vv-as="Votre prénom" v-model="firstname"
          type="text" v-validate="'required|alpha_spaces'" data-vv-delay="500"
          :class="{'input': true, 'invalid': errors.has('firstname') }">

        <label for="firstname">Prénom</label>
        <span v-show="errors.has('firstname')" class="help invalid">{{ errors.first('firstname') }}</span>

      </div>
      <div class="input-field col s6 l4 control">

        <input id="lastname" name="lastname" data-vv-as="Votre nom" v-model="lastname"
          type="text" v-validate="'required|alpha_spaces'" data-vv-delay="500"
          :class="{'input': true, 'invalid': errors.has('lastname') }">

        <label for="lastname">Nom</label>
        <span v-show="errors.has('lastname')" class="help invalid">{{ errors.first('lastname') }}</span>
      </div>

      <div class="input-field col s6 l4 control">
        <i class="material-icons prefix">phone</i>
        <input id="phone" name="phone" data-vv-as="Votre numéro de téléphone" v-model="phone"
        type="tel" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
        v-validate="{required: true, regex: /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/ }" data-vv-delay="500"
        :class="{'input': true, 'invalid': errors.has('phone') }">
        <label for="phone">Téléphone</label>
        <span v-show="errors.has('phone')" class="help invalid">{{ errors.first('phone') }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col s12 l8">
        <div class="input-field col s12">
          <i class="material-icons prefix">map</i>
          <select id="city" name="city" label="city">
            <option selected value="Grenoble">Grenoble</option>
            <option value="St Martin d'Hères">St Martin d'Hères</option>
          </select>
          <label for="city">Ville</label>
        </div>
        <div class="input-field col s12 control">
          <i class="material-icons prefix">map</i>
          <textarea id="address" name="address" @keyup="updateAddress" data-vv-as="Votre adresse" v-model="address" v-validate="'required'" data-vv-delay="500"
          :class="{'input': true, 'materialize-textarea': true, 'invalid': errors.has('address') }"></textarea>
          <span v-show="errors.has('address')" class="help invalid">{{ errors.first('address') }}</span>
          <label for="address">Adresse</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="comment" v-model="comment" class="materialize-textarea"></textarea>
          <label for="comment">Commentaire</label>
        </div>
      </div>
      <div class="col s12 l4" id="map">
        <gmap-map
          :center="{lat: 45.18537449999999, lng: 5.736626999999999}"
          :zoom="12"
          style="width: 100%; height: 300px"
        >
          <gmap-marker
            :position="this.coordinates"
            :clickable="true"
            :draggable="true"
            @position_changed="updatedMarker"
          ></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </form>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import $ from 'jquery'
import '@/assets/js/materialize.js'
const axios = require('axios')

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDXgwSJ8iUIx0bhLig6nZ3tEs4zQBMHDx8',
    libraries: 'places'
  }
})

export default {
  name: 'Coordonnees',
  data () {
    return {
      firstname: '',
      lastname: '',
      city: 'Grenoble',
      address: '',
      phone: '',
      comment: '',
      coordinates: {lat: 45.18537449999999, lng: 5.736626999999999},
      map: null,
      marker: null,
      timestamp: null
    }
  },
  computed: {
    coordonnees () {
      return {
        firstname: this.firstname,
        lastname: this.lastname,
        city: this.city,
        address: this.address,
        phone: this.phone,
        comment: this.comment,
        coordinates: this.coordinates
      }
    }
  },
  methods: {
    updateAddress () {
      let tick = this.random = Math.random()
      setTimeout(_ => {
        if (this.random !== tick) return
        axios.get(`https://maps.google.com/maps/api/geocode/json?address=${this.address.replace(' ', '+')},${this.city},France`).then(res => {
          if (this.random !== tick) return
          this.coordinates = res.data.results[0].geometry.location
        })
      }, 400)
    },
    updatedMarker (coordinates) {
      let tick = this.random = Math.random()
      setTimeout(_ => {
        if (this.random !== tick) return
        this.coordinates = coordinates
        console.log(coordinates)
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat()},${coordinates.lng()}`).then(res => {
          if (this.random !== tick) return
          this.address = res.data.results[0].formatted_address.split(',')[0]
          if (res.data.results[0].formatted_address.split(',')[1] === ' 38100 Grenoble') this.city = 'Grenoble'
          if (res.data.results[0].formatted_address.split(',')[1] === ' 38400 Saint-Martin-d\'Hères') this.city = 'St Martin d\'Hères'
          $('select').val(this.city)
          $('select').material_select()
        })
      }, 50)
    }
  },
  mounted () {
    $('select').material_select()
    $('select').on('change', _ => {
      this.city = $('select').val()
      this.updateAddress()
    })
  }
}
</script>

<style scoped>
</style>
