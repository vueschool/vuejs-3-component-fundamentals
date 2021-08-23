const app = Vue.createApp({

})
.component('todo-item', {
  template: '#todo-item-template',
  data(){
    return {
      done: false
    }
  },
  methods: {
    onChangeStatus() {
      this.done = !this.done
    }
  },
})
.mount('#app')