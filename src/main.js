import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
import VueRouter from 'vue-router';
import VueSwal from 'vue-sweetalert2'
import BootstrapVue from "bootstrap-vue";
import moment from 'moment'

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(BootstrapVue);
Vue.use(VueSwal)
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.prototype.moment = moment

const store = new Vuex.Store({
  state: {
    search: "",
    articlesToShow: [],
    articles: [
      {
        id: "censure",
        user: {
          profile: "https://i.jiveoff.fr/VsOv6.jpg",
          nom: "Antoine Banha"
        },
        post: {
          date: 1609462959424,
          title: "La censure des politiques",
          likes: 11,
          liked: false,
          vues: "3k",
          tags: [ "StopCensure", "LaPolitiqueCDeLaMerde" ],
          content:
              "<b>lol</b>"
        },
        comments: [
          {
            user: {
              profile: "https://i.jiveoff.fr/VsOv6.jpg",
              nom: "Antoine Banha"
            },
            comment: {
              date: 1609462959424,
              content: "Pourquoi avoir fait une chose pareille???"
            }
          }
        ]
      },
      {
        id: "anonymat",
        user: {
          profile: "https://cdn.discordapp.com/avatars/362631494197444611/f45099902da7a4a8965473d00265b092.png?size=40",
          nom: "Zakaria Sellam"
        },
        post: {
          date: 1609462959424,
          title: "L'anonymat",
          likes: 40,
          liked: false,
          vues: "5.1k",
          tags: [ "StopCensure" ],
          content:
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        comments: [
          {
            user: {
              profile: "https://i.jiveoff.fr/VsOv6.jpg",
              nom: "Antoine Banha"
            },
            comment: {
              date: 1609462959424,
              content: "Pourquoi avoir fait une chose pareille???"
            },
            sub: [
              {
                user: {
                  profile: "https://i.jiveoff.fr/VsOv6.jpg",
                  nom: "Antoine Banha"
                },
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
