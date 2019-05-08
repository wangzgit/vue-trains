'use strict';
var base = {
  methods: {
    show: function() {
      this.visible = true;
    },
    hide: function() {
      this.visible = false;
    },
    toggle: function() {
      this.visible = !this.visible;
    }
  },
  data: function() {
    return {
      visible: false
    };
  }
};
Vue.component('tooltip', {
  template: `
  <div>
    <span @mouseenter="show" @mouseleave="hide">bys</span>
    <div v-if="visible">
      laobai
    </div>
  </div>
  `,
  mixins: [base],
  // methods: {
  //   show: function() {
  //     this.visible = true;
  //   },
  //   hide: function() {
  //     this.visible = false;
  //   }
  // },
  data: function() {
    return {
      visible: true
    };
  }
});
Vue.component('popup', {
  template: `
  <div>
    <button @click="toggle">
      Popup
    </button>
    <div v-if="visible">
      <span @click="hide">X</span>
      <h4>title</h4>
      请在今天18:00前审核。如届时仍未审核，系统将会自动审核入项目且无法退回。
    </div>
  </div>
  `,
  mixins: [base]
  // methods: {
  //   toggle: function() {
  //     this.visible = !this.visible;
  //   }
  // },
  // data: function() {
  //   return {
  //     visible: false
  //   };
  // }
});
new Vue({
  el: '#app'
});
