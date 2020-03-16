<template>
      <List item-layout="vertical">
        <ListItem
          v-for="item in newsList"
          :key="item.id"
          class="news-item"
          @click.native="jumpTo(item)"
        >
          <ListItemMeta :title="item.title" :description="item.interest" />
          {{ item.source }}
          {{ item.ptime }}
          <template slot="action">
            <li v-for="(icon,index) in icons" :key="index" @click="addNum(index)">
              <Icon :type="icon.type" />
              {{icon.num}}
            </li>
          </template>
          <template slot="extra">
            <img :src="item.img" style="width: 280px" />
          </template>
        </ListItem>
      </List>

</template>

<script>
export default {
  data() {
    return {
      selects: [],
      newsList: [],
      icons: [
        { type: "ios-star-outline", num: 123 },
        { type: "ios-thumbs-up-outline", num: 234 },
        { type: "ios-chatbubbles-outline", num: 345 }
      ]
    };
  },
 
  methods: {
    addNum(index) {
      this.icons[index].num++;
    },
    jumpTo(item) {
      this.$router.push({
        path: "/detail",
        query: { id: item.id }
      });
    }
  },
  mounted() {
    this.$axios
      .get(
        "/api/nc/article/headline/data/10-20.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore"
      )
      .then(res => {
        this.newsList = res.data.data;
      });
  }
};
</script>

<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}
.news-item {
  margin: 10px;
}
</style>