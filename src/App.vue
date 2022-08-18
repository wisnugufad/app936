<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#" class="m-2 mb-0 mt-0">APP 936</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" class="m-2 mb-0 mt-0"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="m-2">
          <b-navbar-nav>
            <b-nav-item href="/">Module Restart</b-nav-item>
            <b-nav-item href="/grep">Grep Connection</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <!-- <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right> -->
              <!-- Using 'button-content' slot -->
              <!-- <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav> -->
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
</style>
