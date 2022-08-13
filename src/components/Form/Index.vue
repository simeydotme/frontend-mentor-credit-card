<template>
  <form @submit.prevent="handleSubmit">
    <Field
      v-model="cardDetails.name"
      name="cardHolder"
      placeholder="e.g. Jane Appleseed"
      v-maska="'a* a* a* a*'"
      maxlength="36"
      :validator="v$.cardDetails.name"
    >
      Cardholder Name
    </Field>

    <Field
      v-model="cardNumber"
      name="cardNumber"
      placeholder="e.g. 1234 5678 9123 0000"
      pattern="[0-9 ]*"
      v-maska="'#### #### #### ####'"
      inputMode="numeric"
      maxlength="19"
      :validator="v$.cardDetails.number"
    >
      Card Number
    </Field>

    <div class="cvc-expiry">
      <div class="expiry-field field">
        <label for="expiryMonth">Exp. Date (mm/yy)</label>
        <div>
          <Field
            v-model="cardDetails.expiryMonth"
            name="expiryMonth"
            placeholder="MM"
            pattern="[0-9]*"
            inputMode="numeric"
            maxlength="2"
            :class="{ hasErrors: v$.cardDetails.expiryMonth.$errors.length }"
          >
          </Field>

          <Field
            v-model="cardDetails.expiryYear"
            name="expiryYear"
            placeholder="YY"
            pattern="[0-9]*"
            inputMode="numeric"
            maxlength="2"
            :class="{ hasErrors: v$.cardDetails.expiryYear.$errors.length }"
          >
          </Field>
        </div>

        <div class="errors" v-if="v$.$validationGroups.date.$errors.length">
          <div class="error">
            {{ v$.$validationGroups.date.$errors[0].$message }}
          </div>
        </div>
      </div>

      <div class="cvc-field field">
        <label for="cvc">cvc</label>
        <Field
          v-model="cardDetails.cvc"
          name="cvc"
          placeholder="e.g. 123"
          inputMode="numeric"
          maxlength="3"
          :validator="v$.cardDetails.cvc"
        >
        </Field>
      </div>
    </div>

    <button type="submit">Confirm</button>
  </form>
</template>

<script>
import Field from "./Field.vue";
import { cardDetails, cardErrors } from "../../stores/card.js";
import { mask } from "maska";
import { validators, groups } from "../../helpers/validators.js";
import useVuelidate from "@vuelidate/core";

export default {
  components: {
    Field,
  },
  setup() {
    return { v$: useVuelidate({ $lazy: true }) };
  },
  data() {
    return { cardDetails, cardErrors };
  },
  props: {},
  emits: ["submit"],
  computed: {
    cardNumber: {
      get() {
        return mask(cardDetails.number, "#### #### #### ####");
      },
      set(v) {
        cardDetails.number = v.replace(/\s+/g, "");
      },
    },
  },
  methods: {
    handleSubmit() {
      console.log("submit");
      this.v$.cardDetails.$touch();
      cardErrors.value = this.v$.cardDetails.$error;
      this.$emit("submit");
    },
  },
  validations() {
    return {
      // the "cardDetails" object below matches the
      // data() object, allowing the validation library to
      // check the value of the data against the validators
      cardDetails: validators,
      $validationGroups: groups,
    };
  },
};
</script>

<style scoped>
form {
  max-width: 360px;
  margin: 100px 20px 50px;
}
@media screen and (min-width: 800px) {
  form {
    margin-top: 50px;
  }
}
.expiry-field,
.cvc-field {
  flex: 1 1 50%;
}
.expiry-field > div {
  display: flex;
  gap: 10px;
}
.expiry-field .field {
  flex: 1 1 50%;
}
.cvc-expiry {
  display: flex;
  gap: 10px;
}
</style>
