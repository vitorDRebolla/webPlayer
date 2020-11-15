import Vue from 'vue';
import Bootstrap from 'bootstrap';
import jQuery from 'jquery';
import Popper from 'popper.js';
import App from './App.vue';

window.$ = jQuery;
window.jQuery = jQuery;

window.Vue = Vue;

new Vue({
  Bootstrap,
  render: h => h(App),
}).$mount('#app');
