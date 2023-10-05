Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        add(num) {
            this.counter += num;
        },
    },
    computed: {
        showResult() {
            return this.counter <= 37 ? 'Not there yet' : 'Too much!';
        }
    },
    watch: {
        counter(newValue) {
            if (newValue > 37) {
                setTimeout(() => {
                    this.counter = 0;
                }, 5000)
            }
        }
    }
}).mount('#assignment')