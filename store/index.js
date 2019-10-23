import axios from 'axios'

export const state = () => ({
  customers: ''
})

export const mutations = {
  SET_CUSTOMERS(state, data) {
    state.customers = data
  }
}

export const actions = {
  ADD_CUSTOMER({ commit, state }, data) {
    axios.post('https://shrouded-spire-93825.herokuapp.com/v1/customer', {
      fname: data.fname,
      lname: data.lname,
      age: data.age,
      email: data.email,
      phone: data.phone,
      p_address: data.p_address
    });
  },
  DELETE_CUSTOMER({ commit, state }, data) {
    axios.delete('https://shrouded-spire-93825.herokuapp.com/v1/customer/'+data._id)
    .then((res)=>{
      
    });

  }
}
