import type { StorybookConfig } from "@storybook/react-vite";

import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

// NOTE: Hack to get storybook-design-token working with css inside node_modules
const source = resolve(
  _dirname,
  "../node_modules/@psl-storybook/styles/util.css",
);
const destination = resolve(_dirname, "../src/storybook-tokens.css");
fs.copyFileSync(source, destination);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
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
