<template>
  <div class="page search">

    <h2 class="custom-title">Selected Publications</h2>
    <div class="pub-all-list">

        <publication-card 
        v-for="publication in publications.filter(
                (p) => p.gsx$isaselectedpublication.$t === '1'
              )"
              :key="'_'+publication.gsx$paperid.$t"
        :publication="publication"/>

    </div>
  
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
        color="#C48D3B"
        class="spublication-earch"
      ></v-text-field>
    </v-flex>

<div class="pub-all-list">
  <publication-card 
  v-for="publication in filteredPublications"
        :key="publication.gsx$paperid.$t"
  :publication="publication"/>
</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PublicationCard from '@/components/PublicationCard.vue'
export default {
  name: "Search",
  data() {
    return {
      search: null,
      filteredPublications: [],
    };
  },
  components: {PublicationCard},
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
  margin-left:40px;
}


.img-fluid{
  max-width: 100%;

}

.pub-all-list{
  margin-left:25px;
}

</style>

