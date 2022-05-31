<template>
  <div class="post">
      <h3>
          <a :href="props.url" target="_blank">
              {{props.title}}
          </a>
      </h3>
      <h3>
          <a :href="props.url" target="_blank">
              {{props.description}}
          </a>
      </h3>
      <p>
          {{props.published}}
      </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["title", "description", "published", "url"]);

</script>


<style lang="scss">

a {
    text-decoration: none;
    color: #1c1e21;
}

.post {
    text-align: left;
    border-bottom: 1px solid;
    margin: 10px 10px;
}
</style>