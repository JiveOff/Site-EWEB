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
    loggedInUser: 0,
    users: [
      {
        nom: "Jean Dupont",
        profile: "https://cdn.frankerfacez.com/emoticon/281995/4"
      },
      {
        nom: "Antoine Banha",
        job: "Étudiant",
        profile: "https://i.jiveoff.fr/VsOv6.jpg"
      },
      {
        nom: "Zakaria Sellam",
        job: "Étudiant",
        profile: "https://cdn.discordapp.com/avatars/362631494197444611/f45099902da7a4a8965473d00265b092.png?size=40"
      },
      {
        nom: "Donald Trump",
        verified: true,
        job: "45ème président des États-Unis",
        profile: "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg"
      },
      {
        nom: "Équipe d'Instagram",
        verified: true,
        job: "Compte officiel de la modération de Instagram",
        profile: "https://png.pngtree.com/element_our/md/20180626/md_5b321ca3631b8.jpg"
      },
      {
        nom: "Leeyris",
        job: "Étudiante en 1ère année de cinéma d'animation",
        profile: "https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s150x150/131932512_2158730554261342_504136716158691329_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=nIJZiXycqJUAX-CYOZG&tp=1&oh=a85a2580cccdd7111d23f628c1d4e73d&oe=601A2EBB"
      },
      {
        nom: "Me Emmanuel Pierrat",
        job: "Avocat spécialiste du droit d'auteur et de la liberté d'expression",
        profile: "https://cdn.discordapp.com/attachments/781424707060760576/795318067290177566/DNP_7085.png"
      },
      {
        nom: "itagura (Inès)",
        job: "Étudiante",
        profile: "https://cdn.discordapp.com/attachments/781424707060760576/795322108350562324/poutchfleur.png"
      },
      {
        nom: "Nahean Badar",
        job: "Étudiante",
        profile: "https://i.jiveoff.fr/1CE0X.png"
      },
      {
        nom: "Robert",
        profile: "https://i.jiveoff.fr/G6olW.owYS1s_T_7DSGHUsL_SWqWP7fB4wpc-FGY6EstLBmRK0GtS06Gn8x3M8s-QJRDdSFjLrqv1gJJCfxD9qFjj1B7BESDR2MT7utxwZrYU75l6-VTn5N8t99kpHrGDAo6RyWAcjCnaY"
      },
      {
        nom: "Marine",
        profile: "https://i.jiveoff.fr/dOt6Q.Whzl1aUBhY-fTIyJewVF7WGMsrHveDu9VWMuiuvbmfM6ZuXshQvQjpCEPu9fcTLx64o1lc4cKHeGoB74xDJHmPdOGqDCykwGFOmr-yKyNvav6wzi4oJG65nWVRLPJFT94v8S8Iq9"
      },
      {
        nom: "Julie",
        profile: "https://i.jiveoff.fr/oGeVS.ilAfblUWuJiaw1DXZCg2cdeArLRNLCtY7vFlr5OSPbc39yaNhztAkBui1cU5TIPigKGjI-87yE6sjbLBMNYvW6s--8hod-fKBlreQuZrcHYIVwD613bpG6WWO34Qbib6PDHMBonT"
      },
      {
        nom: "Salim",
        profile: "https://i.jiveoff.fr/6jEDo.zjE1s4iDnj3dYPVPcHXe0BvYuQI32BPhswwiJh5HoEmZQT2MlZ1CESa9kbMKosqpD9eLsvf62dsgF6ffQzODPKmN6jIqzsfdGNFsLY_q7ooaKb3vBVtD4LznTaqDEXYy1IClE6ti"
      },
      // 13
      {
        nom: "Marion",
        profile: "https://i.jiveoff.fr/wWsSl.4EzUomscVI0cNO1JHfHpQ0-7S7vGuen-lc6byt8kNPN2-awlGROF2YwSwVM8u9Q_x1nzu2K-KDZouISfLJdK4Kdi6Pa__PU7vjCg9BRjkBlZqUffIWpbjbqDcGz5GpcaPwLUCyYv"
      },
      // 14
      {
        nom: "Kevin",
        profile: "https://i.jiveoff.fr/zy5CT.y0zuYgHaKEXpwS4ff19Y9OyznFDUjVnvALJBPfngiN-8-b5BgaF8dBcun9FX9MXpSTr0Y-CPge0-6CDuEvR6lrvaAmnTfmXutvBeuH3Tanz9Rub6PT5rBZl5cjbm8_hVstI4HxOB"
      },
      // 15
      {
        nom: "Adam Smith",
        profile: "https://pbs.twimg.com/profile_images/2528322953/image_normal.jpg"
      },
      // 16
      {
        nom: "John Faith",
        profile: "https://pbs.twimg.com/profile_images/1337437080973144066/yq3DtN1b_normal.jpg"
      },
      // 17
      {
        nom: "Wasth",
        profile: "https://i.jiveoff.fr/HEfRg.jpg"
      },
      // 18
      {
        nom: "Luiz",
        profile: "https://i.jiveoff.fr/9xHIp.png"
      },
      // 19
      {
        nom: "Chou-fleur",
        profile: "https://i.jiveoff.fr/uSKW5.jpg"
      },
      // 20
      {
        nom: "Arvinde Senguttuvan",
        job: "Étudiant",
        profile: "https://i.jiveoff.fr/7XImk.png"
      },
      // 21
      {
        nom: "Maxime",
        profile: "https://i.jiveoff.fr/q5Epz.png"
      },
      // 22
      {
        nom: "Yannis",
        profile: "https://i.jiveoff.fr/wX4Ai.png"
      },
      // 23
      {
        nom: "Levi",
        profile: "https://i.jiveoff.fr/BdWmw.png"
      },
      // 24
      {
        nom: "bongo37",
        profile: "https://i.jiveoff.fr/5nyrB.png"
      },
      // 25
      {
        nom: "Philippe",
        profile: "https://i.jiveoff.fr/TcBt7.png"
      },
      // 26
      {
        nom: "Fred",
        job: "Modérateur du site",
        profile: "https://i.jiveoff.fr/inUc9.png"
      },
      // 27
      {
        nom: "Lisa",
        profile: "https://i.jiveoff.fr/jcmwJ.png"
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
          vues: 9501201,
          tags: [],
          images: [],
          content: "I WON THE ELECTION!",
          warning: "Des sources fiables ont certifié que Joe Biden a remporté les élections présidentielles américaines de 2020."
        },
        comments: [
          {
            user: 1,
            comment: {
              date: "2020-12-16T04:55:48.821Z",
              content: "Ah bah bravo la fake news Monsieur le Président Américain..." +
                  "<br/><br/>La fake news est quasi omni-présente dans les réseaux sociaux aujourd'hui, mais on ne s'attend vraiment pas à que cela vienne du président d'une des plus grands puissances du monde." +
                  "<br/>Que veut dire ce symbole \"Profil vérifié\" juste après le nom du président quand nous retrouvons de la fake news sur ce même profil?"
            },
            sub: [
              {
                user: 2,
                comment: {
                  date: "2020-12-19T04:55:48.821Z",
                  content: "C'est un symbole permettant de retrouver les personnalités publiques... et pourquoi Twitter ne pourrais pas bannir le président du réseau social? Il ne font rien contre la fake news?"
                }
              }
            ]
          },
          {
            user: 15,
            comment: {
              date: "2020-11-17T04:55:48.821Z",
              content: "4 years ago -- but not this year. Move on b/c we are.<br /><br />You're done and we're done with you."
            }
          },
          {
            user: 16,
            comment: {
              date: "2020-12-06T04:55:48.821Z",
              content: "No, you lost. By a huge margin.<br /><br />I like presidents that don't incite violence."
            }
          }
        ]
      },
      {
        id: "peintures",
        user: 7,
        post: {
          date: 1609006707000,
          likes: 27,
          liked: false,
          vues: 564,
          tags: [],
          images: [],
          content:
              "Les réseaux sociaux sont connus pour avoir la censure facile face à des photos de torses féminins, considérés comme « contenu pornographique », mais ils vont parfois jusqu’à supprimer des photos de peintures où ils apparaissent. Dernièrement, on a pu voir leurs partages de La liberté guidant le peuple ou L’Origine du monde se faire supprimer par les plateformes… Qu’en pensez-vous ?"
        },
        comments: [
          {
            user: 4,
            comment: {
              date: 1609179507000,
              content: "Nous sommes conscients qu’il arrive parfois que des personnes veuillent partager des images de nudité à caractère artistique ou créatif, mais pour un bon nombre de raisons nous n’autorisons pas la nudité sur Instagram. Cela inclut les photos, les vidéos et les autres contenus numériques présentant des rapports sexuels, des organes génitaux ou des plans rapprochés de fesses entièrement exposées. Cela inclut également certaines photos de mamelons, mais les photos de cicatrices post-mastectomie et de femmes qui allaitent activement un enfant sont autorisées. La nudité dans les photos de peintures et de sculptures est également acceptable."
            },
            sub: [
              {
                user: 5,
                comment: {
                  date: 1609462959424,
                  content: "Je suis en études d’art et réalise souvent du nu, que je montre sur mon compte Instagram. Aucun de mes dessins n’a été supprimé, cependant, de ce que j’ai pu observer, cela dépend énormément de l’audience : si une publication se fait signaler, elle va alerter le réseau social qui va se pencher dessus et la « passer au peigne fin ». Là, dans la plupart des cas, elle se fait supprimer."
                }
              },
              {
                user: 19,
                comment: {
                  date: 1609462959424,
                  content: "Oui, ça arrive souvent pour les gros comptes, par exemple Charlie Danger a vu une de ses stories se faire supprimer suite à des signalements… pour avoir montré la couverture d’un livre où apparait une illustration de sein. La photo d’une impression d’une peinture de sein s’est fait censurer."
                }
              }
            ]
          },
          {
            user: 17,
            comment: {
              date: 1609265907000,
              content: "Mais le message passé derrière l’œuvre a aussi son importance dans la censure, comme c’est particulièrement le cas pour les BD. Elles sont encore vues comme destinées aux enfants, donc cet art est celui qui se fait le plus censurer sur les réseaux sociaux à cause des signalements des internautes. "
            },
            sub: [
              {
                user: 18,
                comment: {
                  date: 1609462959424,
                  content: "J’ai vu que la pub d’une BD traitant d’homosexualité s’était fait censurer à cause de l’affiche, qui ne montrait pourtant pas de contenu pornographique…"
                }
              },
              {
                user: 6,
                comment: {
                  date: 1609462959424,
                  content: "La bande dessinée a pour certain un statut ambigu : elle serait réservée aux enfants. Et il y a souvent cette ambiguïté étrange dont se servent les censeurs. Pour eux, c’est une BD va forcément tomber dans les mains de petits de six ou huit ans. Or cela fait longtemps que la BD n’est pas seulement destinée aux enfants."
                }
              },
              {
                user: 6,
                comment: {
                  date: 1609462959424,
                  content: "Dans les années 1990, ou au début des années 2000, il y a eu une tentative de censure d’une BD très célèbre : Les Passagers du vent de François Bourgeon. Une personne a trouvé intelligent d’envoyer une case au ministère de l’Education Nationale en disant : « regardez, on voit une femme avec un sein nu ! ». Il y avait effectivement une pirate déguisée en homme à qui on arrachait les vêtements pour la démasquer et révéler son véritable sexe. Plus loin, on voyait un personnage fumer quelque chose d’un peu suspect dans une pipe… Et donc le plaignant a aussi reproché à la BD, en plus de la pornographie, de faire l’apologie de la drogue. A l’Education nationale, il y a eu quelqu’un pour envoyer une circulaire à tous les Centres de documentation et les bibliothèques pour demander le retrait des rayons de cette BD !"
                }
              }
            ]
          }
        ]
      },
      {
        id: "lois",
        user: 8,
        post: {
          date: "2020-12-20T04:55:48.821Z",
          likes: 6,
          liked: false,
          vues: 53,
          tags: [],
          images: [],
          content: "Je trouve qu'aujourd'hui il y a de plus en plus de loi pour tout et n'importe quoi sur les réseaux sociaux. Je ne comprends pas pourquoi car avant ce n'était pas comme ça.\n",
        },
        comments: [
          {
            user: 9,
            comment: {
              date: 1609462959424,
              content: "Oui c’est vrai mais n'oubliez pas que les réseaux sociaux ont complètement changé le mode de communication d'une manière sans précédent. Et cela a rendu également l'expression d'idées plus dangereuse que jamais."
            },
            sub: [
              {
                user: 8,
                comment: {
                  date: 1609462959424,
                  content: "D’accord, mais justement les réseaux sociaux sont faits pour qu’on s’exprime librement. Pourquoi créer une politique avec des directives qu’on est obligé de suivre ?"
                }
              },
              {
                user: 10,
                comment: {
                  date: 1609462959424,
                  content: "L'objectif de la politique n'est pas de restreindre la liberté d'expression ou de contrôler les opinions des gens, mais plutôt de protéger votre réputation et de garantir que le comportement des réseaux sociaux ne posera pas de risques pour vous ou ne violera pas les lois."
                }
              }
            ]
          },
          {
            user: 9,
            comment: {
              date: 1609462959424,
              content: "Chaque plateforme de réseaux sociaux établit des règles pour ce que vous pouvez et ne pouvez pas publier. Et si vous ne respectez pas les règles de leur communauté, strictes ou non qu'elles soient, vous pourriez être réprimandé, restreint ou même expulsé sans explication et sans recours légal."
            },
            sub: [
              {
                user: 11,
                comment: {
                  date: 1609462959424,
                  content: "Attendez on peut vraiment être interpellé au tribunal si jamais on critique quelqu’un ou quelque chose??"
                }
              },
              {
                user: 10,
                comment: {
                  date: 1609462959424,
                  content: "Oui! Par exemple, en 2011, un employé avait publié sur son profil Facebook de nombreuses critiques à l'égard de l'entreprise qui l'a embauché. Le tribunal a confirmé l’atteinte à la réputation de l’employeur et a condamné l’employé. "
                }
              },
              {
                user: 11,
                comment: {
                  date: 1609462959424,
                  content: "En 2011? c'était il y a longtemps alors. Aujourd'hui, il n’y a pas tout ça. On est libre de s'exprimer comme on veut. #LibertéD'Expression."
                }
              },
              {
                user: 9,
                comment: {
                  date: 1609462959424,
                  content: "La liberté d'expression est un droit accordé par la Constitution. Ce qui signifie que le gouvernement ne peut pas punir des individus pour des déclarations écrites ou orales. Mais cette liberté est limitée. La liberté d'expression n'équivaut pas à n'avoir aucune conséquence. "
                }
              },
              {
                user: 12,
                comment: {
                  date: 1609462959424,
                  content: "Le droit à la liberté d’expression n’est pas absolu. La loi stipule que tout discours portant atteinte à la réputation, à la vie privée, les insultes ciblées, les propos diffamatoires et l'incitation à la haine raciale, à la xénophobie ou à la violence sont considérés comme illégaux."
                }
              },
              {
                user: 14,
                comment: {
                  date: 1609462959424,
                  content: "Apparemment, un autre internaute était condamné pour diffusion via son profil Facebook de propos insultants vis-à-vis de policiers venus le contrôler. Il a eu 3 mois de prison ferme et 1 200 euros d’amende."
                }
              }
            ]
          },
          {
            user: 13,
            comment: {
              date: 1609462959424,
              content: "<b style='font-weight: 601'>@Julie</b> Récemment un internaute a été condamné d’avoir «aimé» une photo contenant une tête décapitée. Donc si, il peut y avoir des jugements. Ces condamnations sont bien plus nombreuses que vous ne le pensez. Voici la source: <a href='https://www.ladepeche.fr/2020/10/23/attentat-de-conflans-prison-ferme-pour-avoir-diffuse-la-photo-du-professeur-decapite-9159294.php'>https://www.ladepeche.fr/2020/10/23/attentat-de-conflans-prison-ferme-pour-avoir-diffuse-la-photo-du-professeur-decapite-9159294.php</a>"
            },
            sub: [
              {
                user: 11,
                comment: {
                  date: 1609462959424,
                  content: "Ah oui chaud! Je ne savais pas du tout."
                }
              }
            ]
          },
          {
            user: 14,
            comment: {
              date: 1609462959424,
              content: "Eh oui les gars! Donc vous feriez mieux de contrôler votre langue avant de publier, partager, commenter ou même de simplement liker un contenu biaisé."
            }
          }
        ]
      },
      {
        id: "forums",
        user: 20,
        post: {
          date: "2020-12-28T04:55:48.821Z",
          likes: 7,
          liked: false,
          vues: 51,
          tags: [],
          images: [],
          content: "J’entends beaucoup parler des forums comme 4chan et des réactions négatives qu’ils suscitent auprès de la presse et de l’opinion publique. Quelqu’un pourrait m’éclairer ? ",
        },
        comments: [
          {
            user: 21,
            comment: {
              date: "2020-12-28T04:55:48.821Z",
              content: "4chan est un forum rempli de « trolls » dangereux et malfaisants, il permet de communiquer sur le site de manière anonyme, ce qui incite aux contenus très polémique et/ou racistes de façon relativement discrète."
            },
            sub: [
              {
                user: 22,
                comment: {
                  date: "2020-12-29T04:55:48.821Z",
                  content: "Et ce n'est pas tout, ce genre de forum contient une culture fermée au monde ce qui soude ses membres et incite au lynchage de masse si vous n’adhérez pas à ce type de “secte”. C'est vraiment déplorable."
                }
              },
              {
                user: 23,
                comment: {
                  date: "2020-12-29T04:55:48.821Z",
                  content: "J’ai connu ça… Je comparerais ce comportement aux ruches des abeilles. Faites du mal à la ruche et c'est tout une colonie que vous ramènerez contre vous..."
                }
              },
              {
                user: 0,
                comment: {
                  date: "2020-12-30T04:55:48.821Z",
                  content: "Je suis d'accord mais c’est là qu’on peut y trouver une certaine liberté culturelle d’expression comme avec la création des mèmes, ces blagues sur internet massivement partagées."
                }
              },
              {
                user: 24,
                comment: {
                  date: "2020-12-30T04:55:48.821Z",
                  content: "4chan est vraiment une poubelle numérique, pour un bon message il y a surtout 100 posts débiles. #cancel4chan"
                }
              },
              {
                user: 25,
                comment: {
                  date: "2020-12-30T04:55:48.821Z",
                  content: "Je pense que ce genre de site doit continuer d’exister mais les abus existants doivent être mieux contrôlées. En attendant, comme le célèbre adage d’Internet le dit : « Don’t feed the troll » ne donnez pas d’attention à quelqu’un derrière son écran qui cherche à perdre ton temps."
                }
              }
            ]
          },
          {
            user: 26,
            comment: {
              date: "2020-12-30T04:55:48.821Z",
              content: "Je dois dire qu’on trouve de nombreux problèmes concernant la liberté d’expression, même sur ce site. Théoriquement, on a le droit d’écrire ce que l’on pense seulement si cela ne va pas nuire à autrui. Mais une minorité ne respectent pas les règles comme avec les trolls dont vous parlez notamment."
            }
          },
          {
            user: 27,
            comment: {
              date: "2021-01-02T04:55:48.821Z",
              content: "Les forums internet peuvent être des réseaux merveilleux ou l’on trouve de tout. De la cuisine, du divertissement, ou bien des réponses aux questions que nous nous posons et bien d’autres encore. Je pense que la grande majorité des utilisateurs de forums se comportent bien et nous ne devons pas l'oublier."
            }
          }
        ]
      },
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
