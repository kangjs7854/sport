<template>
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
</template>

<script>
export default {
  data() {
    return {
      columns12: [
        {
          title: "ID",
          key: "id"
        },
        {
          title: "Title",
          key: "title"
        },
        {
          title: "Name",
          slot: "name"
        },
        {
          title: "Description",
          key: "content"
        },
        {
          title: "Action",
          slot: "action",
          width: 150,
          align: "center"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("allJrsMsg");
  },
  computed: {
    jrsData() {
      return this.$store.state.jrsMsg;
    }
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
      this.$store.commit("REMOVE_JRS_MSG", {
        id: row.id
      });
    }
  }
};
</script>

<style>
</style>