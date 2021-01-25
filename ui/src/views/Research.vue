<template>
  <div class="page search">

    <v-card elevation="0" class="d-flex  justify-center">
      <div >
        <v-row>
          <v-col cols="11">
            <h2 class="research-custom-title">Main research domain</h2>

            <img
            class="research-domain"
              src="@/assets/images/research_domain_artboard_for_screens_web.png"
              alt="research domain"
            />
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card elevation="0" class="d-flex justify-center">
      <div >
        <v-row>
          <v-col cols="12">
            <h2 class="research-custom-title">(some of) My research interests</h2>

            <img
            class="triangle_new_withText"
              src="@/assets/images/pyramide_oldwebiste.gif"
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

<style lang="scss" scoped>
.triangle_new_withText {
  width: 100%;
   display: block;
  margin-left: auto;
  margin-right: auto;
  // margin-left:20px;
  // margin-top:-20px;
}

.research-domain{
   display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  
  // margin-left:40px;
}
.img-fluid{
  max-width: 100%;

}


.research-custom-title {
  color: $darkenBrown;
  font-weight: 500;
  opacity: 1;
  font-size: 22px;
  text-align: center;
 
}

</style>

