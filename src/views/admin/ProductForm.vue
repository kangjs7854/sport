<template>
  <div class="form-wrap">
    <Card class="form">
      <Form :model="model" :label-width="80" show-message>
        <FormItem label="Name">
          <Input v-model="model.name" placeholder="名字" />
        </FormItem>
        <FormItem label="Price">
          <Input v-model="model.price" placeholder="价格" />
        </FormItem>
        <FormItem label="Select">
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
        <FormItem label="Image">
          <Input v-model="model.image" placeholder="图片" />
        </FormItem>
        <FormItem label="Description">
          <Input
            v-model="model.description"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="描述"
          />
        </FormItem>
        <FormItem>
          <Button type="primary" v-if="isEditing">Update Product</Button>
          <Button type="primary" v-else @click="saveProduct"
            >Add Product</Button
          >
          <Button style="margin-left: 8px" @click="$router.go(-1)"
            >Cancel</Button
          >
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["model", "manufacturers", "isEditing"],
  methods: {
    saveProduct() {
      this.$emit("save-product", this.model);
    }
  }
};
</script>

<style scoped>
.form-wrap {
  display: flex;
  justify-content: center;
}
.form {
  width: 40%;
  padding: 10px;
}
@media only screen and (max-width: 780px) {
  .form {
    width: 80%;
  }
}
</style>
