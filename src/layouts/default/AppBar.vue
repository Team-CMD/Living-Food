<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-img
        contain
        height="100"
        src="@/assets/logo.png"
        @click="$router.push('/')"
      />
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link.name"
        variant="text"
        color="#505050"
        class="font-weight-bold"
        @click="$router.push(link.href)"
      >
        {{ link.name }}
      </v-btn>
      <v-btn
        v-for="item in icons"
        :key="item.icons"
        color="#9e9e9e"
        :icon="item.icon"
        @click="$router.push(item.href)"
      >
      </v-btn>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    links: [
      { name: "Home", href: "/" },
      { name: "Product", href: "/Product" },
      // { name: "정보", href: "/" },
      { name: "Review", href: "/" },
    ],
    icons: [
      { icon: "mdi-cards-heart-outline", href: "/User/Order" },
      { icon: "mdi-account-outline", href: "/User/Order" },
      { icon: "mdi-cart-outline", href: "/User/Order" },
    ],
  }),
};
</script>
