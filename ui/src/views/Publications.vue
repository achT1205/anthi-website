<template>
  <div class="page search">
    <div class="publication-text">
      All my publication material is available to download. Material can include
      the pdf of the article, video previews, bibtex, analysis scripts, data,
      experiment stimuli, presentation slides and live video when applicable.
      Participant data from experiments are anonymized. Interview transcripts
      are not available due to data privacy protection.
    </div>

    <h2 class="custom-title">Selected Publications</h2>

    <div class="pub-all-list">
      <publication-card
        v-for="publication in toppublications"
        :key="'_' + publication.paper_id"
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
        :key="publication.paper_id"
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
      toppublications: [],
    };
  },
  components: { PublicationCard },
  computed: {
    ...mapGetters(["publications"]),
  },
  mounted() {
    this.filteredPublications = [...this.publications];
    this.toppublications = this.filteredPublications.filter(
      (p) => p.is_a_selected_publication === 1
    );
    this.$vuetify.goTo(0);
  },

  watch: {
    publications(val, old) {
      if (val && val !== old) {
        this.filteredPublications = [...val];
        this.toppublications = this.filteredPublications.filter(
          (p) => p.is_a_selected_publication === 1
        );
      }
    },
    search(val, old) {
      if (val && val !== old) {
        let copy = [...this.publications];

        copy = JSON.parse(JSON.stringify(copy));
        this.filteredPublications = copy.filter(
          (_) =>
            _.title.toLowerCase().includes(val.toLowerCase()) ||
            _.venue.toLowerCase().includes(val.toLowerCase()) ||
            _.authors.toLowerCase().includes(val.toLowerCase()) ||
            _.year.toString().includes(val.toLowerCase())
        );
        if (this.filteredPublications) {
          this.filteredPublications.forEach((_) => {
            var regEx = new RegExp(this.search, "ig");
            _.title = _.title.replaceAll(
              regEx,
              `<span style="background-color: rgb(196, 141, 59); color: #ffff;">${this.search}</span>`
            );
            _.venue = _.venue.replaceAll(
              regEx,
              `<span style="background-color: rgb(196, 141, 59); color: #ffff;">${this.search}</span>`
            );
            _.year = _.year
              .toString()
              .replaceAll(
                regEx,
                `<span style="background-color: rgb(196, 141, 59); color: #ffff;">${this.search}</span>`
              );
          });
        }
      } else {
        this.filteredPublications = [...this.publications];
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

.publication-text {
  font-weight: 300;
  font-size: 17px;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>

