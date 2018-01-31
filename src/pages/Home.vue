<template>
  <div id="home-vue">
    <img id="oliphant" :src="require('@/assets/img/oliphant.png')"/>
    <div id="anneauWrapper">
      <img id="anneau" :src="require('@/assets/img/anneau.png')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
#home-vue {

}

@keyframes spin {
    0% {
        transform: translateY(-50%) translateX(-50%) rotate(0deg);
    }

    100% {
        transform: translateY(-50%) translateX(-50%) rotate(360deg);
    }
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes bright {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#oliphant {
  max-height: 90%;
  max-width: 100%;
	position:absolute;
	top: 50%;
	transform: translateY(-50%) translateX(-50%);
	left:50%;
  animation-name: fadeInOut;
  animation-duration: 5s;
  /* animation-iteration-count: infinite;
  animation-direction: alternate; */
}

#anneau {
  max-height: 95%;
  max-width: 100%;
  position: absolute;
  top: 45%;
	transform: translateY(-50%) translateX(-50%);
	left:50%;
  animation: spin 100s linear infinite;
}

#anneauWrapper {
  animation: fadeInOut 5s linear;
}
</style>
