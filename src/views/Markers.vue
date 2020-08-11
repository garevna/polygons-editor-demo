<template>
  <Markers
        :saveData.sync="saveMarkers"
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

import 'dgtek-markers'
import 'dgtek-markers/dist/dgtek-markers.css'

export default {
  data () {
    return {
      saveMarkers: false
    }
  },
  watch: {
    saveMarkers (val) {
      if (val) this.saveMarkersData()
    }
  },

  methods: {
    async saveMarkersData () {
      const markers = localStorage.getAllMarkers()
      console.log(markers)
      // await axios.post(..., { data: JSON.stringify(data) })
      this.saveMarkers = false
    }
  },

  mounted () {
    console.log('Markers mounted')
  }
}

</script>
