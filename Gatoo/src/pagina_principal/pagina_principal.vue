<template>
    <div class="flex justify-center items-center h-screen">
        <section class="flex flex-col items-center py-18 ">
            <div>
                <img class="py-8" src="../assets/logo.svg" alt="no" width="100" height="100">
            </div>
            <div class="rounded-2xl w-80 text-silver p-3 bg-semi_dark_navy py-8 ">
                <div class="p-5 text-center font-bold text-silver text-2xl">
                    Gato
                </div>
                <div class="bg-dark_navy"> 
                    <img src="../assets/gato.png" alt="">
                  
                </div>
                <div class="p-5 text-center font-semibold text">
                    Disfuta el juego
                </div>
            </div>
            <div class=" py-8">
                <router-link to="/tabPC" class="rounded-2xl p-4 bg-light_yellow text-black font-bold w-"> NEW GAME (VS CPU)   </router-link>
            </div>
            <div class=" py-8">
                <router-link to="/tab" class="rounded-2xl p-4 bg-light_blue text-black font-bold w-80"> NEW GAME (VS PLAYER) </router-link>
            </div>
        </section>
    </div>
</template>

<script setup>
    import {toRef,ref} from 'vue'
    import tab from '../components/Tablero.vue'
    import tabPC from '../components/TableroPC.vue'
    const value=ref(true)
</script>