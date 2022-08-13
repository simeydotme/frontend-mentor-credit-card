<template>
  <section class="complete">
    <div class="icon" v-html="icon"></div>
    <h2>Thank you!</h2>
    <p>We've added your card details</p>
    <button type="button" @click="handleContinue">Continue</button>
  </section>
</template>



<script>
import icon from "../../assets/icon-complete.svg";
import { cardReset } from "../../stores/card.js";
export default {
  data() {
    return {
      icon,
    };
  },
  methods: {
    handleContinue() {
      console.log(cardReset);
      cardReset();
    },
  },
};
</script>

<style scoped>
.complete {
  text-align: center;
  padding: 100px 0 50px;
}
.icon {
  width: 80px;
  margin: auto;
}
svg {
  margin: auto;
  width: 100%;
}
h2 {
  text-transform: uppercase;
  font-size: 32px;
  letter-spacing: 2px;
  font-weight: 500;
  color: var(--vdark);
  margin: 1.5em auto 0.5em;
}
button {
  margin-top: 3em;
}
</style>