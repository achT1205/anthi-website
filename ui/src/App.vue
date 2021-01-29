<template>
  <v-app v-resize="onResize">
    <Menu class="pt-4" />
    <v-container class="pt-1">
      <v-row>
        <div class="page-content pt-1">
          <div class="content pt-4">
            <Sidebar
              class="pt-4"
              v-if="
                windowSize.x > 800 ||
                (windowSize.x < 800 && $route.name === 'home')
              "
            />
            <div class="views pt-13">
              <router-view></router-view>
              
                    <div class="fluid-container footer"> <small>&copy; Copyright <span id="copyright-year">2020</span>,  Evanthia Dimara</small> </div>
            </div>
          </div>
        </div>
      </v-row>
 
    </v-container>
   
  </v-app>
</template>

<script>
import Menu from "@/components/menu.vue";
import Sidebar from "@/components/sidebar.vue";
export default {
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
    };
  },
  components: {
    Menu,
    Sidebar,
  },
  mounted() {
    this.$store.dispatch("loadPublications");
    this.onResize();
    document.querySelector('#copyright-year').innerText = new Date().getFullYear()
  },
  methods: {
    onResize(e) {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
  },
};
//document.querySelector('#copyright-year').innerText = new Date().getFullYear();
</script>

<style lang="scss">
body,
body .v-application {
  font-size: $fontSize;
  font-family: $fontFamily;
  color: $darkenBrown;
  font-weight: 400;
}
body .v-application .title {
  font-family: $fontFamily !important;
  letter-spacing: normal !important;
}
.page-content {
  width: 100%;
  padding-top: 45px;
  .content {
    display: flex;
    width: 100%;
  }
}
.v-main {
  padding-top: 60px !important;
}
.lastName {
  font-weight: 600; //Bold
  font-size: 27px;
}

.firtName {
  font-weight: 300; // Light
  font-size: 27px;
}
.she-her {
  font-size: 10px;
  margin-top: -10px;
  margin-right: 16px;
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
  // color: #b7a99a !important;
  color: $gold !important;

  font-size: 24px !important;
  background-color: #eeeeee;
}

.nav-tabs-item-other {
  height: 60px !important;
  border: none;
  // color: #b7a99a !important;
  color: $gold !important;

  font-size: 24px !important;
}

.active-nav-tabs-item {
  border-radius: 6px !important;
  border-style: solid !important;
  border-width: 1.5px !important;
  border-color: $darkenBrown !important;
  //background-color: #b7a99a !important;
  background-color: #c58c39 !important;

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
  font-size: 13px !important;
}

.link-1 {
  color: $gold;
}

.custom-title {
  color: $darkenBrown;
  font-weight: 500;
  opacity: 1;
  font-size: 22px;
  margin-top: 0px;
  margin-left: 50px;
}

.custom-sub-title {
  color: $darkenBrown;
  font-weight: 500;
  opacity: 0.5;
  font-size: 15px;
}

.search-publications {
  caret-color: $darkenBrown;
  margin-left: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.department-text {
  font-size: 10px;
  margin-left:6px;
}
.views {
  //color: rgba(0, 0, 0, 0.87);
  //box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: $radius;
  //min-height: 70vh;
  padding: 0.5rem 0.5rem 0.5rem 0;
  width: 100%;
  padding-left: 270px;
}

@media (max-width: 800px) {
  .views {
    padding-left: 0;
    padding-left: 1rem;
  }
  .page-content .content {
    flex-direction: column;
  }
}

@media (max-width: 992) {
  .v-list-item {
    display: flex;
    flex-direction: column;
  }
}

.container {
  max-width: 1280px;
  height: 2px;
}

.fluid-container.footer{
  text-align: right;
    margin-bottom: -50px;
}
.fluid-container.footer > *:last-child {
  
    color: lightgray;
}
</style>
