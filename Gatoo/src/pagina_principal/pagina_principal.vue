
<template>


    <section  class="flex flex-col items-center ">
        <div class="">
            <img src="../assets/logo.svg" alt="no" width="100" height="100">
        </div>
        <div class="rounded-2xl  w-1/3  text-silver p-3 bg-semi_dark_navy" bg->
            <div class="p-5 text-center">
                PICK PLAYER 1'S MARK
            </div>
            <div class="bg-dark_navy">
                
                <img src="../assets/icon-x-outline.svg" alt="">
                <img src="" alt="">
            </div>
            <div class="p-5 text-center">
                REMEMBER:X GOES FIRS
            </div>
            
        </div>

        <div class="p-6">
            <router-link  to="/tabPC"  class=" rounded-2xl p-4 bg-light_yellow text-dark_navy"> NEW GAME (VS CPU) </router-link>
        </div>
        <div class="m-4">
            <RouterLink  to="/tab" class=" rounded-2xl p-4 bg-light_blue text-dark_navy">NEW GAME (VS PLAYER)</RouterLink>
        </div>
    

    </section>

   
    


</template>
<script setup>

    import {toRef,ref} from 'vue'
    import tab from '../components/Tablero.vue'
    import tabPC from '../components/TableroPC.vue'

    const value=ref(true)


</script>