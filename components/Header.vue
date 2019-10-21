<template>
  <div class="hero-head">
    <div class="container">
      <b-navbar>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
              src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
              alt="Repair Center Logo"
            />
          </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item href="#">Features</b-navbar-item>
          <b-navbar-item href="#">How To?</b-navbar-item>
        </template>

        <template slot="end">
          <span class="navbar-item">
            <router-link class="button is-white is-outlined" to="/">
              <span class="icon">
                <i class="fa fa-home"></i>
              </span>
              <span>Home</span>
            </router-link>
          </span>

          <span class="navbar-item">
            <router-link class="button is-white is-outlined" to="/support">
              <span class="icon">
                <i class="fa fa-book"></i>
              </span>
              <span>Support</span>
            </router-link>
          </span>
        </template>
      </b-navbar>
    </div>
  </div>
</template>