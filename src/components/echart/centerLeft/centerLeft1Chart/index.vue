<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  data () {
    return {
			};
  },
  components: {
    Chart,
  },
  mounted () {
  },
  methods: {
  },
	computed: {
		apple_capacity_data() {
			return this.$store.state.apple_capacity_data
		},
		cdata() {
			let xData = []
			let seriesData = []
			for (let i = 0; i < this.apple_capacity_data.length; i++) {
				xData.push(this.apple_capacity_data[i].province)
				seriesData.push({
					value: this.apple_capacity_data[i].capacity,
					name: this.apple_capacity_data[i].province
				})
			}
			return {
				xData: xData,
				seriesData: seriesData
			}
		}
	}
}
</script>

<style lang="scss" scoped>
</style>