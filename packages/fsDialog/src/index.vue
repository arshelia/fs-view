<template>
  <div class="fs-dialog">
    <div class="main">
      这是一个Dialog
    </div>
  </div>
</template>
<script>
export default {
  name: "FsDialog"
};
</script>
<style lang="scss" scoped>
.fs-dialog {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: felx;
  align-items: center;
  justify-content: center;
}
.main {
  width: 200rpx;
  height: 200rpx;
  background: #fff;
  border-radius: 20rpx;
  color: #333;
}
</style>
