<template>
  <div>
    <section class="hero is-info is-fullheight">
      <Header />

      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-6 is-offset-3">
            <h1 class="title">{{track_title}}</h1>
            <transition
              appear
              name="custom-classes-transition"
              enter-active-class="animated  pulse slower"
              leave-active-class="animated rollIn"
            >
             <h2 class="tex">Please use your repair number to track your repairs below.</h2>
            </transition>
           
            <transition
              appear
              name="custom-classes-transition"
              enter-active-class="animated slideInDown"
              leave-active-class="animated rollIn"
            >
              <Track />
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Track from "@/components/Track.vue";

export default {
  name: "Search",
  props: {
    msg: String
  },
  components: {
    Header,
    Track
  },
  data() {
    return {
      track_title: "Track Your Repair"
    };
  }
};
</script>

<style scoped>
.hero.is-info {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://img.freepik.com/free-vector/abstract-technology-background-science-connecting-technology_42705-96.jpg?size=626&ext=jpg")
      no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.hero .subtitle {
  padding: 3rem 0;
  line-height: 1.5;
}
.tex {
  color: #fff !important;
}
</style>


