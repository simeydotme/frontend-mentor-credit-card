<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
:root {
  --primary1: hsl(249, 99%, 64%);
  --primary2: hsl(278, 94%, 30%);
  --error: hsl(0, 100%, 66%);
  --light: hsl(270, 3%, 87%);
  --dark: hsl(279, 6%, 55%);
  --vdark: hsl(278, 68%, 11%);
  --purple: #2d244e;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: "Space Grotesk", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark);
  font-size: 1.125rem;
}
body,
html,
#app {
  height: 100%;
  padding: 0;
  margin: 0;
}
a {
  color: var(--primary2);
}
svg,
img {
  width: 100%;
  max-width: 100%;
}

form {
  text-align: left;
}

.card-front,
.card-back {
  grid-row: 1/1;
  grid-column: 1/1;
  aspect-ratio: 3/2;
  position: absolute;
  width: 320px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.field {
  margin-bottom: 1.5em;
}
.field .field {
  margin-bottom: 0;
}
.field label {
  color: var(--vdark);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 0.5em;
  display: block;
}
.field input {
  color: var(--vdark);
  font-family: "Space Grotesk", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  font-weight: 400;
  border: 1px solid var(--light);
  outline: 1px solid transparent;
  padding: 0.6em 1em;
  border-radius: 6px;
  display: block;
  width: 100%;
  transition: all 0.3s ease;
}
.field input::placeholder {
  color: var(--dark);
}
.field input:focus {
  border: 1px solid var(--primary2);
  outline: 1px solid var(--primary1);
}

.field .errors {
  color: var(--error);
  font-size: 12px;
  margin-top: 5px;
}
.field .error {
  display: block;
}

.field.hasErrors input {
  border-color: var(--error);
}

button {
  font-family: "Space Grotesk", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  background: var(--vdark);
  color: white;
  border: none;
  padding: 0.75em 1em;
  border-radius: 6px;
  display: block;
  width: 100%;
}
</style>
