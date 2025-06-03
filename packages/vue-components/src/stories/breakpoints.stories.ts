import { defineComponent } from "vue";
import { tokens } from "@psl-storybook/styles";
import type { Meta, StoryObj } from "@storybook/vue3";

const Breakpoints = defineComponent({
  name: "Breakpoints",
  props: {
    breakpoints: {
      type: Object,
      required: false,
      default: tokens.breakpointsMin,
    },
  },
  template: `
  <div class="max-w-full overflow-x-scroll">
  <div v-for="breakpoint of Object.keys(breakpoints)" class="flex items-center p-5 my-20 border rounded-md bg-gray" :style="{ width: breakpoints[breakpoint], height: '30px' }">
    <div>{{ breakpoint }}: {{ breakpoints[breakpoint] }}</div>
  </div>
  </div>
  `,
});

const meta: Meta<typeof Breakpoints> = {
  title: "Components/Breakpoints",
  component: Breakpoints,
  render: (args) => ({
    components: { Breakpoints },
    setup() {
      return { args };
    },
    template: '<Breakpoints v-bind="args" />',
  }),
};

export default meta;
type Story = StoryObj<typeof Breakpoints>;

export const Default: Story = {};
