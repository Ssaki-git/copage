<template>
  <section class="thank">
    <AppBackgroundHolder :title="title" />
    <div id="message">
      <h2>thank you</h2>
      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
    </div>
  </section>
</template>
<script>
import AppBackgroundHolder from "./AppBackgroundHolder.vue";

export default {
  data() {
    return {
      title: "Thank",
    };
  },
  components: {
    AppBackgroundHolder,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/common/common.scss";
#message {
  height: 1000px;
}
</style>
