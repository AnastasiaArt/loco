<template>
  <div id="app">
    <Header/>
    <Carousel/>
    <Intro/>
    <TenderList/>
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Intro from './components/Intro.vue';
import Carousel from './components/Carousel.vue';
import TenderList from './components/TenderList.vue';
import Gallery from './components/Gallery.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Intro,
    Carousel,
    TenderList,
    Gallery,
    Footer
  },
  data() {
    return {

    };
  },
}
</script>

<style>
#app {
  position: relative;
  padding-top: 5%;
}
</style>
