<template>
  <div id="article">
    <PostArticle :article="article" />
  </div>
</template>

<script>
import PostArticle from "@/components/subcomponents/PostArticle";

export default {
  name: "Article",
  components: { PostArticle },
  data() {
    return {
      article: this.$store.state.articles.find(article => article.id === this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>