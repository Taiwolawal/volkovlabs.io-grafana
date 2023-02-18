/**
 * Projects
 */
const projects = {
  items: [
    {
      items: [
        {
          type: "doc",
          id: "balena-nfs/index",
          label: "Introduction",
        },
        "balena-nfs/balenaCloud",
        {
          type: "link",
          label: "balenaHub",
          href: "https://hub.balena.io/organizations/volkovlabs/apps/balena-nfs",
        },
        "balena-nfs/release",
      ],
      label: "Balena NFS",
      type: "category",
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-abc-app/index",
          label: "Application",
        },
        {
          type: "doc",
          id: "volkovlabs-abc-datasource/index",
          label: "Data Source",
        },
        {
          type: "doc",
          id: "volkovlabs-abc-panel/index",
          label: "Panel",
        },
      ],
      label: "Grafana Development Templates",
      type: "category",
    },
    {
      items: [
        {
          type: "doc",
          id: "volkovlabs-app/index",
          label: "Introduction",
        },
        "volkovlabs-app/release",
      ],
      label: "Volkov Labs Application",
      type: "category",
    },
    {
      type: "link",
      label: "ECharts Examples",
      href: "https://echarts.volkovlabs.io",
    },
    {
      type: "link",
      label: "Live Updates",
      href: "https://live.volkovlabs.io",
    },
  ],
  label: "Projects",
  type: "category",
  collapsible: false,
};

module.exports = projects;
