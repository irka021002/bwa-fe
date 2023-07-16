<script>
    export default {
        props: ["data"]
    }
</script>
<template>
    <div
        class="bg-white py-2 px-4 md:py-3 md:px-6 flex flex-col md:flex-row cursor-pointer hover:outline duration-100 outline-blue md:items-center gap-2 md:gap-5 rounded-xl font-poppins"
    >
        <img class="w-[50px] h-[50px]" :src="data.img" alt="">
        <div>
            <p class="text-base md:text-xl font-bold">{{ data.name }}</p>
            <p class="text-sm md:text-base">{{ data.desc }}</p>
        </div>
    </div>
</template>