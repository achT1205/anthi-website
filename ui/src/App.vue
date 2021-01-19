<template>
  <v-app>
    <Menu />
    <v-container class="py-0">
      <v-row>
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
  mounted() {
    this.$store.dispatch("loadPublications");
  },

};
</script>

<style lang="scss">
body,body .v-application {
  font-size: $fontSize;
  font-family: $fontFamily;
  color: $darkenBrown;
  font-weight: 400;
}
body .v-application .title{
  font-family: $fontFamily!important;
  letter-spacing: normal!important;
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
  padding: .5rem .5rem .5rem 0;
  width: 100%;
  padding-left: 270px;
}

@media (max-width: 600px){
  .views{
   padding-left: 0;
   padding-left: 1rem;
  }
  .page-content .content{
    flex-direction: column;
  }
}

@media(max-width: 992){
  .v-list-item{
    display: flex;
    flex-direction: column;
  }
 
}

</style>
