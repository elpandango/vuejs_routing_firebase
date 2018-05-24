<template>
  <div>
    <h3>Sign In</h3>
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
    <button class="btn btn-primary" @click="signIn">Connection</button>
    <hr>
    <p>You don't have an account? You can
      <router-link to="/signup">create one</router-link>
    </p>
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
      signIn() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
              alert('Welcome! You are connected')
            },
            error => {
              alert('Oops. ' + error.message)
            })
      }
    }
  }
</script>
