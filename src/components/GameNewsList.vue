<template>
  <div>
    <GameCarBanner />
    <List item-layout="vertical">
      <ListItem v-for="item in news" :key="item.title" @click.native="jumpTo(item)">
        <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
        {{ item.content }}
        <template slot="extra">
          <img :src="item.img" style="width: 280px" />
        </template>
      </ListItem>
    </List>
  </div>
</template>

<script>
import GameCarBanner from "../components/GameCarBanner";
export default {
  data() {
    return {
      news: []
    };
  },
  components: {
    GameCarBanner
  },
  methods: {
    jumpTo(item) {
      this.$router.push({
        name: "gameDetail",
        params: item
      });
    }
  },
  mounted() {
    this.$axios.get("hupunews.json").then(res => {
      this.news = res.data.data
      this.news.sort(()=>0.5-Math.random())
    });
  },
  filters: {
    cutter(str) {
      let i = str.indexOf("。");
      return str.substr(0, i + 1);
    }
  }
};
</script>

<style scoped>

</style>