<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ showDetails ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>

export default {
  name: 'friend-contact',
  props: {
    friend: {}
  },
  data() {
    return {
      showDetails: false
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  }
}

</script>