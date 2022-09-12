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
        { text: "名前", value: "name", width: "20%" },
        { text: "性別", value: "gender", width: "60%" },
      ],
      members: [
        {
          name: "田中一郎",
          gender: "男性",
        },
        {
          name: "田中二郎",
          gender: "男性",
        },
        {
          name: "田中三郎",
          gender: "男性",
        },
        {
          name: "田中四郎",
          gender: "男性",
        },
        {
          name: "田中五郎",
          gender: "男性",
        },
        {
          name: "田中六郎",
          gender: "男性",
        },
        {
          name: "田中七郎",
          gender: "男性",
        },
        {
          name: "田中八郎",
          gender: "男性",
        },
        {
          name: "田中九郎",
          gender: "男性",
        },
        {
          name: "田中十郎",
          gender: "男性",
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
