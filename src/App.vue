<template>
  <div id="app">
    <h1>Lista de Tareas</h1>
    <div class="row">
      <div class="col s10 offset-s1">
        <addTarea></addTarea>
      </div>
    </div>
    <div class="row">
      <div class="col s10 offset-s1">
        <div class="row">
          <div class="col m12 l6 left-align">
            <h4>{{countTasksToDo}} tareas por realizar</h4>
            <listTareas classCompleted="" :tasks = 'listTasksToDo'></listTareas>
          </div>
          <div class="col m12 l6 left-align">
            <h4>{{countTasksCompleted}} tareas realizadas</h4>
            <listTareas classCompleted="text-completed" :tasks = 'listTasksCompleted'></listTareas>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

import listTareas from './components/listTareas'
import addTarea from './components/addTarea'
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'app',
  data: {
      check: true
  },
  components: {
    listTareas,
    addTarea
  },
  computed:  {
    ...mapState(['tasks']),
    ...mapGetters(['listTasksToDo',
        'listTasksCompleted',
        'countTasksToDo',
        'countTasksCompleted'])
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
