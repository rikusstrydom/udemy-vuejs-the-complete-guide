const app = Vue.createApp({
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!',
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
        },
    },
    beforeCreate() {
        console.log('beforeCreate');
        debugger;
    },
    created() {
        console.log('created');
        debugger;
    },
    beforeMount() {
        console.log('beforeMount');
        debugger;
    },
    mounted() {
        console.log('mounted');
        debugger;
    },
    beforeUpdate() {
        console.log('beforeUpdate');
        debugger;
    },
    updated() {
        console.log('updated');
        debugger;
    },
    beforeUnmount() {
        console.log('beforeUnmount');
        debugger;
    },
    unmounted() {
        console.log('unmounted');
        debugger;
    }
});

app.mount('#app');

setTimeout(() => {
    app.unmount();
}, 5000);