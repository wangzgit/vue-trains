'use strict';

Vue.component('balance', {
  template: `
  <div>
    <show @show-balance="showBalance"></show>
    <div v-if="show">
      您的余额： ￥98元
    </div>
  </div>
  `,
  methods: {
    showBalance: function(data) {
      console.log(data);
      this.show = true;
    }
  },
  data: function() {
    return {
      show: false
    };
  }
});

Vue.component('show', {
  template: '<button @click="onClick">显示余额</button>',
  methods: {
    onClick: function() {
      this.$emit('show-balance', { a: 1, b: 2 });
    }
  }
});

new Vue({
  el: '#app'
});
