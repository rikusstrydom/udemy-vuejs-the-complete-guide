Vue.createApp({
    data() {
        return {
            userInput: '',
            shouldShow: true,
            userColor: ''
        }
    },
    methods: {
        toggleShow() {
            this.shouldShow = !this.shouldShow;
        }
    },
    computed: {
        userInputClass() {
            if (this.userInput === 'user1') {
                return 'user1';
            } else if (this.userInput === 'user2') {
                return 'user2';
            }
        },
        shouldShowClass() {
            return this.shouldShow ? 'visible' : 'hidden';
        }
    }
}).mount('#assignment');