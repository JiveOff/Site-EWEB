<template>
  <div class="posty" style="margin-bottom: 20px">
    <div class="post-bar no-margin">
      <div class="post_topbar" style="border-top: 4px solid #014F86">
        <div class="usy-dt" @mouseover="openPop(component_uid + '-authorpop-' + article.id)" @mouseleave="closePop(component_uid + '-authorpop-' + article.id)" @click="$router.push('/user/' + article.user)" style="cursor: pointer">
          <span :id="component_uid + '-author-' + article.id" :style="{ 'background-image': 'url(' + $store.state.users[article.user].profile + ')', 'width': '40px', 'height': '40px', 'display': 'inline-block', 'float': 'left', 'background-position': 'center', 'border-radius': '100px', 'background-size': 'cover' }"></span>
          <div class="usy-name">
            <h3 :class="{ 'margin-nom': header }">{{ $store.state.users[article.user].nom }} <i v-if="$store.state.users[article.user].verified" class="fa fa-check-circle" style="color: #aaaaaa;" v-b-tooltip.hover title="Profil vérifié"></i></h3>
            <span><span v-if="$store.state.users[article.user].job" style="display: inline;">{{ $store.state.users[article.user].job + ' • ' }}</span><i class="fa fa-clock-o"></i> {{ dateMoment(article.post.date).fromNow().charAt(0).toUpperCase() + dateMoment(article.post.date).fromNow().slice(1) }}</span>
          </div>
          <b-popover :ref="component_uid + '-authorpop-' + article.id" :target="component_uid + '-author-' + article.id" placement="top">
            <ProfilePop :article="article" :header="header" />
          </b-popover>
        </div>
      </div>
      <div class="job_descp">
        <h3 v-if="article.post.title" @click="$router.push('/post/' + article.id)" style="cursor: pointer">{{ article.post.title }}</h3>
        <p v-if="$route.fullPath === '/' && article.post.content.length >= 200" :style="[article.post.tags.length === 0 ? {'margin-bottom': '0px'} : {}]"><span @click="$router.push('/post/' + article.id)" style="cursor: pointer" v-html="article.post.content.slice(0, 200) + '...'"> </span> <router-link :to="'/post/' + article.id">voir plus</router-link></p>
        <p v-else-if="$route.fullPath === '/'" style="word-wrap: anywhere;" :style="[article.post.tags.length === 0 ? {'margin-bottom': '0px'} : {}]"><span @click="$router.push('/post/' + article.id)" style="cursor: pointer" v-html="article.post.content"></span></p>
        <p v-else-if="$route.fullPath !== '/'" style="word-wrap: anywhere;" :style="[article.post.tags.length === 0 ? {'margin-bottom': '0px'} : {}]"><span @click="$router.push('/post/' + article.id)" style="cursor: pointer" v-html="article.post.content"></span></p>
        <p v-if="article.post.warning" style="border-top: 1px solid #014F86; padding-top: 10px; color: #014F86; font-weight: 401; cursor: pointer; margin-top: 15px; margin-bottom: 0px;" @click="$router.push('/post/' + article.id)">
          <i class="fa fa-warning" style="margin-right: 10px;"></i><i style="word-wrap: anywhere; white-space: normal;">{{ article.post.warning }}</i>
        </p>

        <Tweet v-if="article.id === 'anonymat' && $route.fullPath !== '/'" id="1341641955852337153"></Tweet>

        <ul class="skill-tags" style="display: contents; cursor: pointer" @click="$router.push('/post/' + article.id)">
          <li v-for="tag in article.post.tags" :key="tag" :class="{ 'margin-masonry': article.post.images }"><a>{{ tag }}</a></li>
        </ul>
        <vue-masonry-wall v-if="article.post.images && article.post.images.length > 0" :items="article.post.images" :options="{width: 300, padding: {2: 8, default: 12}}">
          <template v-slot:default="{item}">
            <div class="item">
              <expandable-image :src="item" style="max-width: 100%" />
            </div>
          </template>
        </vue-masonry-wall>
      </div>
      <div class="job-status-bar" v-if="!header">
        <ul class="like-com">
          <li>
            <a style="cursor: pointer;" @click="click(article)" :class="{ liked: article.post.liked }"><i class="la la-heart"></i> {{ article.post.liked ? "Aimé" : "J'aime" }}</a>
            <img v-if="article.post.likes >= 5" src="@/assets/images/liked-img.png" alt="">
            <span :style="[article.post.likes < 5 ? {'margin-left': '0'} : {}]">{{ article.post.likes }}</span>
          </li>
          <li><router-link :to="'/post/' + article.id" title="" class="com"><img src="@/assets/images/com.png" alt=""> {{ getCommentsArticle() }} commentaire{{ getCommentsArticle() === 0 || getCommentsArticle() > 1 ? "s" : "" }}</router-link></li>
        </ul>
        <a><i class="la la-eye"></i>{{ Number(article.post.vues).toLocaleString() }} vue{{ article.post.vues === 0 || article.post.vues > 1 ? "s" : "" }}</a>
      </div>
    </div>
    <transition name="slide-fade2" mode="out-in">
      <div v-if="$route.fullPath !== '/'" class="comment-section">
        <div class="comment-sec">
          <ul>
            <li v-for="comment in article.comments" :key="comment" style="border-bottom: 1px solid rgb(229, 229, 229); margin-bottom: 17px;">
              <div class="comment-list" style="padding-bottom: 20px;">
                <div :id="comment.id + '-author'" class="bg-img" @mouseover="openPop(comment.id + '-authorpop')" @mouseleave="closePop(comment.id + '-authorpop')"  @click="$router.push('/user/' + comment.user)" style="cursor: pointer">
                  <span :style="{ 'background-image': 'url(' + $store.state.users[comment.user].profile + ')', 'width': '40px', 'height': '40px', 'display': 'inline-block', 'float': 'left', 'background-position': 'center', 'border-radius': '100px', 'background-size': 'cover' }"></span>
                </div>
                <b-popover :ref="comment.id + '-authorpop'" :target="comment.id + '-author'" placement="top">
                  <ProfilePop :article="comment" :header="header" />
                </b-popover>
                <div class="comment" @click="$router.push('/user/' + comment.user)" style="cursor: pointer">
                  <h3 @mouseover="openPop(comment.id + '-authorpop')" @mouseleave="closePop(comment.id + '-authorpop')" style="margin-bottom: 6px;">{{ $store.state.users[comment.user].nom }} <i v-if="$store.state.users[comment.user].verified" class="fa fa-check-circle" style="color: #aaaaaa;" v-b-tooltip.hover title="Profil vérifié"></i></h3>
                  <span @mouseover="openPop(comment.id + '-authorpop')" @mouseleave="closePop(comment.id + '-authorpop')"><span v-if="$store.state.users[comment.user].job" style="display: inline;">{{ $store.state.users[comment.user].job + ' • ' }}</span><i class="fa fa-clock-o"></i> {{ dateMoment(comment.comment.date).fromNow().charAt(0).toUpperCase() + dateMoment(comment.comment.date).fromNow().slice(1) }}</span>
                  <p style="word-wrap: anywhere;" v-html="comment.comment.content"></p>
                  <!--<a style="cursor: pointer" @click="replyTo(comment)" class="active"><i class="fa fa-reply-all"></i>Répondre</a>-->
                </div>
              </div>
              <ul>
                <li v-for="sub in comment.sub" :key="sub">
                  <div class="comment-list">
                    <div :id="sub.id + '-author'" class="bg-img" @mouseover="openPop(sub.id + '-authorpop')" @mouseleave="closePop(sub.id + '-authorpop')"  @click="$router.push('/user/' + sub.user)" style="cursor: pointer">
                      <span :style="{ 'background-image': 'url(' + $store.state.users[sub.user].profile + ')', 'width': '40px', 'height': '40px', 'display': 'inline-block', 'float': 'left', 'background-position': 'center', 'border-radius': '100px', 'background-size': 'cover' }"></span>
                    </div>
                    <b-popover :ref="sub.id + '-authorpop'" :target="sub.id + '-author'" placement="top">
                      <ProfilePop :article="sub" :header="header" />
                    </b-popover>
                    <div class="comment" @click="$router.push('/user/' + sub.user)" style="cursor: pointer">
                      <h3 @mouseover="openPop(sub.id + '-authorpop')" @mouseleave="closePop(sub.id + '-authorpop')" style="margin-bottom: 6px;">{{ $store.state.users[sub.user].nom }} <i v-if="$store.state.users[sub.user].verified" class="fa fa-check-circle" style="color: #aaaaaa;" v-b-tooltip.hover title="Profil vérifié"></i></h3>
                      <span @mouseover="openPop(sub.id + '-authorpop')" @mouseleave="closePop(sub.id + '-authorpop')"><span v-if="$store.state.users[sub.user].job" style="display: inline;">{{ $store.state.users[sub.user].job + ' • ' }}</span><i class="fa fa-clock-o"></i> {{ dateMoment(sub.comment.date).fromNow().charAt(0).toUpperCase() + dateMoment(sub.comment.date).fromNow().slice(1) }}</span>
                      <p style="word-wrap: anywhere;" v-html="sub.comment.content"></p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="comment-list" style="padding-bottom: 20px;">
                <div class="comment">
                  <a style="cursor: pointer" @click="replyTo(comment)" class="active"><i class="fa fa-reply-all"></i>Répondre</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="post-comment">
          <div class="comment_box">
            <p v-if="reply.replying">En réponse à <span style="font-weight: 510">{{ $store.state.users[reply.replyTo.user].nom }}</span> <button @click="reply.replying = false" style="margin-left: 5px;"><i class="la la-times"></i></button></p>
            <form style="display: flex; margin-top: 5px">
              <img :src="$store.state.users[$store.state.loggedInUser].profile" alt="" style="border-radius: 4px; width: 40px; height: 40px; margin-right: 10px;">
              <input v-model="com" ref="commentaire" type="text" placeholder='Publier...'>
              <button @click="postMsg($event)">Publier {{ reply.replying === true ? "une réponse" : "un commentaire" }}</button>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";
import ProfilePop from "@/components/subcomponents/ProfilePop";
import { Tweet } from "vue-tweet-embed"

export default {
  name: "PostArticle",
  components: {ProfilePop, VueMasonryWall, Tweet},
  props: ["article", "header"],
  created() {
    this.component_uid = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
    setInterval(() => {
      this.$forceUpdate();
    }, 10e3)
    this.$props.article.post.vues++;
  },
  beforeMount() {
    for(let com in this.$props.article.comments) {
      let rand = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
      this.$props.article.comments[com].id = rand;
      if(this.$props.article.comments[com]['sub']) {
        for(let sub_com in this.$props.article.comments[com]['sub']) {
          rand = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
          this.$props.article.comments[com]['sub'][sub_com].id = rand;
        }
      }
    }
  },
  data() {
    return {
      com: "",
      reply: {
        replying: false,
        replyTo: null
      },
      component_uid: null,
      openedPops: []
    }
  },
  methods: {
    openPop(popId) {
      if(this.openedPops.includes(popId)) {
        return
      }
      this.openedPops.push(popId);
      try {
        this.$refs[popId].$emit('open')
      } catch(e) {
        this.$refs[popId][0].$emit('open')
      }
    },
    closePop(popId) {
      if(!this.openedPops.includes(popId)) {
        return
      }
      console.log(popId);
      console.log(this.$refs)
      this.openedPops.splice(this.openedPops.indexOf(popId));
      try {
        this.$refs[popId].$emit('close')
      } catch(e) {
        this.$refs[popId][0].$emit('close')
      }
    },
    getCommentsArticle() {
      let coms = 0;
      for(let com in this.$props.article.comments) {
        coms++;
        if(this.$props.article.comments[com]['sub']) {
          coms = coms + this.$props.article.comments[com]['sub'].length;
        }
      }
      return coms;
    },
    dateMoment(date) {
      return this.moment(date).locale('fr')
    },
    async replyTo(com) {
      this.reply.replying = true;
      this.reply.replyTo = com;
      const el = this.$el.getElementsByClassName('comment_box')[0];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          this.$refs.commentaire.focus();
        }, 1e3)
      }
    },
    postMsg(ev) {
      if(ev) ev.preventDefault();

      if(this.com.length === 0) {
        this.$swal({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Vous devez écrire un commentaire...',
          showConfirmButton: false,
          timer: 3000
        })
        return;
      }

      if(this.reply.replying) {
        if(!this.reply.replyTo.sub) {
          this.reply.replyTo.sub = []
        }
        this.reply.replyTo.sub.push({
          user: this.$store.state.loggedInUser,
          comment: {
            date: Date.now(),
            content: this.com
          }
        })
        this.$swal({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Votre réponse a été publiée!',
          showConfirmButton: false,
          timer: 3000
        })
      } else {
        this.$props.article.comments.push({
          user: this.$store.state.loggedInUser,
          comment: {
            date: Date.now(),
            content: this.com
          }
        })
        this.$swal({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Votre commentaire a été publié!',
          showConfirmButton: false,
          timer: 3000
        })
      }

      this.com = ""
    },
    click(article) {
      if(article.post.liked) {
        article.post.likes--;
        article.post.liked = false;
      } else {
        article.post.likes++;
        article.post.liked = true;
      }
    }
  }
}
</script>

<style>
.slide-fade2-enter-active {
  transition: all .5s ease;
}
.slide-fade2-leave-active {
  transition: all .5s ease;
}
.slide-fade2-enter, .slide-fade2-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.liked {
  color: #014F86 !important;
}
button {
  color: #fff;
  background-color: #c6c6c6;
  padding: 0 5px;
  text-align: center;
  font-size: 12px;
  border: 0;
  margin-left: 10px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 4px;
}
.margin-masonry {
  margin-bottom: 20px !important;
}
.margin-nom {
  margin-bottom: 0px !important;
}
.usy-name h3 {
  text-transform: none !important;
}
</style>