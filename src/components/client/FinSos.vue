<template>
  <div>
    <div class="center">
      <h1>SOS envoyé !</h1>
      C'est nickel ! Vous devriez bientôt être recontacté pour valider votre SOS !<br>
    </div>
    <section>
      <div class="row">
        <div class="col m6 s12">
          <RecapSos :typeSos="this.typeSos" :optionsSos="this.optionsSos"/>
        </div>
        <div class="col m6 s12">
          <div class="card">
            <div class="card-content">
              <span class="card-title grey-text text-darken-4">Coordonnées</span>
              <p><b>Prénom</b> : {{ coordonnees.firstname }}<br>
              <b>Nom</b> : {{ coordonnees.lastname }}<br>
              <b>Téléphone</b> : {{ coordonnees.phone }}<br>
              <b>Adresse</b> : {{ coordonnees.address }}<br>
              <b>Ville</b> : {{ coordonnees.city }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="center">
      <img :src="imageFile">
    </div>
  </div>
</template>

<script>
import RecapSos from '@/components/client/RecapSos'

export default {
  name: 'FinSos',
  props: ['coordonnees', 'typeSos', 'optionsSos'],
  components: {RecapSos},
  computed: {
    imageFile () {
      return require('@/assets/img/gandalf.png')
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 300px;
}
</style>
