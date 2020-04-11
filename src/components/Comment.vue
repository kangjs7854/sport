<template>
  <div>
    <div class="header">
      <h3>网友评论</h3>
      <span class="sub-header">文明上网理性发言，请遵守新闻评论服务协议</span>
    </div>
    <Card>
      <div class="comment-input">
        <div class="comment-user">
          <Avatar size="30">
            <img :src="avatar" />
          </Avatar>
          <div class="coment-username">{{ username }}</div>
        </div>
        <Input
          type="textarea"
          :rows="4"
          size="large"
          v-model="textarea"
          autofocus
        />
        <div class="send-btn">
          <Button type="primary" @click="sendComment">发表</Button>
        </div>
      </div>
    </Card>
    <!-- <a-comment v-for="(item,index) in comments " :key="index">
      <template slot="actions">
        <span>
          <a-tooltip title="Like">
            <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
          </a-tooltip>
          <span style="padding-left: '8px';cursor: 'auto'">{{likes}}</span>
        </span>
        <span>
          <a-tooltip title="Dislike">
            <a-icon
              type="dislike"
              :theme="action === 'disliked' ? 'filled' : 'outlined'"
              @click="dislike"
            />
          </a-tooltip>
          <span style="padding-left: '8px';cursor: 'auto'">{{dislikes}}</span>
        </span>
        <span>评论</span>
        
        <Poptip
          confirm
          title="您确认删除这条内容吗？"
          @on-ok="handleDelete(index)"
         
        >
          <Button type="text" >···</Button>
        </Poptip>
      </template>
      <a slot="author">{{item.username}}</a>
      <a-avatar :src="item.avatar" alt="Han Solo" slot="avatar" />
      <p slot="content">{{item.comment}}</p>
      <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
        <span>{{moment().fromNow()}}</span>
      </a-tooltip>
    </a-comment> -->
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
      action: null,
      moment,
      textarea: "",
      comments: []
    };
  },
  computed: {
    ...mapState(["isLogin", "username", "avatar"])
  },

  methods: {
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = "liked";
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = "disliked";
    },
    sendComment() {
      if (!this.isLogin) return this.$Message.warning("未登录");
      let obj = {
        username: this.username,
        avatar: this.avatar,
        comment: this.textarea
      };
      this.comments.unshift(obj);
      localStorage.setItem("comments", JSON.stringify(this.comments));
    },
    handleDelete(index) {
      this.comments.splice(index, 1);
      localStorage.setItem("comments", JSON.stringify(this.comments));
    }
  },
  mounted() {
    this.comments = JSON.parse(localStorage.getItem("comments"));
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
}
.sub-header {
  color: #ccc;
  font-size: 10px;
  margin-left: 10px;
}
.comment-user {
  display: flex;
  padding-bottom: 10px;
  align-items: center;
}
.coment-username {
  padding-left: 10px;
}
.send-btn {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>
