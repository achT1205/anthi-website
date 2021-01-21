<template>
  <v-card class="mx-auto" elevation="0" >
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
        <v-row align="center" justify="start" class="ml-1">
          <v-icon small @click.prevent="">fas fa-copy</v-icon>
          <div class="mx-2"></div>
          <a :href="publication.gsx$paperpdf.$t" target="_blank">
            <v-icon small>fas fa-file-pdf</v-icon>
          </a>
          <div class="mx-2"></div>
          <a :href="publication.gsx$suppementarymaterial.$t" target="_blank">
          <v-icon small>fas fa-cog</v-icon>
         </a>
        <div class="mx-2"></div>
            <a :href="publication.gsx$bibtex.$t" target="_blank">    
                <img
                    src="@/assets/icons/nounproject_TEX File_342079.svg"
                    alt="BibTex"
                    height="14"
                    class="lecturer"
                />
            </a>
          <div class="mx-2"></div>
            <a :href="publication.gsx$shortpreviewvideo.$t" target="_blank">    
                <v-icon small>fas fa-film</v-icon>
            </a>
          <div class="mx-2"></div>
            <a :href="publication.gsx$presentationslides.$t" target="_blank">    
                <v-icon small>mdi-presentation</v-icon>
            </a>
          <div class="mx-1"></div>
            <a :href="publication.gsx$presentationvideo.$t" target="_blank">    
                <img
                    src="@/assets/icons/nounproject_Lecturer_8076.svg"
                    alt="Lecturer"
                    height="14"
                    class="lecturer"
                />
            </a>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: ["publication"],
};
</script>

<style scoped>

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