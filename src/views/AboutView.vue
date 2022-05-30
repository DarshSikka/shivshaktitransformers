<template>
  <div class="about">
    <h1>About Us</h1>
    <p class="text">
      We have got fully trained staff, in which we have 2 test engineers, 1 production engineer and 1 engineer for supervising the whole work. In all our departments, i.e. winding of ht and lt coils, coil assembly, core assembly, tankup(boxup), in all the departments we have got skilled workers though they are helped by unskilled workers also. At each and every step, our engineers check the whole process so that nothing untoward happens. We go for final production only after full checking has been done and complete unit is only allowed to go out all relevant tests have satisfactorily been done.
    </p>
    <div>

      <h1>{{text}}</h1>
      <div class="flex">
      <button @click="prev()" class="btn">⬅️</button>
      <img :src='image' width="500"/>
      <button  @click="next()" class="btn">➡️</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.text{
  font-size: 20px;
  width: 80%;
  margin: auto;
  text-align: left;
}
.flex{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.btn{
  font-size: 100px;
  border: none;
  background: none;
}
</style>
<script>

export default {
  data(){
    return {
      i: 0,
      texts: ["Testing Equipment", "Lab Computers", "Boxup in progress"],
      images: ["images/LabTesting.jpeg", "images/LabComputer.jpeg", "images/boxup.jpeg"],
      text: "Testing Equipment",
      image: "images/LabTesting.jpeg",
    }
  },
  methods:{
    next(){
      this.i++;
      if(this.i>=this.images.length){
        this.i=0;
      }
      this.text=this.texts[this.i];
      this.image=this.images[this.i];
    },
    prev(){
      this.i--;
      if(this.i<0){
        this.i=this.images.length-1;
      }
      this.text=this.texts[this.i];
      this.image=this.images[this.i]
    }
  }
}
</script>