<template>
  <div class="posty" style="margin-bottom: 20px">
    <div class="post-bar no-margin">
      <div class="post_topbar" style="border-top: 4px solid #3a55e4">
        <div class="usy-dt">
          <img :src="article.user.profile" alt="" width="40px">
          <div class="usy-name">
            <h3>{{ article.user.nom }}</h3>
            <span><img src="@/assets/images/clock.png" alt=""> Posté il y a {{ article.post.date }}</span>
          </div>
        </div>
      </div>
      <div class="job_descp">
        <h3 v-if="article.post.title">{{ article.post.title }}</h3>
        <p v-if="$route.fullPath == '/'"><span v-html="article.post.content.slice(0, 50) + '...'"> </span> <router-link :to="'/post/' + article.id">voir plus</router-link></p>
        <p v-if="$route.fullPath !== '/'" style="word-wrap: anywhere;"><span v-html="article.post.content"></span></p>
        <ul class="skill-tags">
          <li v-for="tag in article.post.tags" :key="tag"><a href="#" title="">{{ tag }}</a></li>
        </ul>
      </div>
      <div class="job-status-bar">
        <ul class="like-com">
          <li>
            <a style="cursor: pointer;" @click="click(article)" :style="{ liked: article.post.liked }"><i class="la la-heart"></i> {{ article.post.liked ? "Déjà aimé" : "J'aime" }}</a>
            <img src="@/assets/images/liked-img.png" alt="">
            <span>{{ article.post.likes }}</span>
          </li>
          <li><router-link :to="'/post/' + article.id" title="" class="com"><img src="@/assets/images/com.png" alt=""> Commenter</router-link></li>
        </ul>
        <a><i class="la la-eye"></i>{{ article.post.vues }} vues</a>
      </div>
    </div>
    <transition name="slide-fade2" mode="out-in">
      <div v-if="$route.fullPath !== '/'" class="comment-section">
        <div class="comment-sec">
          <ul>
            <li v-for="comment in article.comments" :key="comment">
              <div class="comment-list">
                <div class="bg-img">
                  <img :src="comment.user.profile" alt="" width="40px">
                </div>
                <div class="comment">
                  <h3>{{ comment.user.nom }}</h3>
                  <span><img src="@/assets/images/clock.png" alt="">Il y a {{ comment.comment.date }}</span>
                  <p>{{ comment.comment.content }}</p>
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
                      <span><img src="@/assets/images/clock.png" alt="">Il y a {{ sub.comment.date }}</span>
                      <p>{{ sub.comment.content }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="post-comment">
          <div class="cm_img">
            <img src="https://cdn0.iconfinder.com/data/icons/gcons-2/24/silhouette5-512.png" alt="" width="40px">
          </div>
          <div class="comment_box">
            <form>
              <input type="text" placeholder="Commenter..." id="commenter">
              <button type="submit">Envoyer</button>
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
  methods: {
    click(article) {
      if(!article.post.liked) {
        article.post.likes++;
        article.post.liked = true;
        this.$swal({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Vous avez like le post.',
          showConfirmButton: false,
          timer: 3000
        })
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
</style>