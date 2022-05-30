<template>
  <nav>
    <div class="logo">
        <img src="/favicon.ico"/>
    </div>
    <div class="links">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">About Us</router-link>
    <router-link class="link" to="/achievements">Our Achievements</router-link> 
    <router-link class="link" to="/updates">Updates</router-link>
    </div>
    <div class="menu" @click="triggerPhone()">
        &equiv;
    </div>
  </nav>

    <div class="phone-menu" :style="{display}">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">About Us</router-link>
        <router-link class="link" to="/achievements">Our Achievements</router-link> 

        <router-link class="link" to="/updates">Updates</router-link>

    <button class="link" @click="triggerPhone()">&times;</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            display: 'none'
        }
    },
    methods: {
       triggerPhone(){
           this.$emit("trigger");
           if(this.display==="none"){
               this.display="flex";
           }
           else{
               this.display="none"
           }
       } 
    }
}
</script>
<style scoped lang="scss">
.menu{
    font-size: 80px;
}
nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.link{
    color: red;
    text-decoration: none;
    font-size: 25px;
    border-right: 2px solid red;
    padding: 10px;
    background: transparent;
    border-top: none;
    border-left: none;
}
.links{
    font-size: 40px;
    color: blue;
}
.phone-menu{
    flex-direction: column;
    .link{
        border-right: none;
        border-bottom: 2px solid red;
    }
    
    
}
@media(max-width:700px){
    .links{
        display: none;
    }
}
@media(min-width:701px){
    .menu{
        display: none;
    }
}
</style>
<script></script>