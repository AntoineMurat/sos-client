<template>
  <div class="row">
    <carousel :perPage="1" :navigationEnabled="true" :loop="true">
      <slide v-for="event of events">
        <Event v-bind="event"/>
      </slide>
    </carousel>
  </div>
</template>

<script>
import Event from '@/components/client/Event'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Events',
  components: {
    Event,
    Carousel,
    Slide
  },
  data () {
    return {
      events: [
        {nom: 'KFET', description: 'Description de la K\'fet', photo: require('@/assets/img/events/affiche-A4-0.jpg')},
        {nom: 'P\'tit dej', description: 'On va vous en foutre plein le bide', photo: require('@/assets/img/events/affiche-A4-1.jpg')},
        {nom: 'Soirée', description: 'Soirée de malade tmtc', photo: require('@/assets/img/events/affiche-A4-2.jpg')},
        {nom: 'Activité libre', description: 'Venez découvrir notre activité libre', photo: require('@/assets/img/events/affiche-A4-0.jpg')}
      ],
      currentIndex: 0
    }
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

.chevron {
  text-align: center;
}
</style>
