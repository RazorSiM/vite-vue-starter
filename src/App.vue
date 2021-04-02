<template>
  <component :is="layout" class="font-nunito">
    <router-view />
  </component>
</template>

<script>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  export default {
    setup() {
      const route = useRoute();
      const layout = computed(() => {
        return route.meta.layout;
      });

      return { layout };
    },
  };
</script>
