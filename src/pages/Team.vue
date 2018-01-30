<template>
  <div id="team-vue">
    <h2>Trombinoscope</h2><br>
    <div class="row" id="selector-id">
      <div class="col l4 m6 s12">
        <div class="card scale-transition scale-out hoverable clickable">
          <div class="card-image">
            <img src="static/img/membres/murat.jpg" data-caption="Ce pilier de bars sera toujours là pour t’accompagner lors de tes soirées (sauf si c’est une kfet ou qu’elle finit après 20h30) et sera un respo SOS idéal  (tu pourras même le raccompagner chez lui)." class="materialboxed clickable">
            <span class="card-title">Toinou</span>
          </div>
          <div class="card-content center-align">
            <p class="member-description">Res'poli - Team KFet</p>
          </div>
        </div>
      </div>
      <div class="col l4 m6 s12">
        <div class="card scale-transition scale-out hoverable clickable">
          <div class="card-image">
            <img src="static/img/membres/murat.jpg" class="materialboxed clickable">
            <span class="card-title">Really a toooooooooooooooooooooooooooooooooooooooooooo long surname</span>
          </div>
          <div class="card-content center-align">
            <p>Présidente</p>
          </div>
        </div>
      </div>
      <div class="col l4 m6 s12">
        <div class="card scale-transition scale-out hoverable clickable">
          <div class="card-image">
            <img src="static/img/membres/murat.jpg" class="materialboxed clickable">
            <span class="card-title">Prout</span>
          </div>
          <div class="card-content center-align">
            <p>Team gogodanceuse</p>
          </div>
        </div>
      </div>
      <div class="col l4 m6 s12">
        <div class="card scale-transition scale-out hoverable clickable">
          <div class="card-image">
            <img src="static/img/membres/murat.jpg" class="materialboxed clickable">
            <span class="card-title">Kongga</span>
          </div>
          <div class="card-content center-align">
            <p>Respo absence</p>
          </div>
        </div>
      </div>
      <div class="col l4 m6 s12">
        <div class="card scale-transition scale-out hoverable clickable">
          <div class="card-image">
            <img src="static/img/membres/murat.jpg" class="materialboxed clickable">
            <span class="card-title">Extraterrestre</span>
          </div>
          <div class="card-content center-align">
            <p>Respo relations internationales</p>
          </div>
        </div>
      </div>
      <div class="col l4 m6 s12">
        <div class="card scale-transition scale-out hoverable clickable">
          <div class="card-image">
            <img src="static/img/membres/murat.jpg" class="materialboxed clickable">
            <span class="card-title">Andéol Lord Murat</span>
          </div>
          <div class="card-content center-align">
            <p>Just some crapy text</p>
          </div>
        </div>
      </div>
      <div class="col l4 m6 s12">
        <div class="card scale-transition scale-out hoverable clickable">
          <div class="card-image">
            <img src="static/img/membres/murat.jpg" class="materialboxed clickable">
            <span class="card-title">Andéol Lord Murat</span>
          </div>
          <div class="card-content center-align">
            <p>Just some crapy text</p>
          </div>
        </div>
      </div>
      <div class="col l4 m6 s12">
        <div class="card scale-transition scale-out hoverable clickable">
          <div class="card-image">
            <img src="static/img/membres/murat.jpg" class="materialboxed clickable">
            <span class="card-title">Andéol Lord Murat</span>
          </div>
          <div class="card-content center-align">
            <p>Just some crapy text</p>
          </div>
        </div>
      </div>
      <div class="col l4 m6 s12">
        <div class="card scale-transition scale-out hoverable clickable">
          <div class="card-image">
            <img src="static/img/membres/murat.jpg" class="materialboxed clickable">
            <span class="card-title">Andéol Lord Murat</span>
          </div>
          <div class="card-content center-align">
            <p>Just some crapy text</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import $ from 'jquery'

export default {
  name: 'Team',
  mounted () {
    var options = []
    var count = -1
    $('.card').each(function () {
      count += 1
      $(this).attr('id', 'divcard' + count)
      options[count] = { selector: '#' + 'divcard' + count,
        offset: 50,
        callback: function (el) {
          $(el).removeClass('scale-out')
        }
      }
    })
    window.Materialize.scrollFire(options)
  }
}
</script>

<style scoped>

</style>
