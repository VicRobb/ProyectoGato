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
      <button @click="jugadorPresionaBoton(index)" v-for="(boton, index) in botones" :key="index" class="rounded-2xl p-6 m-2 bg-semi_dark_navy">
        <img v-if="boton === 1" :src="iconX" alt="X" />
        <img v-if="boton === 2" :src="iconO" alt="O" />
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const botones = ref([0, 0, 0, 0, 0, 0, 0, 0, 0]); 
  const turnoJugador = ref("X"); 
  import iconX from '../assets/icon-x.svg';
  import iconO from '../assets/icon-o.svg';
  const ganador = ref(null);
  
  const jugadorPresionaBoton = (index) => {
    if (botones.value[index] === 0 && !ganador.value) {
      botones.value[index] = 1; 
      verificarGanador();
      turnoJugador.value = "O"; 
      hacerMovimientoComputadora(); 
    }
  };
  
  const hacerMovimientoComputadora = () => {
    if (ganador.value || botones.value.every(boton => boton !== 0)) {
        return;
    }

    const combinacionesGanadoras = [
        //cada uno seria a, b, c
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        //bloqueamos cada una de las combinacionas ganadoras esto se hace cuando tiene dos elementos de A, B o C con su valor
        //por lo que tenemos 3 if para bloquear cada uno de esos 3 posibles valores al tener mas de dos en una de las combinaciones ganadoras
        if (botones.value[a] === 1 && botones.value[b] === 1 && botones.value[c] === 0) {
            botones.value[c] = 2; 
            verificarGanador();
            turnoJugador.value = "X"; 
            return;
        }
        if (botones.value[a] === 1 && botones.value[c] === 1 && botones.value[b] === 0) {
            botones.value[b] = 2; 
            verificarGanador();
            turnoJugador.value = "X"; 
            return;
        }
        if (botones.value[b] === 1 && botones.value[c] === 1 && botones.value[a] === 0) {
            botones.value[a] = 2;
            verificarGanador();
            turnoJugador.value = "X";
            return;
        }
    }

    //si no hay que bloquear una combinacion aleatoria del jugador tiramos aleatoriamente
    let indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * 9);
    } while (botones.value[indiceAleatorio] !== 0);

    botones.value[indiceAleatorio] = 2; 
    verificarGanador();
    turnoJugador.value = "X"; 
};
  
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
  
 