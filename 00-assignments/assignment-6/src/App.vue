<template>
  <section style="display: flex; justify-content: space-evenly">
    <user-data @set-active-user="setActiveUser"></user-data>
    <active-user :user-name="name" :age="age"></active-user>
  </section>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      age: ''
    }
  },
  methods: {
    setActiveUser(name, age) {
      this.name = name;
      this.age = age;
    }
  }
}

</script>