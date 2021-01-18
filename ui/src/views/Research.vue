<template>
  <div class="page search">
    <v-card elevation="0">
      <h2 class="custom-title">Main Research Interests</h2>
      <div class="d-flex flex-no-wrap justify-start">

        <v-row>
          <v-col cols="12">
            <img
            class="triangle_new_withText"
              src="@/assets/images/triangle_new_withText-01.png"
              alt="pyramide research interests"
            />
          </v-col>
        </v-row>
      </div>
    </v-card>
    <h2 class="custom-title">Selected Publications</h2>
    <v-card
      class="mx-auto"
      elevation="0"
      v-for="(publication, index) in publications.filter(
        (p) => p.gsx$isaselectedpublication.$t === '1'
      )"
      :key="index"
    >
      <v-list-item three-line>
        <v-list-item-avatar tile class="avatars" >
          <img
            :src="
              require('@/assets/images/paper_teaser_figures/' +
                publication.gsx$paperid.$t +
                '_withFrameAndShadow.png')
            "
            :alt="publication.gsx$paperid.$t"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <div>{{ publication.gsx$authors.$t }}</div>
          <h3 class="title">
            {{ publication.gsx$title.$t }}
          </h3>
          <v-list-item-subtitle>{{
            publication.gsx$venue.$t
          }}</v-list-item-subtitle>
          <v-row align="center" justify="start" class="ml-1">
            <v-icon small>fas fa-copy</v-icon>
            <div class="mx-2"></div>
            <v-icon small>fas fa-file-pdf</v-icon>
            <div class="mx-2"></div>
            <v-icon small>fas fa-cog</v-icon>
            <div class="mx-2"></div>
            <v-icon small>fas fa-file-alt</v-icon>
            <div class="mx-2"></div>
            <v-icon small>fas fa-film</v-icon>
            <div class="mx-2"></div>
            <v-icon small>mdi-presentation</v-icon>
            <div class="mx-1"></div>
            <img
              src="@/assets/icons/nounproject_Lecturer_8076.svg"
              alt="Lecturer"
              height="14"
              class="lecturer"
            />
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <h2 class="custom-title">All Publications</h2>
    <v-flex class="search-publications">
      <v-text-field
        v-model="search"
        label="Search Publications by keyword"
        dark
        flat
        solo-inverted
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
        prepend-inner-icon="fas fa-search"
        outlined
        color="#b7a99a"
        class="spublication-earch"
      ></v-text-field>
    </v-flex>
    <v-card
      class="mx-auto"
      elevation="0"
      v-for="publication in filteredPublications"
      :key="publication.id.$t"
    >
      <v-list-item three-line>
        <v-list-item-avatar tile class="avatars">
          <img
            :src="
              require('@/assets/images/paper_teaser_figures/' +
                publication.gsx$paperid.$t +
                '_withFrameAndShadow.png')
            "
            :alt="publication.gsx$paperid.$t"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <div>{{ publication.gsx$authors.$t }}</div>
          <h3 class="title">
            {{ publication.gsx$title.$t }}
          </h3>
          <v-list-item-subtitle>{{
            publication.gsx$venue.$t
          }}</v-list-item-subtitle>
          <v-row align="center" justify="start" class="ml-5">
            <v-icon >fas fa-copy</v-icon>
            <div class="mx-2"></div>
            <v-icon>fas fa-file-pdf</v-icon>
            <div class="mx-2"></div>
            <v-icon>fas fa-cog</v-icon>
            <div class="mx-2"></div>
            <v-icon>fas fa-file-alt</v-icon>
            <div class="mx-2"></div>
            <v-icon>fas fa-film</v-icon>
            <div class="mx-2"></div>
            <v-icon>mdi-presentation</v-icon>
            <div class="mx-1"></div>
            <img
              src="@/assets/icons/nounproject_Lecturer_8076.svg"
              alt="Lecturer"
              height="23"
              class="lecturer"
            />
          </v-row>
        </v-list-item-content>
      </v-list-item>
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
      filteredPublications: [],
    };
  },
  components: {},
  computed: {
    ...mapGetters(["publications"]),
  },
  mounted() {
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
};
</script>
<style scoped>
.triangle_new_withText {
  width: 100%;
}

.lecturer {
  margin-top: -5px;
}
.img-fluid{
  max-width: 100%;
}
.avatars{
  width: 150px!important;
  max-width: 150px!important;
  height: auto!important;
}
@media (max-width: 500px){
  .v-list--three-line .v-list-item, .v-list-item--three-line{
    display: flex;
    flex-direction: column;
  }
  .avatars{
    width: 100%!important;
    max-width: 100%!important;
    height: auto!important;
  }
}
</style>