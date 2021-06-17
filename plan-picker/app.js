const app = Vue.createApp({})
.component('plan', {
  template: '#plan-template',
  props: {
    name: { type: String, required: true }
  }
})
.component('plan-picker', {
  template: '#plan-picker-template',
  data(){
    return {
      plans: ['The Single', 'The Curious', 'The Addict']
    }
  }
})
.mount('#app')