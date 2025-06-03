import type { Meta, StoryObj } from '@storybook/vue3'
import { defineComponent } from 'vue'

const Padding = defineComponent({
  name: 'Padding',
  props: {
    paddingDirection: { type: String, required: false, default: 'none' },
    paddingValue: { type: Number, required: false, default: 0 },
  },
  template: `
    <div :class="['p' + (paddingDirection === 'none' ? '' : paddingDirection) + '-' + paddingValue, 'bg-grey']">
      Hello (p{{ paddingDirection }}-{{ paddingValue }})
    </div>
  `,
})

const meta: Meta<typeof Padding> = {
  title: 'Components/Padding',
  component: Padding,
  render: (args) => ({
    components: { Padding },
    setup() { return { args } },
    template: '<Padding v-bind="args" />',
  }),
  argTypes: {
    paddingDirection: {
      options: [
        'none',
        'top',
        'bottom',
        'right',
        'left',
        'horizontal',
        'vertical',
      ],
      mapping: {
        'none' :  '',
        'top' : 't',
        'bottom' : 'b',
        'right' : 'r',
        'left' : 'l',
        'horizontal' : 'x',
        'vertical' : 'y',
      }, 
      control: { type: 'select' },
    },
    paddingValue: {
      control: {
        type: 'range', min: 0, max: 100, step: 5,
      },
      description: 'Padding Value (multiples of 5)'
    }
  }
}

export default meta
type Story = StoryObj<typeof Padding>

export const Default: Story = {
  args: {
    paddingDirection: 'none',
    paddingValue: 0
  },
}
