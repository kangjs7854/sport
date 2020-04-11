<template>
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
// 引入基本模板
// let echarts = require("echarts/lib/echarts");
// // 引入柱状图组件
// require("echarts/lib/chart/bar");
// // 引入提示框和title组件
// require("echarts/lib/component/tooltip");
// require("echarts/lib/component/title");
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      data:[]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = $echarts.init(document.getElementById("myChart"));
      // 绘制图表
        // myChart.setOption({
        //   title: { text: "在Vue中使用echarts" },
        //   tooltip: {},
        //   xAxis: {
        //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        //   },
        //   yAxis: {},
        //   series: [
        //     {
        //       name: "销量",
        //       type: "bar",
        //       data: [5, 20, 36, 10, 10, 20]
        //     }
        //   ]
        // });
        myChart.setOption( {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: this.data,

                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbolSize: 7,

                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 9
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    });
     
    }
  }
};
</script>

<style>
</style>