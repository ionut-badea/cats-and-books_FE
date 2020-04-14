<template>
  <div class="box">
    <div class="columns">
      <div class="column">
        {{ title }}
      </div>
      <div class="column">
        {{ author }}
      </div>
      <div class="column">
        <div v-for="tag in tags" :key="tag.id">
          {{ tag }}
        </div>
      </div>
      <div class="column">
        {{ published }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    published: {
      type: Date,
      required: true
    }
  }
}
</script>

<style scoped></style>
