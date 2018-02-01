<template>
  <div id="team-vue">
      <transition name="bounce">
        <div v-if="selectedMember !== null" @click="unselectMember" id="materialbox-overlay" :style="'width:' + width + ';height:' + height">
          <img :src="selectedMember.photo" @click="unselectMember">
          <div class="description">
            {{ selectedMember.description }}
          </div>
        </div>
      </transition>
      <div class="row" id="selector-id">
        <Member v-for="(member, index) of members"
        @click.native="selectMember(index)"
        v-bind:index="index" v-bind="member" key="index"/>
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
      ],
      selectedMember: null
    }
  },
  methods: {
    selectMember (index) {
      this.selectedMember = this.members[index]
    },
    unselectMember () {
      this.selectedMember = null
    },
    handleScroll () {
      this.unselectMember()
    }
  },
  computed: {
    width () {
      return window.innerWidth
    },
    height () {
      return window.innerHeight
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
#materialbox-overlay {
  opacity: 1;
  left: 0px;
  top: 0px;
  text-align: center;
}

#materialbox-overlay img {
  max-width: calc(100% - 50px);
  max-height: calc(95% - 100px - 50px);
  margin-top: 25px;
  margin-bottom: 25px;
}

.description {
  font-size: 1.5rem;
  color: white;
  max-width: 90%;
  text-align: center;
  margin: auto;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>

<style>
.clickable {
  cursor: pointer;
}
</style>
