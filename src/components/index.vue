<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="header_main">
        <div class="left_bg"></div>
        <div class="right_bg"></div>
        <h3>浙江大学医学院附属第四医院</h3>
      </div>

      <dv-border-box-1 class="main-container">
        <dv-border-box-11 title="今日实时" class="left-chart-container">
          <Left-Chart-1 />
          <digitalFlop />
          <LeftChart2 />
        </dv-border-box-11>

        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-10 class="rmctc-left-container">
              <CenterCmp />
            </dv-border-box-10>

            <div class="rmctc-right-container">
              <dv-border-box-6 class="rmctc-chart-1">
                <scrollBoard />
              </dv-border-box-6>
            </div>
          </div>

          <dv-border-box-8 class="rmc-bottom-container">
            <Bottom-Charts />
          </dv-border-box-8>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import LeftChart1 from "./LeftChart1";
import LeftChart2 from "./LeftChart2";
import CenterCmp from "./CenterCmp";
import BottomCharts from "./BottomCharts";
import scrollBoard from "./scrollBoard.vue";
import digitalFlop from "./digitalFlop.vue";
import screenfull from "screenfull";
export default {
  name: "DataView",
  components: {
    LeftChart1,
    LeftChart2,
    digitalFlop,
    BottomCharts,
    scrollBoard,
    CenterCmp
  },
  data() {
    return {};
  },
  mounted() {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
};
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url("./img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mh-left {
      font-size: 20px;
      color: rgb(1, 134, 187);

      a:visited {
        color: rgb(1, 134, 187);
      }
    }

    .mh-middle {
      font-size: 30px;
    }

    .mh-left,
    .mh-right {
      width: 450px;
    }
  }

  .main-container {
    height: calc(~"100% - 80px");

    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }

  .left-chart-container {
    width: 22%;
    box-sizing: border-box;

    .border-box-content {
      flex-direction: column;
    }
  }

  .right-main-container {
    width: 78%;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .rmc-top-container {
    height: 65%;
    display: flex;
  }

  .rmctc-left-container {
    width: 95%;
  }

  .rmctc-right-container {
    width: 25%;
  }

  .rmc-bottom-container {
    height: 35%;
  }

  .rmctc-chart-1,
  .rmctc-chart-2 {
    height: 100%;
  }
}
</style>
