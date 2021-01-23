<template>
  <div class="page search">

    <div class="publication-text">
    All my publication material is available to download. 
    Material can include the pdf of the article, video previews, bibtex,
    analysis scripts, data,  experiment stimuli, presentation slides and live video when applicable. 
    Participant data from experiments are anonymized. 
    Interview transcripts are not available due to data privacy protection.</div>

    <h2 class="custom-title">Selected Publications</h2>

  

    <div class="pub-all-list">
      <publication-card
        v-for="publication in publications.filter(
          (p) => p.gsx$isaselectedpublication.$t === '1'
        )"
        :key="'_' + publication.gsx$paperid.$t"
        :publication="publication"
      />
    </div>

    <h2 class="custom-title">All Publications</h2>

    <v-flex class="search-publications">
      <v-text-field
        v-model="search"
        label="Search Publications by keyword"
        flat
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
        prepend-inner-icon="fas fa-search"
        outlined
        color="#C48D3B"
        class="spublication-earch"
      ></v-text-field>
    </v-flex>

    <div class="pub-all-list">
      <publication-card
        v-for="publication in filteredPublications"
        :key="publication.gsx$paperid.$t"
        :publication="publication"
      />
    </div>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="#C48D3B"
      @click="toTop"
    >
      <v-icon>fas fa-angle-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PublicationCard from "@/components/PublicationCard.vue";
export default {
  name: "Search",
  data() {
    return {
      search: null,
      filteredPublications: [],
      fab: false,
    };
  },
  components: { PublicationCard },
  computed: {
    ...mapGetters(["publications"]),
  },
  mounted() {
    this.$vuetify.goTo(0);
    this.filteredPublications = [...this.publications];
  },

  watch: {
    publications(val, old) {
      if (val && val !== old) {
        this.filteredPublications = [...this.publications];
      }
    },
    search(val, old) {
      if (val && val !== old) {
        this.filteredPublications = this.publications.filter((p) =>
          p.gsx$bibtex.$t.toLowerCase().includes(val.toLowerCase())
        );
      } else {
        this.filteredPublications = this.publications;
      }
    },
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
  width: 100%;
  margin-left: 40px;
}

.img-fluid {
  max-width: 100%;
}

.pub-all-list {
  margin-left: 25px;
}

.publication-text{
  font-weight: 300;
  font-size: 17px;
  padding-left: 50px;
  padding-top:10px;
  padding-bottom:20px;
}
</style>

