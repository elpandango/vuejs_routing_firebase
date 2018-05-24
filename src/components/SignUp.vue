<template>
  <div>
    <h3>Let's create a new account !</h3>
    <div class="form-group">
      <input class="form-control"
             type="text"
             v-model="email"
             placeholder="Email"
             required>
    </div>
    <div class="form-group">
      <input class="form-control"
             type="password"
             v-model="password"
             placeholder="Password"
             required>
    </div>
    <button class="btn btn-primary" @click="signUp">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link></span>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            alert('Your account has been created !')
          },
          error => {
            alert('Oops. ' + error.message)
          })
      }
    }
  }
</script>
