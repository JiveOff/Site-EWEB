import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
import VueRouter from 'vue-router';
import VueSwal from 'vue-sweetalert2'
import BootstrapVue from "bootstrap-vue";
import moment from 'moment'

import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'sweetalert2/dist/sweetalert2.min.css';
import VueExpandableImage from 'vue-expandable-image'

Vue.use(VueExpandableImage);
Vue.use(BootstrapVue);
Vue.use(VueSwal);
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.prototype.moment = moment

const store = new Vuex.Store({
  state: {
    search: "",
    articlesToShow: [],
    users: [
      {
        nom: "Jean Dupont",
        profile: "https://cdn.frankerfacez.com/emoticon/281995/4"
      },
      {
        nom: "Antoine Banha",
        profile: "https://i.jiveoff.fr/VsOv6.jpg"
      },
      {
        nom: "Zakaria Sellam",
        profile: "https://cdn.discordapp.com/avatars/362631494197444611/f45099902da7a4a8965473d00265b092.png?size=40"
      },
      {
        nom: "Donald Trump",
        verified: true,
        profile: "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg"
      }
    ],
    articles: [
      {
        id: "censure",
        user: 3,
        post: {
          date: "2020-11-16T04:55:48.821Z",
          likes: 0,
          liked: false,
          vues: 1501201,
          tags: [],
          images: [],
          content: "I WON THE ELECTIONS!",
          warning: "Des sources fiables ont certifié que Joe Biden a remporté les élections présidentielles américaines de 2020."
        },
        comments: [
          {
            user: 1,
            comment: {
              date: 1609462959424,
              content: "Ah bah bravo la fake news Monsieur le Président Américain..." +
                  "<br/><br/>La fake news est quasi omni-présente dans les réseaux sociaux aujourd'hui, mais on ne s'attend vraiment pas à que cela vienne du président d'une des plus grands puissances du monde." +
                  "Le petit symbole \"Profil vérifié\" juste après le nom du président est remis en cause en "
            }
          }
        ]
      },
      {
        id: "anonymat",
        user: 1,
        post: {
          date: 1609462959424,
          title: "L'anonymat",
          likes: 40,
          liked: false,
          vues: 5012,
          tags: [ "StopCensure" ],
          images: [ "https://picsum.photos/200/300", "https://picsum.photos/200/200", "https://picsum.photos/300/300" ],
          content:
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        comments: [
          {
            user: 1,
            comment: {
              date: 1609462959424,
              content: "Pourquoi avoir fait une chose pareille???"
            },
            sub: [
              {
                user: 2,
                comment: {
                  date: 1609462959424,
                  content: "parce que c des cons"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  mutations: {
    changeSearch() {
      this.state.articlesToShow = this.state.articles.filter(article => this.state.search.length === 0
          || article.post.content.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
          || (article.post.title && article.post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1)
          || (article.post.tags && article.post.tags.filter(word => word.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1).length > 0))
    }
}
})

import Accueil from "@/components/Accueil";
import Article from "@/components/Article";

const routes = [
  {
    path: '/',
    component: Accueil
  },
  {
    path: '/post/:id',
    component: Article
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
