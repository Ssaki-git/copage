<template>
  <section class="home">
    <HomeHero />

    <HomeAboutslider />
    <HomeService />
  </section>
</template>
<script>
import HomeHero from "./HomeHero.vue";

import HomeService from "./HomeService.vue";
import HomeAboutslider from "./HomeAboutslider.vue";

export default {
  components: {
    HomeHero,

    HomeService,
    HomeAboutslider,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/common/common.scss";
.home {
  padding-bottom: 50px;
}
</style>
