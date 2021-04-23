<template>
  <div id="Login" >
  <div class="title">
    <h1>浙江大学第一附属医院移动医疗车驾驶舱</h1>
  </div>
  <div class="myChart1" id="myChart"  >
  </div>
</div>
</template>

<script>
  import axios from 'axios'
  import '../assets/css/all.css'
  import yiwu from  '../Resources/yiwu.json'
  var sjdfs=require('../Resources/yiwu.json');
  //引入jquery就可以使用了
  import $ from 'jquery'


  var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  // 散点图
  require('echarts/lib/chart/scatter')
  // 散点图放大
  require('echarts/lib/chart/effectScatter')
  // 地图
  require('echarts/lib/chart/map')
  // 图例
  require('echarts/lib/component/legend')
  // 提示框
  require('echarts/lib/component/tooltip')
  // 地图geo
  require('echarts/lib/component/geo')
  // 中国地图JS文件
  require('echarts/map/js/china')
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        jsons:[]
      }
    },
    mounted() {
      this.drawLine1();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          backgroundColor: '#272D3A',
          // 标题
          title: {
            text: '中国地图闪闪发光',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          // 地图上圆点的提示
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              return params.name + ' : ' + params.value[2]
            }
          },
          // 图例按钮 点击可选择哪些不显示
          legend: {
            orient: 'vertical',
            left: 'left',
            top: 'bottom',
            data: ['地区热度', 'top5'],
            textStyle: {
              color: '#fff'
            }
          },
          // 地理坐标系组件
          geo: {
            map: 'china',
            label: {
              // true会显示城市名
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              // 地图背景色
              normal: {
                areaColor: '#465471',
                borderColor: '#282F3C'
              },
              // 悬浮时
              emphasis: {
                areaColor: '#8796B4'
              }
            }
          },
          // 系列列表
          series: [
            {
              name: '地区热度',
              // 表的类型 这里是散点
              type: 'scatter',
              // 使用地理坐标系，通过 geoIndex 指定相应的地理坐标系组件
              coordinateSystem: 'geo',
              data: [],
              // 标记的大小
              symbolSize: 12,
              // 鼠标悬浮的时候在圆点上显示数值
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  color: '#ddb926'
                },
                // 鼠标悬浮的时候圆点样式变化
                emphasis: {
                  borderColor: '#fff',
                  borderWidth: 1
                }
              }
            },
            {
              name: 'top5',
              // 表的类型 这里是散点
              type: 'effectScatter',
              // 使用地理坐标系，通过 geoIndex 指定相应的地理坐标系组件
              coordinateSystem: 'geo',
              data: [],
              // 标记的大小
              symbolSize: 12,
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  color: '#f4e925',
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              zlevel: 1
            }
          ]
        })
      },
      drawLine1(){  //义乌行政图
        var chartDom = document.getElementById('myChart');
        var myChart = echarts.init(chartDom);
        var center = {}
        var option = null;
        var jsons="";
        this.$axios.get('../../static/ddd.geojson')
          .then(function(res){
            console.log('读到了？');
            console.log(res);
            jsons=res.data;
            console.log(jsons);
          echarts.registerMap('js', res.data);
          option = {
            title: {
              show: true,
              left: '0%',
              y: "top",
              text: "",
              textStyle: {
                color: "#2980b9",
                fontSize: 16
              }
            },
            series: [
              //地图
              {
                type: 'map',
                mapType: 'js',
                geoIndex: -1,
                zoom: 1.2, //默认显示级别//地图比例
                left: '20%',
                label: {
                  show: true,

                  color: '#ffffff',
                  emphasis: {
                    color: 'white',
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: '#268011',//边界线颜色
                    borderWidth: 1,
                    areaColor: '#90235c' //地图背景
                  },
                },

              }
            ]
          };
          myChart.setOption(option);
          })
          .catch(err=>{console.log(err)}
          );

      },
      drawLine2(){
        var chartDom = document.getElementById('myChart');
        var myChart = echarts.init(chartDom);
        var option;

        $.get(ROOT_PATH + '/data/asset/data/hangzhou-tracks.json', function(data) {
          var lines = data.map(function (track) {
            return {
              coords: track.map(function (seg, idx) {
                return seg.coord;
              })
            };
          });
          myChart.setOption(option = {
            bmap: {
              center: [120.13066322374, 30.240018034923],
              zoom: 14,
              roam: true,
              mapStyle: {
                styleJson: [{
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                }, {
                  'featureType': 'land',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#f3f3f3'
                  }
                }, {
                  'featureType': 'railway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'highway',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#fdfdfd'
                  }
                }, {
                  'featureType': 'highway',
                  'elementType': 'labels',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'arterial',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#fefefe'
                  }
                }, {
                  'featureType': 'arterial',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#fefefe'
                  }
                }, {
                  'featureType': 'poi',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'green',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'subway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'manmade',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                }, {
                  'featureType': 'local',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                }, {
                  'featureType': 'arterial',
                  'elementType': 'labels',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'boundary',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#fefefe'
                  }
                }, {
                  'featureType': 'building',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                }, {
                  'featureType': 'label',
                  'elementType': 'labels.text.fill',
                  'stylers': {
                    'color': '#999999'
                  }
                }]
              }
            },
            series: [{
              type: 'lines',
              coordinateSystem: 'bmap',
              data: lines,
              polyline: true,
              lineStyle: {
                color: 'purple',
                opacity: 0.6,
                width: 1
              }
            }]
          });
        });

        option && myChart.setOption(option);

      },
      drawLine3(){
        var chartDom = document.getElementById('myChart');
        var myChart = echarts.init(chartDom);
        var uploadedDataURL = "/Resources/ddd.geojson" ;

        var center = {}
        var option = null;
        $.get(uploadedDataURL, function(json) {
          echarts.registerMap('js', json);
          option = {
            title: {
              show: true,
              x: "center",
              y: "top",
              text: "浙江省义乌市行政区域图",
              textStyle: {
                color: "#2980b9",
                fontSize: 16
              }
            },
            series: [
              //地图
              {
                type: 'map',
                mapType: 'js',
                geoIndex: -1,
                zoom: 1.1, //默认显示级别
                label: {
                  show: true,
                  color: '#ffffff',
                  emphasis: {
                    color: 'white',
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: '#2980b9',
                    borderWidth: 1,
                    areaColor: '#12235c'
                  },
                },

              }
            ]
          };
          myChart.setOption(option);
        });


      },
      drawLine4(){
        console.log('开始了');
        this.$axios.get('../../static/yiwu.json')
          .then(function(res){
            console.log('读到了？');
            console.log(res)
          })
          .catch(err=>{console.log(err)}
          )


      }
    }
  }
</script>

<style lang="scss" scoped>
   #Login {
     width: 100% ;
     height: 100%;
     .title {
        width: 100%;
        height: 5%;
        //background: skyblue;
     };
     .myChart1 {
       width: 30% ;
       height: 70%
     }
   }

</style>
