const app = Vue.createApp({

})
.component('todo-item', {
  template: '#todo-item-template',
  data(){
    return {
      done: false
    }
  }
})
.mount('#app')