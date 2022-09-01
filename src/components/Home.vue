<template>
  <section class="home">
    <HomeHero />
    <HomeAbout />
    <HomeService />
  </section>
</template>
<script>
import HomeHero from "./HomeHero.vue";
import HomeAbout from "./HomeAbout.vue";
import HomeService from "./HomeService.vue";

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeService,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/common/common.scss";
.home {
  padding-bottom: 50px;
}
</style>
