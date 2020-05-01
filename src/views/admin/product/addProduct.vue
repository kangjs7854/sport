<template>
  <div>
    <br />
    <br />

   <Card class="form">
      <Form :model="model" :label-width="80" show-message>
        <FormItem label="商品名称">
          <Input v-model="model.name" placeholder="名字" />
        </FormItem>
        <FormItem label="价格">
          <Input v-model="model.price" placeholder="价格" />
        </FormItem>
        <FormItem label="厂商">
          <Select v-model="model.manufacturer">
            <Option
              :value="manufacturer._id"
              v-for="(manufacturer, index) in manufacturers"
              :selected="
                manufacturer._id ==
                  (model.manufacturer && model.manufacturer._id)
              "
              :key="index"
              >{{ manufacturer.name }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="商品图片">
          <Input v-model="model.image" placeholder="图片" />
        </FormItem>
        <FormItem label="商品描述">
          <Input
            v-model="model.description"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="描述"
          />
        </FormItem>
        <FormItem>
          <!-- <Button type="primary" v-if="isEditing">Update Product</Button> -->
          <Button type="primary" @click="saveProduct"
            >增加商品</Button
          >
          <Button style="margin-left: 8px" @click="$router.go(-1)"
            >取消</Button
          >
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      manufacturers: [
        {
          _id: "5eaba5f282c88a300cb061ac",
          name: "耐克"
        },
        {
          _id: "5eaba60a82c88a300cb061ad",
          name: "阿迪达斯"
        },
        {
          _id: "5eaba61682c88a300cb061ae",
          name: "安德玛"
        },
        {
          _id: "5eaba62282c88a300cb061af",
          name: "李宁"
        },
        {
          _id: "5eaba62e82c88a300cb061b0",
          name: "安踏"
        }
      ]
    };
  },
  methods: {
    saveProduct(){
        this.$store.dispatch("addProduct",{
            product:this.model
        })
        this.$router.go(-1) 
    }
  },
 
};
</script>

<style></style>
