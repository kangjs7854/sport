<template>
    <div class="news-index">
        <div class="news-wrap" v-if="news">
            <h3 class="title">{{news.title}}</h3>
            <div class="sub-title">
                <p>{{news.source}}</p>
                <p>{{news.ptime}}</p>
            </div>
            <div class="img-wrap">
                <img v-if="news.img" :src="news.img[0].src" alt />
            </div>
            <div class="body" v-html="news.body">{{news.body}}</div>
        </div>
        <div class="no-data" v-else>
            <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588256841679&di=17b89c054e326d046718cf497da3a645&imgtype=0&src=http%3A%2F%2Fstatic.jyj.gzz.gov.cn%2Ftianyu_edu%2Farea%2Fedu4.0%2Fimages%2Factivity_square%2Ffront%2Fhas_no_data_bg.png"
                alt
            />
        </div>
        <go-back />
    </div>
</template>

<script>
const goBack = () => import("@/components/goBack/index.vue");
import api from "@/api";
export default {
    data() {
        return {
            news: {}
        };
    },
    mounted() {
        const id = this.$route.query.id;
        api.getNewsDetail(id).then(res => {
            let { body, title, source, ptime, dkey, img } = res.data[id];
            this.news = { body, title, source, ptime, dkey, img };
        });
    },
    components: {
        "go-back": goBack
    }
};
</script>
<style lang="less" scoped>
.news-index {
    padding: 0.2rem;
    .news-wrap {
        .title {
            text-align: center;
            font-size: 24px;
        }
        .sub-title {
            padding-left: 0.2rem;
            margin: 0.1rem 0;
            color: #989da2;
        }
        .img-wrap {
            display: flex;
            justify-content: center;
            padding: 0.2rem;
            img {
                width: auto;
                height: 4rem;
                overflow: hidden;
            }
        }
        .body {
            font-size: 14px;
        }
    }
    .no-data {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
