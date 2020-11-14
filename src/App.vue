<template>
  <div class="main-container">
    <div class="main-content">
      <div class="main-sidebar">
        <sidebar @changedItem="changeActiveItem"/>
      </div>
      <div class="main-lists">
        <div class="main-topbar">
          <topbar/>
        </div>
        <div class="main">
          <home v-if="activeItem === 'home'"/>
          <search v-if="activeItem === 'search'"/>
          <library v-if="activeItem === 'library'"/>
        </div>
      </div>
    </div>
    <div class="main-player"></div>
  </div>
</template>
<script>

import Sidebar from "../components/main/Sidebar";
import Topbar from "../components/main/Topbar";
import Home from "../components/sidebar/Home";
import Library from "../components/sidebar/Library";
import Search from "../components/sidebar/Search";

export default {
  components: {
    Sidebar,
    Topbar,
    Home,
    Library,
    Search,
  },
  data() {
    return {
      activeItem: 'home',
    }
  },
  methods: {
    changeActiveItem(item) {
      this.activeItem = item;
    }
  }
};
</script>

<style lang="sass">
@import "styles/app"
</style>
