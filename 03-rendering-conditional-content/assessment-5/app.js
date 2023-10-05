const app = Vue.createApp({
    data() {
        return {
            userInputValue: '',
            tasks: [],
            hideList: true
        };
    },
    computed: {
        buttonLabel() {
            return !this.hideList ? 'Show List' : 'Hide List';
        }
    },
    methods: {
        addTask() {
            if (this.userInputValue) {
                this.tasks.push(this.userInputValue);
                this.userInputValue = '';
            }
        },
        toggleList() {
            this.hideList = !this.hideList;
        }
    }
});

app.mount('#assignment');
