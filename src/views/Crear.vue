<template>
    <div>
        <crear-formulario :enviarDatos="enviarDatos" />
    </div>
</template>

<script>
    import Formulario from '../components/Formulario.vue'
    import Vue from 'vue'
    export default{
        components:{
            'crear-formulario': Formulario
        },methods:{
            async enviarDatos(datos){
                try{
                    await Vue.axios.post('http://localhost:3001/api/instrumento/create', datos);
                    alert('Instrumento creado satisfactoriamente')
                    this.$router.push({name:'Crud'})
                }catch(error){
                    console.error(error)
                }
            },
        }
    }
</script>