<template>
  <div id="center">
    <div class="up">
      <div
        class="bg-color-black item"
        v-for="item in titleItem"
        :key="item.title"
      >
        <p class="ml-3 colorBlue fw-b">{{ item.title }}</p>
        <div>
          <dv-digital-flop
            class="dv-dig-flop ml-1 mt-2 pl-3"
            :config="item.number"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CenterChart from '@/components/echart/center/centerChartRate'

export default {
  data() {
    return {}
  },
  components: {
    CenterChart
  },
	computed: {
		apple_efficiency_data() {
			return this.$store.state.apple_efficiency_data
		},
		titleItem() {
			let data = []
			for (let i = 0; i < this.apple_efficiency_data.length; i++) {
				data.push({
					title: this.apple_efficiency_data[i].country,
					number: {
						number: [this.apple_efficiency_data[i].efficiency],
						toFixed: 0,
						content: '{nt}',
						style: {
							fontSize: 30
						}
					}
				})
			}
			return data
		}

	}
}
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 6px;
      padding-top: 8px;
      margin-top: 8px;
      width: 32%;
      height: 85px;
      .dv-dig-flop {
        width: 150px;
        height: 30px;
      }
    }
  }
}
</style>
