<template>
<div class="flex">
<p class="text">{{text}}</p>
<img :src="img" width="700"/>
</div>
</template>
<script>
export default {
 props: ['text', 'img']
}
</script>
<style scoped lang="scss">
.text{
    width: 75%;
    font-size: 20px;
    text-align: left;
}
.flex{
    display: flex;
    margin-top: 50px;
    justify-content: space-around;
}
@media(max-width:700px){
    .flex{
        flex-direction: column;
    }
    .text{
        width: 100%;
    }
    img{
        width: 400px;
        margin: auto;
    }
}
</style>