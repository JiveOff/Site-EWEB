<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="
      background: linear-gradient(#00000008, rgba(58, 85, 228, 0.81)), url('https://i.jiveoff.fr/CpJcK.jpg');
      width: 100%;
      background-position-y: 15%;
      border-bottom: 2px solid rgb(58, 85, 228);
    ">
      <b-navbar-brand><router-link to="/"><img src="@/assets/images/Logo-White.png" style="margin: 9px 20px 12px 10px; width: 134px" alt="Brigade des réseaux"></router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <div class="search-bar" style="margin-top: 0;">
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
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      stringSearch: ""
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
.navbar {
  position: relative;
}
.navbar-brand {
  position: absolute;
  left: 50%;
  margin-left: -50px !important;  /* 50% of your logo width */
  display: block;
}
</style>