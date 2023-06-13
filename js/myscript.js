const { createApp } = Vue;
createApp({
    data(){
        return{
            mail:[],
        }
    },
    methods: {

        getRandomMail(){
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then ((response) => {
                    const result = response.data;
                    console.log(result.response);
                    this.mail.push(result.response);
                });
                
            }
        }
    },

    created(){
        this.getRandomMail();
    }

}).mount('#app');