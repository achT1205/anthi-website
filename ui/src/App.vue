<template>
  <v-app id="inspire">
    <v-container class="py-0">
      <v-row>
        <Menu />
      <div class="page-content">
        <div class="content">
          <Sidebar />
          <div class="views">
            <router-view></router-view>
          </div>
        </div>
      </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from '@/components/menu.vue';
import Sidebar from '@/components/sidebar.vue'
export default {
  components:{
    Menu,
    Sidebar,
  },
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
body {
  font-size: $fontSize;
  font-family: $fontFamily;
  color: $darkenBrown;
}
.page-content{
  width: 100%;
  padding-top: 45px;
  .content{
    display: flex;
    width: 100%;
  }
  
}
.v-main{
  padding-top: 60px!important;
}
.lastName {
  font-weight: bold;
  font-size: 32px;
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
  //color: rgba(0, 0, 0, 0.87);
  //box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: $radius;
  //min-height: 70vh;
  padding: 0 .5rem;
  width: calc(100% - 300px);
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
  .animate__animated.sticky{
    transition: none;
    animation: none;
  }
}
</style>