<template>
  <div class="posty" style="margin-bottom: 20px">
    <div class="post-bar no-margin">
      <div class="post_topbar" style="border-top: 4px solid #3a55e4">
        <div class="usy-dt">
          <img :src="article.user.profile" alt="" width="40px">
          <div class="usy-name">
            <h3>{{ article.user.nom }}</h3>
            <span><img src="@/assets/images/clock.png" alt=""> Publié {{ dateMoment(article.post.date).fromNow() }}</span>
          </div>
        </div>
      </div>
      <div class="job_descp">
        <h3 v-if="article.post.title">{{ article.post.title }}</h3>
        <p v-if="$route.fullPath === '/' && article.post.content.length >= 50" :style="[article.post.tags.length === 0 ? {'margin-bottom': '0'} : {}]"><span v-html="article.post.content.slice(0, 50) + '...'"> </span> <router-link :to="'/post/' + article.id">voir plus</router-link></p>
        <p v-else-if="$route.fullPath === '/'" style="word-wrap: anywhere;" :style="[article.post.tags.length === 0 ? {'margin-bottom': '0'} : {}]"><span v-html="article.post.content"></span></p>
        <p v-else-if="$route.fullPath !== '/'" style="word-wrap: anywhere;" :style="[article.post.tags.length === 0 ? {'margin-bottom': '0'} : {}]"><span v-html="article.post.content"></span></p>
        <ul class="skill-tags">
          <li v-for="tag in article.post.tags" :key="tag"><a title="">{{ tag }}</a></li>
        </ul>
      </div>
      <div class="job-status-bar">
        <ul class="like-com">
          <li>
            <a style="cursor: pointer;" @click="click(article)" :class="{ liked: article.post.liked }"><i class="la la-heart"></i> {{ article.post.liked ? "Aimé" : "J'aime" }}</a>
            <img v-if="article.post.likes >= 5" src="@/assets/images/liked-img.png" alt="">
            <span :style="[article.post.likes < 5 ? {'margin-left': '0'} : {}]">{{ article.post.likes }}</span>
          </li>
          <li><router-link :to="'/post/' + article.id" title="" class="com"><img src="@/assets/images/com.png" alt=""> {{ article.comments.length }} commentaire{{ article.comments.length === 0 || article.comments.length > 1 ? "s" : "" }}</router-link></li>
        </ul>
        <a><i class="la la-eye"></i>{{ article.post.vues }} vues</a>
      </div>
    </div>
    <transition name="slide-fade2" mode="out-in">
      <div v-if="$route.fullPath !== '/'" class="comment-section">
        <div class="comment-sec">
          <ul>
            <li v-for="comment in article.comments" :key="comment" style="border-bottom: 1px solid rgb(229, 229, 229); margin-bottom: 17px;">
              <div class="comment-list" style="padding-bottom: 20px;">
                <div class="bg-img">
                  <img :src="comment.user.profile" alt="" width="40px">
                </div>
                <div class="comment">
                  <h3>{{ comment.user.nom }}</h3>
                  <span><img src="@/assets/images/clock.png" alt="">{{ dateMoment(comment.comment.date).fromNow().charAt(0).toUpperCase() + dateMoment(comment.comment.date).fromNow().slice(1) }}</span>
                  <p style="word-wrap: anywhere;">{{ comment.comment.content }}</p>
                  <!--<a style="cursor: pointer" @click="replyTo(comment)" class="active"><i class="fa fa-reply-all"></i>Répondre</a>-->
                </div>
              </div>
              <ul>
                <li v-for="sub in comment.sub" :key="sub">
                  <div class="comment-list">
                    <div class="bg-img">
                      <img :src="sub.user.profile" alt="" width="40px">
                    </div>
                    <div class="comment">
                      <h3>{{ sub.user.nom }}</h3>
                      <span><img src="@/assets/images/clock.png" alt="">{{ dateMoment(sub.comment.date).fromNow().charAt(0).toUpperCase() + dateMoment(sub.comment.date).fromNow().slice(1) }}</span>
                      <p style="word-wrap: anywhere;">{{ sub.comment.content }}</p>
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
            <p v-if="reply.replying">En réponse à <span style="font-weight: 510">{{ reply.replyTo.user.nom }}</span> <button @click="reply.replying = false" style="margin-left: 5px;"><i class="la la-times"></i></button></p>
            <form style="display: flex; margin-top: 5px">
              <img src="https://cdn.frankerfacez.com/emoticon/281995/4" alt="" style="border-radius: 4px; width: 40px; height: 40px; margin-right: 10px;">
              <input v-model="com" ref="commentaire" type="text" placeholder="Poster un commentaire...">
              <button @click="postMsg($event)">Poster {{ reply.replying === true ? "une réponse" : "un commentaire" }}</button>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "PostArticle",
  props: ["article"],
  created() {
    setInterval(() => {
      this.$forceUpdate();
    }, 10e3)
  },
  data() {
    return {
      com: "",
      reply: {
        replying: false,
        replyTo: null
      }
    }
  },
  methods: {
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
          user: {
            profile: "https://cdn.frankerfacez.com/emoticon/281995/4",
            nom: "Jean Dupont"
          },
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
          user: {
            profile: "https://cdn.frankerfacez.com/emoticon/281995/4",
            nom: "Jean Dupont"
          },
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
  color: #3a55e4 !important;
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
</style>