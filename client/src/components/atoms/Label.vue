<template>
  <label :for="forInput">{{ text }}</label>
</template>

<script>
export default {
  name: 'Label',
  props: {
    text: {
      type: String,
      required: true
    },
    forInput: String
  }
}
</script>