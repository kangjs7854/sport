<template>
    <div>
        <Table border :columns="columns12" :data="products">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button
                    type="primary"
                    size="small"
                    style="margin-right: 5px"
                    @click="show(index)"
                >View</Button>
                <Poptip confirm title="是否删除?" @on-ok="remove(row)">
                    <Button type="error" size="small">Delete</Button>
                </Poptip>
            </template>
        </Table>
        <div class="add-product" @click="jumpTo">+</div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            columns12: [
                {
                    title: "ID",
                    key: "_id"
                },
                {
                    title: "Name",
                    slot: "name"
                },
                {
                    title: "Manufacturer",
                    key: "manufacturer"
                },
                {
                    title: "Description",
                    key: "description"
                },
                {
                    title: "Price",
                    key: "price"
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
    computed: {
        ...mapState({
            products: state => state.product.products
        })
    },
    mounted() {
        console.log(this.products);
        this.$store.dispatch("getAllProducts");
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: "Products Info",
                content: `Name：${this.products[index].name}
        <br>Manufacturer: ${this.products[index].manufacturer}
        <br>Description: ${this.products[index].description}
        <br>Price: ${this.products[index].price}
        <br>
        <img src="${this.products[index].image}" width="60%">
        `
            });
        },
        remove(row) {
            this.$store.dispatch("deleteProduct", {
                productId: row._id
            });
        },
        jumpTo() {
            this.$router.push("/admin/addProduct");
        }
    }
};
</script>

<style scoped>
.add-product {
    font-size: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;
}
.add-product:hover {
    color: #ff4338;
}
</style>