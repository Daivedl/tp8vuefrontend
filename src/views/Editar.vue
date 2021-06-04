<template>
  <div>
    <editar-formulario :enviarDatos="enviarDatos" :eliminar="eliminar" />
    <div class="col-lg-6 mx-auto align-items-center text-center">
        <b-button href="/crud" variant="success">Volver</b-button>
    </div>
    
  </div>
</template>

<script>
import Formulario from "../components/Formulario.vue";
import Vue from 'vue'
export default {
  components: {
    "editar-formulario": Formulario,
  },
  methods: {
    async enviarDatos(datos) {
      try {
        await Vue.axios.put(
          `http://localhost:3001/api/instrumento/edit/${datos.id}`,
          datos
        );
        alert("Instrumento modificado satisfactoriamente");
        this.$router.push({ name: "Crud" });
      } catch (error) {
        console.error(error);
      }
    },
    volver(){
        this.$router.push({name: "Crud"});
    }
  }
};
</script>
