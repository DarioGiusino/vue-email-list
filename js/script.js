// // console.log('vue', Vue);

// Initialize Vue App
const app = Vue.createApp({
    // App name
    name: 'Mail List',
    data() {
        return {
            mailList: [],
            mailAPI: 'https://flynn.boolean.careers/exercises/api/random/mail'
        }
    },
    methods: {
        // Get a random email from mailAPI
        getRandomMail() {
            // Using axios...
            axios.get(this.mailAPI)
            .then(response => {
                // Packed in a constant the server response
                const newMail = response.data.response;

                // Push the random mail on the data array
                this.mailList.push(newMail);
            })
        }
    },
    // Upon page starting...
    mounted() {
        // For 10 times...
        for(let i = 0; i < 10; i++){
            // Execute the method
            this.getRandomMail()
        }
        
    }
});

// Mounting the Vue app on HTML tag
app.mount('#app')