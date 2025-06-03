import "./fonts.css";
import "@psl-storybook/styles/util.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    designToken: {
      disable: false,
      defaultTab: "Colors",
      showSearch: true,
      styleInjection: `
        @font-face {
          font-family: "GreycliffCF-DemiBold";
          src: url("/fonts/greycliff-cf-demi-bold/webfonts/greycliff-cf-demi-bold.woff2")
            format("woff2");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "GreycliffCF-Medium";
          src: url("/fonts/greycliff-cf-medium/webfonts/greycliff-cf-medium.woff2")
            format("woff2");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "GreycliffCF-Light";
          src: url("/fonts/greycliff-cf-light/webfonts/greycliff-cf-light.woff2")
            format("woff2");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Material Icons";
          src: url("/fonts/google_fonts.woff2") format("woff2");
          font-style: normal;
          font-weight: 400;
        }

        #panel-tab-content > div:nth-child(4) > div table > tbody > tr > td:nth-child(3) > div,
        #panel-tab-content > div:nth-child(4) > div table > tbody > tr > td:has(> input[type="text"][value="solid"]) + td > div {
          border-style: solid;
        }
        
        #panel-tab-content > div:nth-child(4) > div table > tbody > tr > td:has(> div > input[value="dashed"]) + td > div {
          border-style: dashed;
        }

        #panel-tab-content > div:nth-child(4) > div table > tbody > tr > td:has(> div > input[value="dotted"]) + td > div {
          border-style: dotted;
        }

        #panel-tab-content > div:nth-child(4) > div table > tbody > tr > td:has(> div > input[value="double"]) + td > div {
          border-style: double;
        }
          
        #panel-tab-content > div:nth-child(4) > div table > tbody > tr > td:has(> div > input[value="9999px"]) + td > div {
          border-radius: 9999px;
          border: 1px solid;
        }

        #panel-tab-content > div:nth-child(4) > div table > tbody > tr > td:has(> div > input[value="0.5rem"]) + td > div {
          border: 1px solid;
          border-radius: 0.5rem;
        }

        #panel-tab-content > div:nth-child(4) > div table > tbody > tr > td:has(> div > input[value="0.25rem"]) + td > div {
          border: 1px solid;
          border-radius: 0.25rem;
        }

        #panel-tab-content > div:nth-child(4) > div table > tbody > tr > td:has(> div > input[value="0.125rem"]) + td > div {
          border: 1px solid;
          border-radius: 0.125rem;
        }

        // #panel-tab-content > div:nth-child(4) > div table > tbody > tr > td:has(> div > input[value="0"]) + td > div {
        //   border: 1px solid;
        //   border-radius: 0;
        // }
      `,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
