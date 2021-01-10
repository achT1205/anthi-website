<template>
  <div class="home">
    <v-card elevation="0">
      <div class="d-flex flex-no-wrap justify-start bl-1">
        <v-avatar class="ma-3 mt-10" size="125" tile>
          <v-icon class="card-icon">fas fa-info</v-icon>
        </v-avatar>
        <div>
          <v-card-text>
            <div>
              I am an Assistant Professor of Computer Science at Utrecht
              University, VIG team (starting Jan’ 21).
              <br />
              I specialize in Information Visualization & Human-Computer
              Interaction.
            </div>
            <div class="mt-5">
              I study
              <strong class="link-1">decision making</strong> -- how
              technology can help people to make unbiased and informed decisions
              alone or in groups. I am especially interested in the kinds of
              decisions for which the current decision-support systems, models
              and people's heuristics tend to fail.
              <br />
              <div class="d-flex flex-no-wrap justify-end">
                <a text @click="reveal = true" class="mr-5 more-information">
                  more information >>
                </a>
              </div>
            </div>
            <div class="recruiting-phd-students">
              I am actively recruiting PhD students.
              <br />
              <a text @click="reveal = true" class="more-information-mi">
                more information >>
              </a>
            </div>
          </v-card-text>
        </div>
      </div>
    </v-card>
    <v-card elevation="0" class="mt-5">
      <div class="d-flex flex-no-wrap justify-start bl-1">
        <v-avatar class="ma-3 mt-10" size="125" tile>
          <v-icon class="card-icon">fas fa-university</v-icon>
        </v-avatar>
        <div>
          <v-card-text>
            <div>
              <span class="mr-3">2020</span> PostDoc at University of Konstanz,
              D. Keim’s visual analytics team.
            </div>
            <div>
              <span class="mr-3">2019</span> PostDoc at Sorbonne University, G.
              Bailly’s HCI team.
            </div>
            <div>
              <span class="mr-3">2017</span> Ph.D. (3-year) in Computer Science
              by INRIA & University of Paris-Saclay.
              <div class="ml-11">
                <v-row>
                  <v-col cols="1">
                    <v-icon>fas fa-file-download</v-icon>
                  </v-col>
                  <v-col cols="11">
                    Information Visualization for Decision Making:
                    <br />
                    Identifying Biases and Moving Beyond the Visual Analysis
                    Paradigm.
                  </v-col>
                  <div class="ml-3">
                    Advisors: Pierre Dragicevic, AVIZ team and Anastasia
                    Bezerianos, ILDA team.
                  </div>
                </v-row>
              </div>
            </div>
            <div>
              <span class="mr-3">2013</span> M.Sc. in Human - Computer
              Interaction by University of Paris-Saclay.
            </div>
            <div>
              <span class="mr-3">2012</span> B.Sc. in Informatics &
              Telecommunications by University of Athens.
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
  components: {},
};
</script>
<style scoped>

.more-information {
  color: #b7a99a;
  background-color: transparent;
  text-decoration: none;
}

.more-information-mi {
  color: #b7a99a;
  background-color: transparent;
  text-decoration: none;
  float: right;
  margin-right: 50px;
}
.card-icon {
  color: #b7a99a;
  font-size: 65px;
}
.bl-1{
  flex-direction: row;
}
.recruiting-phd-students {
  width: 281px;
}
@media (min-width: 0px){
  .bl-1{
    flex-direction: column;
  }
}

@media (min-width: 600px){
  .bl-1{
    flex-direction: row;
  }
}
</style>
