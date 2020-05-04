<template>
  <List item-layout="vertical" class="news-wrap">
    <ListItem
      v-for="item in newsList"
      :key="item.id"
      class="news-item"
      @click.native="jumpTo(item)"
    >
      <ListItemMeta :title="item.title" :description="item.interest" />
      {{ item.source }}
      {{ item.ptime }}
      <template slot="extra">
        <img :src="item.img" style="width: 280px" />
      </template>
    </ListItem>
  </List>
</template>

<script>
import api from "../../api";
export default {
  data() {
    return {
      selects: [],
      newsList: []
    };
  },

  methods: {
    addNum(index) {
      this.icons[index].num++;
    },
    jumpTo(item) {
      this.$router.push({
        path: "/news/detail",
        query: {
          id: item.id
        }
      });
    }
  },
  mounted() {
    api.getNews().then(res => {
      this.newsList = res.data.data;
    });
  }
};
</script>

<style>
.news-wrap{
  padding: 0.5rem;
}
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}
.news-item {
  margin: 10px;
}
</style>
