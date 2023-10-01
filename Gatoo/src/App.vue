<template>

  
	
	<router-view/>

	<router-link to="/prin" class="mt-5 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-light_yellow ">Menu</router-link>	
	
</template>

<script setup>

	import pagina_pricipal from './pagina_principal/pagina_principal.vue'
	

	import { toRef, ref } from 'vue';
  import { useRouter } from 'vue-router';
  



</script>
