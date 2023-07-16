<script setup>
  import Navbar from './components/Navbar.vue';
  import Description from './components/Description.vue';
  import SearchBar from './components/SearchBar.vue';
  import Kategori from './components/Kategori.vue';
  import Tools from './components/Tools.vue';
  import NewRelease from './components/NewRelease.vue';
  import BrowseKelas from './components/BrowseKelas.vue';
  import FooterVue from './components/Footer.vue';
</script>

<template>
  <Navbar />
  <div
    class="w-full p-5 max-w-[1200px] md:mt-20 m-auto flex flex-col gap-5 md:gap-10"
  >
    <SearchBar />
    <Description />
    <Kategori />
    <Tools />
    <NewRelease />
    <BrowseKelas />
  </div>
  <FooterVue />
</template>
