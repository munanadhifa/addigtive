<template>
<div id="app">
  <div fluid full-height class="bg">
    <v-row>
      <v-col cols="6">
        <v-img :src="require('../assets/logoaddigtive.png')" class="my-3" contain />
      </v-col>

      <v-col cols="6">
        <h2 class="menu">MENU</h2>
        <v-app-bar-nav-icon class="menu-appbar" style="color: #ffffff;" @click="openNav()"></v-app-bar-nav-icon>

        <div ref="myNav" class="overlay">
          <v-col cols>
            <v-img :src="require('../assets/logoaddigtive.png')" class="logo-menu" contain />
          </v-col>
          <v-col cols>
            <v-btn @click="closeNav()" outlined small fab color="#ffffff" class="closebtn">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>

          <div class="overlay-content">

            <a href="#service">
              <h1 class="menu-service" @click="closeNav()">SERVICES</h1>
            </a>
            <!-- <router-link class="nav-link" to="/service">
              <h1 class="menu-service" @click="service()">SERVICES</h1>
            </router-link>  -->
            
             <a href="#portofolio">
              <h1 class="menu-portf" @click="closeNav()">PORTOFOLIO</h1>
            </a>

            <a href="#footer">
              <h1 class="menu-contact" @click="closeNav()">CONTACT</h1>
            </a>
            
          </div>

          <div class="btn-menu">
          <v-btn text small style="color: #ffffff;" class="fb" @click="openFB()">FACEBOOK</v-btn>
          <v-btn text small style="color: #ffffff;" class="ig" @click="openIG()">INSTAGRAM</v-btn>
          <v-btn text small style="color: #ffffff;" class="behance" @click="openBEHANCE()">BEHANCE</v-btn>
        </div>

        </div>
      </v-col>
    </v-row>

    <h1 class="txt1">
      IN SEARCH OF
      <vue-typer
        :text='["CREATIVITY","IDEAS","STRATEGY","GROWTH","STABILITY", "AUTOMIZATION"]'
        :repeat="Infinity"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="70"
        :type-delay="70"
        :pre-erase-delay="2000"
        :erase-delay="250"
        erase-style="clear"
        :erase-on-complete="false"
        caret-animation="blink"
      ></vue-typer>
      <br />FOR YOUR BRAND ?
    </h1>

    <p
      class="txt2"
    >We are just the right team to carry out the mission to help you fulfill your needs</p>

      <v-btn rounded class="talk" @click="openWA">Talk To Us</v-btn>

  </div>

  <!-- <router-view ></router-view> -->
</div>
</template>

<script>

export default {
  data: () => ({
    dialog: false
  }),

  methods: {
    closeNav() {
      this.$refs.myNav.style.width = "0%";
    },
    openNav() {
      this.$refs.myNav.style.width = "100%";
    },
    openIG() {
      window.open('https://www.instagram.com/addigtive/?hl=id', '_blank');
    },
    openWA() {
      window.open('https://bit.ly/2XAKrCJ', '_blank')
    },
    openFB(){
      window.open('https://www.facebook.com/adlin.zuhriawan.56', '_blank')
    },
    openBEHANCE() {
      window.open("https://www.behance.net/addigticreativ", "_blank");
    },
    service(){
       this.$router.push("/service")
    }
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");

 .bg {
    background-image: url("../assets/headerasset.png");
    background-size: cover;
    width: 100%;
  height: 830px;
  /* position: absolute; */
}


.vue-typer {
  font-family: "Montserrat", sans-serif;
}

.vue-typer .custom.char.typed {
  color: #f8ec3b;
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-image: linear-gradient(#58a0ff, #5966ff);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

.btn-menu {
  font-size: 40px;
  margin-top: 200px;
  margin-left: 120px;
}

.menu-service {
  margin-top: -180px;
  text-align: justify;
  margin-left: 120px;
  font-family: "Montserrat", sans-serif;
  font-size: 90px;
  background: -webkit-linear-gradient(#58a0ff, #5966ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffffff;
}

.menu-portf {
  margin-top: -70px;
  text-align: justify;
  margin-left: 120px;
  font-family: "Montserrat", sans-serif;
  font-size: 90px;
  background: -webkit-linear-gradient(#58a0ff, #5966ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffffff;
}

.menu-contact {
  margin-top: -20px;
  text-align: justify;
  margin-left: 120px;
  font-family: "Montserrat", sans-serif;
  font-size: 90px;
  background: -webkit-linear-gradient(#58a0ff, #5966ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffffff;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

@media only screen and (min-width: 800px) {
  .bg {
  background-image: url("../assets/headerasset.png");
  background-size: cover;
  background-size: 100%;
  /* width: 100%;
  height: 830px; */
  /* position: absolute; */
}
  .closebtn {
    margin-right: 150px;
    margin-top: 15px;
  }

  .logo-menu {
    margin-left: 130px;
    margin-top: 20px;
    width: 200px;
  }

  .my-3 {
    margin-left: 130px;
    margin-top: 50px;
    width: 200px;
  }
  .menu {
    margin-left: 340px;
    color: #ffffff;
    margin-top: 10px;
    font-family: "Montserrat", sans-serif;
  }
  .menu-appbar {
    margin-left: 430px;
    margin-top: -60px;
  }

  .txt1 {
    text-align: justify;
    font-size: 50px;
    color: #ffffff;
    margin-left: 120px;
    margin-top: 200px;
    font-family: "Montserrat", sans-serif;
  }

  .txt2 {
    text-align: justify;
    color: #ffffff;
    margin-left: 120px;
    margin-top: 30px;
    font-family: "Montserrat", sans-serif;
    /* margin-top: -250px; */
  }

  
  .talk {
    font-family: "Montserrat", sans-serif;
    margin-top: 20px;
    margin-left: 130px;
    /* margin-left: -100px; */
  }
  .form-txt {
    font-family: "Montserrat", sans-serif;
    color: #003e6f;
    margin-bottom: 10px;
  }

  .title-talk {
    margin-left: 200px;
    font-family: "Montserrat", sans-serif;
    color: #003e6f;
  }

  
}

@media only screen and (max-width: 1200px) {
  .bg {
  background-image: url("../assets/headermobile.png");
  background-size: cover;
  width: 100%;
  height: 660px;
  /* position: absolute; */
}
  .my-3 {
    margin-left: 10px;
    margin-top: 30px;
    width: 100px;
  }

  .menu {
    /* margin-left: 340px;  */
    color: #ffffff;
    margin-left: 50px;
    margin-top: 13px;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
  }

  .menu-appbar {
    margin-left: 10px;
    margin-top: -55px;
  }

  .txt1 {
    font-size: 20px;
    margin-left: 20px;
    width: 300px;
    margin-top: 200px;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    text-align: justify;
  }

  .txt2 {
    text-align: justify;
    color: #ffffff;
    margin-left: 20px;
    font-size: 15px;
    margin-top: 15px;
    width: 243px;
    font-family: "Montserrat", sans-serif;
  }

  .talk {
    font-family: "Montserrat", sans-serif;
    margin-left: 30px;
    margin-top: 30px;
  }

  .logo-menu {
    margin-top: 20px;
    width: 150px;
  }

  .overlay .closebtn {
  position: absolute;
  top: 25px;
  right: 45px;
  font-size: 60px;
}

.menu-service {
  font-size: 40px;
  margin-left: 10px;
}

.menu-portf {
  font-size: 40px;
  margin-left: 10px;
  margin-top: -100px;
}

.menu-contact {
  font-size: 40px;
  margin-left: 10px;
}

.btn-menu {
  margin-left: 10px;
  margin-top: 230px;
}
}


</style>