<template>
    <div>
        <p>{{ add }}</p>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'myTopBar',
    data() {
        return {
            title: ['topBar','remote', 'use', 'lodash']
        }
    },
    computed: {
        add() {
            return _.join(this.title, ' , ')
        }
    }
}
</script>