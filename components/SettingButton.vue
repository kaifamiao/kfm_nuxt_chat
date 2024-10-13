<!-- components/SettingButton.vue -->
<template>
  <div class="setting">
    <button>设置</button>
  </div>
</template>

<style scoped>
.setting {
  position: sticky; /* 使用 sticky 而不是 fixed */
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
}
button {
  color: #fff;
  width: 100%;
  background-color: #007bff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

button:hover {
  color: #fff;
  background-color: #0056b3;
  border-color: #0056b3;
}

</style>
<script setup lang="ts">
</script>
