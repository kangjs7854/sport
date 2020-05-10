<template>
    <div>
        <div id="project" style="width:100%;height:300px"></div>
        <div id="dataInfo" style="width:100%;height:300px"></div>

    </div>
</template>

<script>
import echarts from "echarts";
import api from '@/api/index.js';
export default {
    data(){
        return{
            userNumber:3
        }
    },
    mounted() {
        this.initProject();
        this.initData();
        this.getUser()
        
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
            const data = ["59", "91", "261", this.products.length, this.userNumber ];

            const yMax = 300;
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
        getUser(){
            api.getUser().then(res=>{
                console.log(res);
                if(!res.data) return ;
                this.userNumber = res.data.length
                console.log(this.userNumber);
                
                
            })
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
            this.initData();
        },

        deep: true //对象内部属性的监听，关键。 }
    }
};
</script>

<style>
</style>