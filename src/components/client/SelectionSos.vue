<template>
  <div class="col s12">
    <TypeSos v-for="typeSos in typesSos" @select="$emit('selectionner', typeSos)"
             :key="typeSos.type"
             v-bind="typeSos"/>
  </div>
</template>

<script>
import TypeSos from './TypeSos'
import typesSos from '@/TypesSos'
export default {
  name: 'SelectionSos',
  components: {
    TypeSos
  },
  data () {
    return {
      typesSos
    }
  }
}
</script>
