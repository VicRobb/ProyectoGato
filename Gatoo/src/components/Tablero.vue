<template>
  <div class="h-screen flex flex-col justify-center items-center xl:pt-32 md:pt-32">

    <section class="xl:pl-12 mx-auto my-auto xl:w-1/3 md:w-2/3 px-2 mx-auto grid grid-cols-3 xl:gap-1 md:gap-4">
      <router-link to="/prin">
        <button class="xl:w-32 md:w-12 xl:h-20 md:h-12 rounded-2xl xl:p-6 md:p-2 bg-dark_navy hover:bg-semi_dark_navy flex justify-center items-center font-semibold">
          <img class="ml-0 pl-0 xl:w-12 xl:h-12 md:w-6 md:h-6" src="../assets/logo.svg" alt="no">
        </button>
      </router-link>
      <button class="xl:w-32 md:w-12 xl:h-20 md:h-12 rounded-2xl xl:p-6 md:p-2 m-2 flex justify-center items-center font-bold text-xl text-silver">
        <span class="text-xl md:text-base">Turno {{ turnoJugador }}</span>
      </button>
      <button @click="Quiet" class="xl:w-32 md:w-12 xl:h-20 md:h-12 rounded-2xl xl:p-6 md:p-2 xl:m-2 md:p-2 bg-dark_navy hover:bg-silver flex justify-center items-center font-semibold">
        <img class="xl:w-12 xl:h-12 md:w-6 md:h-6" src="../assets/icon-restart.svg" alt="no">
      </button>
    </section>

    <div class="mx-auto my-auto xl:w-1/3 md:w-2/3 px-2 mx-auto grid grid-cols-3 xl:gap-1 md:gap-4">
      <!-- Bucle para generar los botones -->
      <div v-for="(boton, index) in botones" :key="index" class="col-span-1 flex justify-center items-center">
        <button @click="jugadorPresionaBoton(index)" class="w-24 h-24 md:w-32 md:h-32 rounded-2xl p-2 m-2 bg-semi_dark_navy flex justify-center items-center">
          <!-- Contenido del botón (X, O) -->
          <img class="w-12 h-12 md:w-16 md:h-16" v-if="boton === 1" :src="iconX" alt="X" />
          <img class="w-12 h-12 md:w-16 md:h-16" v-else-if="boton === 2" :src="iconO" alt="O" />
        </button>
      </div>
    </div>

    <section class="xl:pl-16 mx-auto my-auto xl:w-1/3 md:w-2/3 px-2 mx-auto grid grid-cols-3 xl:gap-1 md:gap-4 xl:items-center md:flex-col md:justify-center md:items-center">
      <button class="w-24 md:w-24 xl:h-20 md:h-24 rounded-2xl xl:p-6 md:p-4 m-2 bg-light_blue flex justify-center items-center font-semibold">
        X: {{ VictoriasUsuario }}
      </button>
      <button class="w-24 md:w-24 h-20 rounded-2xl xl:p-6 md:p-4 m-2 bg-silver flex justify-center items-center font-semibold">
        Ties: {{ Empates }}
      </button>
      <button class="w-24 md:w-24 xl:h-20 md:h-24  rounded-2xl xl:p-6 md:p-4 m-2 bg-light_yellow flex justify-center items-center font-semibold">
        O: {{ VictoriasCPU }}
      </button>
    </section>

    <div v-if="ganador" >
      <div class="fixed top-1/2 left-0 transform -translate-y-1/2  px-8 py-5 text-black text-center text-xl w-full max-w-full mx-auto h-52 bg-gradient-to-b from-g1 to-g2" >
          <h2 v-if="ganador == 'X'" class="text-light_blue font-bold text-5xl">X Takes the round</h2>
          <h2 v-if="ganador == 'O'" class="text-light_yellow font-bold text-5xl">O Takes the round</h2>
          <h2 v-if ="ganador == 'Empate'" class="text-silver font-bold text-5xl">Round tied</h2>
          <router-link to="/prin"><button class="mt-6 mr-4 bg-silver text-black font-medium py-2 px-4 rounded-2xl hover:bg-light_blue_hover transition duration-300">Quiet</button></router-link>
        <button @click="NextRound" class="mt-6 ml-4 bg-light_yellow text-black font-medium py-2 px-4 rounded-2xl text-black hover:bg-light_yellow_hover transition duration-300">Next Round</button>
      </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const botones = ref([0, 0, 0, 0, 0, 0, 0, 0, 0]);
const turnoJugador = ref("X");
import iconX from '../assets/icon-x.svg';
import iconO from '../assets/icon-o.svg';
const ganador = ref(null);
let VictoriasUsuario = 0;
let VictoriasCPU = 0;
let Empates = 0;

const jugadorPresionaBoton = (index) => {
  if (botones.value[index] === 0 && !ganador.value) {
    botones.value[index] = turnoJugador.value === 'X' ? 1 : 2;
    verificarGanador();
    turnoJugador.value = turnoJugador.value === "X" ? "O" : "X";
  }
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
      if(ganador.value === "O"){
        VictoriasCPU++;
      } else if(ganador.value === "X"){
        VictoriasUsuario++;
      }
      return;
    }
  }

  if (botones.value.every(boton => boton !== 0) && !ganador.value) {
    ganador.value = "Empate";
    Empates++;
  }
};

const NextRound = () => {
  botones.value = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  turnoJugador.value = "X";
  ganador.value = null;
};

const Quiet = () => {
  botones.value = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  turnoJugador.value = "X";
  ganador.value = null;
  VictoriasUsuario = 0;
  VictoriasCPU = 0;
  Empates = 0;
};
</script>
