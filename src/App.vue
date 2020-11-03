<template>
  <navbar/>
  <Apod/>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import navbar from './components/Navbar.vue'
import Apod from './components/Apod.vue'

export default {
  name: 'app',
  setup () {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { navbar, Apod }
}
</script>

<style>
  body{
    background-color: #dfafcf;
  }
  .navbar{
    margin: 0;
    padding: 0;
  }
</style>

// NASA API Info
// hE1aHdFhQaTc5wQWzQhJv4VWT3YFJObTsAs4rtIU
// Account Email: rccarpenter@outlook.com
// Account ID: 7c98b53c-3890-403f-ae71-5b23e0aab870