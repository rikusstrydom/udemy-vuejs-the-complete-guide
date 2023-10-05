const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lastname: '',
            // fullname: ''
        };
    },
    watch: {
        // name(newValue, oldValue) {
        //     this.fullname = newValue ? newValue + ' Strydom' : '';
        // }
        counter(newValue) {
            if (newValue > 50) {
                this.counter = 0;
            }
        }
    },
    computed: {
        fullname() {
            console.log('running')
            return this.name && this.lastname ? this.name + ' ' + this.lastname : '';
        }
    },
    methods: {
        outputFullname() {
            console.log('running')
            return this.name ? this.name + ' Strydom' : '';
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        resetInput() {
            this.name = '';
            this.lastname = '';
        }
    }
});

app.mount('#events');
