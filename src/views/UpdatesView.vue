<template>
    <h1>Updates</h1>
    <div class="update" v-for="update in updates" :key="update.title">
        <router-link :to="`/update/${update._id}`">{{ update.title }}</router-link>
    </div>
</template>
<script>
export default {
    name: "UpdatesView",
    data(){
return {
    updates: [
        {
            title: "5 New Transformers created"
        },
        {
            title: "Novax Djocovid killed by stepping into a transformers"
        },
        { 
            title: "18 ISU officials shocked and hospitalized by newformed stepdown transformers"
        },
        {
            title: "Transformers threaten ISU into not underscording Yuzuru Hanyu"
        }
    ]
        }
    },
    async mounted(){
        const data=await fetch(`${this.$store.state.api}/get/all`);
        this.updates=await data.json();
    }
}
</script>
<style>
.update{
    border: 2px solid black;
    margin-top: 20px;
    width: 50%;
    margin: auto;
    margin-top: 10px;
    padding: 2rem;
    font-size: 20px;
    color: red;
}
</style>