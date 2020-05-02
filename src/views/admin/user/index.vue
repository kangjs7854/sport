<template>
    <div>
        <Table border :columns="columns" :data="user">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button
                    type="primary"
                    size="small"
                    style="margin-right: 5px"
                    @click="show(index)"
                >Edit</Button>
                <Poptip confirm title="是否删除?" @on-ok="remove(row)">
                    <Button type="error" size="small">Delete</Button>
                </Poptip>
            </template>
        </Table>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            columns: [
                {
                    title: "ID",
                    key: "_id"
                },
                {
                    title: "用户名",
                    key: "username"
                },
                {
                    title: "年龄",
                    key: "age"
                },
                {
                    title: "性别",
                    key: "sex"
                },
                {
                    title: "手机",
                    key: "phone"
                },
                {
                    title: "地址",
                    key: "address"
                },
                {
                    title: "操作",
                    slot: "action",
                    width: 150,
                    align: "center"
                }
            ],
            user: []
        };
    },
    mounted() {
        this.getUser();
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: "用户信息",
                content: `姓名：${this.user[index].username}
        <br>年龄: ${this.user[index].age || '未填写'}
        <br>性别: ${this.user[index].sex || '未填写'}
        <br>手机号: ${this.user[index].phone || '未填写'}
        <br>地址: ${this.user[index].address || '未填写'}
        <br>
        `
            });
        },
        getUser() {
            api.getUser().then(res => {
                this.user = res.data;
            });
        },
        remove(row) {
            api.deleteUser(row._id).then(res=>{
                if(res.data){
                    this.$Message.success("删除成功")
                    this.getUser()
                }                
            })
        }
    }
};
</script>

<style>
</style>