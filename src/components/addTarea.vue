<template>
    <form @submit.prevent="addTask">
        <div class="row">
            <div class="input-field center-align col s12 m8 offset-m2"
                style="display: flex; text-align:center">
                <input name="name" id="new_task" type="text" class="validate" v-model="task">
                <label for="new_task">Nueva Tarea</label>
                <button class="btn waves-effect waves-light" 
                    type="submit" 
                    name="action"
                    style="float:left;">Crear
                    <i class="material-icons right">send</i>
                </button>
            </div>
            <input type="hidden" name="id" value="">
        </div>
    </form>
</template>
<script>
//import store from '../store/store'
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            task: ''
        }
    },
    methods: {
        addTask(){
            this.$store.commit('createTasks',{
                name: this.task,
                completed: false
            })
            this.task = ''
        }
    }
}
</script>
