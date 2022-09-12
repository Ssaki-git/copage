<template>
  <section class="info">
    <AppBackgroundHolder :title="title" />
    <v-container>
      <v-row class="info__contents">
        <v-col md="6">
          <v-card to="info#direction">
            <div class="info__card-title" id="direction">
              <h3>ディレクション</h3>
            </div>
            <div class="info__card-img">
              <img
                class="icon--info"
                src="../assets/direction.png"
                alt="ディレクション"
              />
            </div>
            <div class="info__card-text">
              <p>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import AppBackgroundHolder from "./AppBackgroundHolder.vue";

export default {
  data() {
    return {
      title: "info",
    };
  },
  components: {
    AppBackgroundHolder,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/common/common.scss";
.info__contents {
  margin-top: 20px;
  justify-content: center;
}

.info__card-title {
  text-align: center;
  padding: 20px 10px 10px;
}

.info__card-img {
  text-align: center;
  padding: 20px;
}

.info__card-text {
  padding: 10px 20px;
}

.icon--info {
  width: 48px;
  height: 48px;
}

.v-window {
  height: 300px !important;

  @include display_pc {
    height: 500px !important;
  }
}
</style>
