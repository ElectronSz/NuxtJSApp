<template>
  <div class="section">
    <div class="columns">
      <div class="column is-6">
        <section>
          <b-field label="First Name">
            <b-input v-model="fname"></b-input>
          </b-field>
        </section>
      </div>
      <div class="column is-6">
        <section>
          <b-field label="Last Name">
            <b-input v-model="lname"></b-input>
          </b-field>
        </section>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <section>
          <b-field label="Age">
            <b-input v-model="age"></b-input>
          </b-field>
        </section>
      </div>
      <div class="column is-6">
        <section>
          <b-field label="Email Address">
            <b-input v-model="email"></b-input>
          </b-field>
        </section>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <section>
          <b-field label="Physical Address">
            <b-input v-model="p_address"></b-input>
          </b-field>
        </section>
      </div>
      <div class="column is-6">
        <section>
          <b-field label="Phone Number">
            <b-input v-model="phone"></b-input>
          </b-field>
        </section>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <button @click="saveCustomer" class="button is-primary">Save Customer</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fname: "",
      lname: "",
      age: "",
      email: "",
      phone: "",
      p_address: ""
    };
  },
  methods:{
     saveCustomer(){
      let data = {
        fname: this.fname,
        lname: this.lname,
        age: this.age,
        email: this.email,
        phone: this.phone,
        p_address: this.p_address
      }

      //dispatch action
      this.$store.dispatch('ADD_CUSTOMER', data)

     } 
  }
};
</script>