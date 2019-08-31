import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyBD0NXlt4g8cmFN4hzqZxcuGs29mHR-OvI",
  authDomain: "myaddress-pj-62c2c.firebaseapp.com",
  databaseURL: "https://myaddress-pj-62c2c.firebaseio.com",
  projectId: "myaddress-pj-62c2c",
  storageBucket: "myaddress-pj-62c2c.appspot.com",
  messagingSenderId: "286241712305",
  appId: "1:286241712305:web:8807139499fd2b16"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
