<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
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
		apple_production_data() {
			return this.$store.state.apple_production_data
		},
		cdata() {
			let data = {}
			data.category = this.apple_production_data.years
			data.lineData = this.apple_production_data.global_productions
			data.barData = this.apple_production_data.productions
			data.rateData = this.apple_production_data.ratios
			return data
		}

	}
};
</script>

<style lang="scss" scoped>
</style>