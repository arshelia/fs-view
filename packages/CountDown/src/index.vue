<template>
  <div class="fs-countdown">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "CountDown",
  props: {
    time: {
      type: String,
      default() {
        return Date.now();
      }
    },
    format: {
      type: String,
      default: "HH:mm:ss"
    }
  },
  data() {
    return {
      timer: null,
      countDown: {}
    };
  },
  mounted() {
    this.onChange();
  },
  unmounted() {
    clearInterval(this.timer);
  },
  methods: {
    countTime() {
      const now = Date.now();
      const diffTime = this.time - now;
      var D = Math.floor(diffTime / 1000 / 60 / 60 / 24);
      var H = diffTime / 1000 / 60 / 60;
      H = Math.floor(H % 24);
      var M = diffTime / 1000 / 60;
      M = Math.floor(M % 60);
      var S = diffTime / 1000;
      S = Math.floor(S % 60);
      var SS = diffTime - (((D * 24 + H) * 60 + M) * 60 + S) * 1000;
      this.countDown = {
        days: D,
        hour: H,
        minutes: M,
        seconds: S,
        microseconds: SS
      };
      this.$emit("onChange", this.countDown);
    },
    onChange() {
      this.timer = setInterval(() => {
        this.countTime();
      }, 1000);
    }
  }
};
</script>
