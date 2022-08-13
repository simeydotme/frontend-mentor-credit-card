<template>
  <aside class="card-back">
    <label class="cvc" for="cvc">{{ cardDetails.cvc || "000" }}</label>
  </aside>
</template>

<script>
import { cardDetails } from "../../stores/card.js";
export default {
  data() {
    return {
      cardDetails,
    };
  },
};
</script>

<style scoped>
.card-back {
  background-color: #e4e0e6;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  outline-offset: -1px;
  right: -30px;
  top: 0px;
  transform: scale(0.7);
  z-index: 1;
  box-shadow: rgba(15, 5, 20, 1) 0px 20px 40px -10px;
}

.card-back::after {
  content: "";
  position: absolute;
  height: 45px;
  top: 25px;
  left: 0;
  right: 0;
  background: rgb(27, 27, 36);
}

@media screen and (min-width: 420px) {
  .card-back {
    right: 50%;
    transform: translateX(calc(50% + 30px)) scale(0.9);
    box-shadow: rgba(15, 5, 20, 0.75) 0px 30px 40px -25px;
  }
}

@media screen and (min-width: 800px) {
  .card-back {
    position: absolute;
    right: -100px;
    top: 53%;
    left: auto;
    transform: none;
    z-index: 3;
  }
}

.cvc {
  position: absolute;
  right: 30px;
  left: 30px;
  top: 80px;
  color: white;
  background: rgb(164, 167, 175);
  border-radius: 3px;
  text-align: right;
  padding: 0.5em 1em;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 600;
}
</style>
