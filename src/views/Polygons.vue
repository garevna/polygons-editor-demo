<template>
  <Polygons
        :saveData.sync="savePolygons"
  />
</template>

<style lang="scss">
button {
  padding: 8px 16px;
  outline: none;
}
button:hover {
  color: #09b;
  background: #09b7;
}
</style>

<script>

import 'dgtek-polygons'
import 'dgtek-polygons/dist/dgtek-polygons.css'

export default {
  data () {
    return {
      savePolygons: false
    }
  },
  watch: {
    savePolygons (val) {
      if (val) this.savePolygonsData()
    }
  },

  methods: {
    removeGoogleMaps () {
      location.reload()
    },
    async savePolygonsData () {
      const polygons = localStorage.getAllPolygons()
      console.log(polygons)
      this.saveData = false
    }
  },

  beforeMount () {
    // this.$router.go()
  }
}

</script>
