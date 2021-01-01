<template>
  <div id="app">
    <Header />
    <main>
      <div class="main-section">
        <div class="container">
          <div class="main-section-data">
            <div class="row">
              <div class="col-lg-2 col-md-4 pd-left-none">
                <div class="user-data full-width">
                  <div class="user-profile">
                    <div class="username-dt" style="background: linear-gradient(#00000008, rgba(58, 85, 228, 0.81)), url('https://i.jiveoff.fr/CpJcK.jpg'); background-position-x: 39%; background-position-y: 50%;">
                      <div class="usr-pic">
                        <img src="https://cdn.frankerfacez.com/emoticon/281995/4" alt="" width="100px" height="110px" style="background-color: #fff">
                      </div>
                    </div><!--username-dt end-->
                    <div class="user-specs">
                      <h3>Jean Dupont</h3>
                      <span>@JDupont</span>
                    </div>
                  </div><!--user-profile end-->
                  <ul class="user-fw-status">
                    <li>
                      <h4 style="font-size: 15px">Abonnements</h4>
                      <span>1 134</span>
                    </li>
                    <li>
                      <h4 style="font-size: 15px">Abonnés</h4>
                      <span>20</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-7 col-md-8 no-pd">
                <transition name="slide-fade" mode="out-in">
                  <router-view></router-view>
                </transition>
              </div>
              <div class="col-lg-3 pd-right-none no-pd">
                <!--<div class="widget widget-about">
                  <router-link to="/"><img class="" src="@/assets/images/Logo-Site.png" style="width: 200px; margin-bottom: 20px;"></router-link>
                </div>-->
                <div class="widget widget-jobs" style="box-shadow: none; border-top: 4px solid #3a55e4">
                  <div class="sd-title">
                    <h3>Tendances en France</h3>
                  </div>
                  <div class="jobs-list">
                    <div v-for="tendance in tendances" :key="tendance.title" class="job-info">
                      <div class="job-details">
                        <h3>{{ tendance.title }}</h3>
                        <p>{{ tendance.desc }}</p>
                      </div>
                      <div class="hr-rate">
                        <span style="color: #b2b2b2; display: inline-flex"><img src="@/assets/images/com.png" alt="" style="margin-right: 5px;"> {{ tendance.popularity }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import '@/assets/css/animate.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/line-awesome.css'
import '@/assets/css/line-awesome-font-awesome.min.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/lib/slick/slick.css'
import '@/assets/lib/slick/slick-theme.css'
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'

import Header from '@/components/partials/Header'
import Footer from "@/components/partials/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      tendances: [
        {
          title: "#reconfinement",
          popularity: "3M",
          desc: "ENCORE UN CONFINEMENT?!"
        },
        {
          title: "Bonne Année 2021",
          popularity: "2M",
          desc: "C'est le nouvel an..."
        },
        {
          title: "#resolutions",
          popularity: "75k",
          desc: "Il est temps de prendre de bonnes résolutions..."
        },
        {
          title: "#Pfizer",
          popularity: "50k",
          desc: "Le vaccin contre la Covid-19..."
        },
        {
          title: "#PartielsAnnulés",
          popularity: "7.5k",
          desc: "Les étudiants se ravissent..."
        }
      ]
    }
  }
}
</script>

<style>
#app {
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
