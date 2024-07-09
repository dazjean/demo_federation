<template>
    <div>
        <p>{{ title }}</p>
        <hr/>
        <remoteMyText></remoteMyText>
        <hr/>    
    </div>
</template>
<script>

import remoteMyText from 'remote-app/MyText';
export default {
    name: 'host-app',
    data() {
        return {
            title: 'i am vue Host App'
        }
    },
    components: {
        remoteMyText,
    }
}
</script>