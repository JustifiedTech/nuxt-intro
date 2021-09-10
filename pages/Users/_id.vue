<template>
  <div>
    <!-- <nuxt-child :user="user" /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Kelechi Brian",
        },
        {
          id: 2,
          name: "Kelechi Obasi",
        },
        {
          id: 3,
          name: "Kelechi Samson",
        },
      ],
    };
  },
  computed: {
    user() {
      return this.users.find((u) => u.id == this.$route.params.id);
    },
  },
};
</script>
