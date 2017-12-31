<template>
  <div>
    <div v-if="soslist !== null">
      <div v-if="this.soslist.length !== 0" class="row">
        <transition-group name="sos-list">
          <Sos v-for="(sos, index) in soslist" v-bind="contactPicAnd(sos)" :key="sos.id" :supprimable="supprimable" @supprimer="supprimer(index)" class="sos" />
        </transition-group>
      </div>
      <div v-else class="row">
        <div class="col s12">
          <div class="card-panel teal">
            <span class="white-text">Pas de SOS dans cette liste.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Chargement...
    </div>
  </div>
</template>

<script>
import Sos from './Sos'
const axios = require('axios')

export default {
  name: 'SosList',
  components: {
    Sos
  },
  data () {
    return {
      soslist: null
    }
  },
  props: ['src', 'contacts', 'supprimable'],
  methods: {
    supprimer (index) {
      this.soslist.splice(index, 1)
    },
    contactPicAnd (sos) {
      for (let contact of this.contacts) {
        if (contact.id === sos.contactId) {
          sos.contactPic = contact.profilePic
          break
        }
      }
      return sos
    },
    refresh () {
      axios.get(this.src)
      .then(res => { this.soslist = res.data })
      .catch(err => console.error(err))
    },
    autorefresh () {
      this.refresh()
      setTimeout(_ => this.autorefresh(), 2500)
    }
  },
  mounted () {
    this.autorefresh()
  }
}
</script>

<style scoped>
.sos-list-move {
  transition: all 0.5s;
  z-index: -50;
}
.sos-list-enter, .sos-list-leave-to {
  opacity: 0;
}
.sos-list-leave-active {
  position: absolute;
}
</style>
