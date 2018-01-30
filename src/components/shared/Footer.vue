<template>
  <footer>
    <div class="container" id="next_event">
      <h4>{{ this.currentEvent.textBefore }}</h4>
      <ul>
        <li>
          <span class="days time-font">{{ days }}</span>
          <p>jours</p>
        </li>
        <li>
          <span class="hours time-font">{{ hours }}</span>
          <p class="">h</p>
        </li>
        <li>
          <span class="minutes time-font">{{ minutes }}</span>
          <p class="">min</p>
        </li>
        <li>
          <span class="seconds time-font">{{ seconds }}</span>
          <p class="">sec</p>
        </li>
      </ul>
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

footer {
  text-align: center;
  background-color: #660117;
}

h4, .li,p {
  color: white;
}

ul {
  display: block;
  overflow: hidden;
  text-align: center;
  padding: 0
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
    font-size: 24px;
    height: 60px;
    line-height: 60px;
    width: 60px;
  }

  li:before,
  li:after {
    top:25px;
  }
}

/* XS Portrait */
@media (max-width: 479px) {

  li {
    font-size: 14px;
    margin-right: 15px;
    width: 45px;
  }

  li span {
    font-size: 20px;
    height: 45px;
    line-height: 45px;
    width: 45px;
  }

  li:before,
  li:after {
    top: 18px
  }
}
</style>
