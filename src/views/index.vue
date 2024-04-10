<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor" />
            <div class="title">
              <span class="title-text">苹果产业大数据分析</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="decorationColor"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-left"></span>
              <span class="text">国内库容分布</span>
            </div>
            <div class="react-left ml-3">
              <span class="text">苹果主产国生产效率</span>
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right bg-color-blue mr-3">
              <span class="text fw-b btn" @click="crawl_data">爬取最新数据</span>
            </div>
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div>
          </div>
        </div>

        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <centerLeft1 />
              </dv-border-box-12>
            </div>
            <!-- 中间 -->
            <div>
              <center />
            </div>
            <!-- 中间 -->
            <div>
              <centerRight2 />
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bottom-box">
            <dv-border-box-13>
              <bottomLeft />
            </dv-border-box-13>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import { formatTime } from '../utils/index.js'
import centerLeft1 from './centerLeft1'
import centerLeft2 from './centerLeft2'
import centerRight1 from './centerRight1'
import centerRight2 from './centerRight2'
import center from './center'
import bottomLeft from './bottomLeft'
import axios from "axios";

export default {
  mixins: [ drawMixin ],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      decorationColor: ['#568aea', '#000000'],
	    apple_production_data: [],
	    apple_capacity_data: [],
	    apple_consumption_data: [],
	    fruit_price_data: [],
	    apple_efficiency_data: []
    }
  },
  components: {
    centerLeft1,
    centerLeft2,
    centerRight1,
    centerRight2,
    center,
    bottomLeft
  },
  mounted() {
    this.timeFn()
	  this.get_data()
  },
  beforeDestroy () {
    clearInterval(this.timing)
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
	  crawl_data() {
		  axios.get('/api/crawl_data/').then(res => {
				alert('爬取成功')
			  this.get_data()
		  })
	  },
	  get_data() {
		  axios.get('/api/get_data/').then(res => {
			  this.loading = false
			  console.log(res)
			  this.apple_production_data = res.data.apple_production
			  this.apple_capacity_data = res.data.apple_capacity
			  this.apple_consumption_data = res.data.apple_consumption
			  this.fruit_price_data = res.data.fruit_price
			  this.apple_efficiency_data = res.data.apple_efficiency

			  this.$store.commit('setAppleProductionData', this.apple_production_data)
			  this.$store.commit('setAppleCapacityData', this.apple_capacity_data)
			  this.$store.commit('setAppleConsumptionData', this.apple_consumption_data)
			  this.$store.commit('setFruitPriceData', this.fruit_price_data)
			  this.$store.commit('setAppleEfficiencyData', this.apple_efficiency_data)
		  })
	  }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
.btn {
	cursor: pointer;
}
</style>
