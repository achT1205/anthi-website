<template>
  <div class="sidebar">
             
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
              </div>
</template>
<style lang="scss" scoped>
.sidebar{
  z-index: 1;
  border: 1px solid $black;
  border-radius: $radius;
  background: $lightenGray;
  width: 300px;
  height: 92.6vh;
  color: $white;
  a{
    color: $white;
  }
}
</style>