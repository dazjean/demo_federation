<template>
    <div>
        <p>{{title|join}}</p>
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    name: 'loading',
    data() {
        return {
            title: ['loading','romote','use','lodash']
        }
    },
    filters: {
        join(arr) {
            return _.join(arr, ',')
        }
    }
}
</script>