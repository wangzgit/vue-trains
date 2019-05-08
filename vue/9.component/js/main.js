'use strict';

// Vue.component('show1', {
//   template: '<button @click="onClick">show</button>',
//   methods: {
//     onClick: function() {
//       alert('Hello.');
//     }
//   }
// });

new Vue({
  el: '#seg1',
  components: {
    show1: {
      template: '<button @click="onClick">show</button>',
      methods: {
        onClick: function() {
          alert('Hello.');
        }
      }
    }
  }
});

new Vue({
  el: '#seg2'
});
