<template>
  <section class="information">
    <AppBackgroundHolder :title="title" />
    <v-container>
      <v-row class="information__table">
        <v-col md="7">
          <v-data-table
            :headers="headers"
            :items="members"
            hide-default-header
            hide-default-footer
            class="information__data"
          ></v-data-table>
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
      title: "information",
      headers: [
        { text: "名前", value: "name" },
        { text: "性別", value: "gender" },
      ],
      members: [
        {
          name: "会社名",
          gender: "株式会社〇〇〇〇",
        },
        {
          name: "所在地",
          gender: "東京都〇〇〇〇〇〇",
        },
        {
          name: "電話番号",
          gender: "03-xxxxxxxxxxxxxx",
        },
        {
          name: "FAX",
          gender: "03-xxxxxxxxxxxxxx",
        },
        {
          name: "メールアドレス",
          gender: "xxxx.yyy@abc.com",
        },
        {
          name: "ホームページURL",
          gender: "https://xxxxxx.com",
        },
        {
          name: "代表者名",
          gender: "田中太郎",
        },
        {
          name: "事業内容",
          gender: "小売,運送",
        },
        {
          name: "取扱製品",
          gender: "xxxxxx,yyyyyy,zzzzz",
        },
        {
          name: "設立年月",
          gender: "2000/01/01",
        },
      ],
    };
  },
  components: {
    AppBackgroundHolder,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/common/common.scss";
.information__table {
  margin-top: 20px;
  justify-content: center;
}

.information__data {
  text-align: center;
  padding-bottom: 50px;
  justify-content: center;
}

.information__card-img {
  text-align: center;
  padding: 20px;
}

.information__card-text {
  padding: 10px 20px;
}

.icon--information {
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
