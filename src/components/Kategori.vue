<script setup>
    import {kategori} from '../data/kategori';
    import KategoriCard from './KategoriCard.vue';
</script>
<template>
    <div
        class="flex flex-col w-full"
    >
        <h2
            class="text-2xl text-black font-bold"
        >
            Popular Category
        </h2>
        <div
            class="grid grid-cols-2 md:flex md:justify-between mt-3 gap-3 md:gap-0"
        >
            <KategoriCard v-for="(item, index) in kategori" :data="item" />
        </div>
    </div>
</template>