<template>
  <div class="flex items-center w-full h-full gradient overflow-hidden">
    <div class="relative max-w-[1600px] max-h-[1200px] h-full m-auto">
      <HeaderLogo />
      <UserToolbar class="z-20">
        <LanguageSelect />
      </UserToolbar>
      <div class="flex justify-around items-center w-full h-full min-w-[1400px]">
        <div class="flex-col items-center justify-center w-full text-textWhite60">
          <slot name="image" />
        </div>
        <div class="relative w-full h-full z-10">
          <div class="absolute right-0 flex items-center justify-center w-full h-full -z-10">
            <div class="absolute left-0 shrink-0 bg-textWhite circle" />
          </div>
          <div class="flex items-center justify-center w-full h-full">
            <slot name="main" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.gradient {
  background: linear-gradient(232.3deg, #d90e32 18.72%, #1d4778 99.22%);
}

.circle {
  width: 1200px;
  height: 1200px;
  border-radius: 50% 0 0 50%;
}
</style>
