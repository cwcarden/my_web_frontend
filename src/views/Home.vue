<template>
  <div class="row">
  <div class="col s6" v-for="(post,index) in posts"
  v-bind:item="post"
  :index="index"
  :key="post.id">
    <div class="card">
      <div class="card-content">
        <p class="card-title">{{ post.title }}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import PostService from '../PostService';
const postService = new PostService();

export default {
  name: "Home",
  data() {
    return {
      posts: []
    }
  },
  created() {
    postService.getAllPosts()
    .then(res => {
      this.posts = res.data;
      console.log(this.posts);
    })
    .catch(err => console.error(err));
  }
}
</script>