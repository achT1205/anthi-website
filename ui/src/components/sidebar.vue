<template>

  <div class="sidebar">

    <div class="d-flex justify-center">
      <span class="firtName">Evanthia</span>
      <span class="lastName ml-1">DIMARA</span>
    </div>
    <div class="d-flex justify-center mt-2">
      <v-avatar size="200" style="border:1px solid white;">
        <img src="@/assets/images/evanthia_dimara.png" alt="Evanthia Dimara" />
      </v-avatar>
    </div>


    <div class="sidebar-content">

      <div class="d-flex justify-center mt-1">
        <h1 class="title">Assistant Professor</h1>
      </div>
      <div class="d-flex justify-end she-her">
        <v-spacer></v-spacer>
        <span>She/Her</span>
      </div>
      <div class="d-flex justify-center utrechtUniversity">
        <a href="https://www.uu.nl/staff/EDimara" target="_blank">
          <img height="35" src="@/assets/images/UtrechtUniversity_logo_EN_WHITE.png" alt="Utrecht University Logo" />
        </a>
      </div>
    <div class="d-flex mt-5">
        <h4>Contact me via</h4>
    </div>

    <div class="d-flex">
      <v-icon x-small color="white">fas fa-envelope</v-icon>
      <a href="mailto:evanthia.dimara@gmail.com" target="_blank"
        class="ml-2 email-href">evanthia.dimara@gmail.com</a>
    </div>
    <div class="d-flex mt-4">
      <h4>Connect with me via</h4>
    </div>
    <div class="d-flex">
      <a href="https://scholar.google.fr/citations?user=megudlUAAAAJ&hl=en" target="_blank">
        <v-icon small color="white">fa fa-graduation-cap</v-icon>
      </a>
      <a href="https://twitter.com/anthi_dimara" target="_blank" class="ml-2">
        <v-icon small color="white">fa fa-twitter</v-icon>
      </a>
      <a href="https://www.linkedin.com/in/evanthiadimara/" target="_blank" class="ml-2">
        <v-icon small color="white">fa fa-linkedin</v-icon>
      </a>
      <a href="https://www.mendeley.com/profiles/evanthia-dimara2/" target="_blank" class="ml-2">
        <v-icon small color="white">fab fa-mendeley</v-icon>
      </a>

      <a href="https://www.researchgate.net/profile/Evanthia_Dimara" target="_blank" class="ml-2">
        <v-icon small color="white">fab fa-researchgate</v-icon>
      </a>
      <a href="https://orcid.org/0000-0001-5212-7888" target="_blank" class="ml-2">
        <v-icon small color="white">fab fa-orcid</v-icon>
      </a>
    </div>
    <div class="d-flex mt-4 mb-12">
      <h4>My CV</h4>
      <a href="" target="_blank" class="ml-2">
        <v-icon color="white">fa fa-file-pdf</v-icon>
      </a>
    </div>
    <div class="d-flex mt-3">
      <h4>Mailing Address</h4>
      <a href="https://goo.gl/maps/Gjphw3XGb4rX3VhU8" target="_blank" class="ml-1">
        <v-icon color="white">fas fa-search-location</v-icon>
      </a>
    </div>
    <div class="d-flex">
      <span class="department-text">
        Department of Information & Computing Sciences, Faculty of
        Science, Utrecht University Princetonplein 5 3584 CC Utrecht,
        Netherlands
      </span>
    </div>
    </div>
 
  </div>
</template>
<style lang="scss" scoped>
  .sidebar {
    z-index: 1;
    border: 1px solid $darkenBrown;
    border-radius: $radius;
    background: $gold;
    width: 251px;
    height: 92.5vh;
    position: fixed;
    top: 47px;
    color: $white;
    .sidebar-content{
      width: 75%;
      margin: auto;
    }

    a {
      color: $white;
    }
  }
@media (max-width: 600px){
  .sidebar{
    position: relative;
    width: 100%;
    top: auto;
    z-index: 0;
    .sidebar-content{
      width: 90%;
    }
  }
}
</style>
