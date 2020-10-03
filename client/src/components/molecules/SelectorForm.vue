<template>
<div>
    <div class="container">
      <h3>Selecciona el método de pago:</h3>
      <div class="forms-container">
        <div class="option selected">
            <CardIcon class="card-icon"/>
        </div>
        <div class="option">
            <OxxoIcon/>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import OxxoIcon from '../atoms/OxxoIcon'
import CardIcon from '../atoms/CardIcon'

export default {
    name: 'SelectorForm',
    components: {
        OxxoIcon, CardIcon
    }
}
</script>

<style scoped>
h3{
    width: 100%;
    margin: 30px 50px 10px 50px;
}
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.option{
    border: 2px solid rgb(190, 190, 190);
    border-radius: 20px;
    width: 300px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 200ms ease-in-out;
}
.option:hover{
    transform: scale(1.02);
    border: 2px solid rgb(55, 111, 194);
}
.card-icon{
    width: 150px;
}
.selected {
    border: 2px solid rgb(2, 52, 190);
}
.forms-container{
    display: flex;
    justify-content: center;
    grid-gap: 40px;
}
</style>