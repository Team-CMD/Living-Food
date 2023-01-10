<template>
  <!-- <div class="banner-container">
    <v-img contain height="700" src="@/assets/main.png" />
  </div> -->
  <v-container class="fd-flex mb-6" justify="center" style="max-width: 900px">
    <v-row justify="center">
      <v-col cols="12">
        <div class="background-wrap">
          <div class="banner-content">
            <span>밀키트 전문 쇼핑몰</span><br />
            <span>WELCOME TO Leaving Food</span>
            <v-btn
              rounded="pill"
              color="#5d7b5a"
              width="200"
              @click="$router.push('/Product')"
              style="margin-top: 50px; color: white; font-weight: bold"
            >
              Get Started
            </v-btn>
            <img
              style="
                position: absolute;
                height: 390px;
                width: auto;
                right: -30px;
                top: -80px;
              "
              src="@/assets/main_cuisine.png"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.background-wrap {
  background-image: url("../assets/main.png");
  background-size: cover;
  height: 400px;
  border-radius: 50px;
  align-items: center;
  /* justify-content: center; */
  display: flex;
  margin: auto;
}

.banner-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  width: 100%;
}

.banner-content span {
  color: white;
  font-size: 28px;
  font-weight: bold;
  /* margin-top: 10px; */
}
</style>
