<template>
    <nav
        class="w-full p-4 md:py-5 md:px-12 flex justify-between"
    >
        <div
            class="md:flex items-center hidden"
        >
            <img 
                src="https://buildwithangga.com/themes/front/images/logo_bwa_new.svg" 
                alt="BuildWithAngga Logo"
                class="w-12 h-12 mr-10"
            >
            <ul
                class="flex text-base font-poppins gap-10 font-medium text-black"
            >
                <li class="hover:text-blue cursor-pointer duration-500">Flash Sale</li>
                <li class="hover:text-blue cursor-pointer duration-500">Kelas</li>
                <li class="hover:text-blue cursor-pointer duration-500">Alur Belajar</li>
                <li class="hover:text-blue cursor-pointer duration-500">Bootcamp</li>
            </ul>
        </div>
        <div
            class="md:flex gap-5 hidden"
        >
            <button
                class="p-3 bg-grey rounded-full hover:shadow-button duration-500"
            >
                <img src="https://buildwithangga.com/themes/front/images/ic_search.svg" alt="Search Icon">
            </button>
            <button
                class="p-3 bg-grey text-black rounded-full font-poppins w-[140px] font-bold hover:shadow-button duration-500"
            >
                Masuk
            </button>
            <button
                class="p-3 bg-blue text-white rounded-full font-poppins w-[140px] font-bold hover:shadow-outline duration-500"
            >
                Daftar
            </button>
        </div>
        <div
            class="flex md:hidden items-center justify-evenly w-full"
        >
            <button
                class="p-3 bg-grey rounded-md h-fit"
            >
                <img src="https://buildwithangga.com/themes/front/images/mobile/icon/hamburger.svg" alt="Hamburger Icon">
            </button>
            <img 
                src="https://buildwithangga.com/themes/front/images/logo_bwa_new.svg" 
                alt="BuildWithAngga Logo"
                class="w-12 h-12"
            >
            <button
                class="p-2 bg-grey rounded-full w-[80px] h-fit text-black font-bold"
            >
                Masuk
            </button>
        </div>
    </nav>
</template>