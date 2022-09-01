<template>
  <section class="work">
    <AppBackgroundHolder :title="title" />
    <v-container>
      <v-row class="work__contents">
        <v-col md="3">
          <v-card href="https://www.yahoo.co.jp/">
            <div class="work__card-title">
              <h3>ディレクション</h3>
            </div>
            <div class="work__card-img">
              <img
                class="icon--service"
                src="../assets/direction.png"
                alt="ディレクション"
              />
            </div>
            <div class="work__card-text">
              <p>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card to="/service#coding" hover>
            <div class="work__card-title">
              <h3>コーディング</h3>
            </div>
            <div class="work__card-img">
              <img
                class="icon--service"
                src="../assets/coding.png"
                alt="コーディング"
              />
            </div>
            <div class="work__card-text">
              <p>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card to="/service#design" hover>
            <div class="work__card-title">
              <h3>デザイン</h3>
            </div>
            <div class="work__card-img">
              <img
                class="icon--service"
                src="../assets/design.png"
                alt="デザイン"
              />
            </div>
            <div class="work__card-text">
              <p>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card to="/service#design" hover>
            <div class="work__card-title">
              <h3>デザイン</h3>
            </div>
            <div class="work__card-img">
              <img
                class="icon--service"
                src="../assets/design.png"
                alt="デザイン"
              />
            </div>
            <div class="work__card-text">
              <p>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card to="/service#design" hover>
            <div class="work__card-title">
              <h3>デザイン</h3>
            </div>
            <div class="work__card-img">
              <img
                class="icon--service"
                src="../assets/design.png"
                alt="デザイン"
              />
            </div>
            <div class="work__card-text">
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
      title: "Work",
    };
  },
  components: {
    AppBackgroundHolder,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/common/common.scss";
.work__contents {
  margin-top: 20px;
  justify-content: center;
}

.work__card-title {
  text-align: center;
  padding: 20px 10px 10px;
}

.work__card-img {
  text-align: center;
  padding: 20px;
}

.work__card-text {
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
