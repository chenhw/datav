<template>
      <div id="Login" >
        <div class="title">
           <h2>浙四医院移动医疗车驾驶舱</h2>
        </div>
        <div class="float1">
        <div class="myChart2" id="lefttop" >
          <div class="Top_left1">序号</div>
          <div class="Top_left2">名称</div>
          <div class="Top_left3">类型</div>
          <div class="Top_left4">数值</div>
          <vue-seamless-scroll :data="CardPartsStatisticsList" class="seamless-warp" :class-option="classOption">
            <ul>
              <li  class="DataList_top" v-for="(item,index) in CardPartsStatisticsList"
                   :key="index"
                   v-if="index < 10"
                   style="list-style-type: none; margin: 0px">
                <div class="DataList_left1">{{index+1}}</div>
                <div class="DataList_left2">{{item.itemname}}</div>
                <div class="DataList_left3">{{item.number}}</div>
                <div class="DataList_left4">adfsad</div>
              </li>
            </ul>
          </vue-seamless-scroll>
        </div>
        <div class="myChart3" id="liftdown" >
        </div>
        </div>
        <div class="float2" id="myChart1">
        </div>
        <div class="float3" id="middown" >

        </div>

      </div>
</template>

<script>
  import  elemetio from 'element-ui';
 // import * as echarts from 'echarts';
  import axios from 'axios'
  import '../assets/css/all.css'
  import yiwu from  '../Resources/yiwu.json'
  var sjdfs=require('../Resources/yiwu.json');
 import vueSeamlessScroll from 'vue-seamless-scroll'
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

 //引入jquery就可以使用了
  import $ from 'jquery'

    export default {
        name: "Test1",
      data(){
           return{
             CardPartsStatisticsList:[
               {
                 itemname:"23123",
                 number:1
               },
               {
                 itemname:"23123",
                 number:1
               },
               {
                 itemname:"23123",
                 number:1
               },
               {
                 itemname:"23123",
                 number:1
               }, {
                 itemname:"23123",
                 number:1
               }, {
                 itemname:"23123",
                 number:1
               }, {
                 itemname:"23123",
                 number:1
               }, {
                 itemname:"23123",
                 number:1
               }, {
                 itemname:"23123",
                 number:1
               },
               ],
             //页面展示数据
             bloading : false,
             //页面使用数据
             tableData: [
             ],
              echartObj:null,
              nums:1
           }
      },
      components: {    //组件
        vueSeamlessScroll
      },
      computed: {
        classOption () {
          return {
            step: 0.2, // 数值越大速度滚动越快
            limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
            hoverStop: false, // 是否开启鼠标悬停stop
            direction: 1, // 0向下 1向上 2向左 3向右
            openWatch: true, // 开启数据实时监控刷新dom
            singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
            singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
            waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
          }
        }
      },
      mounted() {
        this.timer1= setInterval(this.scroll,1000);
        this.drawLine();
        this.drawLine2();
        this.drawLine3();
        this.begin();
      },
      methods: {
        drawLine() {
          var chartDom = document.getElementById('myChart1');
          var myChart = echarts.init(chartDom);
          var center = {}
          var option = null;
          var jsons="";

          var points = [
            {value: [120.0855775475454, 29.36529328917455],itemStyle:{color:'#DC143C'}},
            {value: [120.10006054767967, 29.39260240659956],itemStyle:{color:'#4B0082'}},
            {value: [119.97151554807995, 29.272375674683303],itemStyle:{color:'#FFFF00'}}
          ]


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
                },geo: [{
                  map: 'js',
                  aspectScale: 0.9,
                  roam: true, //是否允许缩放
                  //zoom: 1.1, //默认显示级别
                  layoutSize: '95%',
                  layoutCenter: ['50%', '50%'],
                  itemStyle: {
                    areaColor: 'transparent',
                    borderColor: '#37C1FD',
                    borderWidth: 2,
                  },label: {
                    show: true,

                    color: '#ffffff',
                    emphasis: {
                      color: 'white',
                      show: false
                    }
                  },
                  emphasis: {
                    itemStyle: {
                      areaColor: '#0160AD'
                    },
                    label: {
                      show: 0,
                      color: '#fff'
                    }
                  },
                  zlevel: 3,
                }, {
                  map: 'js',
                  aspectScale: 0.9,
                  roam: true, //是否允许缩放
                  //zoom: 1.1, //默认显示级别
                  layoutSize: '95%',
                  layoutCenter: ['50%', '50%'],
                  itemStyle: {
                    areaColor: {
                      type: 'radial',
                      x: 0.7,
                      y: 0.5,
                      r: 0.4,
                      colorStops: [{
                        offset: 0,
                        color: '#56CCFB' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#0160AD' // 100% 处的颜色
                      }],
                      global: false // 缺省为 false
                    },
                    borderColor: '#37C1FD',
                    borderWidth: 2,
                  },
                  zlevel: 2,
                  silent: true,
                }, {
                  map: 'js',
                  aspectScale: 0.9,
                  roam: true, //是否允许缩放
                  //zoom: 1.1, //默认显示级别
                  layoutSize: '95%',
                  layoutCenter: ['50%', '52%'],
                  itemStyle: {
                    areaColor: '#005DDC',
                    borderColor: '#329BF5',
                    borderWidth: 1,
                  },
                  zlevel: 1,
                  silent: true,
                }, ],
                series:[{//标点
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  geoIndex: 0,
                  symbol: 'circle',
                  symbolSize: 4,
                  showEffectOn: 'render',
                  rippleEffect: {
                    brushType: 'fill',
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
                    color: '#FEF134',
                  },
                  zlevel: 6,
                  data: points
                },
                  {
                    name: '白条',
                    type: 'lines',
                    zlevel: 2,
                    tooltip: {
                      formatter: function(param) {
                        return "路线呢"
                      }
                    },
                    effect: {
                      show: true,
                      period: 2, //箭头指向速度，值越小速度越快
                      trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                      symbol: 'arrow', //箭头图标
                      symbolSize: 5, //图标大小
                    },
                    lineStyle: {
                      normal: {
                        color: {
                          type: 'linear',
                          x: 1,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                            offset: 0,
                            color: 'rgba(255,67,67,0.1)' // 0% 处的颜色
                          }, {
                            offset: 1,
                            color: 'rgba(255,67,67,1)' // 100% 处的颜色
                          }],
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
                        curveness: .3 //尾迹线条曲直度
                      },
                      emphasis: {
                        width: 5,
                        opacity: 0.5,
                      }
                    },
                    data: [ {
                      fromName: '拉萨',
                      toName: '上海',
                      count: '1',
                      amount: '89999',
                      coords: [
                        [120.0855775475454, 29.36529328917455],//开始点
                        [119.97151554807995, 29.272375674683303]//结束点
                      ]

                    }
                     ]
                  },]
              };
              myChart.setOption(option);
            })
            .catch(err=>{console.log(err)}
            );

        },
        drawLine2(){
          console.log("进了没那")
          var chartDom1 = document.getElementById('liftdown');
          console.log(chartDom1)
          var myChart1 = echarts.init(chartDom1);
          var option;
          var colorList = [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(51,192,205,0.01)' // 0% 处的颜色
            },
              {
                offset: 1,
                color: 'rgba(51,192,205,0.57)' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
            {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(115,172,255,0.02)' // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: 'rgba(115,172,255,0.67)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
            {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: 'rgba(158,135,255,0.02)' // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: 'rgba(158,135,255,0.57)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
            {
              type: 'linear',
              x: 0,
              y: 1,
              x2: 0,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: 'rgba(252,75,75,0.01)' // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: 'rgba(252,75,75,0.57)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
            {
              type: 'linear',
              x: 1,
              y: 1,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: 'rgba(253,138,106,0.01)' // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: '#FDB36ac2' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
            {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: 'rgba(254,206,67,0.12)' // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: '#FECE4391' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          ]
          var colorLine = ['#33C0CD', '#73ACFF', '#9E87FF', '#FE6969', '#FDB36A', '#FECE43']

          function getRich() {
            let result = {}
            colorLine.forEach((v, i) => {
              result[`hr${i}`] = {
                backgroundColor: colorLine[i],
                borderRadius: 3,
                width: 3,
                height: 3,
                padding: [3, 3, 0, -12]
              }
              result[`a${i}`] = {
                padding: [8, -60, -20, -20],
                color: colorLine[i],
                fontSize: 12
              }
            })
            return result
          }
          let data = [{
            'name': '北京',
            'value': 25
          }, {
            'name': '上海',
            'value': 20
          }, {
            'name': '广州',
            'value': 18
          }, {
            'name': '深圳',
            'value': 15
          }, {
            'name': '未知',
            'value': 13
          }, {
            'name': '海外',
            'value': 9
          }].sort((a, b) => {
            return b.value - a.value
          })
          data.forEach((v, i) => {
            v.labelLine = {
              lineStyle: {
                width: 1,
                color: colorLine[i]
              }
            }
          })
          option = {
            series: [{
              type: 'pie',
              radius: '60%',
              center: ['50%', '50%'],
              clockwise: true,
              avoidLabelOverlap: true,
              label: {
                show: true,
                position: 'outside',
                formatter: function(params) {
                  const name = params.name
                  const percent = params.percent + '%'
                  const index = params.dataIndex
                  return [`{a${index}|${name}：${percent}}`, `{hr${index}|}`].join('\n')
                },
                rich: getRich()
              },
              itemStyle: {
                normal: {
                  color: function(params) {
                    return colorList[params.dataIndex]
                  }
                }
              },
              data,
              roseType: 'radius'
            }]
          }
          option && myChart1.setOption(option);

        },
        drawLine3(){
          var chartDom1 = document.getElementById('middown');
          console.log(chartDom1)
          var myChart1 = echarts.init(chartDom1);
          var option;
          const color = ['#0090FF', '#FFC005', '#36CE9E', '#FF515A', '#8B5CFF', '#00CA69']

          const xAxisData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

          const yAxisData1 = [100, 138, 350, 173, 180, 150, 178]
          const yAxisData2 = [50, 60, 90, 80, 60, 50, 70]
          const yAxisData3 = [233, 201, 182, 198, 234, 210, 230]

          const hexToRgba = (hex, opacity) => {
            let rgbaColor = ''
            const reg = /^#[\da-f]{6}$/i
            if (reg.test(hex)) {
              rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt('0x' + hex.slice(5, 7))},${opacity})`
            }
            return rgbaColor
          }
          const lineStyle = (index) => {
            return {
              normal: {
                color: color[index],
                shadowColor: hexToRgba(color[index], 0.5),
                shadowBlur: 3,
                shadowOffsetY: 8
              }
            }
          }
          const areaStyle = (index) => {
            return {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                  [{
                    offset: 0,
                    color: hexToRgba(color[index], 0.3)
                  }, {
                    offset: 1,
                    color: hexToRgba(color[index], 0.1)
                  }]
                ),
                shadowColor: hexToRgba(color[index], 0.1),
                shadowBlur: 10
              }
            }
          }

          option = {
            backgroundColor: '#fff',
            color: color,
            grid: {
              top: 100,
              left: 100,
              right: 100,
              bottom: 100
            },
            title: {
              text: '单位：万人·万辆',
              top: 10,
              right: 10,
              textStyle: {
                fontSize: 12,
                fontWeight: 400,
                color: '#567'
              }
            },
            legend: {
              icon: 'rect',
              itemHeight: 12,
              itemWidth: 12,
              top: 10,
              left: 10,
              textStyle: {
                fontSize: 12,
                color: '#567'
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'line'
              },
              extraCssText: 'font-size:14px;line-height:24px;color:#567;background:#fff;box-shadow:0 0 3px rgba(0, 0, 0, 0.2)',
              formatter: function(params) {
                let html = ''
                params.forEach(v => {
                  console.log(v)
                  html += `<div><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>${v.seriesName}<span style="color:${color[v.componentIndex]};font-size:18px;font-weight:700">${v.value}</span>万`
                })
                return html
              }
            },
            xAxis: {
              data: xAxisData
            },
            yAxis: {
              show: false
            },
            series: [{
              name: '客流量',
              type: 'line',
              data: yAxisData1,
              smooth: true,
              symbolSize: 6,
              lineStyle: lineStyle(0),
              areaStyle: areaStyle(0)
            }, {
              name: '客车流量',
              type: 'line',
              data: yAxisData2,
              smooth: true,
              symbolSize: 6,
              lineStyle: lineStyle(1),
              areaStyle: areaStyle(1)
            }, {
              name: '货车流量',
              type: 'line',
              data: yAxisData3,
              smooth: true,
              symbolSize: 6,
              lineStyle: lineStyle(2),
              areaStyle: areaStyle(2)
            }]
          };
          option && myChart1.setOption(option);
        },
        //坐上角数据
        begin(){
          this.bloading = true
          this.tableData.unshift({ date: this.nums++ })
          this.tableMove()
          this.a = setInterval(() =>{
            this.tableMove()
          },1000)
        },
        tableMove(){
          ///定时器
          // 48px 为表格行高
          let t = document.getElementsByClassName('el-table__body-wrapper')
          setTimeout(() =>{
            this.tableData.splice(6,1)
            t[0].style.transition = 'all .5s'
            t[0].style.marginTop = '48px'
          },500)
          setTimeout(() =>{
            this.tableData.unshift({ date: this.nums++ })
            t[0].style.transition = 'all 0s ease 0s'
            t[0].style.marginTop = '0'
          },1000)
        },


        scroll(){
          let con1 = this.$refs.con1;
          con1.style.marginTop='-30px';
          this.animate=!this.animate;
          var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
          setTimeout(function(){
            that.items.push(that.items[0]);
            that.items.shift();
            con1.style.marginTop='0px';
            that.animate=!that.animate; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
          },500)
        },
        mEnter () {

          clearInterval(this.timer1)

        },
        mLeave () {

          this.timer1= setInterval(this.scroll,1000)


        },


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
      background: skyblue;
    };
    .float1{//左边最外层div
      float:left;
      width: 25% ;
      height: 95%;
      margin-right: 20px;
      //border:1px #ccc solid;
    };
    .float2{//中间上面div
      float:left;
      width: 40% ;
      height: 55%;
      margin: 10px;
      border:1px #ccc solid;
    };
    .float3{//中间下面div
      float:left;
      width: 40% ;
      height: 35%;
      margin-left: 10px;
      border:1px #ccc solid;
    };
    .myChart2{//左边div，上面div
      width: 100% ;
      height: 58%;
      margin: 10px;
      border:1px #ccc solid;

     // border:1px ;
    };
    .myChart3{//左边div,下边div
      width: 100% ;
      height: 37%;
      margin-right: 10px;
      margin-left: 10px;
      border:1px #ccc solid;

      // border:1px ;
    };
    .myChart1 {//地图div
      width: 100% ;
      height: 100%;
      border:1px #ccc solid;
    };

    .title{
      width: 100%;
      height: 3%;
    }

    .box {
      padding: 100px;
      display: flex;
    }

    .btn-box {
      margin-left: 100px;
      margin-top: 50px;
    }

    .seamless-warp{
      float:left;
      margin-top: 10px;
      width: 100%;
      height: calc(100% - 16px);
      overflow: hidden;
    }
    .Top_left1{
      float:left;
      width: 20%;

    }
    .Top_left2{
      float:left;
      width: 20%;
    }
    .Top_left3{
      float:left;
      width: 20%;
    }
    .Top_left4{
      float:left;
      width: 40%;
    }
    .DataList_left1{
      float:left;
      width: 10%;
    }
    .DataList_left2{
      float:left;
      width: 20%;
    }
    .DataList_left3{
      float:left;
      width: 30%;
    }
    .DataList_left4{
      float:left;
      width: 40%;
    }
  }

</style>
