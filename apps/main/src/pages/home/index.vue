<script setup lang="ts">
import { reactive, ref } from 'vue';

const timeRangeChars = reactive('2010-2023'.split(''));
</script>

<template>
  <div class="wrapper">
    <div class="first-view">
      <h1>
        <div class="first-view-sub-title">
          <template v-for="(char, index) in timeRangeChars">
            <span :style="{ animationDelay: `${index / 8}s` }">{{ char }}</span>
          </template>
        </div>
        <div class="first-view-title">乐程LEC 次世代软件工程</div>
      </h1>
    </div>

    <div class="first-view">
      <h1>
        <div class="first-view-sub-title">
          <template v-for="(char, index) in timeRangeChars">
            <span :style="{ animationDelay: `${index / 8}s` }">{{ char }}</span>
          </template>
        </div>
        <div class="first-view-title">乐程LEC 次世代软件工程</div>
      </h1>
    </div>
  </div>
</template>

<style scoped>
.first-view {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  background-size: cover;
  background-origin: border-box;
  background-image: url('../../assets/home.png');
  background-position: center bottom;
  min-height: 700px;
  max-height: 900px;
  font-size: 36px;
}

h1 {
  width: 80%;
  box-sizing: content-box;
  margin-top: 120px;
  margin-left: -40px;
}

.first-view-sub-title span {
  color: #ccf0ff;
  text-shadow: 0 0 0 #444;
  animation: shining 2s ease-in-out infinite alternate;
}

@keyframes shining {
  to {
    text-shadow: 0 0 1px #ccf0ff, 0 0 2px #ccf0ff, 0 0 2px #ccf0ff,
      0 0 18px #126fcc, 0 0 20px #126fcc, 0 0 40px #126fcc;
    color: #ccf0ff;
  }
}

.first-view-title {
  background: -webkit-linear-gradient(284deg, #2be3b8 10%, #33c2ff);
  background-clip: text;
  letter-spacing: 0.2rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
  background-clip: text;
  -webkit-background-size: 200% 100%;
  text-shadow: 0 0 1px #ccf0ff, 0 0 5px #ccf0ff, 0 0 1px #ccf0ff,
    0 0 12px #126fccee, 0 0 16px #126fccee, 0 0 20px #126fccee;
}
</style>
