<template>
    <div class="m-20"></div>
    <section class="flex gap-20 flex justify-center items-center">
      <div>
        <img class="p-3 m-3" src="../assets/logo.svg" alt="no">
      </div>
      <div class="p-5 m-3">
        Turno {{ turnoJugador }}
      </div>
      <div>
    <button class="rounded-2xl p-3 m-3 bg-silver"> <img src="../assets/icon-restart.svg" alt="no"> </button>
      </div>
    </section>
  
    <div class="mx-auto my-auto w-1/3 grid grid-cols-3 grid-rows-3 gap-1">
      <button @click="() => Presionabtn(index)" v-for="(boton, index) in botones" :key="index" class="rounded-2xl p-6 m-2 bg-semi_dark_navy">
        <img v-if="boton === 1" :src="iconX" alt="X" />
        <img v-if="boton === 2" :src="iconO" alt="O" />
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import iconX from '../assets/icon-x.svg';
  import iconO from '../assets/icon-o.svg';
  
  const botones = ref([0, 0, 0, 0, 0, 0, 0, 0, 0]); // Inicializar botones en estado "0"
  const turnoJugador = ref("X");
  const ganador = ref(null);
  
  const Presionabtn = (index) => {
    if (botones.value[index] === 0 && !ganador.value) {
      botones.value[index] = turnoJugador.value === 'X' ? 1 : 2;
      verificarGanador();
      turnoJugador.value = turnoJugador.value === "X" ? "O" : "X";
    }
  }
  
  const verificarGanador = () => {
    const combinacionesGanadoras = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]             
    ];
  
    for (const combinacion of combinacionesGanadoras) {
      const [a, b, c] = combinacion;
      if (botones.value[a] && botones.value[a] === botones.value[b] && botones.value[a] === botones.value[c]) {
        ganador.value = turnoJugador.value;
        console.log("¡Jugador" + ganador.value +  "es el ganador!");
        return;
      }
    }
  
    if (botones.value.every(boton => boton !== 0) && !ganador.value) {
      ganador.value = "Empate";
      console.log("Empate");
    }
  }
  </script>