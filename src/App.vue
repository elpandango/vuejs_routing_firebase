<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <br>
        <app-header></app-header>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Heading from './components/Heading.vue';

  export default {
    name: 'app',
    components: {
      appHeader: Heading
    }
  }
</script>

