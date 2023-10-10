<template>
  <form @submit.prevent="addContact">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName"/>
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="enteredPhone"/>
    </div>
    <div>
      <label>Email</label>
      <input type="text" v-model="enteredEmail"/>
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'new-friend',
  emits: ['add-contact'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: ''
    }
  },
  methods: {
    addContact() {
      this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
      this.enteredName = '';
      this.enteredPhone = '';
      this.enteredEmail = '';
    }
  },
}
</script>
