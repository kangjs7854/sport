<template>
  <Table border :columns="columns12" :data="game">
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
          title: "赛事内容",
          key: "content"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      game:[]
    };
  },
  mounted() {
      api.getGame().then(res=>{
        this.game = res.data.data          
      })
  },
  
  methods: {
    show(index) {
      this.$Modal.info({
        title: "News Info",
        content: `
        <br>ID: ${this.jrsNews[index].id}
        <br>Title: ${this.jrsNews[index].title}
        <br>
        <img src="${this.jrsNews[index].img}" width="60%">
        `
      });
    },
    remove(row) {
      this.$store.commit("REMOVE_JRS_NEWS", {
        id: row.id
      });
    }
  }
};
</script>

<style>
</style>