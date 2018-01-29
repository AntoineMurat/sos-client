<template>
  <div>
    <div v-if="contactslist !== null">
      <ul v-if="this.contactslist.length !== 0" class="row">
        <transition-group name="contacts-list">
          <li v-for="(contact, index) in contactslist" :key="contact.id" class="contact">
            <div class="chip">
              <img :src="contact.profilePic" alt="Contact Person">
              {{ contact.firstName }} {{ contact.lastName }}
            </div>
          </li>
        </transition-group>
      </ul>
      <div v-else class="row">
        <div class="col s12">
          <div class="card-panel teal">
            <span class="white-text">Personne.
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
const axios = require('axios')

export default {
  name: 'Contactslist',
  props: ['src'],
  data () {
    return {
      contactslist: null
    }
  },
  methods: {
    refresh () {
      axios.get(this.src)
      .then(res => { this.contactslist = res.data })
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
.contact {
  margin-left: 15px;
}
.contacts-list-move {
  transition: all 0.5s;
  z-index: -50;
}
.contacts-list-enter, .contacts-list-leave-to {
  opacity: 0;
}
.contacts-list-leave-active {
  position: absolute;
}
</style>
