Vue.createApp({
    data() {
        return {
            userInput1: '',
            userInput2: '',
            confirmInput2: ''
        }
    },
    methods: {
        showAlert(text) {
            window.alert(text);
        },
        setUserInput1(event) {
            this.userInput1 = event.target.value;
        },
        setUserInput2(event) {
            this.userInput2 = event.target.value;
        },
        confirmInput() {
            this.confirmInput2 = this.userInput2;
        }
    }
}).mount('#assignment')