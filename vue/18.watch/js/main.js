'use strict';

var vm = new Vue({
  el: '#app',
  data: {
    kilometers: 0,
    meters: 0
  },
  methods: {},
  computed: {},
  watch: {
    kilometers: function(val) {
      this.kilometers = val;
      this.meters = this.kilometers * 1000;
    },
    meters: function(val) {
      this.kilometers = val / 1000;
      this.meters = val;
    }
  }
});
var app1 = new Vue({
  el: '#app1',
  data: {
    msg: null
  }
});
// $watch 是一个实例方法
vm.$watch('kilometers', function(newValue, oldValue) {
  // 这个回调将在 vm.kilometers 改变后调用
  document.getElementById('info').innerHTML = '修改前值为: ' + oldValue + '，修改后值为: ' + newValue;
  app1.msg = document.getElementById('info').innerHTML;
});
