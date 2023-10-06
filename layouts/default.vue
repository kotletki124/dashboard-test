<template>
  <HeaderLogo />
  <div class="flex w-full h-full min-w-[600px]">
    <Nav />
    <div class="relative w-full overflow-y-scroll">
      <UserToolbar class="z-10">
        <LanguageSelect />
        <UserMenu />
        <IconButton class="btn-outlined w-10 h-10">
          <svgo-24-plus class="w-6 h-6" :fontControlled="false" />
        </IconButton>
      </UserToolbar>
      <div class="mt-8 mx-8">
        <slot name="header" />
      </div>
      <hr class="text-textLineGrey" />
      <div class="p-6">
        <slot name="main" />
      </div>
    </div>
  </div>
</template>
