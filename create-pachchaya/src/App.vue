<script setup>

import Mybar from "./views/Mybar.vue";
import Mycart from "./views/Mycart.vue";
import items from './products.json'

</script>



<template>

  <div>
  <Mybar />
  </div>

  <br>
  
  <p class="topic">Mouse</p>
  <div class="card-grid">
    <Mycart 
      v-for="(item, index) in items.slice(0, 4)" 
      :key="index" 
      v-bind="item" 
    />

  </div>

  <br><br><br>

  <p class="topic">Keyboard</p>
  <div class="card-grid">
    <Mycart 
      v-for="(item, index) in items.slice(4)" 
      :key="index" 
      v-bind="item" 
    />
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



p {
  font-weight: 600;
  font-size: 40px;
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
  box-sizing: border-box;       /* ✅ ต้องมี */
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;
  border-radius: 12px;
  border: 3px solid #ebebeb;
  padding: 20px;
  box-shadow: 0 15px 8px rgba(0,0,0,0.1);
  max-width: 100%;              /* ✅ ป้องกันล้นจอ */
  overflow-x: hidden;           /* ✅ กัน scrollbar แนวนอน (ถ้าจำเป็น) */
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
