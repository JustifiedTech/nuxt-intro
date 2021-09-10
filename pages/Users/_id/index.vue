<template>
  <div>
    <h1>User: {{ user.id }}</h1>
    <p>{{ user.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>
