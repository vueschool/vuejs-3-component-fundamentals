let PlanComponent = {
  template: '#plan-template',
  props: {
    name: { type: String, default: 'Popsy', required: true },
    price: Number,
    selected: { type: Boolean, default: false }
  },
  methods: {
    select() {
      this.selected = true
      this.$emit('select', this.name)
    }
  }
}

let PlanPickerComponent = {
  components: { plan: PlanComponent },
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['The Hacker', 'The Addict', 'The Curious'],
      selectedPlan: null,
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan
    }
  }
}

const app = Vue.createApp({
  components: { 'plan-picker': PlanPickerComponent },
})
.mount('#app') 
