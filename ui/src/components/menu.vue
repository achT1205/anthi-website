<template>
  <header>
    <v-container class="pa-0">
      <v-tabs>
        <v-tab
          class="item-link"
          :title="item.title"
          v-for="(item, index) in items"
          :key="index"
          :link="true"
          :to="item.link"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
      <img
        src="@/assets/images/noun_Cat_564414.svg"
        alt="cat"
        class="cat-for-menu"
      />

      <nav class="menu-mobile">
        <div class="bars-btn">
          <v-btn @click="showNav = !showNav" color="$gold" outlined>
            <i class="fas fa-bars"></i>
          </v-btn>
        </div>
        <ul class="show-nav" :class="showNav ? 'show' : ''">
          <li
            class="item-link"
            v-for="(item, index) in items"
            :key="index"
            :link="true"
          >
            <a :title="item.title" @click="navigateTo(item.link)">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </v-container>
  </header>
</template>
<script>
export default {
  data: () => ({
    showNav: false,
    items: [
      {
        title: "home",
        link: "/home",
      },
      {
        title: "research",
        link: "/research",
      },
      {
        title: "work with me",
        link: "/work-with-me",
      },

      {
        title: "publications",
        link: "/publications",
      },
    ],
  }),
  methods: {
    navigateTo(link) {
      this.showNav = false;
      this.$router.push(link);
    },
  },
};
</script>
<style lang="scss">
.v-tabs {
  max-width: 95.2%;
}
.v-slide-group__content {
  border-bottom: solid !important;
  border-width: 1.5px !important;
  border-bottom-color: #504538 !important;
  height: 35px !important;
}

$menuFontSize: 24px;
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 1;
  .item-link.v-tab.v-tab {
    color: $darkenBrown!important;
    font-weight: 400; // regulrar
    font-size: $menuFontSize;
    border-radius: $halfradius;
    padding-left: 8px;
    padding-right: 8px;
    margin-right: 27px;
    height: 35px;
  }
   .v-tab, .v-tab:hover {
  background: $lightenGray;
    } 
  .item-link.v-tab.v-tab.v-tab--active {
    background: $gold;
    color: $white!important;
    border: 1px solid $darkenBrown;
  }

  .cat-for-menu {
    top: -23px;
    position: relative;
    width: 40px;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.4));
    margin-left: 95%;
  }
}
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon,
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn,
.theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: $gold;
}

.menu-horizontal-line {
  opacity: 0.99;
  background-color: $darkenBrown;
  margin-top: -14px;
  height: 0px;
  border: none;
  border-top: 1px solid $darkenBrown;
}

.menu-mobile {
  display: none;
  justify-content: flex-end;
  flex-direction: column;
  .theme--light.v-btn {
    color: $darkenBrown;
    background-color:white;
    margin-top: -66px;
    opacity:0.7;
    border:2px solid;
        filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.4));

  }
  // background-color:$darkenBrown;
  .bars-btn {
    width: 100%;
    justify-content: flex-end;
    display: flex;
    padding: 0.7rem;
    // background-color:$darkenBrown;
  }
  .show-nav {
    display: none;
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding-left: 0;
    background-color:white;
    li{
      border-bottom: 1px solid $lightenGray;
      a{
        padding: .5em;
        display: block;
        color: $gold;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
      }
    }
    a:hover{
      background-color:$gold ;
      color:white;
    }
  }
}
@media (max-width: 800px) {
  .v-tabs {
    display: none;
  }
  .cat-for-menu {
    margin-left: 0!important;
   
  }
  .menu-mobile {
    display: flex;
    .show-nav {
      display: none;
      li {
        width: 100%;
      }
    }
    .show-nav.show {
      display: flex;
    }
  }
}
</style>