import type { Meta, StoryObj } from "@storybook/vue3";
import { defineComponent } from "vue";

const Flex = defineComponent({
  name: "Flex",
  template: `
    <div>
  <div>
    <div class="mt-10">flex justify-start</div>
    <div class="flex w-full border bg-grey my-10 justify-start" :style="{ height: '30px' }">
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
    </div>
    <div class="mt-20">flex justify-end</div>
    <div class="flex w-full border bg-grey my-10 justify-end" :style="{ height: '30px' }">
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
    </div>
    <div class="mt-20">flex justify-space-between</div>
    <div class="flex w-full border bg-grey my-10 justify-space-between" :style="{ height: '30px' }">
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
    </div>
    <div class="mt-20">flex justify-space-around</div>
    <div class="flex w-full border bg-grey my-10 justify-space-around" :style="{ height: '30px' }">
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
    </div>
    <div class="mt-20">flex justify-space-evenly</div>
    <div class="flex w-full border bg-grey my-10 justify-space-evenly" :style="{ height: '30px' }">
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
    </div>
  </div>

  <div class="mt-60">
    <div>flex items-stretch</div>
    <div class="flex w-full border bg-grey my-10 items-stretch">
      <div class="bg-black mx-5" :style="{ height: '45px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{  width: '60px' }" />
      <div class="bg-black mx-5" :style="{  width: '60px' }" />
      <div class="bg-black mx-5" :style="{  width: '60px' }" />
      <div class="bg-black mx-5" :style="{  width: '60px' }" />
    </div>
    <div class="mt-20">flex items-start</div>
    <div class="flex w-full border bg-grey my-10 items-start" :style="{ height: '60px' }">
      Some Random Text
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
    </div>
    <div class="mt-20">flex items-end</div>
    <div class="flex w-full border bg-grey my-10 items-end" :style="{ height: '60px' }">
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
    </div>
    <div class="mt-20">flex items-center</div>
    <div class="flex w-full border bg-grey my-10 items-center" :style="{ height: '60px' }">
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
    </div>
    <div class="mt-20">flex items-baseline</div>
    <div class="flex w-full border bg-grey my-10 items-baseline" :style="{ height: '60px' }">
      Some Random Text
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
      <div class="bg-black mx-5" :style="{ height: '30px', width: '60px' }" />
    </div>
  </div>

  <div>
    <div class="mt-40">flex direction:</div>
    <div>
      row - .flex.row
    </div>
    <div>
      row-reverse - .flex.row-reverse
    </div>
    <div>
      column - .flex.column
    </div>
    <div>
      column-reverse - .flex.column-reverse
    </div>
  </div>

  <div>
    <div class="mt-40">flex wrap:</div>
    <div>
      wrap - .flex.wrap
    </div>
    <div>
      nowrap - .flex.nowrap
    </div>
  </div>
  
  <div>
    <div class="mt-40">flex align-self:</div>
    <div>
      start - .flex.self-start
    </div>
    <div>
      end - .flex.self-end
    </div>
  </div>

  <div>
    <div class="mt-40">flex align-content:</div>
    <div>
      flex-start - .flex.content-start
    </div>
    <div>
      flex-end - .flex.content-end
    </div>
    <div>
      center - .flex.content-center
    </div>
    <div>
      space-between - .flex.content-space-between
    </div>
    <div>
      space-evenly - .flex.content-space-evenly
    </div>
  </div>

  <div>
    <div class="mt-40">flex grow:</div>
    <div>
      flex-grow: 0; - .flex.flex-grow-0
    </div>
    <div>
      flex-grow: 1; - .flex.flex-grow-1
    </div>
    <div>
      flex-grow: 2; - .flex.flex-grow-2
    </div>
  </div>

  <div>
    <div class="mt-40">flex shrink:</div>
    <div>
      flex-shrink: 0; - .flex.flex-shrink-0
    </div>
    <div>
      flex-shrink: 1; - .flex.flex-shrink-1
    </div>
    <div>
      flex-shrink: 2; - .flex.flex-shrink-2
    </div>
  </div>

  <div class="mt-40">
    <div>Other flex utility classes:</div>
    <div class="flex column">
      <code>
        .flex-auto {
          flex: 1 1 auto;
        }
      </code>

      <code>
        .flex-fill {
          flex: 1 1 0%;
        }
      </code>

      <code>
        .flex-unset {
          flex: unset;
        }
      </code>

      <code>
        .flex-1 {
          flex: 1;
        }
      </code>

      <code>
        .child-flex {
          > * {
            flex: 1 1 auto;
          }
        }
      </code>
    </div>
  </div>
</div>
  `,
});

const meta: Meta<typeof Flex> = {
  title: "Components/Flex",
  component: Flex,
  render: (args) => ({
    components: { Flex },
    setup() {
      return args;
    },
    template: `<Flex v-bind="args" />`,
  }),
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {};
