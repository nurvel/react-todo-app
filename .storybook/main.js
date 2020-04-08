module.exports = {
  stories: [
    "./Welcome.stories.js",
    "../src/components/**/*.stories.js",
    "../src/**/*.stories.js",
    "../src/components/**/*.stories.tsx",
    "../src/**/*.stories.tsx",
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
  ],
};
