<template>
<div id="footer">
  <div fluid full-height class="bg-footer">
    <br />
    <br />
    <br />
    <br />

    <div class="git">
      <h1>GET IN TOUCH</h1>
    </div>

    <v-row class="about-us">
      <v-col cols="6" md="4" id="contact">
        <v-card style="border-radius:100px" class="rounded-card" @click="openWA()">
          <p class="message" style="text-align:center">SEND ME A MESSAGE</p>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" class="col-social">
        <v-divider style="border-color: #ffffff;" class="social"></v-divider>
        <h1 class="txt-soci">SOCIAL</h1>
        <div class="btn">
          <v-btn text small style="color: #ffffff;" class="fb" @click="openFB()">FACEBOOK</v-btn>
          <br />
          <v-btn text small style="color: #ffffff;" class="ig" @click="openIG()">INSTAGRAM</v-btn>
          <br />
          <v-btn text small style="color: #ffffff;" class="behance" @click="openBEHANCE()">BEHANCE</v-btn>
        </div>
      </v-col>
      <v-col cols="6" md="4" class="col-contact">
        <v-divider style="border-color: #ffffff;" class="dividerc"></v-divider>
        <h1 class="txt-contact">CONTACTS</h1>
        <div class="contact">
          <p> Addigtive.agency@gmail.com</p>
          <br />
          <p style="margin-top: -20px;" >+62 812-9180-8092</p>
          <br />
        </div>
      </v-col>
    </v-row>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  methods: {
    openIG() {
      window.open("https://www.instagram.com/addigtive/?hl=id", "_blank");
    },
    openWA() {
      window.open("https://bit.ly/2XAKrCJ", "_blank");
      
    },
    openBEHANCE() {
      window.open("https://www.behance.net/addigticreativ", "_blank");
    },
    openFB() {
      window.open("https://www.facebook.com/adlin.zuhriawan.56", "_blank");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");
.bg-footer {
  background-image: url("../assets/footer.png");
  background-size: cover;
  width: 100%;
  height: 830px;
  margin-top: -10px;
  /* position: absolute; */
}

@media only screen and (min-width: 800px) {
  .git {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    margin-left: 500px;
  }

  .about-us {
    margin-top: 200px;
    margin-left: 220px;
    font-size: 20px;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
  }

  .btn {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
  }

  .fb,
  .ig,
  .behance {
    font-family: "Montserrat", sans-serif;
    margin-top: 10px;
    margin-left: 10px;
  }
  .txt-soci {
    margin-left: 10px;
  }

  .contact {
    font-family: "Montserrat", sans-serif;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 15px;
  }

  .social,
  .dividerc {
    width: 300px;
    margin-left: 5px;
  }

  .rounded-card {
    width: 200px;
    height: 200px;
    margin-top: -40px;
    margin-left: -50px;
  }
  .message {
    text-align: center;
    padding-top: 75px;
    margin-left: -5px;
    font-family: "Montserrat", sans-serif;
    color: #003e6f;
  }
  .col-contact {
    margin-left: -10px;
  }
}

@media only screen and (max-width: 1200px) {
  .git {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    text-align: center;
  }

  #contact {
    margin-left: 50px;
    margin-top: 40px;
    margin-left: 90px;
  }

  .col-social,
  .col-contact {
    margin-left: 100px;
    margin-top: 20px;
  }

  .txt-soci,
  .btn,
  .txt-contact {
    color: #ffffff;
    text-align: center;
  }

  .contact {
    margin-top: 10px;
    text-align: center;
    color: #ffffff;
  }
}
</style>