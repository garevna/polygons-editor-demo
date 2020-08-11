<template>
  <div id="app">
    <main>
      <div class="nav">
        <button @click="switchToPolygons">POLYGONS</button>
        <button @click="switchToMarkers">MARKERS</button>
      </div>
      <div v-if="showPolygons">
        <PolygonsView />
      </div>
      <div v-if="showMarkers">
        <MarkersView />
      </div>
      <!-- <component :is="componentName" :saveData="`${save}`"></component> -->
      <!-- <router-view :key="$route.name" /> -->
    </main>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#container-for-map {
  width: 50%;
  height: 700px;
}
.nav {
  margin-bottom: 48px;
}
button {
  padding: 8px 16px;
  outline: none;
}
</style>

<script>

import PolygonsView from '@/views/Polygons.vue'
import MarkersView from '@/views/Markers.vue'

export default {
  name: 'App',
  components: {
    PolygonsView,
    MarkersView
  },
  data: () => ({
    component: null
  }),
  computed: {
    showPolygons () {
      return this.component === 'polygons'
    },
    showMarkers () {
      return this.component === 'markers'
    }
  },

  methods: {
    switchToPolygons () {
      if (this.component !== 'polygons') {
        localStorage.setItem('component', 'polygons')
        location.reload()
      }
    },
    switchToMarkers () {
      if (this.component !== 'markers') {
        localStorage.setItem('component', 'markers')
        location.reload()
      }
    }
  },
  mounted () {
    this.component = localStorage.getItem('component')
    // if (component) {
    //   this.component = component
    //   localStorage.removeItem('component')
    // }
  }
}
</script>
