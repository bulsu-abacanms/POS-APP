export default ({ config }) => ({
  ...config,
  name: "POS App",
  slug: "pos-app",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
