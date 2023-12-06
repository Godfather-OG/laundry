<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex">
          <div class="my-auto">
            <h1 style="font-weight: 600">อยาก<span class="mx-1 hilight-title">ซัก</span>ไหม?</h1>
            <h1 style="font-weight: 600">
              แต่<span class="mx-1 hilight-title">ไม่มีเวลา</span>ซัก?
              <div style="min-height: dvh;"></div>
            </h1>
            <p class="text-muted">
              แค่ส่งมาให้เรา<b>ซัก</b> คุณก็สามารถไป<b>ทำธุระหรือกิจกรรมอื่น ๆ</b><br />
              นอกบ้านได้โดยไม่ต้องกังวลว่าเสื้อผ้าจะกองโตอยู่ที่บ้าน หอพัก หรือคอนโด
            </p>

            <div class="mt-4">
              <div class="d-flex flex-row"><span style="display: inline;">
                <a href="#" class="me-3 btn btn-outline-primary">ติดต่อเรา</a>
                <router-link  :to="{ name: 'machines' }">
                  <a href="#" class="me-3 btn btn-primary">สั่งซักเลย</a>
                </router-link>
                </span>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 text-end">
          <div style="min-height: 5dvh;"></div>
          <img :src="img_select" />
        </div>
      </div>

      <p><b>กำหนดสถานที่ซักผ้าที่&nbsp;&nbsp;</b><span style="color: #26afe4" font-family><b><u>Chaingmai</u></b></span></p>
      <div class="row">
        <div class="col-5">
          <input type="text" value="05.00-08.35" class="form-control" />
        </div>
        <div class="col-5">
          <input type="text" value="19.00-22.00" class="form-control" />
        </div>
        <div class="col-2">
          <button class="btn btn-primary w-100">จองคิวซัก</button>
        </div>
      </div>
      <div style="min-height: 5dvh;"></div>
      <h2 class="text-center my-5">ข้อดีของเราคืออะไร?</h2>
      <div class="row">
        <div class="col-6 col-md-3 text-center">
          <img :src="icon_wallet">
          <p><b>ราคาถูก</b></p>
        </div>
        <div class="col-6 col-md-3 text-center">
          <img :src="icon_timer">
          <p><b>ดำเนินการอย่างรวดเร็ว</b></p>
        </div>
        <div class="col-6 col-md-3 text-center">
          <img :src="icon_masterCard">
          <p><b>จ่ายด้วยบัตร</b></p>
        </div>
        <div class="col-6 col-md-3 text-center">
          <img height="92" :src="icon_washing">
          <p class="mt-2"><b>เครื่องจักรที่เชื่อถือได้</b></p>
        </div>
      </div>
    </div>
  </div>
<div style="min-height: 5dvh;"></div>
</template>
<script>
import img_select from "@/assets/image/selecting.png";
import icon_washing from "@/assets/icons/terminator.jpg";
import icon_timer from "@/assets/icons/timer.png";
import icon_masterCard from "@/assets/icons/MasterCard.png";
import icon_wallet from "@/assets/icons/wallet.png";
export default {
  name: "HomeView",
  setup() {
    return {
      img_select,
      icon_washing,
      icon_timer,
      icon_masterCard,
      icon_wallet
    };
  }
};
</script>
<style scoped>
.hilight-title {
  color: #26afe4;
  text-decoration: underline;
}
</style>