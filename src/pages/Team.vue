<template>
  <div id="team-vue">
    <h2>Trombinoscope</h2><br>
    <div class="row" id="selector-id">
      <Member v-for="(member, index) of members" v-bind:index="index" v-bind="member" key="index"/>
    </div>
  </div>

</template>

<script>
import Member from '@/components/client/Member'

export default {
  name: 'Team',
  components: {
    Member
  },
  data () {
    return {
      members: [
        {blaz: 'Toinou', role: 'Respo chien', photo: 'static/img/membres/murat.jpg', description: 'Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui).'},
        {blaz: 'Toinou', role: 'Respo chien', photo: 'static/img/membres/murat.jpg', description: 'Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui).'},
        {blaz: 'Toinou', role: 'Respo chien', photo: 'static/img/membres/murat.jpg', description: 'Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui).'},
        {blaz: 'Toinou', role: 'Respo chien', photo: 'static/img/membres/murat.jpg', description: 'Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui).'},
        {blaz: 'Toinou', role: 'Respo chien', photo: 'static/img/membres/murat.jpg', description: 'Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui).'},
        {blaz: 'Toinou', role: 'Respo chien', photo: 'static/img/membres/murat.jpg', description: 'Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui).'},
        {blaz: 'Toinou', role: 'Respo chien', photo: 'static/img/membres/murat.jpg', description: 'Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui).'},
        {blaz: 'Toinou', role: 'Respo chien', photo: 'static/img/membres/murat.jpg', description: 'Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui).'},
        {blaz: 'Toinou', role: 'Respo chien', photo: 'static/img/membres/murat.jpg', description: 'Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui).'},
        {blaz: 'Toinou', role: 'Respo chien', photo: 'static/img/membres/murat.jpg', description: 'Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui).'},
        {blaz: 'Toinou', role: 'Respo chien', photo: 'static/img/membres/murat.jpg', description: 'Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui).'},
        {blaz: 'Toinou', role: 'Respo chien', photo: 'static/img/membres/murat.jpg', description: 'Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui).'}
      ]
    }
  }
}
</script>

<style scoped>
</style>
