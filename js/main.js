import listaUtenti from "./usersList.js";
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            listaUtenti,
            utenteSelezionato: listaUtenti[0],
            messaggioScritto:"",
            input:""
        }
    },
    methods:{
        newMessage(){

            if(this.messaggioScritto == ""){
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
        },

        
    },
    computed:{
        listaFiltrata(){
            return this.listaUtenti.filter(utente =>{
                return utente.name.toLowerCase().includes(this.input.toLowerCase())
            });
        }
    }
}).mount('#app');

