<template>
  <div class="section">
    <div class="container fluid">
      <div>
        <div class="columns">
          <div class="column is-3"  v-for="cust in $store.state.customers" :key="cust.id">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">{{ cust.fname }} {{ cust.lname }}</p>
                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content">
                 {{ cust.p_address }}
                  <a href="#">
                   {{ cust.email }}
                   </a>
                  <br />
                  <time datetime="2016-1-1">{{ cust.reg_date }}</time>
                </div>
              </div>
              <footer class="card-footer">
                
                <button @click="deleteCustomer(cust)" class="button is-success is-light">Delete</button>
                <a href="#" class="card-footer-item">Edit</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>
<script>
import axios from "axios";
export default {
  async fetch({ store, params }) {
    const { data } = await axios.get(
      "https://shrouded-spire-93825.herokuapp.com/v1/customer"
    );
    store.commit("SET_CUSTOMERS", data);
  },
  methods: {
    deleteCustomer(item){
      this.$store.dispatch('DELETE_CUSTOMER', item)
    }
  }
};
</script>
