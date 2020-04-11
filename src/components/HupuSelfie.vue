<template>
  <List item-layout="vertical">
    <ListItem v-for="(item, index) in jrsMsg" :key="index" class="news-item">
      <ListItemMeta :title="item.title" :description="item.ID" />
      <viewer>
        <img :src="item.pic3" style="width: 100%" />
        <img :src="item.pic2" style="width: 100%" />
      </viewer>
      <div>
        <Icon type="ios-thumbs-up-outline" />66
        <Icon type="ios-chatbubbles-outline" />6
      </div>
    </ListItem>
  </List>
</template>

<script>
export default {
  data() {
    return {
      jrsMsg: [],
      icons: [
        { type: "ios-star-outline", num: 123 },
        { type: "ios-thumbs-up-outline", num: 234 },
        { type: "ios-chatbubbles-outline", num: 345 }
      ]
    };
  },
  mounted() {
    this.$axios.get("jrs.json").then(res => {
      this.jrsMsg = res.data.data;
      this.jrsMsg.sort(() => 0.5 - Math.random());
    });
  }
};
</script>

<style></style>
