'use strict';

var app = new Vue({
  el: '#app',
  data: {
    math: 63,
    physics: 88,
    english: 99
  },
  computed: {
    sum: function() {
      return this.math + this.physics + this.english;
    },
    average: function() {
      return Math.round(this.sum / 3);
    }
  }
});
