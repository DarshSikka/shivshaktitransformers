<template>
<div class="flex">
<img :src="img" alt="main-image" width="400"/>
<div class="container">
<h1 class="heading">{{text}}</h1>
<p class="sub">{{sub}}</p>
</div>
</div>
</template>
<script>
export default {
    props: ['img', 'text', 'sub']

}
</script>
<style scoped lang="scss">
.flex{
display: flex;
height: 80vh;
align-items: center;
justify-content: center;
margin-top: 4rem;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.heading{
    color: red;
    font-size: 80px;
}
.sub{
    font-size: 40px;
    color: green;
    font-weight: bold;
}
@media(max-width: 700px){
    .flex{
        flex-direction: column;
    }
    .heading{
        font-size: 40px;

        width: 100%;
    }
}
@media(min-width: 700px){
img[alt='main-image']{
    width: 700px;
}
}
</style>