<template>

	
		
  <router-view/>

</template>

<script setup>

	import pagina_pricipal from './pagina_principal/pagina_principal.vue'
	

	import { toRef, ref } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const showPage = ref(true);


</script>
