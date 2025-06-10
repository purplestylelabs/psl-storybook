import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from 'remark-gfm'

import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

// NOTE: Hack to get storybook-design-token working with css inside node_modules
const source = resolve(
  _dirname,
  "../node_modules/@psl-storybook/styles/dist/util.raw.css",
);
const destination = resolve(_dirname, "../src/storybook-tokens.css");
fs.copyFileSync(source, destination);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "storybook-design-token",
      options: {
        glob: ["**/storybook-tokens.css"],
      },
    },
     {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // refs: {
  //   "vue-components": {
  //     title: "Vue Components",
  //     url: "http://localhost:6007",
  //   },
  // },
};
export default config;
