<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <InventarioConsulta msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import InventarioConsulta from '@/components/InventarioConsulta.vue'

export default {
  name: 'HomeView',
  components: {
    InventarioConsulta
  }
}
</script>
