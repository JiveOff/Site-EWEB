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
  },
  created() {
    if(!this.article) {
      this.$router.push("/")
      this.$swal({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: "Ce post n'existe pas.",
        showConfirmButton: false,
        timer: 3000
      })
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>

</style>