// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: 'doc',
      id: 'index', 
      label: 'Intro',
    },
    {
      type: 'category',
      label: 'Plugins',
      items: [    
        'volkovlabs-image-panel/index',
        'volkovlabs-form-panel/index',
        'volkovlabs-env-datasource/index',
        'volkovlabs-rss-datasource/index',
          ],
    },
  ],
};

module.exports = sidebars;
