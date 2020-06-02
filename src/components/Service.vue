<template>
  <v-container>
    <div id="service">
      <h1>
        Here's what we can
        <br />do to help:
      </h1>

      <v-row class="row1">
        <v-col cols="6" class="service-1">
          <h4>DIGITAL STRATEGY</h4>
          <p
            class="text1"
          >360 digital business strategy created aiming to maximize brand potential and reach on the internet</p>
        </v-col>
        <v-col cols="6" class="service-2">
          <h4>APPS DEVELOPMENT</h4>
          <p
            class="text2"
          >Establishing apps that is suitable to client's targeted audiances with detailed project timeline</p>
        </v-col>
      </v-row>
      <v-row class="row2">
        <v-col cols="6" class="service-3">
          <h4>SOCIAL MEDIA MANAGEMENT</h4>
          <p
            class="text3"
          >Managing day to day client's social media activities through out several digital platforms</p>
        </v-col>
        <v-col cols="6" class="service-4">
          <h4>WEBSITE DEVELOPMENT</h4>
          <p
            class="text4"
          >Building client's website that are both complied with client's needs & featured with the latest technology</p>
        </v-col>
      </v-row>
      <v-row class="row3">
        <v-col cols="6" class="service-5">
          <h4>DIGITAL ADVERTISING</h4>
          <p class="text3">
            Helping client's needs to advertise or promote their product & services in popular digital media platform.
            such as Google, Youtube, Instagram, Facebook, etc.
          </p>
        </v-col>
        <v-col cols="6" class="service-6">
          <h4>BRANDING</h4>
          <p
            class="text4"
          >Assisting out client in establishing their image that is cater to the vision of the company</p>
        </v-col>
      </v-row>
      <v-row class="row4">
        <v-col cols="6" class="service-7">
          <h4>DIGITAL CONSULTATION</h4>
          <p class="text3">
            Providing digital advisory which best suited to the
            client's strategy to enhance their business in digital ecosystem
          </p>
        </v-col>
        <v-col cols="6" class="service-8">
          <h4>PHOTOGRAPHY & VIDEOGRAPHY</h4>
          <p class="text4">
            Creating contents through photos and videos as a tool to visualize client's perspective that could be
            place throughout print and digital media
          </p>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");

@media only screen and (min-width: 800px) {
  #service {
    font-family: "Montserrat", sans-serif;
    color: #003e6f;
    margin-top: 10px;
  }

  .service-1,
  .text1,
  .text2,
  .text3,
  .text4 {
    margin-top: 10px;
    width: 400px;
  }
}

@media only screen and (max-width: 1200px) {
  .row1,
  .row2,
  .row3,
  .row4{
     font-size: 13px;
}
}
</style>