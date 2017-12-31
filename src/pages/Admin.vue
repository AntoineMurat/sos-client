<template>
  <div id="admin-vue">
    <h2>Sos libres :</h2>
    <SosList src="/sos/free/" :contacts="contacts" :supprimable="true"/>
    <div class="divider"></div>
    <h2>Sos en cours :</h2>
    <SosList src="/sos/todo/" :contacts="contacts" :supprimable="true"/>
    <div class="divider"></div>
    <h2>Sos finis :</h2>
    <SosList src="/sos/done/" :contacts="contacts" :supprimable="false"/>
  </div>
</template>

<script>
import SosList from '@/components/admin/SosList'

const axios = require('axios')

export default {
  name: 'Admin',
  components: {
    SosList
  },
  data () {
    return {
      contacts: []
    }
  },
  mounted () {
    axios.get('/contacts/').then(res => {
      this.contacts = res.data
    }).catch(err => console.error(err))
  }
}
</script>
