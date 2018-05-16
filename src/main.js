import Vue from 'vue';
import firebase from 'firebase';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import {routes} from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-dca5c.firebaseio.com/data.json';

// https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c

// Set the configuration for your app
// TODO: Replace with your project's config object
let config = {
  apiKey: "AIzaSyDTGDyyNczsWdfMNVREgZ6jlGraURLIapU",
  authDomain: "vuejs-http-dca5c.firebaseapp.com",
  databaseURL: "https://vuejs-http-dca5c.firebaseio.com",
  projectId: "vuejs-http-dca5c",
  storageBucket: "vuejs-http-dca5c.appspot.com",
  messagingSenderId: "402573697197"
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();


// Vue.http.interceptors.push((request, next) => {
// //   // console.log(request);
//   if (request.method == 'DELETE') {
//     request.method = 'POST';
//   }
//   next(response => {
//     response.json = () => {
//       return {messages: response.body}
//     }
//   });
// });

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
