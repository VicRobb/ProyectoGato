<template>
	<body class="bg-black">
		<router-view />
	</body>	
	<h1 className="text-3xl font-bold underline">
		Hello world!
	</h1>
	<pagina_pricipal>

	</pagina_pricipal>

	</body>
</template>

<script setup>

	import pagina_pricipal from './pagina_principal/pagina_principal.vue'
	import tablero from './components/Tablero.vue'


</script>