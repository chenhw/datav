<template>
  <div class="center-cmp">
    <div class="map_bg"></div>
    <div class="circle_allow"></div>
    <div class="circle_bg"></div>
    <div class="fill-h" id="mainMap"></div>
    <div
      style="
                        height: 60;
                        width: 20;
                        position: absolute;
                        top: 20;
                        right: 20
                      "
    >
      <dv-decoration-1 style="width: '100%'; height: '100%'" />
    </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "CenterCmp",
  components: {},
  data() {
    return {};
  },
  methods: {
    initMap() {
      var chartDom = document.getElementById("mainMap");
      var myChart = echarts.init(chartDom);
      var points = [
        {
          value: [120.0855775475454, 29.36529328917455],
          itemStyle: { color: "#DC143C" }
        },
        {
          value: [120.10006054767967, 29.39260240659956],
          itemStyle: { color: "#4B0082" }
        },
        {
          value: [119.97151554807995, 29.272375674683303],
          itemStyle: { color: "#FFFF00" }
        }
      ];
      //             this.$axios.get('../../static/ddd.geojson')
      //         .then(function(res){
      //           echarts.registerMap('js', res.data);})
      //   myChart.setOption({
      //     tooltip: {
      //       trigger: "item"
      //     },

      //     visualMap: {
      //       // orient: 'horizontal',
      //       min: 0,
      //       left: "20%",
      //       max: 10000,
      //       text: ["高", "低"], // 文本，默认为数值文本
      //       splitNumber: 0,
      //       color: ["#0054bb", "#85ADDE"],
      //       textStyle: {
      //         color: "#c3dbff"
      //       }
      //     },

      //     series: [
      //       {
      //         name: "2011全国GDP分布",
      //         type: "map",
      //         mapType: "浙江",
      //         mapLocation: {
      //           x: "left"
      //         },
      //         // selectedMode: 'multiple',
      //         itemStyle: {
      //           normal: { label: { show: true, color: "#fff" }, borderWidth: 0 }
      //           // emphasis: { label: { show: true } },
      //           // borderWidth: 0,
      //           // borderColor: '#eee',
      //         },

      //         data: [
      //           { name: "西藏", value: 700 },
      //           { name: "青海", value: 1670.44 },
      //           { name: "宁夏", value: 2102.21 },
      //           { name: "海南", value: 2522.66 },
      //           { name: "甘肃", value: 5020.37 },
      //           { name: "贵州", value: 5701.84 },
      //           { name: "新疆", value: 6610.05 },
      //           { name: "云南", value: 22 },
      //           { name: "重庆", value: 500 },
      //           { name: "吉林", value: 1000 },
      //           { name: "山西", value: 5000 },
      //           { name: "天津", value: 4000 },
      //           { name: "江西", value: 9000 },
      //           { name: "广西", value: 689 },
      //           { name: "陕西", value: 9982 },
      //           { name: "黑龙江", value: 12582 },
      //           { name: "内蒙古", value: 14359.88 },
      //           { name: "安徽", value: 22 },
      //           { name: "北京", value: 800 },
      //           { name: "福建", value: 1223 },
      //           { name: "上海", value: 19195.69 },
      //           { name: "湖北", value: 537 },
      //           { name: "湖南", value: 8872 },
      //           { name: "四川", value: 21026.68 },
      //           { name: "辽宁", value: 22226.7 },
      //           { name: "河北", value: 24515.76 },
      //           { name: "河南", value: 26931.03 },
      //           { name: "浙江", value: 32318.85 },
      //           { name: "山东", value: 45361.85 },
      //           { name: "江苏", value: 49110.27 },
      //           { name: "广东", value: 53210.28 },
      //           { name: "台湾", value: 53210.28 },
      //           { name: "南海诸岛", value: 53210.28 }
      //         ]
      //       }
      //     ]
      //   });
      //
      let option = {};
      this.$axios
        .get("../../static/ddd.geojson")
        .then(function(res) {
          echarts.registerMap("js", res.data);
          option = {
            title: {
              show: true,
              left: "0%",
              y: "top",
              text: "",
              textStyle: {
                color: "#2980b9",
                fontSize: 16
              }
            },
            geo: [
              {
                map: "js",
                aspectScale: 0.9,
                roam: true, //是否允许缩放
                //zoom: 1.1, //默认显示级别
                layoutSize: "95%",
                layoutCenter: ["50%", "50%"],
                itemStyle: {
                  areaColor: "transparent",
                  borderColor: "#37C1FD",
                  borderWidth: 2
                },
                label: {
                  show: true,

                  color: "#ffffff",
                  emphasis: {
                    color: "white",
                    show: false
                  }
                },
                emphasis: {
                  itemStyle: {
                    areaColor: "#0160AD"
                  },
                  label: {
                    show: 0,
                    color: "#fff"
                  }
                },
                zlevel: 3
              },
              {
                map: "js",
                aspectScale: 0.9,
                roam: true, //是否允许缩放
                //zoom: 1.1, //默认显示级别
                layoutSize: "95%",
                layoutCenter: ["50%", "50%"],
                itemStyle: {
                  areaColor: {
                    type: "radial",
                    x: 0.7,
                    y: 0.5,
                    r: 0.4,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#56CCFB" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#0160AD" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  },
                  borderColor: "#37C1FD",
                  borderWidth: 2
                },
                zlevel: 2,
                silent: true
              },
              {
                map: "js",
                aspectScale: 0.9,
                roam: true, //是否允许缩放
                //zoom: 1.1, //默认显示级别
                layoutSize: "95%",
                layoutCenter: ["50%", "52%"],
                itemStyle: {
                  areaColor: "#005DDC",
                  borderColor: "#329BF5",
                  borderWidth: 1
                },
                zlevel: 1,
                silent: true
              }
            ],
            series: [
              {
                //标点
                type: "effectScatter",
                coordinateSystem: "geo",
                geoIndex: 0,
                symbol: "circle",
                symbolSize: 4,
                showEffectOn: "render",
                rippleEffect: {
                  brushType: "fill",
                  scale: 10
                },
                hoverAnimation: true,
                /* label: {
                    formatter: p => p.data[2],
                    position: 'right',
                    color: '#fff',
                    fontSize: 14,
                    distance: 10,
                    show: !0,
                  },*/
                itemStyle: {
                  color: "#FEF134"
                },
                zlevel: 6,
                data: points
              },
              {
                name: "白条",
                type: "lines",
                zlevel: 2,
                tooltip: {
                  formatter: function(param) {
                    return "路线呢";
                  }
                },
                effect: {
                  show: true,
                  period: 2, //箭头指向速度，值越小速度越快
                  trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                  symbol: "arrow", //箭头图标
                  symbolSize: 5 //图标大小
                },
                lineStyle: {
                  normal: {
                    color: {
                      type: "linear",
                      x: 1,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(255,67,67,0.1)" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "rgba(255,67,67,1)" // 100% 处的颜色
                        }
                      ],
                      global: false // 缺省为 false
                    },
                    // color: '#E0474D'
                    /* function (value){ //随机颜色

                            ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
                            '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
                            '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
                            '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
                            '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
                            '#52b9c7','#4fb6d2','#4ab2e5']
     return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
     },*/

                    width: 3, //线条宽度
                    opacity: 0.9, //尾迹线条透明度
                    curveness: 0.3 //尾迹线条曲直度
                  },
                  emphasis: {
                    width: 5,
                    opacity: 0.5
                  }
                },
                data: [
                  {
                    fromName: "拉萨",
                    toName: "上海",
                    count: "1",
                    amount: "89999",
                    coords: [
                      [120.0855775475454, 29.36529328917455], //开始点
                      [119.97151554807995, 29.272375674683303] //结束点
                    ]
                  }
                ]
              }
            ]
          };
          myChart.setOption(option);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style lang="less">
.center-cmp {
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
