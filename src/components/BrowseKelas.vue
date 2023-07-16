<script>
    import {kelas} from '../data/kelas';
    import KelasCard from './KelasCard.vue';
    export default {
        components: {
            KelasCard
        },
        data(){
            return{
                displayedKelas: kelas,
                typeFilter: []
            }
        },
        methods: {
            typeChange(e){
                if(e.target.checked){
                    this.typeFilter.push(e.target.value)
                }
                if(!e.target.checked){
                    this.typeFilter.splice(this.typeFilter.indexOf(e.target.value))
                }
                this.displayedKelas = this.typeFilter.length > 0 ? kelas.filter(e => e.type.some(v => this.typeFilter.includes(v))) : kelas
            }
        }
    }
</script>
<template>
    <div
        class="hidden md:flex flex-col w-full"
    >
        <h2
            class="text-2xl text-black font-bold"
        >
            Browse Kelas Sesuai Karir Kamu
        </h2>
        <div
            class="mt-3 flex font-poppins"
        >
            <div
                class="w-1/4"
            >
                <h3 class="text-xl font-bold text-black">Type</h3>
                <div
                    class="flex flex-col gap-5 mt-3"
                >
                    <div
                        class="flex items-center bg-none cursor-pointer"
                    >
                        <input 
                            class="peer hidden"
                            type="checkbox" 
                            name="type" 
                            id="starter" 
                            value="Starter"
                            @change="typeChange"
                        >
                        <span
                            class="mr-2 w-6 h-6 border-2 border-black rounded-lg peer-checked:bg-blue p-2 duration-200"
                        >
                        </span>
                        <label 
                            class="text-base text-black cursor-pointer"
                            for="starter"
                        >
                            Starter (Rp 0)
                        </label>
                    </div>
                    <div
                        class="flex items-center bg-none cursor-pointer"
                    >
                        <input 
                            class="peer hidden"
                            type="checkbox" 
                            name="type" 
                            id="freemium" 
                            value="Freemium"
                            @change="typeChange"
                        >
                        <span
                            class="mr-2 w-6 h-6 border-2 border-black rounded-lg peer-checked:bg-blue p-2 duration-200"
                        >
                        </span>
                        <label 
                            class="text-base text-black cursor-pointer"
                            for="freemium"
                        >
                            Freemium (Rp 0)
                        </label>
                    </div>
                    <div
                        class="flex items-center bg-none cursor-pointer"
                    >
                        <input 
                            class="peer hidden"
                            type="checkbox" 
                            name="type" 
                            id="premium" 
                            value="Premium"
                            @change="typeChange"
                        >
                        <span
                            class="mr-2 w-6 h-6 border-2 border-black rounded-lg peer-checked:bg-blue p-2 duration-200"
                        >
                        </span>
                        <label 
                            class="text-base text-black cursor-pointer"
                            for="premium"
                        >
                            Premium
                        </label>
                    </div>
                </div>
            </div>
            <div
                class="grid grid-cols-3 gap-3 w-3/4"
            >
                <KelasCard v-for="(item, index) in displayedKelas" :data="item" />
            </div>
        </div>
    </div>
</template>