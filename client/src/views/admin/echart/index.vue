<template>
    <div>
        <div id="project" style="width:100%;height:300px"></div>
        <div id="dataInfo" style="width:100%;height:300px"></div>
        <div id="dataInfo2" style="width:100%;height:300px"></div>

    </div>
</template>

<script>
import echarts from "echarts";
export default {
    mounted() {
        this.initProject();
        this.initData();
        this.initData2();
        console.log(this.products);
        
    },
    methods: {
        initProject() {
            const project = echarts.init(document.getElementById("project"));
            const optionProject = {
                title: {
                    text: "项目情况",
                    subtext: "",
                    x: "left"
                },
                tooltip: {
                    trigger: "item",
                    show: false,
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    //orient : 'vertical',
                    x: "left",
                    y: "bottom",
                    data: ["vue", "express", "node", "docker"]
                },
                toolbox: {
                    show: false,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        magicType: {
                            show: true,
                            type: ["pie", "funnel"]
                        },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                calculable: false,
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        selectedMode: "single",
                        radius: [0, 40],
                        color: ["#ff9232"],
                        // for funnel
                        x: "50%",
                        width: "100%",
                        funnelAlign: "right",
                        //max: 1548,
                        itemStyle: {
                            normal: {
                                label: {
                                    position: "inner"
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: "center",
                                //formatter:'{c}\n{d}%'
                                formatter: function() {
                                    return "\n项目组成\n";
                                },
                                textStyle: {
                                    fontSize: 10,
                                    color: "#000"
                                }
                            }
                        },
                        data: [{ value: 335, name: "" }]
                    },
                    {
                        name: "",
                        type: "pie",
                        radius: [40, 60],
                        // for funnel
                        x: "60%",
                        width: "35%",
                        color: [
                            "rgb(70,194,225)",
                            "rgb(255,112,112)",
                            "rgb(255,198,84)",
                            "rgb(196,234,221)"
                        ],
                        funnelAlign: "left",
                        //max: 1048,
                        label: {
                            normal: {
                                show: true,
                                position: "outer",
                                formatter: "{b}\n{d}%",
                                color: "#000"
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length: 0
                            }
                        },
                        data: [
                            { value: 6021, name: "vue" },
                            { value: 1000, name: "node" },
                            { value: 2435, name: "express" },
                            { value: 899, name: "docker" }
                        ]
                    }
                ]
            };

            project.setOption(optionProject);
        },
        initData() {
            const dataAxis = [
                "赛事数据",
                "步行街数据",
                "jrs数据",
                "商品数据",
                "用户数据"
            ];
            const data = ["59", "91", "300", "3", "1"];

            const yMax = 500;
            const dataShadow = [];

            for (var i = 0; i < data.length; i++) {
                dataShadow.push(yMax);
            }
            const dataInfo = echarts.init(document.getElementById("dataInfo"));
            const optionData = {
                title: {
                    text: "目前项目的数据"
                },
                xAxis: {
                    data: dataAxis,
                    axisLabel: {
                        inside: true,
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    z: 10
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#999"
                        }
                    }
                },
                dataZoom: [
                    {
                        type: "inside"
                    }
                ],
                series: [
                    {
                        // For shadow
                        type: "bar",
                        itemStyle: {
                            color: "rgba(0,0,0,0.05)"
                        },
                        barGap: "-100%",
                        barCategoryGap: "40%",
                        data: dataShadow,
                        animation: false
                    },
                    {
                        type: "bar",
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#83bff6" },
                                    { offset: 0.5, color: "#188df0" },
                                    { offset: 1, color: "#188df0" }
                                ]
                            )
                        },
                        emphasis: {
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        { offset: 0, color: "#2378f7" },
                                        { offset: 0.7, color: "#2378f7" },
                                        { offset: 1, color: "#83bff6" }
                                    ]
                                )
                            }
                        },
                        data: data
                    }
                ]
            };

            dataInfo.setOption(optionData);
        },
        initData2() {
            const dataInfo2 = echarts.init(document.getElementById("dataInfo2"));
            // Generate data
            var category = [];
            var dottedBase = +new Date();
            var lineData = [];
            var barData = [];

            for (var i = 0; i < 20; i++) {
                var date = new Date((dottedBase += 3600 * 24 * 1000));
                category.push(
                    [
                        date.getFullYear(),
                        date.getMonth() + 1,
                        date.getDate()
                    ].join("-")
                );
                var b = Math.random() * 200;
                var d = Math.random() * 200;
                barData.push(b);
                lineData.push(d + b);
            }
            const optionDataInfo = {
                backgroundColor: "#0f375f",
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    }
                },
                legend: {
                    data: ["line", "bar"],
                    textStyle: {
                        color: "#ccc"
                    }
                },
                xAxis: {
                    data: category,
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    }
                },
                yAxis: {
                    splitLine: { show: false },
                    axisLine: {
                        lineStyle: {
                            color: "#ccc"
                        }
                    }
                },
                series: [
                    {
                        name: "line",
                        type: "line",
                        smooth: true,
                        showAllSymbol: true,
                        symbol: "emptyCircle",
                        symbolSize: 15,
                        data: lineData
                    },
                    {
                        name: "bar",
                        type: "bar",
                        barWidth: 10,
                        itemStyle: {
                            barBorderRadius: 5,
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#14c8d4" },
                                    { offset: 1, color: "#43eec6" }
                                ]
                            )
                        },
                        data: barData
                    },
                    {
                        name: "line",
                        type: "bar",
                        barGap: "-100%",
                        barWidth: 10,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "rgba(20,200,212,0.5)"
                                    },
                                    {
                                        offset: 0.2,
                                        color: "rgba(20,200,212,0.2)"
                                    },
                                    { offset: 1, color: "rgba(20,200,212,0)" }
                                ]
                            )
                        },
                        z: -12,
                        data: lineData
                    },
                    {
                        name: "dotted",
                        type: "pictorialBar",
                        symbol: "rect",
                        itemStyle: {
                            color: "#0f375f"
                        },
                        symbolRepeat: true,
                        symbolSize: [12, 4],
                        symbolMargin: 1,
                        z: -10,
                        data: lineData
                    }
                ]
            };
            dataInfo2.setOption(optionDataInfo)
        }
    },
    computed:{
        products(){
            return this.$store.state.product.products
        }
    },
    watch: {
        handler(newVal) {
            this.initProject();
        },

        deep: true //对象内部属性的监听，关键。 }
    }
};
</script>

<style>
</style>