<script setup>
    import {tools} from '../data/tools';
    import ToolsCard from './ToolsCard.vue';
</script>
<template>
    <div
        class="flex flex-col w-full"
    >
        <h2
            class="text-2xl text-black font-bold"
        >
            Popular Tools
        </h2>
        <div
            class="grid grid-cols-2 md:flex md:justify-between mt-3 gap-3 md:gap-0"
        >
            <ToolsCard v-for="(item, index) in tools" :data="item" />
        </div>
    </div>
</template>