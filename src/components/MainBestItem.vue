<template>
  <v-container class="fd-flex mb-6" justify="center" style="max-width: 900px">
    <v-row justify="center">
      <v-col cols="6" style="text-align: center">
        <h1>Best</h1>
        <p>리빙푸드 추천제품</p>
        <!-- <v-sheet class="pa-2 ma-2"> .v-col-6 </v-sheet> -->
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col v-for="item in list" :key="item.name" cols="3">
        <v-sheet class="pa-2 ma-2" @click="$router.push(item.href)">
          <v-img :src="`${item.img}`" height="150" class="pa-2"></v-img>
          <p class="product-name">
            <span>{{ item.name }}</span>
          </p>
          <p class="product-price">
            <span>{{ item.price }}원</span>
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    list: [
      {
        img: "item1.jpg",
        name: "백종원의 빽쿡 제주 돼지 부대찌개 826G",
        price: "8,990",
        href: "/Item",
      },
      {
        img: "item2.jpg",
        name: "포켓도시락 점심대용식 (12종 12팩 / 12종 18팩)",
        price: "43,900",
        href: "/Item",
      },
      {
        img: "item3.jpg",
        name: "애슐리 당면 듬뿍 매콤 안동찜닭",
        price: "7,490",
        href: "/Item",
      },
      {
        img: "item4.jpg",
        name: "프레시지 흑돈가 밀키트 4종 선물세트(냉동)",
        price: "35,000",
        href: "/Item",
      },
    ],
  }),
};
</script>

<style scoped>
.product-name {
  margin-top: 15px;
  margin-bottom: 12px;
  font-size: 14px;
}

.product-price {
  font-size: 20px;
  font-weight: bold;
}
</style>
