<template>
  <div>
      <div class="inputForm">
        <p>Número Telefónico: {{ Telefono }}</p>
        <input v-model="Telefono" placeholder="Lada (+52)">
      </div>
    </div>
</template>

<script>
export default {
    name: 'FormOxxo',
}
</script>

<style>
.inputForm input{
    margin: 10px 5px;
}
</style>