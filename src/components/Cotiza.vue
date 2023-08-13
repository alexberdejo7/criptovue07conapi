

<script setup>
  defineProps({
    cotizacion: {
      type: Object,
      required: true
    }
  })
</script>


<template>
  <div 
    
    class="contenedor-resultado">
      <h2>Cotizacion</h2>
      <div class="resultado">
        <img 
        :src="'https://cryptocompare.com/' + cotizacion.IMAGEURL " 
        alt="imagen cripto">
        <div>
          <p> El precio es de: <span> {{ cotizacion.PRICE }} </span> </p>
          <p> El precio mas alto del dia: <span> {{ cotizacion.HIGHDAY }} </span> </p>
          <p> El precio es de: <span> {{ cotizacion.LOWDAY }} </span> </p>
          <p> Variacion 24h <span> {{ cotizacion.CHANGEPCT24HOUR }} %</span> </p>
          <p> Ultima actualizacion: <span> {{ cotizacion.LASTUPDATE }} </span> </p>
        </div>
        
      </div>

    </div>
</template>
