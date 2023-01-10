<template>
  <v-container class="fd-flex mb-6" justify="center" style="max-width: 900px">
    <v-row justify="center">
      <v-col cols="12">
        <v-card
          color="#5d7b5a"
          theme="dark"
          class="rounded-lg align-center"
          height="135"
        >
          <v-card-title class="text-h4 mt-10 ml-6"> 사용자 정보 </v-card-title>
          <v-card-actions class="ml-6">
            <v-btn variant="text">계정 정보</v-btn>
            <v-btn variant="text">주문 정보</v-btn>
            <v-btn variant="text">1:1문의</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- Location Info -->
    <v-row justify="center">
      <v-col cols="12" class="ml-10">
        <h2>주문 정보</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">주문일자</th>
              <th class="text-left">상품명</th>
              <th class="text-left">가격</th>
              <th class="text-left">주문상태</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orderList" :key="item.name">
              <td>{{ item.date }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}원</td>
              <td>{{ item.status }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

<script>
export default {
  data: () => ({
    orderList: [
      {
        date: "2023-01-09",
        name: "백종원의 빽쿡 제주 돼지 부재찌개 826G",
        price: "24820",
        status: "배송중",
      },
      {
        date: "2022-12-17",
        name: "백종원의 빽쿡 제주 돼지 부재찌개 826G",
        price: "24820",
        status: "배송완료",
      },
      {
        date: "2022-11-12",
        name: "백종원의 빽쿡 제주 돼지 부재찌개 826G",
        price: "24820",
        status: "배송완료",
      },
    ],
  }),
};
</script>
