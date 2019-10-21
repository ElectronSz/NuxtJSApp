<template>
  <div>
    <vue-topprogress ref="topProgress"></vue-topprogress>
    <div class="columns" id="bar">
      <div class="column is-12">
        <section class="section">
          <div class="container">
            <h1 class="title">Repair Status</h1>
            <h2 class="subtitle">
              A series or mapping of your repair order
              <strong>tracked</strong> in realtime, from start to finish
            </h2>
           
          </div>
        </section>
      </div>
    </div>
    <div v-if="found" class="container is-fluid">
      <a
        href="https://github.com/ElectronSz"
        class="github-corner"
        aria-label="View source on Github"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          style="fill:lightblue; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style="transform-origin: 130px 106px;"
            class="octo-arm"
          />
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            class="octo-body"
          />
        </svg>
      </a>
      <div class="columns">
        <div class="demo-theme column is-12 dark">
          <timeline timeline-theme="white" timeline-bg="#3a3939">
            <transition
              appear
              name="custom-classes-transition"
              enter-active-class="animated slideInDown"
              leave-active-class="animated rollIn"
            >
              <timeline-title font-color="#fff">Repair #{{ $route.params.track_id }}</timeline-title>
            </transition>

            <timeline-item
              v-for="status in statuses"
              :key="status.status"
              bg-color="#b0e6d1"
              font-color="#fff"
            >
              <transition
                appear
                name="custom-classes-transition"
                enter-active-class="animated slideInUp"
                leave-active-class="animated rollIn"
              >
                <p>{{ status.status }}
                  <br> <span class="append">{{ status.date }} {{ status.time }}</span>
                </p>
               
              </transition>
            </timeline-item>
          </timeline>
        </div>
      </div>
    </div>

    <div v-else class="container">
      <div class="columns">
       
        <div class="column is-8">
          <vue-flashcard headerFront="Oooooops!" front="What really happened to my search?" back="We did not find the repair you are looking for"></vue-flashcard>
          <button class="button primary">Go Home</button>
        </div>
         <div class="column is-4">
           Hahaha
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";
import { vueTopprogress } from "vue-top-progress";
import vueFlashcard from "vue-flashcard";
import { llg } from 'llg';
export default {
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle,
    vueTopprogress,
    vueFlashcard
  },

  data() {
    return {
      statuses: [],
      found: true,
      track_id: ""
    };
  },
  mounted() {
    this.$refs.topProgress.start();
    llg(this.$route.params.track_id);
    // Use setTimeout 
    setTimeout(() => {
      this.$refs.topProgress.done();
      this.statuses = this.getStatuses();
      
      if (this.statuses == 0) {
        this.found = false;
      }
    }, 5000);
  },

  created() {
    //get track_id parameter
    this.track_id  = this.$route.params.track_id;

    //define data/payload
    let payload = {
      track_id: this.track_id
    }

    //dispatch actions
    this.$store.dispatch("statuses", payload);
  },

  methods: {
    getStatuses(){
      return this.$store.getters.getStatuses
    }
  }
};
</script>

<style scoped>
.append {
  font-size: 0.8em;
  margin-top: 3px;
  color: #ffffff;
}
a {
  color: #bf6dcf;
  font-weight: bold;
  text-decoration: none;
}
.icon-heart {
  width: 20px;
}

.demo-theme.dark {
  background: #3a3939;
}
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>