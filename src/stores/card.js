import { reactive, computed, ref } from "vue";
import { creditcard, padcard } from "../helpers/cardFormat.js";

const defaults = {
  number: "",
  name: "",
  expiryMonth: "",
  expiryYear: "",
  cvc: ""
};

export const cardDetails = reactive({ ...defaults });

export const cardReset = () => {
  cardDetails.number = defaults.number;
  cardDetails.name = defaults.name;
  cardDetails.expiryMonth = defaults.expiryMonth;
  cardDetails.expiryYear = defaults.expiryYear;
  cardDetails.cvc = defaults.cvc;
  cardErrors.value = false;
};

export const cardNumber = computed(() => {
  return creditcard(cardDetails.number);
});

export const cardPadded = computed(() => {
  return padcard(cardDetails.number);
});

export const cardExpiry = computed(() => {
  let month = cardDetails.expiryMonth || "00";
  let year = cardDetails.expiryYear || "00";
  return month + "/" + year;
});

export const cardName = computed(() => {
  return cardDetails.name || "Jane Appleseed";
});

export const cardType = computed(() => {
  const isMaster = cardDetails.number.startsWith(5);
  const isVisa = cardDetails.number.startsWith(4);
  const isAmex = cardDetails.number.startsWith(1);
  if (isMaster) return "master";
  else if (isVisa) return "visa";
  else if (isAmex) return "amex";
  else return "";
});

export const cardLogo = computed(() => {
  return `https://res.cloudinary.com/simey/image/upload/c_scale,h_200/Dev/credit-card/${cardType.value}-logo.png`;
});

export const cardErrors = ref(true);

export const cardSuccess = computed(() => {
  return (
    !cardErrors.value &&
    !!cardDetails.number &&
    !!cardDetails.name &&
    !!cardDetails.expiryMonth &&
    !!cardDetails.expiryYear &&
    !!cardDetails.cvc
  );
});
