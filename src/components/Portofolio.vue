<template>
  <div id="portofolio">
    <div class="slider">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <v-hover v-slot:default="{ hover }">
            <v-img :src="require('../assets/foto2.png')" class="foto2" id="slider1"> 
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <p>Fashion</p>
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </swiper-slide>
         <swiper-slide>
          <v-hover v-slot:default="{ hover }">
            <v-img :src="require('../assets/foto3.png')" class="foto3" id="slider2">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <p>Wardim</p>
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </swiper-slide>
         <swiper-slide>
          <v-hover v-slot:default="{ hover }">
            <v-img :src="require('../assets/foto4.png')" class="foto4" id="slider3">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <p style="text-align:center">Horison Group</p>
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </swiper-slide>
         <swiper-slide>
          <v-hover v-slot:default="{ hover }">
            <v-img :src="require('../assets/foto5.png')" class="foto5" id="slider4">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                   <p style="text-align:center">BM 400</p>
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </swiper-slide>
         <swiper-slide>
          <v-hover v-slot:default="{ hover }">
            <v-img :src="require('../assets/foto6.png')" class="foto6" id="slider5">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <p style="text-align:center">Motomoto Museum</p>
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </swiper-slide>
        <swiper-slide>
          <v-hover v-slot:default="{ hover }">
            <v-img :src="require('../assets/foto7.png')" class="foto7" id="slider6">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <p>Fashion</p>
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-responsive-breakpoints",
  title: "Responsive breakpoints",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");

@media only screen and (min-width: 800px) {
  #portofolio {
    font-family: "Montserrat", sans-serif;
    color: #003e6f;
    /* margin-top: 10px; */
  }

  .portf-text1 {
    width: 500px;
    margin-top: 10px;
    font-family: "Montserrat", sans-serif;
  }

  .portf {
    margin-left: 70px;
  }

  .slider {
    margin-left: 30px;
  }
  .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

.foto2,
.foto3,
.foto4,
.foto5,
.foto6,
.foto7 {
  width: 350px; 
  height: 500px;
}
}

@media only screen and (max-width: 1200px) {
  .foto2,
  .foto3,
  .foto4,
  .foto5,
  .foto6,
  .foto7{
    width: 350px; 
    height: 500px;
    margin-left: 5px;
  }
   .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
} 

@media (min-width: 411px) and (max-width: 823px) {
  #slider1,
  #slider2,
  #slider3,
  #slider4,
  #slider5,
  #slider6{
    width: 350px; 
    height: 500px;
    margin-left: 30px;
  }

   .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
  
}


@media (min-width: 414px) and (max-width: 736px) {
  .foto2,
  .foto3,
  .foto4,
  .foto5,
  .foto6,
  .foto7{
    width: 350px; 
    height: 500px;
    margin-left: 30px;
  }

   .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
  
}

@media (min-width: 411px) and (max-width: 823px) {
  #slider1,
  #slider2,
  #slider3,
  #slider4,
  #slider5,
  #slider6{
    width: 350px; 
    height: 500px;
    margin-left: 30px;
  }

   .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
  
}

/* @media (min-width: 375px) and (max-width: 812px) {
  #slider1,
  #slider2,
  #slider3,
  #slider4,
  #slider5,
  #slider6{
    width: 300px; 
    height: 500px;
    margin-left: 20px;
  }

   .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
  
} */

@media (min-width: 320px) and (max-width: 568px) {
  .foto2,
  .foto3,
  .foto4,
  .foto5,
  .foto6,
  .foto7{
    width: 340px;
    height: 500px;
    margin-left: 10px;
  }

   .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
  
}
</style>