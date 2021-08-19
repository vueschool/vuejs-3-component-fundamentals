let PlanPickerItemComponent = {
  template: '#plan-picker-item-template',
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

let PlanPickerItemTemplateComponent = {
  components: { 'plan-picker-item': PlanPickerItemComponent },
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
  components: { 'plan-picker-item-template': PlanPickerItemTemplateComponent },
})
.mount('#app') 
