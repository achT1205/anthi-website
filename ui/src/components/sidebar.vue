<template>

  <div class="sidebar">

    <div class="d-flex justify-center">
      <span class="firtName">Evanthia</span>
      <span class="lastName ml-1">DIMARA</span>
    </div>
    <div class="d-flex justify-center mt-2">
      <v-avatar size="170" style="border:1px solid white;">
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
    <div class="d-flex mt-9">
        <h4>Contact me via</h4>
    </div>

    <div class="d-flex">
      <v-icon x-small color="white">fas fa-envelope</v-icon>
      <a href="mailto:evanthia.dimara@gmail.com" target="_blank"
        class="ml-2 email-href">evanthia.dimara@gmail.com</a>
    </div>
    <div class="d-flex mt-3">
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
     <div class="d-flex mt-3">
      <h4>Download my CV</h4>
    </div>
   <div class="d-flex">
      <a href="" target="_blank" class="ml-0">
        <v-icon small color="white">fa fa-file-pdf</v-icon>
      </a>
      </div>
  
    
    <div class="d-flex mt-3 ml-1 contact-footer">
      <h4>Mailing Address</h4>
      <a href="https://goo.gl/maps/Gjphw3XGb4rX3VhU8" target="_blank" class="ml-0">
        <v-icon small color="white">fas fa-search-location</v-icon>
      </a>
      <div class="department-text">    
        Department of Information & Computing Sciences, Faculty of
        Science, Utrecht University, Princetonplein 5, 3584 CC Utrecht,
        Netherlands
      </div>
    </div>
  </div>  
</div>

</template>
<style lang="scss" scoped>
  .contact-footer{
    position: relative;
    height:40px;
    float:left;
    // border:1px solid blue;
 
  }
  .sidebar {
    z-index: 1;
    border: 1px solid $darkenBrown;
    border-radius: $mirrorhalfradius;
    background: $gold;
    width: 260px;
    height: 92.5vh;
    position: fixed;
    font-size: 16px!important;
    top: 50px;
    color: $white;
    .sidebar-content{
      width: 80%;
      margin: auto;
    }

    a {
      color: $white;
    }
  }
@media (max-width: 800px){
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
