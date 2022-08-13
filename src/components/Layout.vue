<template>
  <main>
    <section class="cards">
      <CardFront :submitted="submitted" />
      <CardBack />
    </section>
    <section class="details">
      <Form v-if="!cardSuccess" @submit="handleSubmit" />
      <Success v-if="cardSuccess"></Success>
    </section>
  </main>
</template>

<script>
import { nextTick } from "vue";
import CardFront from "./Card/Front.vue";
import CardBack from "./Card/Back.vue";
import Form from "./Form/Index.vue";
import Success from "./Form/Success.vue";
import { cardSuccess } from "../stores/card.js";
export default {
  data() {
    return { cardSuccess, submitted: false };
  },
  components: {
    CardFront,
    CardBack,
    Form,
    Success,
  },
  methods: {
    async handleSubmit() {
      this.submitted = false;
      await nextTick();
      this.submitted = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100%;
  position: relative;
}
.cards {
  background: var(--purple);
  background-image: url("/img/bg-main-mobile.png");
  background-size: cover;
  background-position: center;
  min-height: 250px;
  display: grid;
  place-items: center;
  position: sticky;
  top: -80px;
}
.details {
  display: grid;
  place-items: center;
}

@media screen and (min-width: 800px) {
  main {
    grid-template-columns: 3fr 1fr 3fr 0.3fr;
  }
  .cards {
    position: relative;
    top: 0;
    grid-column: 1 / span 1;
    background-image: url("/img/bg-main-desktop.png");
  }
  .details {
    grid-column: 3 / span 1;
  }
}

@media screen and (min-width: 1024px) {
  main {
    grid-template-columns: 1fr 2fr;
  }
  .details {
    grid-column: 2/-1;
  }
}
</style>
