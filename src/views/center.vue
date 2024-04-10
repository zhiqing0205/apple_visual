<template>
  <div id="center">
    <div class="up">
      <div
        class="bg-color-black item"
        v-for="item in titleItem"
        :key="item.title"
      >
        <p class="ml-3 colorBlue fw-b fs-xl">{{ item.title }}</p>
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
    return {
	    titleItem: [
		    {
			    title: '今年累计任务建次数',
			    number: {
				    number: [120],
				    toFixed: 1,
				    textAlign: 'left',
				    content: '{nt}',
				    style: {
					    fontSize: 26
				    }
			    }
		    },
		    {
			    title: '本月累计任务次数',
			    number: {
				    number: [18],
				    toFixed: 1,
				    textAlign: 'left',
				    content: '{nt}',
				    style: {
					    fontSize: 26
				    }
			    }
		    },
		    {
			    title: '今日累计任务次数',
			    number: {
				    number: [2],
				    toFixed: 1,
				    textAlign: 'left',
				    content: '{nt}',
				    style: {
					    fontSize: 26
				    }
			    }
		    },
		    {
			    title: '今年失败任务次数',
			    number: {
				    number: [14],
				    toFixed: 1,
				    textAlign: 'left',
				    content: '{nt}',
				    style: {
					    fontSize: 26
				    }
			    }
		    },
		    {
			    title: '今年成功任务次数',
			    number: {
				    number: [106],
				    toFixed: 1,
				    textAlign: 'left',
				    content: '{nt}',
				    style: {
					    fontSize: 26
				    }
			    }
		    },
		    {
			    title: '今年达标任务个数',
			    number: {
				    number: [100],
				    toFixed: 1,
				    textAlign: 'left',
				    content: '{nt}',
				    style: {
					    fontSize: 26
				    }
			    }
		    }
	    ],
    }
  },
  components: {
    CenterChart
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
      height: 70px;
      .dv-dig-flop {
        width: 150px;
        height: 30px;
      }
    }
  }
}
</style>
