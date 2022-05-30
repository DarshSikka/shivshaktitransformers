<template>
  <div class="home">
    <Hero text="Shiv Shakti Electricals" sub="Nangal Bhoor" img="/image.jpeg"/>
    <AboutText text="Shiv Shakti electricals was established in 1985. This factory is spread across an area of approximately 12 thousand square yards. Since our establishment, we are manufacturing distribution transformers. We have got the experience of supplying these transformers to PSPCL, Rajasthan Electricity Board Jaipur, Haryana State Electricity Board in Hisar and Panipat and Himachal State Electricity board also. We have got export experience also. We have already supplied to Nepal and South Africa. As far as quality is concerned, our name stands in whole of the area. We are known for giving after supply services. We are a man of words and we comply with all the requirements. Our unit is ISO-9001, a registered unit. We are manufacturing single phase as well as three phase transformers, these are aluminium wund and copper wund. We are manufacturing from 5 KVA transformers to 1500 KVA transformers. We bank with Bank of India and HDFC. Our factory is situated on the Jalandar - Jammu highway. We have got all the facilities, slitting unit kneeling plant. We have a well equipped lab and we have all the facilities to test the transformers according to ISI specifications. We are using all standard qualitiy material." img="/AboutPhoto.jpeg" />
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from '../components/Hero'
import AboutText from '../components/AboutText.vue'
export default {
  name: 'HomeView',
  components: {
    Hero,
    AboutText
  }
}
</script>
<style scoped>
</style>