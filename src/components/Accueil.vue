<template>
  <div>
    <div class="post-topbar" v-if="$route.fullPath === '/'">

      <div class="container">
        <div class="comment_box">
          <form style="display: flex;">
            <img src="https://cdn.frankerfacez.com/emoticon/281995/4" alt="" style="border-radius: 4px; width: 40px; height: 40px; margin-right: 10px;">
            <input v-model="msg" type="text" placeholder="Poster un message...">
            <button @click="postMsg($event)">Poster un message</button>
          </form>
        </div>
      </div>
    </div>
    <transition-group  name="slide-fade" mode="out-in">
      <PostArticle v-for="article in $store.state.articlesToShow" :key="article.id" :article="article" transition="stagger" stagger="100"></PostArticle>
    </transition-group>
    <div v-if="$store.state.articlesToShow.length === 0" style="font-size: 20px; color: #999; text-align: center; word-wrap: anywhere;">Aucun post trouvé pour "{{ $store.state.search }}"</div>
  </div>
</template>

<script>
import PostArticle from "@/components/subcomponents/PostArticle";

export default {
  name: "Accueil",
  components: { PostArticle },
  data() {
    return {
      msg: ""
    }
  },
  methods: {
    postMsg(ev) {
      if(ev) ev.preventDefault();

      if(this.msg.length === 0) {
        this.$swal({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Vous devez écrire un message...',
          showConfirmButton: false,
          timer: 3000
        })
        return;
      }

      this.$store.state.articles.unshift({
        id: Date.now(),
        user: {
          profile: "https://cdn.frankerfacez.com/emoticon/281995/4",
          nom: "Jean Dupont"
        },
        post: {
          date: Date.now(),
          likes: 0,
          liked: false,
          vues: "0",
          tags: [],
          content: this.msg
        },
        comments: []
      })
      this.$swal({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Votre post a été publié!',
        showConfirmButton: false,
        timer: 3000
      })

      this.msg = ""
      this.$store.commit('changeSearch')
    }
  }
}
</script>

<style scoped>

</style>