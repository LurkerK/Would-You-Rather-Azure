<script setup>
import WouldYouRather from './components/WouldYouRather.vue'
import wyrService from './services/wyrService'
import { ref, onMounted } from 'vue'



// Data for the question, and two answers
const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

// this will store the user's answer once they made a choice 
const userSelection = ref('')


// Fetch a random "Would You Rather" question when the component is mounted
onMounted( () => {
  wyrService.getRandomWYR().then( (wyrData) => {
    // Expect data to be something like
    // {"question": "Live in a house shaped like a triangle or a house shaped like a circle?", 
    // "answer1": "Triangle house", 
    // "answer2": "Circle house"}

    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})

function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! You chose ${userChoice}`
}
</script>

<template>

  <div id="app-component">

  <h1>Hello! Would You Rather?</h1>

  <!-- Pass question, answer and event handler to child component -->
  <WouldYouRather v-bind:question="wyrQuestion"
    v-bind:answer1="wyrAnswer1"
    v-bind:answer2="wyrAnswer2"
    v-on:answer-selected="updateUserSelection"
    ></WouldYouRather>

    <p>{{ userSelection  }}</p>

</div>

</template>

<style scoped>

#app-component {
  /* font-size: 3em; */
  background-color: aqua;
  padding: 40px;
}
p {
  font-family: 'Courier New', Courier, monospace;
}


</style>
