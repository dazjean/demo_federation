<template>
    <div>
        <table border>
            <thead>{{ title }}</thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
        <loading></loading>
        
    </div>
</template>

<script>
import loading from './loading.vue';

export default {
    name: 'myTable',
    data() {
        return {
            title: 'table romote'
        }
    },
    components: {
        loading
    }
}
</script>