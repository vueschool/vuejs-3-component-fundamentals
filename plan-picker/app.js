const app = Vue.createApp({
})
.component('plan-picker', {
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['The Hacker', 'The Addict', 'The Curious']
    }
  }
})
.component('plan', {
  template: '#plan-template',
  props: {
    name: { type: String, default: 'Popsy', required: true },
    price: Number
  },
})
.mount('#app') 
