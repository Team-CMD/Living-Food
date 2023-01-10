<template>
  <v-container class="fd-flex mb-6" justify="center" style="max-width: 900px">
    <v-row justify="center">
      <!-- Product Image -->
      <v-col cols="5">
        <v-img
          src="/item1.jpg"
          height="320"
          class="pa-2 mb-2"
          @click="toggle"
        ></v-img>
      </v-col>
      <!-- Product text Info -->
      <v-col cols="7">
        <p class="mt-4" style="font-size: 18px; font-weight: bold">
          {{ this.product.name }}
        </p>
        <p class="mt-4" style="font-size: 24px; font-weight: bold">
          {{ this.product.price }}원
        </p>
        <v-divider class="mt-4 mb-4"></v-divider>
        <v-row no-gutters>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <p class="" style="">배송비</p>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2">{{ this.product.deliver }}원</v-sheet>
          </v-col>
          <v-responsive width="100%"></v-responsive>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <p class="" style="">원산지</p>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2">{{ this.product.origin }}</v-sheet>
          </v-col>
          <v-responsive width="100%"></v-responsive>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <p class="" style="">추가혜택</p>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2"> {{ this.product.benefit }} </v-sheet>
          </v-col>
          <v-responsive width="100%"></v-responsive>
        </v-row>
        <!-- Button -->
        <v-btn
          class="mt-4 ml-4"
          variant="outlined"
          color="#c3c3c3"
          v-on:click="toggle = !toggle"
        >
          <v-icon v-if="!toggle">mdi-heart-outline</v-icon>
          <v-icon v-if="toggle" style="color: #cc3929">mdi-heart</v-icon>
        </v-btn>
        <v-btn
          class="mt-4 ml-4"
          color="#5d7b5a"
          width="400"
          style="color: white; font-weight: bold"
        >
          장바구니
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-img src="@/assets/product_more.png"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

<script>
export default {
  data: () => ({
    toggle: false,
    product: {
      name: "백종원의 빽쿡 제주 돼지 부대찌개",
      price: "9,990",
      deliver: "3,000",
      origin: "별도표기",
      benefit: "회원가입시 1% 적립",
    },
  }),
};
</script>
