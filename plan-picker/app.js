let PlanComponent = {
  template: '#plan-template',
  props: {
    name: { type: String, required: true }
  }
}

let PlanPickerComponent = {
  components: { plan: PlanComponent },
  template: '#plan-picker-template',
  data(){
    return {
      plans: ['The Single', 'The Curious', 'The Addict']
    }
  }
}

const app = Vue.createApp({
  components: { PlanPicker: PlanPickerComponent }
})
.mount('#app')