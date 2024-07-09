<template>
    <div>
        <p>{{ title }}</p>
        <myText></myText>
    </div>
</template>
<script>
import myText from 'remote-app/MyText';
export default {
    name: 'hellow',
    data() {
        return {
            title: 'hellow host, use MyText'
        }
    },
    components: {
        myText: myText
    }
}
</script>