<script setup>

import Mybar from "./views/Mybar.vue";
import Mycart from "./views/Mycart.vue";
import items from './products.json'

</script>



<template>

  <div>
  <Mybar />
  </div>

  <h1 class="topic">Mouse</h1>
  <div class="card-grid">
      <Mycart v-bind="items[0]" />
      <Mycart v-bind="items[1]" />
      <Mycart v-bind="items[2]" />
      <Mycart v-bind="items[3]" />
  </div>

  <br><br><br>
  <h1 class="topic">Keyboard</h1>
  <div class="card-grid">
      <Mycart v-bind="items[4]" />
      <Mycart v-bind="items[5]" />
      <Mycart v-bind="items[6]" />
      <Mycart v-bind="items[7]" />
      <Mycart v-bind="items[8]" />
      <Mycart v-bind="items[9]" />
  </div>



 
</template>


<style>
/* นำเข้า Google Fonts - ใช้ฟอนต์ Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
/* ตั้งค่าพื้นฐานให้กับ body ของหน้าเว็บ */
body {
  font-family: 'Poppins', sans-serif;
  background-color: #ffbbbb; /* สีพื้นหลังเทาอ่อน */
  padding: 20px; /* เว้นขอบด้านในของ body */
}

/* กำหนดสไตล์ให้กับ #app ซึ่งเป็น div หลักใน Vue */
#app {
  text-align: center;        /* จัดข้อความให้อยู่กึ่งกลาง */
  max-width: 1300px;         /* กำหนดความกว้างสูงสุดของเนื้อหา */
  margin: 0 auto;            /* จัดให้อยู่ตรงกลางของหน้าจอ */
}

/* สไตล์สำหรับหัวข้อหลัก */
h1 {
  color: #000000;
  margin-bottom: 10px;       /* เว้นระยะด้านล่างของหัวข้อ */
}

h1.topic{
  font-size: 4rem;
  font-weight: bold;
  background: linear-gradient(45deg, #000000, #000000);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 5px 5px rgba(0,0,0,0.2);

}

/* --------------------- Responsive Grid System --------------------- */

.card-grid {
  display: grid;                  /* ใช้ grid layout */
  grid-template-columns: 1fr;    /* 1 คอลัมน์ (เต็มแถว) */
  gap: 20px;                      /* ระยะห่างระหว่างการ์ด */
  justify-items: center;         /* จัดให้อยู่ตรงกลางในแต่ละแถว */
  border-radius: 12px;
  border: 3px solid #ebebeb;
  padding: 20px;
  box-shadow: 0 15px 8px rgba(0,0,0,0.1);
}


/* สำหรับหน้าจอกว้างกว่า 576px  */
@media (min-width: 576px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* แสดง 2 คอลัมน์ */
  }
}

/* สำหรับหน้าจอกว้างกว่า 992px */
@media (min-width: 992px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr); /* แสดง 3 คอลัมน์ */
  }
}


</style>
