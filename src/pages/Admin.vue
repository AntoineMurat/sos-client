<template>
  <div id="admin-vue" class="row" v-if="logged">
    <div class="col s12 m10">
      <h2>Sos libres :</h2>
      <SosList src="/admin/sos/free/" :contacts="contacts" :supprimable="true"/>
      <div class="divider"></div>
      <h2>Sos en cours :</h2>
      <SosList src="/admin/sos/todo/" :contacts="contacts" :supprimable="true"/>
      <div class="divider"></div>
      <h2>Sos finis :</h2>
      <SosList src="/admin/sos/done/" :contacts="contacts" :supprimable="false"/>
    </div>
    <div class="col s12 m2">
      <h4>dispo</h4>
      <ContactsList src="/admin/contacts/dispo/"/>
      <h4>SOSing</h4>
      <ContactsList src="/admin/contacts/sosing/"/>
      <h4>!dispo</h4>
      <ContactsList src="/admin/contacts/nondispo/"/>
    </div>
  </div>
  <div id="admin-vue" v-else>
    <div class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="login" id="login">
          <label for="login">login</label>
        </div>
        <div class="input-field col s12">
          <input type="password" v-model="password" id="password">
          <label for="password">password</label>
        </div>
        <button class="btn waves-effect waves-light col s12" @click="trylogin">Go
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SosList from '@/components/admin/SosList'
import ContactsList from '@/components/admin/ContactsList'

const axios = require('axios')

export default {
  name: 'Admin',
  components: {
    SosList,
    ContactsList
  },
  data () {
    return {
      login: '',
      password: '',
      logged: false,
      contacts: []
    }
  },
  methods: {
    trylogin () {
      axios.post('/login/', {login: this.login, password: this.password})
      .then(res => {
        if (res.data.error) return window.Materialize.toast('VIP only, dsl khouya.', 4000)
        this.logged = true
        this.getContacts()
      })
    },
    getContacts () {
      axios.get('/admin/contacts/').then(res => {
        this.contacts = res.data
      }).catch(err => console.error(err))
    }
  },
  mounted () {
    axios.get('/is/logged/').then(res => {
      if (res.data.result) {
        this.logged = true
        this.getContacts()
      }
    }).catch(err => console.error(err))
  }
}
</script>
