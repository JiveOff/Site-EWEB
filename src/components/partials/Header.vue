<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="
      background: url('https://i.jiveoff.fr/CpJcK.jpg');
      width: 100%;
      background-position-y: 8%;
    ">
      <b-navbar-brand v-if="!navtoggle"><router-link to="/"><img src="@/assets/images/Logo-White.png" style="margin: 9px 20px 12px 10px; width: 134px" alt="Brigade des réseaux"></router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav v-model="navtoggle">
        <b-navbar-nav>
          <div class="search-bar" style="margin-top: 0;" :class="{ 'center-search': navtoggle }">
            <form>
              <input type="text" name="search" placeholder="Rechercher..." v-model="stringSearch">
              <button @click="search($event)"><i class="la la-search"></i>
              </button>
            </form>
          </div>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Accueil</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <transition name="slide-fade" mode="out-in">
      <b-navbar v-if="$route.fullPath === '/'" toggleable="lg" type="dark" style="
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(	1, 79, 134, 0.81)), url('https://i.jiveoff.fr/CpJcK.jpg');
      width: 100%;
      background-position-y: 16%;
      border-bottom: 2px solid #014F86;
      display: block
    ">
        <h2 class="fake" style="text-align: center; font-size: 64px; margin-bottom: 25px; margin-top: 30px; font-family: 'Bebas Neue', cursive; color: #fff;">CECI EST UNE FAKE NEWS.</h2><br />
        <b-navbar-brand style="text-align: left; position: inherit; left: 0; margin-left: auto !important; margin-right: auto; width: 20em">
          <PostArticle :article="$store.state.articles.filter(art => art.id === 'censure')[0]" header="true" /></b-navbar-brand>
      </b-navbar>
    </transition>
  </div>
</template>

<script>
import PostArticle from "@/components/subcomponents/PostArticle";

export default {
  name: "Header",
  components: { PostArticle },
  data() {
    return {
      stringSearch: "",
      navtoggle: false
    }
  },
  methods: {
    search(ev) {
      if(ev) ev.preventDefault();
      this.$store.state.search = this.stringSearch;
      this.$store.commit('changeSearch')
    }
  },
  created() {
    this.$store.commit('changeSearch')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.navbar {
  position: relative;
}
.navbar-brand {
  position: absolute;
  left: 50%;
  margin-left: -50px !important;  /* 50% of your logo width */
  display: block;
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
.center-search {
  margin-top: 15px !important;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>