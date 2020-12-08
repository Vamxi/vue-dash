<template>
  <div class="home">
    <v-container>
    <v-card outlined elevation = "0">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </v-card>
    </v-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
