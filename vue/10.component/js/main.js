'use strict';

Vue.component('like', {
  template: '#like-component-tpl',
  data: function() {
    return {
      likeCount: 10,
      liked: false
    };
  },
  methods: {
    toggleLike: function() {
      if (!this.liked) {
        console.log(this.likeCount);
        this.likeCount = this.likeCount + 1;
        this.liked = true;
      } else {
        console.log(this.liked);
        this.likeCount = this.likeCount - 1;
        this.liked = false;
      }
    }
  }
});

new Vue({
  el: '#seg1',
});

new Vue({
  el: '#seg2'
});
