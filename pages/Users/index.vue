<template>
  <div>
    <ul>
      <li v-for="user in users">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Red Heart",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "power",
        },
      ],
    };
  },
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
};
</script>
