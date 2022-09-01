<template>
  <section class="contact">
    <AppBackgroundHolder :title="title" />
    <div class="title">
      <v-card
        width="80%"
        height="auto"
        class="mx-auto"
        style="padding-bottom: 100px; margin-bottom: 200px"
      >
        <v-card
          width="80%"
          height="auto"
          class="mx-auto"
          style="padding-top: 40px"
          flat
        >
          <v-card-title
            color="#272727"
            style="margin-top: 10px; font-size: 30px; color: #272727"
          >
            件名
          </v-card-title>

          <v-textarea
            class="mx-2"
            rows="1"
            no-resize
            id="subject"
            label="例:LP作成について"
          ></v-textarea>

          <v-card-title
            class=""
            color="#272727"
            style="margin-top: 10px; font-size: 30px; color: #272727"
          >
            団体名/会社
          </v-card-title>

          <v-textarea
            class="mx-2"
            rows="1"
            no-resize
            id="organization"
            label="例:株式会社〇〇"
          ></v-textarea>

          <v-card-title
            class=""
            color="#272727"
            style="margin-top: 10px; font-size: 30px; color: #272727"
          >
            お名前
          </v-card-title>

          <v-textarea
            class="mx-2"
            rows="1"
            no-resize
            id="name"
            :rules="[required]"
            label="例:田中太郎"
          ></v-textarea>

          <v-card-title
            class=""
            color="#272727"
            style="margin-top: 10px; font-size: 30px; color: #272727"
          >
            メール
          </v-card-title>

          <v-textarea
            class="mx-2"
            rows="1"
            no-resize
            id="mail"
            :rules="[required]"
            label="例:xxxxxxxx@xxx.com"
          ></v-textarea>

          <v-card-title
            class=""
            color="#272727"
            style="margin-top: 10px; font-size: 30px; color: #272727"
          >
            内容
          </v-card-title>

          <v-textarea
            outlined
            auto-grow
            rows="4"
            row-height="30"
            shaped
            id="content"
            :rules="[required]"
          ></v-textarea>

          <v-card max-width="10%" class="mx-auto" flat>
            <router-link to="/thank">
              <v-btn
                rounded
                color="#272727"
                dark
                v-on:click="request"
                style="font-size: 20px"
                clas="justify-center"
                >送信</v-btn
              ></router-link
            >
            <Loading v-show="loading"></Loading>
          </v-card>
        </v-card>
      </v-card>
    </div>
  </section>
</template>
<script>
import AppBackgroundHolder from "./AppBackgroundHolder.vue";
import axios from "axios";
export default {
  methods: {
    required: (value) => !!value || "必ず入力してください",

    request: async function () {
      var Sub =
        "entry.855776422" + "=" + document.getElementById("subject").value;
      var Org =
        "entry.832506356" + "=" + document.getElementById("organization").value;
      var Nam =
        "entry.1539223683" + "=" + document.getElementById("name").value;
      var Mai =
        "entry.1931001038" + "=" + document.getElementById("mail").value;
      var Con =
        "entry.900369781" + "=" + document.getElementById("content").value;

      var url =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdLQAGzUqxFpDLrIFDP9GynZDZaH4WQrpX6doWndXo_OlhGkA/formResponse?" +
        Sub +
        "&" +
        Org +
        "&" +
        Nam +
        "&" +
        Mai +
        "&" +
        Con;
      axios.get(url);
      setTimeout(() => {
        window.location.href = "/thank";
      }, 1000);
    },
  },

  data() {
    return {
      title: "Contact",
    };
  },
  components: {
    AppBackgroundHolder,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/common/common.scss";
</style>
