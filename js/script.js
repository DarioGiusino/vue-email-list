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
        },

        // Generate n mail
        generateMailList(n) {
            // for n times...
            for(let i = 0; i < n; i++){
                // Execute the method
                this.getRandomMail()
            }
        }
    },
    // Upon page starting...
    mounted() {
        this.generateMailList(10);
    }
});

// Mounting the Vue app on HTML tag
app.mount('#app')