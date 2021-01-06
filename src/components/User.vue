<template>
  <div id="user">
    <div class="user-data full-width">
      <div class="user-profile">
        <div class="username-dt" style="background: linear-gradient(#00000008, rgba(58, 85, 228, 0.81)), url('https://i.jiveoff.fr/CpJcK.jpg'); background-position-x: 39%; background-position-y: 50%;">
          <div class="usr-pic">
            <img :src="user.profile" alt="" width="100px" height="110px" style="background-color: #fff">
          </div>
        </div><!--username-dt end-->
        <div class="user-specs">
          <h3>{{ user.nom }}</h3>
          <span>@{{ user.nom.slice(0, 1) + user.nom.split(" ")[1] }}</span>
        </div>
      </div><!--user-profile end-->
      <ul class="user-fw-status">
        <li>
          <h4 style="font-size: 15px">Abonnements</h4>
          <span>...</span>
        </li>
        <li>
          <h4 style="font-size: 15px">Abonnés</h4>
          <span>...</span>
        </li>
      </ul>
    </div>

    <PostArticle :article="article" />
  </div>
</template>

<script>
import PostArticle from "@/components/subcomponents/PostArticle";

export default {
  name: "User",
  components: { PostArticle },
  data() {
    return {
      user: this.$store.state.users[this.$route.params.id]
    }
  },
  created() {
    if(!this.user) {
      this.$router.push("/")
      this.$swal({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: "Cet utilisateur n'existe pas.",
        showConfirmButton: false,
        timer: 3000
      })
      return;
    }
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10)
  },
  computed: {
    article: function() {
      return this.$store.state.articles.find(article => article.user == this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>