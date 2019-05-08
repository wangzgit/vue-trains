'use strict';
Vue.directive('pin', function(el, binding) {
  let pinned = binding.value;
  let position = binding.modifiers;
  let warning = binding.arg;

  if (pinned) {
    el.style.position = 'fixed';
    for (let key in position) {
      if (position[key]) {
        el.style[key] = '10px';
      }
    }
    if (warning === 'true') {
      el.style.background = 'yellow';
    }
    // el.style.top = '10px';
    // el.style.left = '10px';
  } else {
    el.style.position = 'static';
    el.style.background = '#ccc';
  }
});

new Vue({
  el: '#app',
  data: {
    card1: {
      pinned: false
    },
    card2: {
      pinned: false
    }
  }
});
