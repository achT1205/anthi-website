<template>
  <v-card class="mx-auto" elevation="0">
    <v-list-item three-line>
      <v-list-item-avatar tile class="avatars">
        <img :src="publication.url" :alt="publication.paper_id" />
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="pub-authors">
          <span v-html="publication.authors"></span>
          <span class="pub-year" v-html="publication.year"> </span>
        </div>
        <div class="pub-title" v-html="publication.title"></div>
        <div class="pub-venue" v-html="publication.venue"></div>
        <div class="pub-icons">
          <v-row align="center" justify="start" class="ml-1 mt-0">
            <v-tooltip bottom content-class="pub-icon-tooltip">
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  medium
                  @click.prevent="
                    copyToClipboard(
                      publication.copy_citation,
                      'The citation is copied to your clipboard.'
                    )
                  "
                  >fas fa-copy
                </v-icon>
              </template>
              <span>copy citation</span>
            </v-tooltip>

            <v-tooltip bottom content-class="pub-icon-tooltip">
              <template v-slot:activator="{ on, attrs }">
                <a
                  class="ml-1 iconfromsvg"
                  @click="
                    copyToClipboard(
                      publication.bibtex,
                      'The bibtex code is copied to your clipboard.'
                    )
                  "
                  target="_blank"
                >
                  <img
                    v-bind="attrs"
                    v-on="on"
                    src="@/assets/icons/nounproject_TEX File_342079.svg"
                    alt="BibTex"
                  />
                </a>
              </template>
              <span>copy bibtex</span>
            </v-tooltip>

            <v-tooltip bottom content-class="pub-icon-tooltip">
              <template v-slot:activator="{ on, attrs }">
                <a class="ml-2" :href="publication.paper_pdf" target="_blank">
                  <v-icon v-bind="attrs" v-on="on" medium
                    >fas fa-file-pdf</v-icon
                  >
                </a>
              </template>
              <span>download PDF</span>
            </v-tooltip>
            <v-tooltip bottom content-class="pub-icon-tooltip">
              <template v-slot:activator="{ on, attrs }">
                <a
                  class="ml-2"
                  :href="publication.short_preview_video"
                  target="_blank"
                >
                  <v-icon v-bind="attrs" v-on="on" medium>fas fa-film</v-icon>
                </a>
              </template>
              <span>video preview</span>
            </v-tooltip>

            <v-tooltip bottom content-class="pub-icon-tooltip">
              <template v-slot:activator="{ on, attrs }">
                <a
                  class="ml-2"
                  :href="publication.suppementary_material"
                  target="_blank"
                >
                  <v-icon v-bind="attrs" v-on="on" medium>fas fa-cog</v-icon>
                </a>
              </template>
              <span>supplementary material</span>
            </v-tooltip>

            <v-tooltip bottom content-class="pub-icon-tooltip">
              <template v-slot:activator="{ on, attrs }">
                <a
                  class="ml-2"
                  :href="publication.presentation_slides"
                  target="_blank"
                >
                  <v-icon v-bind="attrs" v-on="on" medium
                    >mdi-presentation</v-icon
                  >
                </a>
              </template>
              <span>presenation slides</span>
            </v-tooltip>

            <v-tooltip bottom content-class="pub-icon-tooltip">
              <template v-slot:activator="{ on, attrs }">
                <a
                  class="ml-1 iconfromsvg"
                  :href="publication.presentation_video"
                  target="_blank"
                >
                  <img
                    v-bind="attrs"
                    v-on="on"
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
      color="gray"
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
    copyToClipboard(text, snackbarText) {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.snackbarText = snackbarText;
      this.snackbar = true;
    },
  },
};
</script>

<style lang="scss"  scoped>
.matched {
  background-color: rgb(196, 141, 59);
  color: #ffff;
}

.pub-icon-tooltip {
  color: $darkenBrown;
  background-color: #fafafa;
  margin-top: -9px;
}

.pub-year {
  margin: 8px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 0px;
  padding-bottom: 0px;
  box-shadow: 0 0 0 2px #e8e8e8;
  border-radius: 5px;
  font-size: 15px;
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
  width: 300px !important;
  max-width: 300px !important;
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