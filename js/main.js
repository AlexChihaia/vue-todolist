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
            ],
            newTask: null,
        };
    },

    methods: {
        removeTask(index) {
            this.toDoList.splice(index, 1);
        },
        addTask() {
            if (this.newTask.trim() === '') {
                return;
            }
            else {
                this.toDoList.push({ task: this.newTask, done: false });
                this.newTask = null;
            }
        },
        doneTask(index) {
            this.toDoList[index].done = !this.toDoList[index].done;
        },
    },

}).mount('#app')