<template>
  <div id="centerRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="align-left" class="text-icon"></icon>
        </span>
        <span class="text mx-2">主要国家人均苹果消费量</span>
      </div>
      <div class="d-flex ai-center flex-column body-box">
        <dv-capsule-chart class="dv-cap-chart" :config="config" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
	computed: {
		apple_consumption_data() {
			return this.$store.state.apple_consumption_data
		},
		config() {
			let data = []
			for (let i = 0; i < this.apple_consumption_data.length; i++) {
				data.push({
					name: this.apple_consumption_data[i].country,
					value: this.apple_consumption_data[i].consumption
				})
			}
			return {
				data: data
			}
		}
	}
}
</script>

<style lang="scss" scoped>
#centerRight2 {
  $box-height: 410px;
  $box-width: 620px;
  padding: 5px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    padding: 5px;
    height: $box-height;
    width: $box-width;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-cap-chart {
      width: 100%;
      height: 350px;
    }
  }
}
</style>
