'use strict';
var Event = new Vue();

Vue.component('huahua', {
  template: `
  <div>
    my said：<input @keyup="onChange" v-model="iSaid" />
  </div>
  `,
  methods: {
    onChange: function() {
      Event.$emit('huahua-said-something', this.iSaid);
    }
  },
  data: function() {
    return {
      iSaid: ''
    };
  }
});

Vue.component('shuandan', {
  template: `
  <div>
    huahua said：{{huahuaSaid}}
  </div>`,
  data: function() {
    return {
      huahuaSaid: ''
    };
  },
  mounted: function() {
    var me = this;
    Event.$on('huahua-said-something', function(data) {
      console.log(data);
      console.log(me);
      me.huahuaSaid = data;
    });
  }
});

new Vue({
  el: '#app'
})
