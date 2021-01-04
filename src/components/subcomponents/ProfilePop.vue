<template>
  <div>
    <div class="authorpop">
      <span :class="{ hasJob: !$store.state.users[article.user].job }" :style="{ 'background-image': 'url(' + $store.state.users[article.user].profile + ')', 'width': '80px', 'height': '80px', 'display': 'inline-block', 'float': 'left', 'background-position': 'center', 'border-radius': '100px', 'background-size': 'cover', 'margin-right': '15px' }"><i v-if="$store.state.users[article.user].verified" class="fa fa-check-circle" style="color: #3a55e4; font-size: 25px; margin-top: 70%; margin-left: 70%" v-b-tooltip.hover title="Profil vérifié"></i></span>
      <h3>{{ $store.state.users[article.user].nom }}</h3>
    </div>
    <span v-if="$store.state.users[article.user].job" style="color: #b2b2b2; font-size: 14px; display: inline-block">{{ $store.state.users[article.user].job }}</span>
    <hr style="width: 100%; display: inline-block">
    <div class="row" style="text-align: center; margin-bottom: 5px; width: 100%">
      <div class="col-6">
        <b style="font-weight: 501">...</b><br /><h4 style="font-size: 12px;">Abonnés</h4>
      </div>
      <div class="col-6">
        <b style="font-weight: 501">...</b><br /><h4 style="font-size: 12px;">Abonnements</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePop",
  props: ["article", "header"]
}
</script>

<style scoped>
.authorpop {
  float: left;
  display: block;
}
.authorpop h3 {
  color: #000000;
  font-size: 16px;
  text-transform: none;
  display: flow-root;
  margin-bottom: 20px;
}
.authorpop span {
  color: #b2b2b2;
  font-size: 14px;
  margin-top: -43px;
}
.hasJob {
  margin-bottom: 8px !important;
}
</style>