<template>
  <div class="home1">
    

    <v-card elevation="0">
      <div class="">
        <v-row>
          <v-col cols="12">
            <img
              class="tv-preview"
              src="@/assets/images/tv-placeholder.png"
              alt="research domain"
            />
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card elevation="0">
      <div class="d-flex flex-no-wrap justify-start bl-1">
        <v-avatar class="ma-0 mt-1" size="125" tile>
          <v-icon class="card-icon">fas fa-info</v-icon>
        </v-avatar>
        <div>
          <v-card-text class="home">
            <div>
              I am a Tenured Assistant Professor of Computer Science at
              <a
                class="discrete-link"
                href="https://www.uu.nl/staff/EDimara"
                target="_blank"
              >
                Utrecht University</a
              >,
              <a
                class="discrete-link"
                href="https://vig.science.uu.nl/"
                target="_blank"
              >
                VIG team</a
              >. My fields of research are
              <a
                class="discrete-link"
                href="https://en.wikipedia.org/wiki/Information_visualization"
                target="_blank"
              >
                Information Visualization</a
              >
              and
              <a
                class="discrete-link"
                href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction"
                target="_blank"
              >
                Human-Computer Interaction</a
              >. I study <strong class="link-1">decision making</strong> -- how
              technology can help people to make unbiased and informed decisions
              alone or in groups. I am especially interested in the kinds of
              decisions for which the current decision-support systems, models
              and people's heuristics tend to fail.
              <span>
                <router-link to="/research" class="more-information-mi">
                  [ more information >> ]
                </router-link>
              </span>

              <!-- <a @click="redirectToResearch" class="more-information-mi">
              [more information >> ] </a> -->
            </div>

            <!--  <div class="mt-4">
              I am recruiting PhD students.
              <span>
                <router-link to="/work-with-me" class="more-information-mi">
                  [ more information >> ]
                </router-link>
              </span>
            </div>-->
          </v-card-text>
        </div>
      </div>
    </v-card>

    <v-card elevation="0" class="mt-10">
      <div class="d-flex flex-no-wrap justify-start bl-1">
        <v-avatar class="ma-0 mt-10" size="125" tile>
          <v-icon class="card-icon">fas fa-university</v-icon>
        </v-avatar>
        <div>
          <v-card-text class="home">
            <div>
              <span class="mr-3">2023</span> Tenured Assistant Professor at
              <a href="https://www.uu.nl/staff/EDimara" target="_blank">
                Utrecht University.</a
              >
            </div>
            <div>
              <span class="mr-3">2021</span> Assistant Professor at
              <a href="https://www.uu.nl/staff/EDimara" target="_blank">
                Utrecht University</a
              >,
              <a href="https://vig.science.uu.nl/" target="_blank">
                A. Telea’s visualization team</a
              >, Netherlands.
            </div>
            <div>
              <span class="mr-3">2020</span> PostDoc at University of Konstanz,
              <a href="https://www.vis.uni-konstanz.de/" target="_blank">
                D. Keim’s visual analytics team</a
              >, Germany.
            </div>
            <div>
              <span class="mr-3">2019</span> PostDoc at Sorbonne University,
              <a href="https://hci.isir.upmc.fr/" target="_blank"
                >G. Bailly’s HCI team</a
              >, France.
            </div>
            <div>
              <span class="mr-3">2017</span> Ph.D. (3-year) in Computer Science
              by INRIA & University Paris-Saclay,
              <a href="https://www.aviz.fr/" target="_blank"
                >Jean-Daniel Fekete's visualization team</a
              >, France.
              <div class="ml-11">
                <v-row>
                  <v-col cols="1">
                    <a
                      href="https://tel.archives-ouvertes.fr/tel-01968033/file/75268_DIMARA_2017_diffusion.pdf"
                      target="_blank"
                      ><v-icon>fas fa-file-download</v-icon>
                    </a>
                  </v-col>
                  <v-col cols="11 tablecolumns-11">
                    Information Visualization for Decision Making:
                    <br />
                    Identifying Biases and Moving Beyond the Visual Analysis
                    Paradigm.
                  </v-col>
                  <div class="ml-2 phdadvisors">
                    <span class="demphasize">(best)</span> Advisors
                    <span class="demphasize">(ever)</span>
                    <a href="http://dragice.fr/" target="_blank"
                      >: Pierre Dragicevic</a
                    >,
                    <a href="https://www.aviz.fr/" target="_blank">
                      AVIZ team</a
                    >
                    &
                    <a href="https://www.lri.fr/~anab/" target="_blank"
                      >Anastasia Bezerianos</a
                    >,
                    <a href="https://ilda.saclay.inria.fr/" target="_blank"
                      >ILDA team</a
                    >.
                  </div>
                </v-row>
              </div>
            </div>
              <div>
              <span class="mr-3">2014</span> Research Software Engineer at <a href="http://www.cendari.eu/" target="_blank">CENDARI</a>.
            </div>
            
            <div>
              <span class="mr-3">2013</span> M.Sc. in Human - Computer
              Interaction by University of Paris-Saclay, France.
            </div>
            <div>
              <span class="mr-3">2012</span> B.Sc. in
              <a href="https://www.di.uoa.gr/en" target="_blank">
                Informatics & Telecommunications by National and Kapodistrian
                University of Athens</a
              >, Greece.
            </div>
          </v-card-text>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    this.$vuetify.goTo(0);
  },
  components: {},
  methods: {
    redirectToResearch() {
      this.$router.push("/research");
    },
  },
};
</script>

<style lang="scss" scoped>
.more-information {
  color: $darkenBrown;
  background-color: transparent;
  text-decoration: none;
  float: left;
  margin-left: 0px;
  opacity: 0.6;
}

.tv-preview {
  // width: 200px;
  // margin-left: 36%;


  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
}

.more-information-mi {
  background-color: transparent;
  text-decoration: none;
  //float: left;
  margin-left: 5px;
  opacity: 0.6;
}
.card-icon {
  color: $darkenBrown;
  opacity: 0.5;
  font-size: 65px;
}

.tablecolumns-11 {
  margin-left: -28px;
  margin-top: -9px;
}

.phdadvisors {
  margin-top: -11px;
}

.demphasize {
  opacity: 0.6;
  color: $darkenBrown;
}

.home1 {
  font-weight: 300;
  font-size: 17px;
}

.home {
  font-weight: 300;
  font-size: 17px;
  margin-left: -13px;
}

.bl-1 {
  flex-direction: row;
}
.recruiting-phd-students {
  width: 281px;
}

@media (min-width: 0px) {
  .bl-1 {
    flex-direction: column;
  }
}

@media (min-width: 800px) {
  .bl-1 {
    flex-direction: row;
  }
}

.v-application a {
  color: $darkenBrown;
}
</style>
