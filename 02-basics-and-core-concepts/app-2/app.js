const app = Vue.createApp({
    data() {
        return {
            name: '',
            confirmedName: '',
            counter: 55,
        };
    },
    methods: {
        add(num) {
            this.counter += num;
        },
        remove(num) {
            this.counter -= num;
        },
        setName(event, surname) {
            this.name = `${event.target.value} ${surname}`;
        },
        submitForm() {

        },
        confirmInput() {
            this.confirmedName = this.name;
        }
    }
});

app.mount('#events');
