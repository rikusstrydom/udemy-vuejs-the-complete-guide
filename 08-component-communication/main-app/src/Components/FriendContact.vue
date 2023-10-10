<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ showDetails ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="deleteContact">Delete</button>
  </li>
</template>

<script>

export default {
  name: 'friend-contact',
  props: {
    id: {type: String, required: true},
    name: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    emailAddress: {type: String, required: true},
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      validator: function (value) {
        return value === true || value === false;
      }
    },
  },
  emits: ['toggle-favorite', 'delete-contact'],
  // emits: {
  //   'toggle-favorite': (id) => {
  //     if (id) return true;
  //     console.log('Id is missing');
  //     return false;
  //   }
  // },
  data() {
    return {
      showDetails: false,
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id)
    },
    deleteContact() {
      this.$emit('delete-contact', this.id);
    }
  }
}

</script>