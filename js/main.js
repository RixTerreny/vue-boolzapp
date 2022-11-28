import listaUtenti from "./usersList.js";
const { createApp } = Vue;

let counter=0;

const app = createApp({
    data() {
        return {
            listaUtenti,
            utenteSelezionato: listaUtenti[counter],
            messaggioScritto:""
        }
    },
    methods:{
        newMessage(){

            if(this.typing == ""){
                return
            }
            else{
                this.utenteSelezionato.messages.push({
                    date: "12:00",
                    message: this.messaggioScritto,
                    status: 'sent'
                });

                setTimeout(() => {
                    this.utenteSelezionato.messages.push({
                        date: "12:01",
                        message: 'Ok',
                        status: 'received'
                    });
                }, 1000);
                this.messaggioScritto=""
            }
        }
    }
}).mount('#app');

