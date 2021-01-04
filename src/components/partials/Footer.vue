<template>
  <footer style="padding-top: 20px;">
    <div style="font-size: 18px; color: #999; text-align: center; margin-bottom: 10px;">
      Site crée à l'aide de Vue.js et Bootstrap.
    </div>
    <div style="font-size: 15px; color: #999; text-align: center; margin-bottom: 20px;">
      Projet EWEB<br/><img :src="require('@/assets/images/Logo-Site.png')" style="margin: 20px 20px 10px; width: 6%; float: none;">
    </div>
    <div style="font-size: 15px; color: #999; text-align: center; margin-bottom: 20px;">
      <a href="https://github.com/JiveOff" style="font-weight: 501">@JiveOff</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  grid-row-start: 3;
  grid-row-end: 3;
}
</style>