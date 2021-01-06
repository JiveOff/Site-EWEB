<template>
  <div id="sources">
    <div class="post-topbar">
      <div class="container">
        <h1 style="font-size: 35px">Notre corpus de sources</h1><hr><br />
        Nous avons décidé de partir sur un corpus de sources sur Excel.<br /><br />Vous pouvez retrouver le corpus <a href="https://p.jiveoff.fr/public/EWEB/Sources-EWEB/">ici</a> ou ci-dessous.<br /><br /><br />
        <iframe style="height: 200vh; width: 100%; border: none" src="https://p.jiveoff.fr/public/EWEB/Sources-EWEB/" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sources",
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>

</style>