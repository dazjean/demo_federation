<template>
    <div>
        <!-- <topBar></topBar> -->
        <p>{{ title }}</p>
        <myTable></myTable>
        <myText></myText>
    </div>
</template>

<script>
import loading from './com/loading.vue'
import myText from './com/myText.vue'

export default {
    data() {
        return {
            title: 'i am vue romote app'
        }
    },
    components: {
        myText,
        myTable: () => ({
            // 需要加载的组件 (应该是一个 `Promise` 对象)
            component: import('./com/myTable.vue'),
            // 异步组件加载时使用的组件
            loading: loading,
            // 展示加载时组件的延时时间。默认值是 200 (毫秒)
            delay: 2000,
            // 如果提供了超时时间且组件加载也超时了，
            // 则使用加载失败时使用的组件。默认值是：`Infinity`
            timeout: 3000
        }),
    }
}
</script>