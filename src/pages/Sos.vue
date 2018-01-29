<template>
  <div id="sos-vue">
    <div class="row" v-if="sosDispo || dev">
      <transition name="fade">
        <keep-alive>
          <SelectionSos v-if="!sosSelectionne" key="SelectionSos" @selectionner="selectionnerSos"/>
          <OptionsSos v-else-if="!optionsSelectionnes" key="OptionsSos" @selectionner="selectionnerOptions" @retour="annulerSelectionSos"
            :typeSos="typeSos"/>
          <ValidationSos v-else-if="!sosValide" key="ValidationSos" @valider="validerSos" @retour="annulerSelectionOptions"
            :typeSos="typeSos" :optionsSos="optionsSos"/>
          <FinSos v-else key="FinSos" :typeSos="typeSos" :optionsSos="optionsSos" :coordonnees="coordonnees"/>
        </keep-alive>
      </transition>
    </div>
    <div v-else class="center">
      <img :src="require('@/assets/img/gandalf.png')"><br>
      <div v-if="sosCommences">
        Les SOS seront bientot disponibles !
      </div>
      <div v-else>
        Le service SOS est interrompu pendant les événements de campagne !
      </div>
    </div>
  </div>
</template>

<script>
import SelectionSos from '@/components/client/SelectionSos'
import OptionsSos from '@/components/client/OptionsSos'
import ValidationSos from '@/components/client/ValidationSos'
import FinSos from '@/components/client/FinSos'
const sosAvailable = require('@/assets/js/events').sosAvailable

export default {
  name: 'Sos',
  components: {
    SelectionSos,
    OptionsSos,
    ValidationSos,
    FinSos
  },
  data () {
    return {
      sosSelectionne: false,
      typeSos: null,
      optionsSelectionnes: false,
      optionsSos: null,
      sosValide: false,
      coordonnees: null,
      dev: false,
      sosDispo: sosAvailable(),
      sosCommences: new Date() < new Date(2018, 1, 3, 23, 59, 0)
    }
  },
  methods: {
    selectionnerSos (sos) {
      this.sosSelectionne = true
      this.typeSos = sos
    },
    annulerSelectionSos () {
      this.sosSelectionne = false
    },
    selectionnerOptions (options) {
      this.optionsSelectionnes = true
      this.optionsSos = options
    },
    annulerSelectionOptions () {
      this.optionsSelectionnes = false
    },
    validerSos (coordonnees) {
      this.sosValide = true
      this.coordonnees = coordonnees
    },
    updateDispo () {
      this.sosDispo = sosAvailable()
      this.sosCommences = new Date() < new Date(2018, 1, 3, 23, 59, 0)
    }
  },
  mounted () {
    setInterval(_ => this.updateDispo(), 1000)
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s ease;
}
.fade-enter{
  transform: translateX(+2000px);
  position: absolute;
}
.fade-leave-to {
  transform: translateX(-2000px);
  position: absolute;
}

img {
  max-width: 100%;
}
</style>
