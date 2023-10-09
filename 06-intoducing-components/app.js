const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manual',
                    name: 'Manual Lorenz',
                    phone: '012 343 6345',
                    email: 'manual@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '096 543 2221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    }
});

app.component('friend-contact', {
    template: `
            <li>
            <h2>{{friend.name}}</h2>
            <button @click="toggleDetails">Show Details</button>
            <ul v-if="showDetails">
                <li><strong>Phone:</strong> {{friend.phone}}</li>
                <li><strong>Email:</strong> {{friend.email}}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            showDetails: false,
            friend: {
                id: 'julie',
                name: 'Julie Jones',
                phone: '096 543 2221',
                email: 'julie@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        }
    }
});

app.mount('#app');