<template>
  <div>
    <ul class="nav nav-pills">
      <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
      <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
      <router-link tag="li" active-class="active" to="/signup"><a>Sign Up</a></router-link>
      <router-link tag="li" active-class="active" to="/login"><a>Login</a></router-link>
    </ul>
  </div>
</template>
