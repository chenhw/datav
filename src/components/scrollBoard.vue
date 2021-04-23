<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'ScrollBoard',
  data () {
    return {
      config: {
        header: ['时间', '就诊科室', '姓名'],
        data: [
          ['19:25', '普外科', '张*佳'],
          ['17:25', '神经内科', '陈*方'],
          ['16:25', '神经内科', '张*我'],
          ['15:25', '泌尿外科', '方*'],
          ['14:25', '皮肤科', '胡*龙'],
          ['13:25', '泌尿外科', '周*'],
          ['12:25', '心外科', '刘*'],
          ['11:25', '普外科', '张*'],
          ['10:25', '普外科', '也*'],
          ['09:25', '泌尿外科', '方*方']
        ],
        index: true,
        columnWidth: [35, 60, 80],
        align: ['center'],
        rowNum: 7,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      }
    }
  }
}
</script>

<style lang="less">
#scroll-board {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}
</style>
