<template class="pt-6">
  <section class="flex gap-20 flex justify-center items-center">
    <div>
      <img class="ml-0 pl-0" src="../assets/logo.svg" alt="no">
    </div>
    <div class="p-5 m-3 text-silver font-bold text-xl">
      Turno {{ turnoJugador }}
    </div>
    <div>
      <button class="rounded-2xl p-3 m-3 bg-silver"> <img src="../assets/icon-restart.svg" alt="no"> </button>
    </div>
  </section>

  <div class="mx-auto my-auto w-1/3 grid grid-cols-3 grid-rows-3 gap-1">
    <button @click="Presionabtn(index)" v-for="(boton, index) in botones" :key="index" class="w-32 h-32 rounded-2xl p-6 m-2 bg-semi_dark_navy flex justify-center items-center">
      <img v-if="boton === 1" :src="iconX" alt="X" />
      <img v-if="boton === 2" :src="iconO" alt="O" />
    </button>
  </div>

  <section class="mx-auto my-auto w-1/3 grid grid-cols-3 gap-1">
    <button class="w-32 h-20 rounded-2xl p-6 m-2 bg-light_blue flex justify-center items-center font-semibold">X: {{ VictoriasUsuario }}</button>
    <button class="w-32 h-20 rounded-2xl p-6 m-2 bg-silver flex justify-center items-center font-semibold">Ties: {{ Empates }}</button>
    <button class="w-32 h-20 rounded-2xl p-6 m-2 bg-light_yellow flex justify-center items-center font-semibold">O: {{ VictoriasCPU }}</button>
  </section>
  <div v-if="ganador" >
      <div class="fixed top-1/2 left-0 transform -translate-y-1/2  px-8 py-5 text-black text-center text-xl w-full max-w-full mx-auto h-52 bg-gradient-to-b from-g1 to-g2" >
          <h2 v-if="ganador == 'X'" class="text-light_blue font-bold text-5xl">X Takes the round</h2>
          <h2 v-if="ganador == 'O'" class="text-light_yellow font-bold text-5xl">O Takes the round</h2>
          <h2 v-if ="ganador == 'Empate'" class="text-silver font-bold text-5xl">Round tied</h2>
        <button @click="Quiet" class="mt-6 mr-4 bg-silver text-black font-medium py-2 px-4 rounded-2xl hover:bg-light_blue_hover transition duration-300">Quiet</button>
        <button @click="NextRound" class="mt-6 ml-4 bg-light_yellow text-black font-medium py-2 px-4 rounded-2xl text-black hover:bg-light_yellow_hover transition duration-300">Next Round</button>
      </div>
  </div>
  
</template>
  

<script setup>
import { ref, watch } from 'vue';

const botones = ref([0, 0, 0, 0, 0, 0, 0, 0, 0]);
const turnoJugador = ref("X");
import iconX from '../assets/icon-x.svg';
import iconO from '../assets/icon-o.svg';
import iconXGa from '../assets/icon-x-outline.svg';
import iconOGa from '../assets/icon-o-outline.svg';
const ganador = ref(null);
let VictoriasUsuario = 0;
let VictoriasCPU = 0;
let Empates = 0;

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
        console.log(combinacion);
        console.log("¡Jugador" + ganador.value +  "es el ganador!");
        if(ganador.value == "O"){
          VictoriasCPU++;
        }else if(ganador.value == "X"){
          VictoriasUsuario ++;
        }
        return;
      }
    }
  
    if (botones.value.every(boton => boton !== 0) && !ganador.value) {
      ganador.value = "Empate";
      console.log("Empate");
      Empates ++;
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