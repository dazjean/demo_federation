<template>
    <div>
        <p>{{ title }}</p>
    </div>
</template>
<script>
import _ from 'lodash'
export default {
    name: 'mytext',
    data() {
        return {
            title: 'use remote text'
        }
    },
    methods: {
        joinTitle() {
            return _.join([this.title, ' use, lodash'], ',')
        }
    }
}
</script>