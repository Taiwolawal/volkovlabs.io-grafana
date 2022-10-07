// @ts-check

/**
 * Sidebar
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mySidebar: [
    {
      id: "index",
      label: "Our Work",
      type: "doc",
    },
    {
      items: [
        "grafana-allow-unsigned/index",
        "grafana-customize/index",
        "grafana",
      ],
      label: "Grafana",
      type: "category",
    },
    {
      items: [
        "volkovlabs-echarts-panel/index",
        "volkovlabs-balena-app/index",
        "volkovlabs-image-panel/index",
        "volkovlabs-calendar-panel/index",
        "volkovlabs-dynamictext-panel/index",
        "volkovlabs-form-panel/index",
        "volkovlabs-env-datasource/index",
        "volkovlabs-rss-datasource/index",
      ],
      label: "Open Source",
      type: "category",
    },
    {
      items: ["balena-nfs/index", "theiascope/index", "volkovlabs-app/index"],
      label: "Projects",
      type: "category",
    },
    {
      items: [
        "volkovlabs-abc-app/index",
        "volkovlabs-abc-datasource/index",
        "volkovlabs-abc-panel/index",
      ],
      label: "Development Templates",
      type: "category",
    },
  ],
};

module.exports = sidebars;
