<template>
  <div class="jumbotron py-3" style="background: #fafafa">
    <div class="container text-center">
      <h4 class="main-theme-color">HOW IT WORK</h4>
      <h1 class="mb-5">ทำเสร็จใน 4 ขั้นตอน</h1>

      <div class="row">
        <div class="col-6 col-md-3">
          <img :src="step_1" alt="" />
        </div>
        <div class="col-6 col-md-3">
          <img :src="step_2" alt="" />
        </div>
        <div class="col-6 col-md-3">
          <img :src="step_3" alt="" />
        </div>
        <div class="col-6 col-md-3">
          <img :src="step_4" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="container text-center py-5">
    <h4 class="main-theme-color">HOW IT WORK</h4>
    <h1 class="mb-5">บริการและแพ็กเกจ</h1>

    <img :src="packages" class="w-100" alt="" />

    <div class="card main-theme-bg-color pick-me" style="margin-top: 8em">
      <div class="row h-100">
        <div class="col-12 col-md-4">
          <img :src="thinking" class="think" alt="" />
          <div class="d-none d-md-block" style="height: 280px"></div>
        </div>
        <div class="col-12 col-md-8 h-100 my-auto">
          <h1>ยากที่จะตัดสินใจ</h1>
          <h1>อะไรดีที่สุดสำหรับคุณ?</h1>

          <div class="btn bg-white rounded-pill p-2 mt-2">เรียนรู้เพิ่มเติม</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import step_1 from "@/assets/step/Step 1.png";
import step_2 from "@/assets/step/Step 2.png";
import step_3 from "@/assets/step/Step 3.png";
import step_4 from "@/assets/step/Step 4.png";
import packages from "@/assets/packages.png";
import thinking from "@/assets/image/thinking.png";

export default {
  setup() {
    return {
      step_1,
      step_2,
      step_3,
      step_4,
      thinking,
      packages
    };
  }
};
</script>
<style scoped>
.pick-me {
  border-radius: 3em;
  min-height: 300px;
}

.think {
  height: 450px;
  position: absolute;
  top: -50%;
  left: 30px;
}
</style>
