<template>
  <section class="home-about">
    <div class="section__title">
      <div class="section__title-text">About</div>
    </div>
    <!-- ここから追加 -->
    <v-container>
      <v-row class="home-about__contents">
        <v-col md="5" class="home-about__contents-img">
          <img src="../assets/aboutco.png" alt="" class="img-fluid" />
        </v-col>
        <v-col md="5" class="home-about__contents-text">
          <p>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </p>
          <p>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </p>
        </v-col>
      </v-row>
      <AppButton :button-text="buttonText" :url="url" />
    </v-container>
    <!-- ここまで追加 -->
  </section>
</template>
<script>
import AppButton from "./AppButton.vue";

export default {
  data() {
    return {
      buttonText: "MORE",
      url: "/work",
    };
  },
  components: {
    AppButton,
  },
};
</script>
<style lang="scss" scoped>
/* ここから追加 */
@import "../styles/common/common.scss";
.home-about__contents {
  margin-top: 10px;
  justify-content: center;

  &-img {
    text-align: center;
  }

  &-text {
    word-wrap: break-word;
  }
}
/* ここまで追加 */
</style>
