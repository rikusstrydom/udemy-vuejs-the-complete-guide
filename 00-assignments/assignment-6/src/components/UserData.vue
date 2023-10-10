<template>
  <section>
    <form @submit.prevent="setActiveUser">
      <div>
        <label>Name</label>
        <input type="text" v-model="enteredName"/>
      </div>
      <div>
        <label>Age</label>
        <input type="text" v-model="enteredAge"/>
      </div>
      <div>
        <button>Set Active User</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredAge: ''
    }
  },
  emits: ['set-active-user'],
  methods: {
    setActiveUser() {
      this.$emit('set-active-user', this.enteredName, this.enteredAge);
    }
  }
}
</script>