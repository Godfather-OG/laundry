<template>
  <div class="container text-center py-5">
    <h4 class="main-theme-color">HOW IT WORK</h4>
    <h1 class="mb-5">บริการและแพ็กเกจ</h1>
  </div>
  <v-img
    :class="{
      unavailable: !available,
      animate__animated: !available,
      animate__headShake: !available,
      animate__infinite: !available
    }"
    src="https://www.electrolux.co.th/globalassets/importimageproduct/original/ewf1042r7sb-img-fr-cl-1500x1500.png"
  >
  </v-img>
</template>
<script>
export default {
  name: "WashMachine",
  props: {
    available: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped>
.unavailable {
  opacity: 0.5;
  filter: grayscale(100%);
}
</style>
