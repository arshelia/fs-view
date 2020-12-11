<template>
  <div class="bottom-view" v-if="isShow">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "FloatBottom",
  props: {
    limit: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= this.limit) {
        this.isShow = true;
      }
      if (window.scrollY <= this.limit) {
        this.isShow = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.bottom-view {
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
