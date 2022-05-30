<template>
<h1>{{title}}</h1>
<p>{{description}}</p>
<img :src="`${$store.state.api}/${image}`" id="main-img"/>
</template>
<script>
export default {
    data(){
        return {
            title: "",
            description: "",
            image: ""
        }
    },
    async mounted(){
        const ftch = await fetch(`${this.$store.state.api}/get/${this.$route.params.id}`);
        const req = await ftch.json();
        this.title=req.title;
        this.description=req.description;
        console.log(req.image);
        console.log(req.image.replace("public", ""))
        this.image=req.image.replace("public", "");
        console.log(this.image);
    }
}
</script>
<style scoped>
#main-img{
    width: 100vw;
}
</style>