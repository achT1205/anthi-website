<template>
  <div class="search">
    <v-card elevation="0 pt-10">
      <div class="d-flex flex-no-wrap justify-start">
        <!--
        <v-row>
          <v-col cols="12">
            <img
            class="triangle_new_withText"
              src="@/assets/images/triangle_new_withText-01.png"
              alt="pyramide research interests"
            />
          </v-col>
        </v-row>
       -->

        <v-row>
          <v-col>
            <v-sheet class="ml-5 mt-4">
              <div>
                How to achieve a
                <strong class="link-1">balanced human-machine symbiosis</strong>
                with human - centered AI resulting in mixed - initiative,
                transparent and understandable decision support tools
              </div>
            </v-sheet>
            <v-sheet class="ml-5 mt-5">
              <div>
                How to design tools that
                <div>
                  - <strong class="link-1">represent</strong> information
                  effectively to the user and <br />- provide
                  <strong class="link-1">interaction</strong> means can allow
                  information to be constructed, tested, refined and shared
                </div>
              </div>
            </v-sheet>
            <v-sheet class="ml-5 mt-5">
              <div>
                How people <strong class="link-1">should</strong> ,
                <strong class="link-1">could</strong> and
                <strong class="link-1">do make decisions</strong>
              </div>
            </v-sheet>
          </v-col>
          <v-col>
            <img
              height="260"
              src="@/assets/images/triangle_new-01.png"
              alt="pyramide research interests"
            />
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
};
</script>
<style scoped>
.triangle_new_withText {
  width: 100%;
}
</style>