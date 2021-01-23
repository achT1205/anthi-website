<template>
  <div class="page search">

    <v-card elevation="0">
      <h2 class="custom-title">Main research domain</h2>
      <div class="d-flex flex-no-wrap justify-start">
        <v-row>
          <v-col cols="12">
            <img
            class="research-domain"
              src="@/assets/images/research_domain_newsite-01.png"
              alt="research domain"
            />
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card elevation="0">
      <h2 class="custom-title">(some of) My research interests</h2>
      <div class="d-flex flex-no-wrap justify-start">
        <v-row>
          <v-col cols="12">
            <img
            class="triangle_new_withText"
              src="@/assets/images/pyramide_oldwebiste-01.png"
              alt="pyramide research interests"
            />
          </v-col>
        </v-row>
      </div>
    </v-card>

  


  </div>
</template>



<script>
import { mapGetters } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      search: null,
      fab: false,
    };
  }, 
  mounted() {
    this.$vuetify.goTo(0);
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style scoped>
.triangle_new_withText {
  width: 90%;
  margin-left:20px;
  margin-top:-20px;
}

.research-domain{
  width: 30%;
  margin-left:40px;
}
.img-fluid{
  max-width: 100%;

}


</style>

