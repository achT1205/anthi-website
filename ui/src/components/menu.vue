<template>
  <header>
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
  </header>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Home',
        link: '/home'
      },
      {
        title: 'Research',
        link: '/research'
      },
      {
        title: 'Home',
        link: '/work-with-me'
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
  max-width: 980px;
  background: #ffffff;
  .item-link.v-tab.v-tab{
    color: $lightenGray;
    font-weight: 700;
    font-size: $menuFontSize;
    border-top-right-radius: $radius;
    border-top-left-radius: $radius;
  }
  .item-link.v-tab.v-tab.v-tab--active{
    background: $lightenGray;
    color: $white;
    border: 1px solid $black;
    border-bottom: 0;
  }
}
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled{
  color: $lightenGray;
}
</style>