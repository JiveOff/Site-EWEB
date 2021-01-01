<template>
  <div id="article">
    <div v-if="!article" style="font-size: 20px; color: #999; text-align: center;">Aucun post trouvé pour "{{ this.$route.params.id }}"</div>
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
      article: this.$store.state.articles.find(article => article.id.toString() === this.$route.params.id.toString())
    }
  }
}
</script>

<style scoped>

</style>