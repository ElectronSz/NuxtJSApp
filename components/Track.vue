<template>
  <div class="box">
    <div v-if="loading" class="field is-grouped">
      <transition
        appear
        name="custom-classes-transition"
        enter-active-class="animated slower fadeInLeft"
        leave-active-class="animated rollIn"
      >
        <p class="control is-expanded">
          <input class="input" v-model="repair_id" type="text" placeholder="Repair Number..." />
        </p>
      </transition>
      <transition
        appear
        name="custom-classes-transition"
        enter-active-class="animated slower fadeInRight"
        leave-active-class="animated rollIn"
      >
        <p class="control">
          <a class="button is-info" :disabled="disable" @click="track_repair">{{ title }}</a>
        </p>
      </transition>
    </div>
    <div v-else>
      <spinner
        size="200px"
        line-bg-color="#7bc946"
        line-fg-color="#3ea44e"
        text-fg-color="#54db7f"
      />
    </div>
  </div>
</template>

<script>
// import { llg } from "llg";
import Spinner from "vue-simple-spinner";
export default {
  data() {
    return {
      title: "Track Repair",
      repair_id: "",
      disable: true,
      loading: true
    };
  },
  components: {
    Spinner
  },
  methods: {
    track_repair() {
      this.loading = false;
      
      setTimeout(() => {
        //invoke router
        this.$router.push({
        path: "/results/",
        name: "res",
        params: { track_id: this.repair_id }
      });
      }, 5000);
    }
  },

  watch: {
    repair_id: function(oldVal) {
      if (oldVal == "") {
        this.disable = true;
      } else {
        this.disable = false;
      }
    }
  }
};
</script>

<style scoped>
.box {
  margin-top: 20px;
}
</style>