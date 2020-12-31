<template>
  <div>
    <div class="post-topbar" v-if="$route.fullPath === '/'">
      <div class="user-picy" style="margin-right: 14px">
        <img src="https://cdn.frankerfacez.com/emoticon/281995/4" alt="">
      </div>
      <div class="comment_box">
        <form>
          <input type="text" placeholder="Poster un message...">
          <button @click="postMsg($event)">Poster un message</button>
        </form>
      </div>
    </div>
    <transition-group  name="slide-fade" mode="out-in">
      <PostArticle v-for="article in $store.state.articlesToShow" :key="article" :article="article" transition="stagger" stagger="100"></PostArticle>
    </transition-group>
    <div v-if="$store.state.articlesToShow.length === 0" style="font-size: 20px; color: #999; text-align: center;">Aucun article trouvé pour "{{ $store.state.search }}"</div>
  </div>
</template>

<script>
import PostArticle from "@/components/subcomponents/PostArticle";

export default {
  name: "Accueil",
  components: { PostArticle },
  methods: {
    postMsg(ev) {
      if(ev) ev.preventDefault();
      this.$swal({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Ce site est fictif...',
        showConfirmButton: false,
        timer: 3000
      })
    }
  }
}
</script>

<style scoped>

</style>