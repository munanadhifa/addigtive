<template>
  <div id="app">
    <v-app>
      <Header />

      <div style="background-color: #ffffff;" class="pb-10">
        <div class="service" >
          <Service />
        </div>
      </div>

      <div style="background-color: #ffffff;" class="pb-10">
        <div class="Portofolio">
         <Portofolio/>
        </div>
      </div>

      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header";
import Service from "./components/Service";
import Portofolio from "./components/Portofolio";
import Footer from "./components/Footer";


export default {
  name: "App",

  components: {
    Header,
    Service,
    Portofolio,
    Footer,
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
</style>
