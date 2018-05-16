<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button class="btn btn-primary" @click="goToHome">Go to Home</button>
    <hr>
    <app-user-list></app-user-list>
    <router-view></router-view>
  </div>

</template>

<script>
  import UserList from './UserList.vue';

  export default {
    methods: {
      goToHome() {
        this.$router.push('/');
      }
    },
    components: {
      appUserList: UserList
    }
  }
</script>
