<template>
  <v-app id="inspire">
    <v-app-bar app flat height="64" class="grey lighten-3">
      <v-container class="py-0 fill-height pa-0">
        <v-btn
          elevation="0"
          class="nav-tabs-item"
          active-class="active-nav-tabs-item"
          to="/home"
          >HOME</v-btn
        >
        <v-btn
          elevation="0"
          class="nav-tabs-item"
          active-class="active-nav-tabs-item"
          to="/research"
          >SEARCH</v-btn
        >

        <v-btn
          elevation="0"
          class="nav-tabs-item-other ml-10"
          active-class="active-nav-tabs-item"
          to="/work-with-me"
          >WORK WITH ME</v-btn
        >
        <!--<v-spacer></v-spacer>
        <v-responsive max-width="260">
          <v-text-field
            solo
            label="Search"
            append-icon="fas fa-search"
            flat
            hide-details
            rounded
            color="white"
          ></v-text-field>
        </v-responsive>-->
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <div class="navigation-drawer pa-0 animate__animated"
          :class="stickySidebar ? 'sticky animate__fadeInUp': 'col col-lg-3 col-sm-4'">
            <v-sheet
              rounded="lg"
              color="#B7A99A"
              class="profile-card"
            >
              <div class="d-flex justify-center">
                <span class="firtName">Evanthia</span>
                <span class="lastName ml-2">DIMARA</span>
              </div>
              <div class="d-flex justify-center mt-2">
                <v-avatar size="150">
                  <img
                    src="@/assets/images/evanthia_dimara.png"
                    alt="Evanthia Dimara"
                  />
                </v-avatar>
              </div>
              <div class="d-flex justify-center mt-2">
                <span class="title">Assistant Professor</span>
              </div>
              <div class="d-flex justify-end she-her">
                <v-spacer></v-spacer>
                <span>She/Her</span>
              </div>
              <div class="d-flex justify-center utrechtUniversity">
                <a
                  href="http://www.cs.uu.nl/staff/dimara.html"
                  target="_blank"
                  class="ml-2"
                >
                  <img
                    height="35"
                    src="@/assets/images/UtrechtUniversity_logo_EN_WHITE.png"
                    alt="Utrecht University"
                  />
                </a>
              </div>
              <div class="d-flex justify-center mt-2">
                <h4>Contact me via</h4>
              </div>

              <div class="d-flex justify-center">
                <v-icon x-small color="white">fas fa-envelope</v-icon>
                <a
                  href="mailto:evanthia.dimara@gmail.com"
                  target="_blank"
                  class="ml-2 email-href"
                  >evanthia.dimara@gmail.com</a
                >
              </div>
              <div class="d-flex justify-center mt-2">
                <h4>Connect with me via</h4>
              </div>
              <div class="d-flex justify-center">
                <a
                  href="https://scholar.google.fr/citations?user=megudlUAAAAJ&hl=en"
                  target="_blank"
                  class="ml-2"
                >
                  <v-icon small color="white">fa fa-graduation-cap</v-icon>
                </a>
                <a
                  href="https://twitter.com/anthi_dimara"
                  target="_blank"
                  class="ml-2"
                >
                  <v-icon small color="white">fa fa-twitter</v-icon>
                </a>
                <a
                  href="https://www.linkedin.com/in/evanthiadimara/"
                  class="ml-2"
                >
                  <v-icon color="white">fa fa-linkedin</v-icon>
                </a>
                <a
                  href="https://www.mendeley.com/profiles/evanthia-dimara2/"
                  target="_blank"
                  class="ml-2"
                >
                  <v-icon small color="white">fab fa-mendeley</v-icon>
                </a>

                <a
                  href="https://www.researchgate.net/profile/Evanthia_Dimara"
                  target="_blank"
                  class="ml-2"
                >
                  <v-icon small color="white">fab fa-researchgate</v-icon>
                </a>
                <a
                  href="https://orcid.org/0000-0001-5212-7888"
                  target="_blank"
                  class="ml-2"
                >
                  <v-icon small color="white">fab fa-orcid</v-icon>
                </a>
              </div>
              <div class="d-flex justify-center mt-4">
                <h4>My CV</h4>
                <a href="" target="_blank" class="ml-2">
                  <v-icon color="white">fa fa-file-pdf</v-icon>
                </a>
              </div>
              <div class="d-flex justify-center my-2">
                <h4>Mailing Address</h4>
                <a
                  href="https://goo.gl/maps/Gjphw3XGb4rX3VhU8"
                  target="_blank"
                  class="ml-2"
                >
                  <v-icon color="white">fas fa-search-location</v-icon>
                </a>
              </div>
              <div class="d-flex justify-center">
                <span class="mx-2 mb-2 department-text">
                  Department of Information & Computing Sciences, Faculty of
                  Science, Utrecht University Princetonplein 5 3584 CC Utrecht,
                  Netherlands
                </span>
              </div>
            </v-sheet>
          </div>
          <div class="col " :class="stickySidebar ? 'col-12 is-sticky': 'pa-0 col-lg-9 col-sm-8'">
            <div class="views" min-height="70vh" rounded="lg">
              <router-view></router-view>
            </div>
          </div>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    links: ["HOME", "RESEARCH", "WORK WITH ME"],
    stickySidebar: false,
  }),
  mounted() {
    this.$store.dispatch("loadPublications");
    window.addEventListener('scroll', this.scrollSidebar);
  },
  methods:{
    scrollSidebar(e){
      const yScroll = window.pageYOffset;
      if(yScroll > 55){
        this.stickySidebar = true;
      }else{
        this.stickySidebar = false;
      }
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");
@import "~animate.css";

.lastName {
  font-weight: bold;
  font-size: 32px;
}
h1,h2,h3,h4,h5,h6{
  font-weight: 900;
}
.firtName {
  font-weight: 200;
  font-size: 32px;
}
.she-her {
  font-size: 10px;
  margin-top: -10px;
  margin-right: 61px;
}
.profile-card {
  background-color: #b7a99a;
  color: white !important;
}

.navigation-drawer {
  z-index: 99 !important;
  border-style: solid !important;
  border-width: 1.5px !important;
  border-color: #504538 !important;
  border-radius: 6px 6px;
  background-color: #b7a99a;
  color: white !important;
  margin-top: 0px !important;
  height: 555px;
  transition: outline 500ms ease-in;
}
a:link {
  color: white;
  background-color: transparent;
  text-decoration: none;
}
.utrechtUniversity {
  margin-top: -10px;
}
.layout {
  margin: 30px;
}

.nav-tabs {
  width: 298px;
}

.nav-tabs-item {
  height: 60px !important;
  width: 148px !important;
  border: none;
  color: #b7a99a !important;
  font-size: 24px !important;
  background-color: #eeeeee;
}

.nav-tabs-item-other {
  height: 60px !important;
  border: none;
  color: #b7a99a !important;
  font-size: 24px !important;
}

.active-nav-tabs-item {
  border-radius: 6px !important;
  border-style: solid !important;
  border-width: 1.5px !important;
  border-color: #504538 !important;
  background-color: #b7a99a !important;
  color: white !important;
  background-color: #eeeeee;
}

.v-toolbar__content,
.v-toolbar__extension {
  padding: 0px 0px 0px 0px !important;
}
.profile-card .v-application a {
  color: white !important;
}
.email-href {
  color: white !important;
}
html,
body {
  font-family: "Source Sans Pro", sans-serif;
}

#inspire {
  font-family: "Source Sans Pro", sans-serif;
}
.v-main__wrap {
  margin-top: -20px;
}
.link-1 {
  color: #c48d3b;
}

.custom-title {
  color: #b7a99a;
  font-weight: 1000;
}
.custom-sub-title {
  color: #b7a99a;
  font-weight: 700;
}

.search-publications {
  background-color: lightgray;
}

.department-text{
  font-size: 14px;
}
.views{
  background-color: #FFFFFF;
  border-color: #FFFFFF;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  min-height: 70vh;
  padding: 1rem;
}
@media(max-width: 992){
  .v-list-item{
    display: flex;
    flex-direction: column;
  }
 
}

@media (min-width: 600px){
  .sticky{
    width: 33.3333%;
    position: fixed;
  }
  .col-12.is-sticky{
    padding-left: 33.3333%;
  }
}
@media (min-width: 960px){
.v-application .container {
    max-width: 980px;
}
.sticky{
  position: fixed;
  top: 55px;
  width: 33.3333%;
}
.col-12.is-sticky{
  padding: 0;
  padding-left: 33.3333%;
}
}

@media (min-width: 1199px){
.sticky{
  position: fixed;
  top: 55px;
  width: 296.25px;
}
.col-12.is-sticky{
  padding: 0;
  padding-left: 296.25px;
}
}

@media (max-width: 599px){
  .sticky{
    transition: none;
  }
}
</style>