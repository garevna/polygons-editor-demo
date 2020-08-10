<template>
  <div id="app">
    <main>
      <div class="nav">
        <button @click="switchToPolygons">POLYGONS</button>
        <button @click="switchToMarkers">MARKERS</button>
      </div>
      <!-- <component :is="componentName" :saveData="`${save}`"></component> -->
      <!-- <Polygons
            :saveData.sync="savePolygons"
      /> -->
      <!-- <Markers
            :saveData.sync="saveMarkers"
            v-if="showMarkers"
      /> -->
      <router-view :key="$route.name" />
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

export default {
  name: 'App',
  data: () => ({
    //
  }),

  watch: {
    $route (to) {
      console.log(to)
      // if (to.meta.reload) { window.location.reload() }
    }
  },

  methods: {
    removeGoogleMaps () {
      location.reload()
    },
    switchToPolygons () {
      // this.$router.push({ name: 'polygons' })
      this.$router.replace(
        { name: 'polygons' },
        () => {
          this.$router.go(0)
        }
      )
    },
    switchToMarkers () {
      this.$router.replace(
        { name: 'markers' },
        () => {
          this.$router.go(0)
        }
      )
    }
  }
}
</script>
