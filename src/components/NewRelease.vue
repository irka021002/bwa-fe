<script setup>
    import {newRelease} from '../data/newRelease';
    import KelasCard from './KelasCard.vue';
</script>
<template>
    <div
        class="hidden md:flex flex-col w-full"
    >
        <h2
            class="text-2xl text-black font-bold"
        >
            Terbaru Dirilis
        </h2>
        <div
            class="grid grid-cols-4 gap-3 mt-3"
        >
            <KelasCard v-for="(item, index) in newRelease" :data="item" />
        </div>
    </div>
</template>