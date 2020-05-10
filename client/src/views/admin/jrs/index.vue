<template>
  <div>
    <Table border :columns="columns12" :data="jrsData">
    <template slot-scope="{ row }" slot="name">
      <strong>{{ row.name }}</strong>
    </template>
    <template slot-scope="{ row, index }" slot="action">
      <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
      <Poptip confirm title="是否删除?" @on-ok="remove(row)">
        <Button type="error" size="small">Delete</Button>
      </Poptip>
    </template>
  </Table>
  </div>
</template>

<script>
import api from '@/api/index.js';
export default {
  data() {
    return {
      columns12: [
       
        {
          title: "标题",
          key: "title"
        },
        {
          title: "用户名",
          slot: "name"
        },
        {
          title: "内容",
          key: "content"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      jrsData:[]
    };
  },
  mounted() {
    api.getJrs().then(res=>{
      this.jrsData = res.data.data
    })
  },
 
  methods: {
    show(index) {
      this.$Modal.info({
        title: "Products Info",
        content: `ID：${this.jrsData[index].id}
        <br>Title: ${this.jrsData[index].title}
        <br>UserName: ${this.jrsData[index].name}
        <br>
        <img src="${this.jrsData[index].img}" width="60%">
        `
      });
    },
    remove(row) {
      console.log(row.id);
     
    }
  }
};
</script>

<style>
</style>