import type { Meta, StoryObj } from '@storybook/vue3'
import { defineComponent } from 'vue'

const Margin = defineComponent({
  name: 'Margin',
  props: {
    marginDirection: { type: String, required: false, default: 'none' },
    marginValue: { type: Number, required: false, default: 0 },
  },
  template: `
    <div :class="['m' + (marginDirection === 'none' ? '' : marginDirection) + '-' + marginValue, 'bg-grey']">
      Hello (m{{ marginDirection }}-{{ marginValue }})
    </div>
  `,
})

const meta: Meta<typeof Margin> = {
  title: 'Components/Margin',
  component: Margin,
  render: (args) => ({
    components: { Margin },
    setup() { return { args } },
    template: '<Margin v-bind="args" />',
  }),
  argTypes: {
    marginDirection: {
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
    marginValue: {
      control: {
        type: 'range', min: 0, max: 100, step: 5,
      },
      description: 'Margin Value (multiples of 5)'
    }
  }
}

export default meta
type Story = StoryObj<typeof Margin>

export const Default: Story = {
  args: {
    marginDirection: 'none',
    marginValue: 0
  },
}
