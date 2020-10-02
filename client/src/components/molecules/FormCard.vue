<template>
    <div>
      <div class="inputForm">
        <p>Nombre del tarjetahabiente: {{ Titular }}</p>
        <input v-model="Titular" placeholder="">

        <p>Fecha de expiracion (MM/AAAA): {{ Fecha }} {{ Año }}</p>
        <div class="inputDate">
        <input v-model="Fecha" placeholder="MM"><span>/</span><input v-model="Año" placeholder="AAAA">
        </div>
        
        <p>Número Telefónico: {{ Telefono }}</p>
        <input v-model="Telefono" placeholder="Lada (+52)">

        <p>Número de tarjeta de crédito: {{ NumTarjeta }}</p>
        <input v-model="NumTarjeta" placeholder="xxxx xxxx xxxx xxxx">
        
        <p>CVC: {{ CVC }}</p>
        <input v-model="CVC" placeholder="xxx">
      </div>
    </div>
</template>

<script>
export default {
    name: 'FormCard',
}
</script>

<style scoped>
.inputForm input{
    margin: 10px 5px;
}
.inputDate{
    width: 100%;
    box-sizing: border-box;
}
.inputDate input{
    width: 5%;
}

</style>