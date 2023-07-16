<script>
    export default {
        props: ["data"]
    }
</script>
<template>
    <div
        class="w-full rounded-lg overflow-hidden"
    >
        <img :src="data.thumbnail" alt="">
        <div
            class="flex flex-col p-4 bg-white font-poppins h-full"
        >
            <p
                class="text-black font-bold text-lg h-[55px] text-ellipsis"
            >
                {{ data.name }}
            </p>
            <div
                class="flex mt-2"
            >
                <p
                    v-if="data.discountedPrice"
                    class="text-red mr-1 font-medium text line-through animate-pulse"
                >
                    Rp {{ new Intl.NumberFormat().format(data.discountedPrice) }}
                </p>
                <p
                    class="text-[#999aa4]"
                >
                    Rp {{ new Intl.NumberFormat().format(data.price) }}
                </p>
            </div>
            <div
                class="mt-5 flex justify-between"
            >
                <div
                    class="flex items-center"
                >
                    <img class="w-5 h-auto" v-for="index in data.review" src="https://buildwithangga.com/themes/front/images/ic_star.svg">
                    <p class="ml-1 text-sm">({{ new Intl.NumberFormat().format(data.reviewCount) }})</p>
                </div>
                <img class="w-8 h-8" v-if="data.level == 'All Levels'" src="https://buildwithangga.com/themes/front/images/ic_lv_hard.svg" alt="">
                <img class="w-8 h-8" v-if="data.level == 'Beginner'" src="https://buildwithangga.com/themes/front/images/ic_lv_ez.svg" alt="">
                <img class="w-8 h-8" v-if="data.level == 'Intermediate'" src="https://buildwithangga.com/themes/front/images/ic_lv_med.svg" alt="">
            </div>
        </div>
    </div>
</template>