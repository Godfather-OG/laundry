<template>
  <nav class="navbar navbar-light navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <router-link class="nav-link" :to="{ name: 'home' }">
            <img :src="logo" class="my-2" height="50" />
          </router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#expand-nav"
        aria-controls="expand-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="expand-nav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item px-5">
            <router-link class="nav-link" :to="{ name: 'home' }">หน้าแรก</router-link>
          </li>
          <li class="nav-item px-5">
            <router-link class="nav-link" :to="{ name: 'packages' }">แพ็คเกจซักรีด</router-link>
          </li>
          <li class="nav-item px-4">
            <a class="nav-link" href="#">ค้นหาตำแหน่ง</a>
          </li>
          <li class="nav-item px-4">
            <a class="nav-link" href="#">เกี่ยวกับเรา</a>
          </li>
          <li class="nav-item px-4">
            <a class="nav-link" href="#">ติดต่อเรา</a>
          </li>
          <li class="nav-item px-4">
            <a class="nav-link" href="#">ใบรับรอง</a>
          </li>
          <li class="nav-item px-4">
            <a class="btn btn-primary" href="#">เข้าสู่ระบบ</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView style="min-height: 70dvh;" />
  <div style="background: #d0f6ff">
    <div class="container">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div class="col mb-3">
          <router-link  :to="{ name: 'home' }">
            <img :src="logo" height="80" />
          </router-link>
          <p class="text-muted">© 2022</p>
        </div>

        <div class="col mb-3"></div>

        <div class="col mb-3">
          <h5 class="mb-3">เกี่ยวกับเรา</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">เกี่ยวกับเรา</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">ค้นหาตำแหน่ง</a>
            </li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">ใบรับรอง</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">ติดต่อเรา</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5 class="mb-3">บริษัท</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">ผู้จัดทำ</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5 class="mb-3">บริการ</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link  :to="{ name: 'packages' }">
              <a href="#" class="nav-link p-0 text-muted">แพ็คเกจซักรีด</a>
              </router-link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import logo from "@/assets/image/logo.png";
export default {
  name: "App",
  setup() {
    return {
      logo
    };
  }
};
</script>
<style scoped></style>
