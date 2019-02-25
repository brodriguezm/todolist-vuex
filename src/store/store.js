import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        tasks: [
            {id: 1, name:'Tarea de ejemplo', completed: false},
            {id: 2, name:'Tarea de ejemplo 2', completed: true}
        ]
    },
    mutations: {
        createTasks: (state, task) => {
            if(task.name != ''){
                task.id = state.tasks.length + 1
                state.tasks.unshift(task)
            }
        },
        changeStateTask: (state, taskCompleted ) => {
            let task = state.tasks.find(task => task.id == taskCompleted.id)
            task.completed = !task.completed
        }
    },
    getters: {
        countTasksToDo: (state) => state.tasks.filter(tarea => !tarea.completed).length ,
        countTasksCompleted: (state) => state.tasks.filter( tarea => tarea.completed).length ,
        listTasksCompleted: (state) => state.tasks.filter(task => task.completed) ,
        listTasksToDo: (state) => state.tasks.filter(task => !task.completed)
    },
    
})