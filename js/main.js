'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoList: [
                {
                    task: 'Fare la spesa',
                    done: true,
                },
                {
                    task: 'Rifare il letto',
                    done: false,
                },
                {
                    task: 'Prenotare tavolo al ristorante',
                    done: true,
                },
                {
                    task: 'Organizzare anniversario',
                    done: true,
                },
            ]

        }
    }
}).mount('#app')