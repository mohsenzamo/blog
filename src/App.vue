<template>
  <router-view v-slot="{ Component, route }">
    <transition name="page" mode="out-in">
      <div :key="route.path">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<style lang="scss">
@font-face {
  font-family: "Yekan";
  src: url(../src/assets/fonts/yekan/Yekan.ttf);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

body {
  font-family: Yekan;
  margin: 0;
  padding: 0;
  direction: rtl;
  background-color: #FAECD6;
}
</style>
