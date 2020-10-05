<template>
  <button 
    class="button" 
    :type="typeButton"
    :form="form">
    {{ text }}
  </button>
</template>

<script>
export default {
  name:'Button',
  props:{
    text: {
      type: String,
      required: true,
    },
    typeButton: String,
    form: String,
  },
  // methods:{
  //   actionButton(){
  //     this.$emit('button-clicked')
  //   }
  // }
}
</script>

<style scoped>
.button{
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.button:hover, .button:active, .form:focus {
  background: #43A047;
}
</style>