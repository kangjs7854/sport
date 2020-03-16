<template>
  <div>
    <Drawer
      title="Choose Size"
      :closable="true"
      v-model="isOpenSizeDrawer"
      @on-close="$store.commit('closeSizeDrawer')"
      width="100%"
    >
      <div class="shoe-img">
        <img :src="shoe.url" alt />
      </div>
      <div class="shoe-name">
        <p>{{shoe.name}}</p>
      </div>
      <div class="size-wrap">
        <Card
          class="size-item"
          :class="{active:isActive==index}"
          v-for="(item,index) in 12"
          :key="index"
          @click.native="handleChooseSize(index)"
          :dis-hover="false"
        >
          <div class="size-box">
            <span>{{36+index}}</span>
            <span>￥{{shoe.price}}</span>
          </div>
        </Card>
      </div>
    </Drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isActive: -1
    };
  },
  props: {
    shoe: {
      type: Object
    }
  },
  computed: {
    //vuex中的数据不能直接用于v-model中，可以使用get和set.
    // ...mapState(["isOpenSizeDrawer"])
    isOpenSizeDrawer: {
      get() {
        return this.$store.state.isOpenSizeDrawer;
      },
      set() {}
    }
  },
  methods: {
    handleChooseSize(index) {
      this.isActive = index;
      setTimeout(() => {
        this.$store.commit("closeSizeDrawer");
      }, 500);
      this.$emit("choosedSize", index + 36);
    }
  }
};
</script>

<style scoped>
.shoe-img {
  display: flex;
  justify-content: center;
}
.shoe-name {
  display: flex;
  justify-content: center;
}
.size-wrap {
  display: flex;
  flex-wrap: wrap;
}
.size-item {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.size-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.active {
  border-color: #ff4338;
}
</style>