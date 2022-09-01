<template>
  <v-app>
    <AppHeader />
    <v-content>
      <router-view />
    </v-content>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
//import Home from "./components/Home.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    //Home,
    AppFooter,
  },
  methods: {
    createTitleDesc: function (routeInstance) {
      //titleを設定する処理
      if (routeInstance.meta.title) {
        var setTitle = routeInstance.meta.title + " | company";
        document.title = setTitle;
      } else {
        document.title = "company";
      }
      if (routeInstance.meta.desc) {
        var setDesc = routeInstance.meta.desc + " | company";
        document
          .querySelector("meta[name='description']")
          .setAttribute("content", setDesc);
      } else {
        document
          .querySelector("meta[name='description']")
          .setAttribute("content", "ディスクリプションはありません");
      }
    },
  },
  mounted: function () {
    var routeInstance = this.$route;
    this.createTitleDesc(routeInstance);
  },
  watch: {
    $route(routeInstance) {
      this.createTitleDesc(routeInstance);
    },
  },
};
</script>
