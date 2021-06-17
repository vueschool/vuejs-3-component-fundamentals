const app = Vue.createApp({

})
.component('click-counter', {
  template: '#click-counter-template',
  data(){
    return {
      count: 0
    }
  }
})
.mount('#app')