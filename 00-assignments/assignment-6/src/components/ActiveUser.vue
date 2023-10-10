<template>
  <section>
    Active User
    <h2>Name: {{ userName }}</h2>
    <h3>Age: {{ age }}</h3>
  </section>
</template>

<script>

export default {
  props: {
    userName: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    }
  },
}

</script>