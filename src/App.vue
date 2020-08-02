<template>
  <div id="app">
    <main id="dgtek-polygons">
      <Polygons />
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
</style>

<script>

import 'dgtek-polygons'
import 'dgtek-polygons/dist/dgtek-polygons.css'

export default {
  name: 'App',
  data: () => ({
    saveData: false
  }),

  watch: {
    saveData (val) {
      if (val) this.save()
    }
  },

  methods: {
    async save () {
      const polygons = {
        features: [],
        type: 'FeatureCollection'
      }
      polygons.features = ['ServiceAvailable', 'BuildCommenced', 'ComingSoon']
        .flatMap(collectionType => localStorage.getFeaturesByType(collectionType))
      console.log(polygons)
      this.saveData = false
    }
  }
}
</script>
