<template>
    <div>
        <p>{{ title + j() }}</p>
    </div>
</template>
<script>
import _ from 'lodash';
export default {
    name: 'hellow',
    data() {
        return {
            title: 'loading host'
        }
    },
    methods: {
        j() {
            return _.join(['use','lodash'], ',')
        }
    }
}
</script>