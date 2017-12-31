<template>
  <div class="col s12">
    <typeSos v-for="typeSos in typesSos" @select="$emit('selectionner', typeSos)"
             :key="typeSos.type"
             v-bind="typeSos"/>
  </div>
</template>

<script>
import TypeSos from './TypeSos'

export default {
  name: 'SelectionSos',
  components: {
    TypeSos
  },
  data () {
    return {
      typesSos: [
        {
          title: 'Kebab',
          type: 'kebab',
          description: 'On se paye un kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab 2',
          type: 'kebab',
          description: 'Un très bon kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab 3',
          type: 'kebab',
          description: 'Un trop bon Kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab 4',
          type: 'kebab',
          description: 'Un vraiment trop bon kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab',
          type: 'kebab',
          description: 'On se paye un kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab 2',
          type: 'kebab',
          description: 'Un très bon kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab 3',
          type: 'kebab',
          description: 'Un trop bon Kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab 4',
          type: 'kebab',
          description: 'Un vraiment trop bon kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab',
          type: 'kebab',
          description: 'On se paye un kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab 2',
          type: 'kebab',
          description: 'Un très bon kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab 3',
          type: 'kebab',
          description: 'Un trop bon Kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab 4',
          type: 'kebab',
          description: 'Un vraiment trop bon kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab',
          type: 'kebab',
          description: 'On se paye un kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab 2',
          type: 'kebab',
          description: 'Un très bon kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab 3',
          type: 'kebab',
          description: 'Un trop bon Kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }, {
          title: 'Kebab 4',
          type: 'kebab',
          description: 'Un vraiment trop bon kebab ?',
          parameters: [{
            name: 'Sauce',
            values: ['algérienne', 'blanche', 'samourai']
          }]
        }
      ]
    }
  }
}
</script>
