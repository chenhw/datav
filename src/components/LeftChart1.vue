<template>
  <div class="left-chart-1">
    <div class="lc1-header"></div>
    <div class="lc1-details">挂号总人次<span>430</span></div>
        <div
      class="digital-flop-item"
      v-for="item in digitalFlopData"
      :key="item.title"
    >
      <div class="digital-flop-title">{{ item.title }}</div>
      <div class="digital-flop">
        <dv-digital-flop
          :config="item.number"
          style="width:100px;height:50px;"
        />
          <div class="unit">{{ item.unit }}</div>
      </div>
    </div>

    <dv-decoration-2 style="height:10px;" />
  </div>
</template>

<script>
export default {
  name: 'LeftChart1',
  data () {
    return {

      digitalFlopData: [
        {
          title: '上午',
          number: {
            number: [20, 10],
            content: '{nt} / {nt}',
            textAlign: 'left',
            style: {
              fill: '#4d99fc',
              fontWeight: 'bold'
            }
          }
        },
        {
          title: '下午',
          number: {
            number: [0, 30],
            content: '{nt} / {nt}',
            textAlign: 'left',
            style: {
              fill: '#4d99fc',
              fontWeight: 'bold'
            }
          }
        }
      ]
    }
  }
}
</script>

<style lang="less">
.left-chart-1 {
  width: 100%;
  height: 37%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  .digital-flop {
    display: flex;
    flex-wrap: wrap;
  } 

  .digital-flop-title {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .lc1-header {
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-bottom: 20px;
  }

  .lc1-details {
    height: 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }

  .lc1-chart {
    flex: 1;
  }
}
</style>
