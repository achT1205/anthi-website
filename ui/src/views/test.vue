<template>
  <v-app id="inspire">
    <v-app-bar class="ma-3" flat clipped-left fixed app height="64">
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
      <v-spacer></v-spacer>
      <v-responsive max-width="260">
        <v-text-field
          solo
          label="Search"
          append-icon="fas fa-search"
          flat
          hide-details
          rounded
        ></v-text-field>
      </v-responsive>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="true"
      fixed
      permanent
      app
      color="#B7A99A"
      width="300"
      class="ml-3 navigation-drawer"
    >
      <v-sheet
        rounded="lg"
        min-height="268"
        color="#B7A99A"
        class="profile-card mt-10"
      >
        <div class="d-flex justify-center">
          <span class="firtName">Evanthia</span>
          <span class="lastName ml-2">DIMARA</span>
        </div>
        <div class="d-flex justify-center mt-5">
          <v-avatar size="200">
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
        <div class="d-flex justify-center mt-6">
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
        <div class="d-flex justify-center mt-4">
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
          <a href="https://www.linkedin.com/in/evanthiadimara/" class="ml-2">
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
        <div class="d-flex justify-center mt-4">
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
          <span class="ma-5">
            Department of Information & Computing Sciences, Faculty of Science,
            Utrecht University Princetonplein 5 3584 CC Utrecht, Netherlands
          </span>
        </div>
      </v-sheet>
    </v-navigation-drawer>
    <v-main class="ma-10">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      links: ["HOME", "RESEARCH", "WORK WITH ME"],
    };
  },
  //
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
.lastName {
  font-weight: bold;
  font-size: 28px;
}
.firtName {
  font-weight: 200;
  font-size: 28px;
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
  width: 150px !important;
  border: none;
  color: #b7a99a !important;
  font-size: 24px !important;
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
}

.v-toolbar__content,
.v-toolbar__extension {
  padding: 0px 0px 0px 0px !important;
}
.profile-card .v-application a {
  color: white !important;
}
.email-href{
  color: white !important;
}

html, body {
  font-family: 'Source Sans Pro', sans-serif;
}

#inspire {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>