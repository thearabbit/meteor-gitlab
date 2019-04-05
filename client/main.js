import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import App from './App.vue'

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
})
