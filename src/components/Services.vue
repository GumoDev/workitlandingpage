<script setup>
import { reactive } from 'vue';

const services = reactive([
    { id: 1, title: 'Actionable insights', description: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics' },
    { id: 2, title: 'Data-driven decisions', description: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.' },
    { id: 3, title: 'Always affordable', description: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.' }
])
</script>

<template>
    <section class="mb-40 shadow-lg relative bg-GhostWhite pb-5 lg:flex-row md:max-w-[1440px] mx-auto">

        <main class="bg-DarkPurple py-7 rounded-sm shadow-lg sm:mb-56 md:max-w-[1440px] md:h-[700px] mx-auto">

            <div class="relative h-full flex">

                <div class="relative text-white flex flex-col justify-between pb-24 md:pb-56   w-full">
                    <div class="p-5 sm:mx-10 md:mx-20 flex items-center justify-between">
                        <figure class="">
                            <img class="" src="../assets/images/logo-light.svg" alt="">
                        </figure>

                        <a class="border-b-[3px] border-Eucaplyptus pb-1" href="#">
                            Apply for access
                        </a>
                    </div>

                    <div class="p-5 flex flex-col justify-center leading-7">
                        <h1 class="text-center text-4xl sm:text-5xl md:text-[80px] leading-8 ">
                            Data <span class="border-b-Eucaplyptus border-b-[3px]">tailored</span> <br>
                            to your needs.
                        </h1>

                        <a class="bg-Eucaplyptus py-4 px-5 mx-auto text-black font-bold mt-12 hover:bg-DarkPurple border-2 border-transparent hover:-text-E hover:border-2 hover:border-Eucaplyptus hover:text-Eucaplyptus transition" href="#">
                            Learn more
                        </a>
                    </div>

                    <figure class="absolute -bottom-32 sm:-bottom-48 left-1/2 w-[375px] -translate-x-1/2 z-20 mx-auto
                    sm:w-[490px] md:w-[690px]">
                        <img class="" src="../assets/images/image-hero.webp" alt="">
                    </figure>

                    <div class="rounded-form absolute w-full z-10 h-20 rounded-[50%] -bottom-16 bg-DarkPurple shadow"></div>
                </div>
            </div>
        </main>


        <div class="flex flex-col text-center mt-36
                w-full mx-auto my-10  lg:flex-row md:max-w-[1440px]        
            ">
            <div class="flex flex-col justify-center items-center my-5
                sm:flex-row sm:mx-auto sm:p-5 lg:flex-col font-[manrope]" v-for="service in services" :key="service.id">

                <span class="border-2 text-xl border-DavysGray my-5 h-16 w-16 grid place-items-center rounded-full 
                    sm:w-10 sm:h-10 sm:flex sm:justify-center sm:m-5 font-[fraunces] text-DarkPurple font-bold
                    ">
                    {{ service.id }}
                </span>

                <h2 class="my-5 text-2xl sm:hidden font-[fraunces]">
                    {{ service.title }}
                </h2>

                <p class="p-2 text-base flex flex-col items-start justify-center
                    sm:w-2/3 sm:text-left 
                    md:w-full 
                    lg:text-center">
                <h2 class="my-5 text-2xl hidden 
                        sm:flex sm:justify-start
                        md:w-full 
                        lg:justify-center
                        font-[fraunces] text-DarkPurple font-semibold
                        ">
                    {{ service.title }}
                </h2>
                {{ service.description }}
                </p>

            </div>
        </div>

        <div class="shadow rounded-form absolute w-full z-10 h-10 rounded-[50%] -bottom-5 bg-GhostWhite "></div>


    </section>
</template>

<style>
@font-face {
    font-family: 'manrope';
    src: url('../assets/fonts/manrope/Manrope.ttf');
}

@font-face {
    font-family: 'fraunces';
    src: url('../assets/fonts/fraunces/Fraunces.ttf');
}

.wave {
    border-radius: 100%;
}
</style>