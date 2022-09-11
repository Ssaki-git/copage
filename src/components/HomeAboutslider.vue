<template>
  <section class="home-slide">
    <div class="section__title">
      <div class="section__title-text">Our production.</div>
    </div>
    <v-container>
      <v-sheet>
        <v-slide-group multiple show-arrows>
          <v-slide-item v-for="n in 8" :key="n">
            <v-card style="margin: 0 20px 0 0; width: 320px; height: 240px">
              <v-img
                class="white--text align-end"
                height="120px"
                src="../assets/port01.png"
              />
              <v-card-title>sample title {{ n }}</v-card-title>
              <v-card-text class="text--primary">
                {{
                  n
                }}番目のカードテキストXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
  </section>
</template>
<script>
import AppButton from "./AppButton.vue";

export default {
  data() {
    return {
      buttonText: "WORK",
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
.home-slide__contents {
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
