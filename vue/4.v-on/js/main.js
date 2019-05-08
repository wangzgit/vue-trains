'use strict';
var app = new Vue({
  el: '#app',
  data: {
    url: 'https://www.baidu.com/',
    klass: 'btn btn-default'
  },
  methods: {
    onClick: function() {
      console.log('clicked...');
    },
    onEnter: function() {
      console.log('onEnter...');
    },
    onOut: function() {
      console.log('onOut...');
    },
    onSubmit: function() {
      // e.preventDefault();
      console.log('onSubmit...');
    }
  }
});
