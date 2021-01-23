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
        :to="item.link">
          {{item.title}}
        </v-tab>
    </v-tabs>
    <nav class="menu-mobile">
      <div class="bars-btn">
      <v-btn @click="showNav = !showNav" color="$gold" outlined>
        <i class="fas fa-bars"></i>
      </v-btn>
      </div>
      <ul class="show-nav" :class="showNav ? 'show': ''">
        <li class="item-link"
        v-for="(item, index) in items"
        :key="index"
        :link="true"
        >
        <router-link :to="item.link" :title="item.title">
          {{item.title}}
        </router-link>
        </li>
      </ul>
      
    </nav>
   
    <hr class ="menu-horizontal-line">
     <img 
                      src="@/assets/images/noun_Cat_564414.svg"
                      alt="cat"
                      class="cat-for-menu"
    />
    </v-container>
          

  </header>
</template>
<script>
export default {
  data: () => ({
    showNav: false,
    items: [
      {
        title: 'home',
        link: '/home'
      },
      {
        title: 'research',
        link: '/research'
      },
      {
        title: 'work with me',
        link: '/work-with-me'
      },

       {
        title: 'publications',
        link: '/publications'
      },
    ]
  })
}
</script>
<style lang="scss" scoped>
$menuFontSize: 24px;
header {
  width: 100%;
  position: fixed;
  top:0;
  left: 0;
  background: #ffffff;
  z-index: 1;
  .item-link.v-tab.v-tab{
    color: $lightenGray;
    font-weight: 400; // regulrar
    font-size: $menuFontSize;
    border-radius: $halfradius;
    padding-left: 8px;
    padding-right: 8px;
    margin-right:27px;
    height:35px;
    
  }
  .item-link.v-tab.v-tab.v-tab--active{
    background: $gold;
    color: $white;
    border: 1px solid $darkenBrown;
  }

  .cat-for-menu{
    right: 41px;
    top:41px;
    position: absolute;
    width:40px;
      filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.4));

  }
}
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled{
  color: $gold;
}

.menu-horizontal-line{
  opacity: 0.99;
  background-color: $darkenBrown;
  margin-top: -14px;
  // height: 2px;
  // color: $darkenBrown;


  height: 0px;
  border: none;
  border-top: 1px solid $darkenBrown;
  
}

// .item-link.v-tab{

//   margin-right:50px;
// }

.menu-links-box{
  color:red;
}
.menu-mobile{
  display: none;
  justify-content: flex-end;
  flex-direction: column;
  // border-bottom: 1px solid $gold;
  .bars-btn{
    width: 100%;
    justify-content: flex-end;
    display: flex;
    padding: .7rem;
  }
  .show-nav{
    display: none;
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding-left: 0;
    li{
      border-top: 1px solid $lightenGray;
      a{
        padding: .5em;
        display: block;
        color: $lightenGray;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
@media (max-width: 600px){
  .v-tabs{
    display: none;
  }
  .menu-mobile{
    display: flex;
    .show-nav{
      display: none;
      li{
        width: 100%;
      }
    }
    .show-nav.show{
      display: flex;
    }
  }
}
</style>