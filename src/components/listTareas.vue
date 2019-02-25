<template>
    <div class="row">
        <div class="col s12 left-align container-list">
            <div :class="['card-list', classCompleted]">
                <p v-for="(task, key) in tasks" 
                    :key="key"
                    @dblclick="changeStateTask(task)">{{task.name}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
    props: ['tasks','classCompleted'],
    methods: mapMutations(['changeStateTask'])
}
</script>
