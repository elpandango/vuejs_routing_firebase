<template>
  <div>
    <ul class="list-group">
      <router-link
        class="list-group-item"
        tag="li"
        to="/user/1">User 1</router-link>
      <router-link
        class="list-group-item"
        tag="li"
        to="/user/2">User 2</router-link>
      <router-link
        class="list-group-item"
        tag="li"
        to="/user/3">User 3</router-link>
    </ul>
  </div>
</template>
<style scope>
  ul > li {
    cursor: pointer;
  }
</style>
<script></script>
