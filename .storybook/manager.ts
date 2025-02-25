import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: "CodeLab UI Components",
    brandImage: "codelab-cody.ico",
    brandUrl: "https://codelabdavis.com",
    textColor: "#fff",
  },
});
