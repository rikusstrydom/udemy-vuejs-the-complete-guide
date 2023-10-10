Vue.createApp({
    data() {
        return {
            name: 'Rikus',
            age: 30,
            favoriteNumber: this.randomNumer(),
            imageUrl: 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92'
        }
    },
    methods: {
        randomNumer() {
            return Math.random()
        }
    }
}).mount('#assignment')