<template>
  <div class="field" :class="{ hasErrors }">
    <label :for="name" v-if="$slots.default">
      <slot></slot>
    </label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="name"
      :type="fieldType"
      v-bind="$attrs"
    />

    <div class="errors" v-for="error of validator.$errors" :key="error.$uid">
      <div class="error">
        {{ error.$message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    name: String,
    type: String,
    validator: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    fieldType() {
      return this.type || "text";
    },
    hasErrors() {
      return this.validator?.$error;
    },
  },
};
</script>

<style scoped>
</style>
