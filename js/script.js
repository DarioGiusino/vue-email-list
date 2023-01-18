// // console.log('vue', Vue);

const app = Vue.createApp({
    name: 'Mail List',
    data() {
        return {
            mailList: [],
            mailApi: 'https://flynn.boolean.careers/exercises/api/random/mail'
        }
    }
});

app.mount('#app')