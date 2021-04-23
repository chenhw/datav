<template>
  <div class="bottom-charts">
    <div class="fill-h" id="myChart6"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "BottomCharts",
  components: {},
  data() {
    return {
      option: []
    };
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById("myChart6");
      const myChart = echarts.init(chartDom);

      this.option = {
        title: {
          show: true,
          text: "就诊流量",
          x: "center",
          textStyle: {
            //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: "normal",
            color: "#01c4f7"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["门诊人次", "急诊人次"],
          textStyle: {
            fontSize: 12,
            color: "#ffffff"
          },
          top: 20,
          itemWidth: 20, // 设置宽度

          itemHeight: 12, // 设置高度

          itemGap: 10 // 设置间距
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: [
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00"
          ],
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#07234d"]
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#c3dbff", //更改坐标轴文字颜色
              fontSize: 12 //更改坐标轴文字大小
            }
          }
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#07234d"]
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#c3dbff", //更改坐标轴文字颜色
              fontSize: 12 //更改坐标轴文字大小
            }
          }
        },
        series: [
          {
            name: "门诊人次",
            type: "line",
            // smooth: true,
            data: [140, 170, 90, 180, 90, 90],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#9408fc" },
                { offset: 1, color: "#05aed3" }
              ])
            }
          },
          {
            name: "急诊人次",
            type: "line",
            // smooth: true,
            data: [0, 10, 80, 130, 120, 120],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#13b985" },
                { offset: 1, color: "#dc9b18" }
              ])
            }
          }
        ]
      };

      this.option && myChart.setOption(this.option);
      const self = this;
      setInterval(() => {
        self.option.xAxis.data.shift();
        self.option.xAxis.data.push(this.randomExtend(30, 300));
        if (self.option.series[0].data.length > 12) {
          self.option.series[0].data.shift();
        }
        self.option.series[0].data.push(this.randomExtend(30, 300));
        if (self.option.series[1].data.length > 12) {
          self.option.series[1].data.shift();
        }
        self.option.series[1].data.push(this.randomExtend(30, 100));
        myChart.setOption({
          series: self.option.series
        });
      }, 3000);
    },
    randomExtend(minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10);
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      }
    }
  },
  mounted() {
    this.initChart();
  }
};
</script>

<style lang="less">
.bottom-charts {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  .fill-h {
    height: 100%;
    min-height: 100%;
  }
  .cc-header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }

  .cc-details {
    height: 120px;
    display: flex;
    justify-content: center;
    font-size: 32px;
    align-items: center;

    .card {
      background-color: rgba(4, 49, 128, 0.6);
      color: #08e5ff;
      height: 70px;
      width: 70px;
      font-size: 45px;
      font-weight: bold;
      line-height: 70px;
      text-align: center;
      margin: 10px;
    }
  }

  .cc-main-container {
    position: relative;
    flex: 1;
    display: flex;

    .ccmc-middle {
      width: 50%;
      height: 90%;

      .active-ring-name {
        font-size: 20px !important;
      }
    }

    .ccmc-left,
    .ccmc-right {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 24px;

      span {
        font-size: 40px;
        font-weight: bold;
      }

      .station-info {
        height: 80px;
        display: flex;
        align-items: center;
      }
    }

    .ccmc-left {
      align-items: flex-end;

      span {
        margin-left: 20px;
      }
    }

    .ccmc-right {
      align-items: flex-start;

      span {
        margin-right: 20px;
      }
    }
  }

  .label-tag {
    position: absolute;
    width: 500px;
    height: 30px;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
