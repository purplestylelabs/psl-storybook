import { defineComponent } from "vue";
import { tokens } from "@psl-storybook/styles";
import type { Meta, StoryObj } from "@storybook/vue3";

const Colors = defineComponent({
  name: "Colors",
  props: {
    colors: { type: Object, required: false, default: tokens.colors },
  },
  template: `
  <div v-for="colorKey of Object.keys(colors)" class="flex items-center p-5">
    <div class="mr-5" :style="{ width: '200px' }"><span class="">{{ colorKey }}:</span> {{ colors[colorKey] }}</div>
    <div :class="['border rounded-md ', 'bg-' + colorKey]" :style="{
      width: '30px',
      height: '30px',
    }"></div>
  </div>
  `,
});

const meta: Meta<typeof Colors> = {
  title: "Components/Colors",
  component: Colors,
  render: (args) => ({
    components: { Colors },
    setup() {
      return { args };
    },
    template: '<Colors v-bind="args" />',
  }),
};

export default meta;
type Story = StoryObj<typeof Colors>;

export const Default: Story = {};
