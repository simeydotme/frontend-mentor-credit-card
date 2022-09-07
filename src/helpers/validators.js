import {
  helpers,
  required,
  numeric,
  minLength,
  minValue,
  between
} from "@vuelidate/validators";

const validators = {
  name: {
    required: helpers.withMessage("Enter a Card Holder name", required),
    minLength: minLength(2)
  },
  numberAmex: {
    required: helpers.withMessage("Enter a Credit Card number", required),
    minLength: helpers.withMessage("Must be 15 digits long", minLength(15))
  },
  numberNormal: {
    required: helpers.withMessage("Enter a Credit Card number", required),
    minLength: helpers.withMessage("Must be 16 digits long", minLength(16))
  },
  expiryMonth: {
    required,
    minLength: helpers.withMessage("Must be 2 digits (MM)", minLength(2)),
    betweenValue: helpers.withMessage(
      "Enter a valid Month (MM)",
      between(0, 12)
    )
  },
  expiryYear: {
    required,
    minLength: helpers.withMessage("Must be 2 digits (YY)", minLength(2)),
    minValueValue: helpers.withMessage(
      "Enter a future Year (YY)",
      minValue(parseInt(new Date().getFullYear().toString().substring(2)))
    )
  },
  cvc: {
    required,
    numeric,
    minLength: helpers.withMessage("3 digits for the CVC", minLength(3))
  }
};

const groups = {
  date: ["cardDetails.expiryMonth", "cardDetails.expiryYear"]
};

export { validators, groups };
