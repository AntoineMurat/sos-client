<template>
  <footer>
    <div class="container">
      <div class="row no-margin-bottom">
      <div class="col l12 s12 valign-wrapper">
        <h4>{{ this.currentEvent.textBefore }}</h4>
      </div>
      <div class="col l12 s12">
        <ul class="no-margin-bottom">
          <li>
            <span class="days time-font">{{ days }}</span>
            <p class="time-title">jours</p>
          </li>
          <li>
            <span class="hours time-font">{{ hours }}</span>
            <p class="time-title">h</p>
          </li>
          <li>
            <span class="minutes time-font">{{ minutes }}</span>
            <p class="time-title">min</p>
          </li>
          <li>
            <span class="seconds time-font">{{ seconds }}</span>
            <p class="time-title">sec</p>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
const currentEvent = require('@/assets/js/events').currentEvent

export default {
  name: 'Footer',
  data () {
    return {
      currentEvent: {
        code: 'Chargement de l\'appli',
        textBefore: 'App chargée dans',
        date: new Date(new Date().getTime() + 5000)
      },
      days: '',
      minutes: '',
      hours: '',
      seconds: ''
    }
  },
  methods: {
    updateCounter () {
      const pad = (n) => (n < 10) ? ('0' + Math.floor(n)) : Math.floor(n)

      const now = new Date()
      this.currentEvent = currentEvent()

      const delta = this.currentEvent.date - now
      const seconds = delta / 1000
      const minutes = seconds / 60
      const hours = minutes / 60
      const days = hours / 24
      this.seconds = pad(seconds % 60)
      this.minutes = pad(minutes % 60)
      this.hours = pad(hours % 24)
      this.days = Math.floor(days)
    }
  },
  mounted () {
    this.updateCounter()
    setInterval(_ => this.updateCounter(), 1000)
  }
}
</script>

<style scoped>

/* lg */
@media (min-width: 1200px) {

}

/* md */
@media (min-width: 992px) and (max-width: 1199px) {

  li {
    margin-right: 30px;
  }

}

/* sm */
@media (min-width: 768px) and (max-width: 991px) {

 li {
  margin-right: 15px;
 }

}

/* xs */
@media (max-width: 767px) {
	li {
    font-size: 14px;
    margin-right:35px;
    width:inherit;
  }

  li span {
    font-size: 24px !important;
    height: 60px !important;
    line-height: 60px !important;
    width: 60px !important;
  }

  li:before,
  li:after {
    top:25px !important;
  }
}

/* XS Portrait */
@media (max-width: 479px) {

  li {
    font-size: 14px !important;
    margin-right: 15px !important;
    width: 45px !important;
  }

  li span {
    font-size: 20px !important;
    height: 45px !important;
    line-height: 45px !important;
    width: 45px !important;
  }

  li:before,
  li:after {
    top: 18px !important;
  }
}
/*--------------\
| Countdown CSS |
\---------------*/

footer {
  display: block;
  overflow: hidden;
  text-align: center;
  padding: 0;
  background-color: #660117;
}

.no-margin-bottom {
  margin-bottom: 0;
}

.valign-wrapper {
  display: block;
  height: 100%;
}

h4, .li,p {
  color: white;
}

h4 {
  font-size: 1.8rem;
}

li {
  list-style: none;
  display:inline-block;
  margin-right: 40px;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  position: relative;
}

li:last-child {
  margin-right: 0
}

li span {
  display: block;
  font-size: 40px;
  font-weight: 700;
  height: 82px;
  line-height: 79px;
  width: 75px;
  border-radius: 10px;
  border-right: 1px solid #9e3e2e;
  border-bottom: 1px solid #9e3e2e;
}

li .days {
  background-color: #45b29d;
  border-top: 1px solid #6ac1b1;
  border-left: 1px solid #6ac1b1;
}

li .hours {
  background-color: #efc94c;
  border-top: 1px solid #f2d470;
  border-left: 1px solid #f2d470;
}

li .minutes {
  background-color: #e27a3f;
  border-top: 1px solid #e89565;
  border-left: 1px solid #e89565;
}

li .seconds {
  background-color: #df5a49;
  border-top: 1px solid #e57b6d;
  border-left: 1px solid #e57b6d;
}
</style>
