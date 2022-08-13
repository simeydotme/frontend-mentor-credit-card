<template>
  <img v-bind="$attrs" v-load />
</template>



<script>
const lazy = (el, binding) => {
  el.style.opacity = 0;
  el.src = "";
  const $img = new Image();
  $img.onload = () => {
    el.src = binding.instance.path;
    el.style.opacity = 1;
  };
  $img.src = binding.instance.path;
};
const load = {
  mounted: lazy,
  updated: lazy,
};
export default {
  props: {
    path: String,
  },
  directives: {
    load,
  },
};
</script>

<style scoped>
img {
  transition: opacity 0.5s ease-out;
}
</style>