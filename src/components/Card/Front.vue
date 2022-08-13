<template>
  <aside class="card-front" :class="[cardType]">
    <div class="animater" :class="[animate]">
      <LazyImage
        path="https://res.cloudinary.com/simey/image/upload/v1660404010/Dev/credit-card/card-logo.svg"
        class="icon"
      />
      <label class="number" for="cardNumber">{{ cardNumber }}</label>
      <label class="name" for="cardHolder">{{ cardName }}</label>
      <label class="expiry" for="expiryMonth">{{ cardExpiry }}</label>
      <LazyImage :path="cardLogo" class="cardLogo" v-if="cardType" />
    </div>
  </aside>
</template>

<script>
import { nextTick } from "vue";
import {
  cardDetails,
  cardPadded as cardNumber,
  cardName,
  cardExpiry,
  cardLogo,
  cardType,
  cardSuccess,
  cardErrors,
} from "../../stores/card.js";
import LazyImage from "../Global/LazyImage.vue";

export default {
  components: { LazyImage },
  data() {
    return {
      cardDetails,
      cardNumber,
      cardName,
      cardExpiry,
      cardLogo,
      cardType,
      cardSuccess,
      cardErrors,
      animate: "",
    };
  },
  props: { submitted: Boolean },
  computed: {},
  watch: {
    async cardType() {
      this.animate = "";
      await nextTick();
      this.animate = "animate__animated animate__faster animate__pulse";
    },
    async submitted() {
      this.animate = "";
      await nextTick();
      if (cardSuccess.value) {
        this.animate = "animate__animated animate__fast animate__tada";
      } else {
        this.animate = "animate__animated animate__fast animate__headShake";
      }
    },
  },
};
</script>

<style scoped>
.card-front {
  color: white;
  left: -10px;
  top: 110px;
  transform: scale(0.8);
  z-index: 2;
}

.animater {
  background-color: slategrey;
  background-image: url("https://res.cloudinary.com/simey/image/upload/c_scale,w_900/Dev/credit-card/default.jpg");
  background-size: cover;
  background-position: center;
  position: absolute;
  inset: 0;
  border-radius: 10px;
  box-shadow: rgba(15, 5, 20, 1) 0px 20px 40px -10px;
}

@media screen and (min-width: 420px) {
  .card-front {
    left: 50%;
    transform: translateX(calc(-50% - 30px)) scale(0.9);
  }
}

@media screen and (min-width: 800px) {
  .card-front {
    position: absolute;
    right: -50px;
    left: auto;
    bottom: 53%;
    top: auto;
    transform: none;
  }
  .animater {
    box-shadow: rgba(15, 5, 20, 0.75) 0px 30px 40px -25px;
  }
}

.card-front.visa .animater {
  background-color: #2f68e3;
  background-image: url("https://res.cloudinary.com/simey/image/upload/c_scale,w_900/Dev/credit-card/visa.jpg");
}
.card-front.master .animater {
  background-color: #f4dfb2;
  background-image: url("https://res.cloudinary.com/simey/image/upload/c_scale,w_900/Dev/credit-card/master.jpg");
}
.card-front.amex .animater {
  background-color: #61c6f5;
  background-image: url("https://res.cloudinary.com/simey/image/upload/c_scale,w_900/Dev/credit-card/amex.jpg");
}

.icon {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 70px;
  filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.125));
}

.number,
.name,
.expiry,
.cardLogo {
  position: absolute;
  margin: 0;
  padding: 0;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  font-size: 12px;
  inset: 20px;
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.125), 1px 1px 1px rgba(0, 0, 0, 0.125),
    1px 1px 1px rgba(0, 0, 0, 0.125);
}

.number {
  font-family: "PT Mono", monospace;
  text-align: center;
  font-size: 22px;
  letter-spacing: 0.025em;
  top: 54%;
  bottom: auto;
}

.name,
.expiry {
  top: auto;
}

.name {
  right: auto;
  max-width: 180px;
  line-height: 1.2;
  text-align: left;
}

.expiry {
  left: auto;
}

.cardLogo {
  bottom: auto;
  left: auto;
  width: 50px;
  filter: saturate(0) brightness(1.25) contrast(1);
  mix-blend-mode: screen;
}
.visa .cardLogo {
  width: 70px;
}
.amex .cardLogo {
  width: 40px;
}
</style>
