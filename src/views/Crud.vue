<template>
  <div>
    <div class="col-lg-6 mx-auto align-items-center text-center">
      <b-button 
      :href="'/create'" class="btn btn-success mx-auto" size="sm" @click="Crear"> Crear </b-button>
    </div>

    <b-table
      striped
      hover
      :items="instrumentosData"
      :fields="campos"
      :key="instrumentosData.id"
      style="margin-top: 15px"
    >
      <template #cell(acciones)="row">
        <b-button
          :href="'/editar/' + row.item.id"
          size="sm"
          class="mr-1 btn btn-primary"
          variant="primary"
        >
          Editar
        </b-button>
        <p></p>
        <b-button v-if="row.item.id !== undefined" size="sm" @click="Borrar(row.item.id)" variant="danger"> Borrar </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>

import Vue from 'vue'
export default {
  name: "Home",
  components: {},
  mounted() {
    this.getInstrumentos();
  },
  data() {
    return {
      campos: [
        "id",
        "instrumento",
        "marca",
        "modelo",
        "imagen",
        "imagenReal",
        "precio",
        "costoEnvio",
        "cantidadVendida",
        "descripcion",
        "acciones",
      ],
      row:{
        
      },
      instrumentosData: [],
    };
  },
  methods: {
    async getInstrumentos() {
      const res = await fetch("http://localhost:3001/api/instrumento/");
      const resJson = await res.json();
      console.log(resJson);
      this.instrumentosData = resJson;
    },
    async Borrar(id) {
      try {
        await Vue.axios.delete(
          `http://localhost:3001/api/instrumento/delete/${id}`);
        console.log(row);
        alert("Eliminado satisfactoriamente");
        this.$router.push({ name: "Productos" });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>