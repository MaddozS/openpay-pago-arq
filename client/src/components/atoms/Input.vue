<template>
  <input 
    :placeholder="placeholder" 
    :name="nameInput" 
    :id="nameInput" 
    :maxlength="maxlength"
    :minlength="minlength"
    :value="value"
    :type="type"
    @input="$emit('input', $event.target.value)"
    class="input">
</template>

<script>
export default {
  name: 'Input',
  props: {
    nameInput: {
      type: String,
      required: true
    },
    placeholder: String,
    maxlength: Number,
    minlength: Number,
    value: String,
    type: String,
  }
}
</script>

<style scoped>
.input {
  margin-top: 5px;
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #ffffff;
  border-radius: 6px;
  border: 2px solid rgb(228, 228, 228);
  padding: 8px;
  box-sizing: border-box;
  font-size: 14px;
  width: 100%;
}
</style>