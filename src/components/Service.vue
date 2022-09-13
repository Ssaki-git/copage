<template>
  <section class="service">
    <AppBackgroundHolder :title="title" />
    <v-container>
      <v-row class="service__contents">
        <v-col md="6">
          <v-card to="service#direction">
            <div class="service__card-title" id="direction">
              <h3>ディレクション</h3>
            </div>
            <div class="service__card-img">
              <img
                class="icon--service"
                src="../assets/designe.png"
                alt="ディレクション"
              />
            </div>
            <div class="service__card-text">
              <p>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card to="/service#coding" hover>
            <div class="service__card-title">
              <h3>コーディング</h3>
            </div>
            <div class="service__card-img">
              <img
                class="icon--service"
                src="../assets/designe.png"
                alt="コーディング"
              />
            </div>
            <div class="service__card-text">
              <p>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card to="/service#design" hover>
            <div class="service__card-title">
              <h3>デザイン</h3>
            </div>
            <div class="service__card-img">
              <img
                class="icon--service"
                src="../assets/design.png"
                alt="デザイン"
              />
            </div>
            <div class="service__card-text">
              <p>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card to="/service#design" hover>
            <div class="service__card-title">
              <h3>デザイン</h3>
            </div>
            <div class="service__card-img">
              <img
                class="icon--service"
                src="../assets/design.png"
                alt="デザイン"
              />
            </div>
            <div class="service__card-text">
              <p>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card to="/service#design" hover>
            <div class="service__card-title">
              <h3>デザイン</h3>
            </div>
            <div class="service__card-img">
              <img
                class="icon--service"
                src="../assets/design.png"
                alt="デザイン"
              />
            </div>
            <div class="service__card-text">
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
      title: "service",
    };
  },
  components: {
    AppBackgroundHolder,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/common/common.scss";
.service__contents {
  margin-top: 20px;
  justify-content: center;
}

.service__card-title {
  text-align: center;
  padding: 20px 10px 10px;
}

.service__card-img {
  text-align: center;
  padding: 20px;
}

.service__card-text {
  padding: 10px 20px;
}

.icon--service {
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
