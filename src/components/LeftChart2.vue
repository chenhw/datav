<template>
  <div id="leftbottom">
    <div class="content_title">预约方式构成</div>
    <dv-border-box-1>
      <div class="xpanel">
        <div class="fill-g" id="countyMap"></div>
      </div>
    </dv-border-box-1>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "TopLeftCmp",
  data() {
    return {
      option: []
    };
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById("countyMap");
      const myChart = echarts.init(chartDom);

      this.option = {
        color: ["#9702fe", "#ff893b", "#37cbff", "#d90051", "#b2e269"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          top: 35,
          right: "2%",
          data: ["微信", "支付宝", "自助机", "诊间", "其他"],
          textStyle: {
            fontSize: 12,
            color: "#ffffff"
          },
          icon: "circle",
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          itemGap: 10 // 设置间距
        },
        series: [
          {
            name: "预约方式",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["35%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "微信" },
              { value: 310, name: "支付宝" },
              { value: 234, name: "自助机" },
              { value: 135, name: "诊间" },
              { value: 1548, name: "其他" }
            ]
          }
        ]
      };
      this.option && myChart.setOption(this.option);
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
#leftbottom {
  padding-top: 70px;
  .top-left-cmp {
    display: flex;

    .dc-left,
    .dc-right {
      width: 60%;
    }

    .dc-text {
      display: flex;
      flex-direction: column;
      height: 30%;
      font-size: 10px;
      padding: 10px;
      box-sizing: border-box;
    }

    .dc-left .dc-text {
      align-items: flex-end;
      justify-content: center;
    }

    .dc-right .dc-text {
      justify-content: flex-start;
      padding-top: 20px;
    }

    .dc-left .dv-border-box-5 {
      padding: 10px;
      box-sizing: border-box;
    }

    .dc-right .dv-border-box-5 {
      padding: 10px;
      padding-left: 75px;
      box-sizing: border-box;
    }

    .main-value {
      font-weight: bold;
      font-size: 10px;

      span {
        font-size: 50px;
        color: #00c0ff;
        margin-right: 15px;
      }
    }

    .compare-value {
      height: 35px;
      line-height: 35px;
      font-size: 18px;

      span {
        margin-right: 30px;
      }
    }
  }
}
</style>
