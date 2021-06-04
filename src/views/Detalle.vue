<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col style="text-align: center">
          <img style="max-height: 400px" :src="'/images/' + instrumentoEncontrado.imagen">
          <p> Descripción: {{instrumentoEncontrado.descripcion}} </p>
          </b-col>
        <b-col>

            <b-row>
                <b-col> {{instrumentoEncontrado.cantidadVendida}} Vendidos </b-col>
            </b-row>
          <b-row>
            <b-col><h1>{{ instrumentoEncontrado.instrumento }}</h1></b-col>
          </b-row>
          <b-row>
            <b-col><h2>${{ instrumentoEncontrado.precio }}</h2></b-col>
          </b-row>
          <b-row>
            <b-col><h4>Marca: {{ instrumentoEncontrado.marca }}</h4></b-col>
          </b-row>
          <b-row>
            <b-col><h4>Modelo: {{ instrumentoEncontrado.modelo }}</h4></b-col>
          </b-row>
          <b-row>
            <b-col><h5>Costo Envio:</h5> 
                <h5>{{
            instrumentoEncontrado.costoEnvio > 0
              ? `Costo de Envio interior de Argentina: $${instrumentoEncontrado.costoEnvio}`
              : `Envío gratis a todo el país`
          }}</h5></b-col>
          </b-row>
          <b-row style="text-align: center">
            <b-col
              ><b-button href="/productos" variant="outline-primary"
                >VOLVER</b-button
              ></b-col
            >
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Detalle",
  components: {},
  mounted() {
    this.getInstrumentoXId();
  },
  data() {
    return {
      instrumentoEncontrado: [],
    };
  },
  methods: {
    async getInstrumentoXId() {
      const parametroId = this.$route.params.id;
      const res = await fetch(
        "http://localhost:3001/api/instrumento/" +
          parametroId
      );
      const resJson = await res.json();
      this.instrumentoEncontrado = resJson;
      console.log(this.instrumentoEncontrado);
    },
  },
};
</script>
