<template>
  <div class="card" >
    <div class="card-content">
      <span class="card-title grey-text text-darken-4">{{ typeSos.title }}</span>
      <p>
        <div v-for="parameter of typeSos.parameters">
          <b>{{ parameter.name }}</b> :
          <div v-if="parameter.multi">
            <div v-for="value of parameter.values">
              <div v-if="optionsSos[parameter.code]">
                {{ parameter.name }}
              </div>
            </div>
          </div>
          <div v-else>
            <div v-for="value of parameter.values">
              <div v-if="optionsSos[parameter.code] === value.code">
                {{ value.name }}
              </div>
            </div>
          </div>
        </div>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecapSos',
  props: ['typeSos', 'optionsSos']
}
</script>
