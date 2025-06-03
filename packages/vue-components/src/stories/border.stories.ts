import type { Meta, StoryObj } from '@storybook/vue3'
import { defineComponent } from 'vue'
import { colors } from '../utils/tokens';

const Border = defineComponent({
  name: 'Border',
  props: {
    side: { type: String, required: false, default: '' },
    width: { type: String, required: false, default: 'thin' },
    style: { type: String, required: false, default: 'solid' },
    radius: { type: String, required: false, default: 'none' },
    color: { type: String, required: false, default: '' }
  },
  template: `
    <div :class="[!!side ? 'border-' + side + '-' + width : 'border-' + width, !!side ? 'border-style-' + side + '-' + style : 'border-style-' + style, 'rounded-' + radius, color ? ('border-color-' + color) : '', 'bg-grey', 'm-5']">
      Hello ({{ !!side ? 'border-' + side + '-' + width : 'border-' + width, !!side ? 'border-style-' + side + '-' + style : 'border-style-' + style, 'rounded-' + radius, color ? ('border-color-' + color) : '' }})
    </div>
  `,
})

const meta: Meta<typeof Border> = {
  title: 'Components/Border',
  component: Border,
  render: (args) => ({
    components: { Border },
    setup() { return { args } },
    template: '<Border v-bind="args" />',
  }),
  argTypes: {
    side: {
      options: [
        'none',
        'top',
        'bottom',
        'right',
        'left',
      ],
      mapping: {
        'none' :  '',
        'top' : 't',
        'bottom' : 'b',
        'right' : 'r',
        'left' : 'l',
      }, 
      control: { type: 'select' },
    },
    width: {
      options: [
        'none',
        'thin',
        'medium',
        'thick',
      ],
      control: { type: 'select' },
    },
    style: {
      options: [
        'solid',
        'dashed',
        'dotted',
        'double',
      ],
      control: { type: 'select' },
    },
    radius: {
      options: [
        'none',
        'sm',
        'md',
        'lg',
        'full',
      ],
      control: { type: 'select' },
    },
    color: {
      options: Object.keys(colors),
      control: { type: 'select' },
    },
  }
}

export default meta
type Story = StoryObj<typeof Border>

export const Default: Story = {
  args: {
    side: '',
    width: 'thin',
    style: 'solid',
    radius: 'none',
    color: ''
  },
}
