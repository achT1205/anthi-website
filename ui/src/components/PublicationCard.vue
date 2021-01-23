<template>
  <v-card class="mx-auto" elevation="0">
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
        <div class="pub-authors"> {{ publication.gsx$authors.$t }}  </div>
        <div class="pub-title">   {{ publication.gsx$title.$t }}    </div>
        <div class="pub-venue">   {{ publication.gsx$venue.$t }}    </div>
        <div class="pub-icons">
          <v-row align="center" justify="start" class="ml-1 mt-0">

            <v-tooltip bottom  content-class="pub-icon-tooltip"> 
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  medium
                  @click.prevent="copyToClipboard(publication.gsx$copycitation.$t)"
                  >fas fa-copy
              </v-icon>

              </template>
              <span>copy citation</span>
            </v-tooltip>


      <v-tooltip bottom  content-class="pub-icon-tooltip"> 
          <template v-slot:activator="{ on, attrs }">
            <a
              class="ml-1 iconfromsvg"
              :href="publication.gsx$bibtex.$t"
              target="_blank"
            >
              <img v-bind="attrs" v-on="on"
                src="@/assets/icons/nounproject_TEX File_342079.svg"
                alt="BibTex"
              />
            </a>      
            </template>
          <span>copy bibtex</span>
      </v-tooltip>

       <v-tooltip bottom  content-class="pub-icon-tooltip"> 
          <template v-slot:activator="{ on, attrs }">
            <a class="ml-2" :href="publication.gsx$paperpdf.$t" target="_blank">
              <v-icon  v-bind="attrs" v-on="on" medium>fas fa-file-pdf</v-icon>
            </a>
          </template>
          <span>download PDF</span>
      </v-tooltip>



            
      <v-tooltip bottom  content-class="pub-icon-tooltip"> 
          <template v-slot:activator="{ on, attrs }">
            <a
              class="ml-2"
              :href="publication.gsx$shortpreviewvideo.$t"
              target="_blank"
            >
              <v-icon v-bind="attrs" v-on="on" medium>fas fa-film</v-icon>
            </a> 
            </template>
          <span>video preview</span>
      </v-tooltip>


      <v-tooltip bottom  content-class="pub-icon-tooltip"> 
          <template v-slot:activator="{ on, attrs }">
            <a
              class="ml-2"
              :href="publication.gsx$suppementarymaterial.$t"
              target="_blank"
            >
              <v-icon  v-bind="attrs" v-on="on" medium>fas fa-cog</v-icon>
            </a>
               </template>
          <span>supplementary material</span>
      </v-tooltip>
            
      <v-tooltip bottom  content-class="pub-icon-tooltip"> 
          <template v-slot:activator="{ on, attrs }">
           <a
              class="ml-2"
              :href="publication.gsx$presentationslides.$t"
              target="_blank"
            >           
              <v-icon v-bind="attrs" v-on="on" medium>mdi-presentation</v-icon>
            </a> 
            </template>
          <span>presenation slides</span>
      </v-tooltip>
          
      <v-tooltip bottom  content-class="pub-icon-tooltip"> 
          <template v-slot:activator="{ on, attrs }">
            <a
              class="ml-1 iconfromsvg"
              :href="publication.gsx$presentationvideo.$t"
              target="_blank"
            >
              <img v-bind="attrs" v-on="on"
                 src="@/assets/icons/nounproject_Lecturer_8076.svg"
                alt="Lecturer"
              />
            </a>      
            </template>
          <span>live presentation</span>
      </v-tooltip>

          </v-row>
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      top
      right
      text
      color = gray
      content-class="action-notification"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="gray" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbarText: "",
      timeout: 2000,
    };
  },
  props: ["publication"],
  methods: {
    copyToClipboard(text) {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.snackbarText = "Citation copied";
      this.snackbar = true;
    },
  },
};
</script>

<style lang="scss"  scoped>
.pub-icon-tooltip {
  color: $darkenBrown;
  background-color: #fafafa;
  margin-top:-9px;
}

.action-notification {
  
}

.iconfromsvg img {
  height: 24px;
}

.iconfromsvg {
  margin-top: 1px;
}

.img-fluid {
  max-width: 100%;
}

.avatars {
  width: 250px !important;
  max-width: 250px !important;
  height: auto !important;
}

.pub-authors {
  padding-top: 8px;
  font-size: 18px;
  font-weight: 300;
}

.pub-title {
  font-size: 18px;
  font-weight: 400;

}

.pub-venue {
  font-size: 18px;
  font-weight: 300;
}

.pub-icons {
  opacity: 0.6;
}
@media (max-width: 500px) {
  .v-list--three-line .v-list-item,
  .v-list-item--three-line {
    display: flex;
    flex-direction: column;
  }
  .avatars {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
  }
}
</style>