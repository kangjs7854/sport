<template>
  <Table border :columns="columns12" :data="jrsNews">
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
    this.$store.dispatch("allJrsNews");
  },
  computed: {
    jrsNews() {
      return this.$store.state.jrsNews;
    }
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