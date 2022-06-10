<template>
  <div class="posts">
    <template v-for="item in state.listItems" :key="item.id">
      <PostCard
        :title="item.title"
        :description="item.description"
        :published="item.published"
        :url="item.url"
        />
    </template>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from "vue";
  import PostCard from "../components/PostCard.vue";
  import { useStore } from 'vuex';

  const state = reactive({
    listItems: [] as object[],
  });
  
  state.listItems.push({
    "id": 1,
    "title": "How can a prefetch_related put a Django server down?",
    "description": "Suddenly on a Thursday at 10 a.m we start realizing that our platform was going down every 5 minutes.",
    "published": "Published on Dec 26, 2021 · 4 min read",
    "url": "https://medium.com/@danielvieira_88575/how-can-a-prefetch-related-put-a-django-server-down-e513c0ed2dae"}
  );
</script>