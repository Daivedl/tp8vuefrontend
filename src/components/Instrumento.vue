<template>
  <div>
    <b-card
      tag="article"
      style="max-width: 20rem; min-width: 20rem;"
      class="mb-2"
    >
    <b-card-img
        :src="'/images/' + instrumento.imagen"
        :alt=instrumento.imagen
        style="min-height:200px; max-height:200px"
      ></b-card-img>
    <b-card-title :title="instrumento.instrumento"></b-card-title>  
    <b-card-text>
        <p>$ {{ instrumento.precio }}</p>
        <p>{{ instrumento.costoEnvio > 0 ? `Costo de Envío Interior de Argentina $${instrumento.costoEnvio}`
           : 'Envío Gratis' }}</p>
        <p>{{instrumento.cantidadVendida}} Vendidos </p>       
        
      </b-card-text>  

      <b-button :href="'/detalle/' + instrumento.id" variant="primary">Detalle</b-button>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["instrumento"]
  
};
</script>
<style lang=""></style>
