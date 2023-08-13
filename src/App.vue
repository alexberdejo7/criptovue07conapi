<script setup>
import {ref, reactive} from 'vue'
import Alert from './components/Alert.vue'
import Spinner from './components/Spinner.vue'
import useCripto from './composables/useCripto'
import Cotiza from './components/Cotiza.vue'


const { coins, criptocoins, loading, cotizacion, getCotizacion, showResult } = useCripto()

const error = ref('')
const cotizar = reactive({
    moneda: '',
    criptocoin: ''
})

  // Se llama a la Api las mejores cripto y se desestructura la data con la coins
const cotizarCripto = () => {
  if(Object.values(cotizar).includes('')) {
    error.value = 'Todos los campos son obligatorios'
    return
  }
  error.value = ''
  getCotizacion(cotizar)
  }


</script>



<template>
  <div class="contenedor">
    <h1 class="titulo"> Cotizador de <span> Criptomonedas</span> </h1> 
  
    <div class="contenido">
      <Alert
      v-if="error"
      >
      {{ error }}

      </Alert>

      <form 
      
      class="formulario"
      @submit.prevent="cotizarCripto"
      > 
      <div class="campo">
        <label for="moneda"> Moneda:</label>
        <select 
        id="moneda"
        v-model="cotizar.moneda"
        > 
          <option value=""> Selecciona --</option>
          <option
           v-for="coin in coins"
           :value="coin.codigo"
           > {{ coin.texto }}
          </option>
        </select>
      </div>

      <div class="campo">
        <label for="cripto"> Criptocripto:</label>
        <select
         id="cripto"
         v-model="cotizar.criptocoin"> 
          <option value=""> Selecciona --</option>
          <option
           v-for="criptocoin in criptocoins"
           :value="criptocoin.CoinInfo.Name"
           > {{ criptocoin.CoinInfo.FullName }}
          </option>
        </select>
      </div>


      <input 
      type="submit" 
      value="Cotizar">
    </form>

    <Spinner 
    v-if="loading" 
    
    />
    <Cotiza 
    v-if="showResult"
    :cotizacion="cotizacion"
     />


    

  </div>
</div>
  
    
</template>

