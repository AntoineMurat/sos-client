<template>
  <footer class="pink darken-4 transparent-2">
    <div class="container" id="next_event">
      <div class="row no-margin-bottom">
      <div class="col l4 s12">
        <h4>Prochain évènement: </h4>
      </div>
      <div class="col l8 s12">
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
export default {
  name: 'Footer',
  data () {
    return {
      eventDate: new Date(2018, 0, 31, 19, 30, 0),
      days: '',
      minutes: '',
      hours: '',
      seconds: ''
    }
  },
  mounted () {
    const pad = (n) => (n < 10) ? ('0' + Math.floor(n)) : Math.floor(n)

    setInterval(_ => {
      const now = new Date()
      const delta = this.eventDate - now
      const seconds = delta / 1000
      const minutes = seconds / 60
      const hours = minutes / 60
      const days = hours / 24
      this.seconds = pad(seconds % 60)
      this.minutes = pad(minutes % 60)
      this.hours = pad(hours % 24)
      this.days = Math.floor(days)
    }, 1000)
  }
}
</script>

<style scoped>

footer {
  text-align: center;
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

li:before {
  background-color: #FFFFFF;
  content: "";
  height: 11px;
  left: 0;
  position: absolute;
  top: 36px;
  width: 1px;
}

li:after {
  background-color: #FFFFFF;
  content: "";
  height: 11px;
  right:0;
  position: absolute;
  top: 36px;
  width: 1px;
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
