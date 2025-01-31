export const BlogPosts = [
  {
    id: "dynamic-text-d3-community-20240121/",
    metadata: {
      permalink: "/blog/dynamic-text-d3-community-20240121/",
      source: "@site/blog/2024-01-21-dynamic-text-d3-community/index.mdx",
      title: "Extend visualization capabilities with D3.js",
      description:
        "Since we added the external libraries feature along with the JavaScript functionality, the Dynamic Text plugin can not stop surprising us with its applicability.",
      date: "2024-01-21T00:00:00.000Z",
      formattedDate: "January 21, 2024",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Raghavendra Samant",
          image_url: "https://avatars.githubusercontent.com/u/5258222?v=4",
          title: "Solutions Director at Cognizant",
          imageURL: "https://avatars.githubusercontent.com/u/5258222?v=4",
        },
      ],
      frontMatter: {
        authors: [
          {
            name: "Raghavendra Samant",
            image_url: "https://avatars.githubusercontent.com/u/5258222?v=4",
            title: "Solutions Director at Cognizant",
            imageURL: "https://avatars.githubusercontent.com/u/5258222?v=4",
          },
        ],
        slug: "dynamic-text-d3-community-20240121/",
        tags: ["Dynamic Text"],
        image: "/img/blog/2024-01-21-dynamic-text-d3-community/banner.png",
        keywords: ["Grafana", "API", "Business", "Planhat"],
      },
      nextItem: {
        title: "Business Intelligence App 1.6.0",
        permalink: "/blog/big-1.6.0-20240117/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\n:::info foreword by Daria Volkova\n\nSince we added the external libraries feature along with the JavaScript functionality, the Dynamic Text plugin can not stop surprising us with its applicability.\n\nWe already demonstrated how as in one-two-three you can incorporate\n[Plotly 3D Scatter](/plugins/volkovlabs-dynamictext-panel/external/#plotly-3d-scatter),\n[Mermaid](/plugins/volkovlabs-dynamictext-panel/external/#mermaid),\n[Chart.js](/plugins/volkovlabs-dynamictext-panel/external/#chartjs), and\n[Flowchart](/plugins/volkovlabs-dynamictext-panel/external/#flowchart).\n\nThis article is an instruction provided by [Raghavendra Samant](https://github.com/samant-rags). It outlines the steps and demonstrates an example of how [D3.js](https://cdnjs.com/libraries/d3) library can be incorporated into your Grafana dashboard.\n:::\n\n## At a glance\n\nIf you want to create a process flow chart that can be easily referenced in a Grafana dashboard, one option is to use a standard flow charting tool like [Draw.io](https://app.diagrams.net) to design the chart and save it as an SVG file.\n\nThis file can then be imported into the Grafana\'s [Dynamic Text plugin](/plugins/volkovlabs-dynamictext-panel) developed by Volkov Labs, which allows you to display and interact with the chart directly within the dashboard.\n\n<Image\n  title="Use draw.io to create a flow chart in the SVG format."\n  src="/img/blog/2024-01-21-dynamic-text-d3-community/d3-1.png"\n/>\n\nTo take things a step further, you can use the [Dynamic Text plugin\'s ability](/plugins/volkovlabs-dynamictext-panel/external/) to link external JavaScript libraries and CSS stylesheets to add additional functionality to the chart.\n\nFor example, you could use the popular data visualization library [D3.js](https://cdnjs.com/libraries/d3) to display real-time metric values directly on the flow chart. The Dynamic Text plugin also includes hooks for controlling data manipulation [before and after the content](/plugins/volkovlabs-dynamictext-panel/code) is rendered, giving you even greater flexibility over how the metrics on the chart are displayed and changed based on data in real time.\n\nOverall, combining the power of tools like Draw.io and open-source Dynamic Text plugin makes it easy to create dynamic, interactive flow charts that can be seamlessly integrated into your dashboards and updated as needed.\n\nTo learn more about these features and how to use them, check out the official documentation for the Dynamic Text plugin [here](/plugins/volkovlabs-dynamictext-panel).\n\n## Detailed steps\n\nHow to use Grafana\'s Dynamic Text panel and display real-time metric values on the chart using the D3.js library:\n\n<Image\n  title="Steps to incorporate D3.js into a Grafana dashboard using the Dynamic Text pluign."\n  src="/img/blog/2024-01-21-dynamic-text-d3-community/d3-2.png"\n/>\n\n1.  Design the process flow chart in Draw.io and save it as an SVG file. You can include shapes, connectors, text labels, and other elements as desired. Make sure to give the chart a clear, descriptive name so that it will be easy to identify later.\n2.  In Grafana, navigate to the dashboard where you want to display the flow chart and click on the "Add Panel" button. Type "Text" as the panel type and choose the "Dynamic Text" plugin.\n3.  Copy and paste the SVG code for the flow chart into the Dynamic Text panel editor (**Content**). You can access the SVG code by opening the saved file in a text editor or viewing the source code for the chart in a web browser.\n4.  Use the Dynamic Text plugin\'s panel options to customize the data binding aspects of the flow chart. Details are in the documentation link above.\n5.  Link the D3.js library and any required CSS stylesheets using the Dynamic Text plugin\'s settings. This will allow you to use D3.js functions and methods to manipulate the flow chart and display real-time metric values.\n6.  Write the D3.js code to select specific elements on the flow chart and bind them to data sources. For example, you might use the select method to target certain shapes or text labels, and then use the data method to associate those elements with live metric values.\n7.  Define the behavior of the chart using the Dynamic Text plugin\'s hooks. These hooks allow you to run custom JavaScript code before and after the content is rendered, enabling you to perform calculations, apply transformations, or trigger animations based on changes in the underlying data.\n8.  Save the Dynamic Text panel and test the flow chart to ensure that it displays correctly and updates in response to changes in the metric data. You may need to fine-tune the placement and formatting of the chart elements or adjust the timing of the hook functions to get everything working smoothly.\n9.  Once the flow chart is finalized, you can publish the dashboard and share it with team members or stakeholders as needed. They will be able to see the process flow chart alongside relevant metric data and understand how different components of the system fit together.\n\nBy following these steps, you can create a dynamic, interactive process flow chart that integrates seamlessly with your Grafana dashboards and provides valuable insights into the performance of your systems.\n\n## Code to Copy\n\n### SVG file\n\n```SVG\n<?xml version="1.0" encoding="UTF-8"?>\n<!-- Do not edit this file with editors other than draw.io -->\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="491px" height="223px" viewBox="-0.5 -0.5 491 223" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2024-01-19T20:39:06.420Z&quot; agent=&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Safari/605.1.15&quot; etag=&quot;6pgwlFJk3I_YgIuAIzpk&quot; version=&quot;22.1.21&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;r6o4K_kWlicXEwS6FW9g&quot; name=&quot;Page-1&quot;&gt;5VdZc9owEP41PNLxfTwmQKFTMmmG6TTtm7DXB5EtRpYB59dXjmV8KBxpaY7pE9pPu1rtt4fFQB8luylF6+iG+IAHmuLvBvp4oGmqoRj8p0SKCnEUvQJCGvtCqQEW8SMIUBFoHvuQdRQZIZjF6y7okTQFj3UwRCnZdtUCgrte1ygECVh4CMvoj9hnkYhCsxt8BnEY1Z5Vy612ElQri0iyCPlk24L0yUAfUUJYtUp2I8AleTUvld3nA7v7i1FI2TkG8++/hnfF3TKdPQZzbTmzvzrJ0NCqYzYI5yJicVtW1BSAzxkRIqEsIiFJEZ406DUleepD6UfhUqMzJ2TNQZWDK2CsEOlFOSMciliCxW4QYzwimNAnj7qPwAk8jmeMkgdo7VieA8uA78jRC0IyklMPjoUs8sEQDYEdUxQnlvG3XAh2p0ASYLTgChQwYvGmWzFIFF6412tywxciPS9JlSKl6krKVZOJktZtFDNYrNETH1veoF3WD3K4AcpgdzRmsWuKS4nu1oW4bVpFswUWtdqkjuXyJLn/Xz3XY/FkPZvvq55VKVXXUq5OVHC33C9fz2p9wtsVtCmxNHpvLHGaXo8ldjsBdxF8ufGU24dksdqupjDUT3e9l9PNngNI/avyccBFD6Msi71DjJUDAHYxu68t+fpniX8yhTTetdTGRS2kPK69USm0rEqxMXuSarve5AgCsLxnJ4dvu0tF+bvJYZ47OZQzJ0erAMxn8l9jZw8Y4eEbiXls+/LT3V79Wb26qiIXVu0nUe8gw+gXcu+gihnpIF47qGiprUuF7PCFJT+WcvRept7VtzvqfFFdoOmXfQr+vIUMqYVcU/50Yswf3nD6aXHBD+BLxlJveqvyc8R4zbFky5w6H4xTrc+pZb8tp47EqVpf8QORqnX72/hXnHKx+YdZjYrmf7o++Q0=&lt;/diagram&gt;&lt;/mxfile&gt;" style="background-color: rgb(255, 255, 255);"><defs/><g><g id="cell-LUZ-QyQbnHzfL2bH7K8m-42"><path d="M 135 40 L 135 84.63" fill="none" stroke="#6c8ebf" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 135 89.88 L 131.5 82.88 L 135 84.63 L 138.5 82.88 Z" fill="#6c8ebf" stroke="#6c8ebf" stroke-miterlimit="10" pointer-events="all"/></g><g id="cell-LUZ-QyQbnHzfL2bH7K8m-40"><rect x="0" y="0" width="270" height="40" rx="6" ry="6" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 268px; height: 1px; padding-top: 20px; margin-left: 1px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">A</div></div></div></foreignObject><text x="135" y="24" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">A</text></switch></g></g><g id="cell-LUZ-QyQbnHzfL2bH7K8m-49"><path d="M 135 131 L 135 175.63" fill="none" stroke="#6c8ebf" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 135 180.88 L 131.5 173.88 L 135 175.63 L 138.5 173.88 Z" fill="#6c8ebf" stroke="#6c8ebf" stroke-miterlimit="10" pointer-events="all"/></g><g id="cell-LUZ-QyQbnHzfL2bH7K8m-41"><rect x="0" y="91" width="270" height="40" rx="6" ry="6" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 268px; height: 1px; padding-top: 111px; margin-left: 1px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">B</div></div></div></foreignObject><text x="135" y="115" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">B</text></switch></g></g><g id="cell-LUZ-QyQbnHzfL2bH7K8m-45"><rect x="0" y="182" width="270" height="40" rx="6" ry="6" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 268px; height: 1px; padding-top: 202px; margin-left: 1px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">C</div></div></div></foreignObject><text x="135" y="206" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">C</text></switch></g></g><g id="cell-tOEe9SfIMc0OkmSjwjGe-3"><path d="M 270 202 Q 390 230 435 135 Q 480 40 276.34 20.6" fill="none" stroke="#d79b00" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 271.11 20.11 L 278.41 17.29 L 276.34 20.6 L 277.75 24.25 Z" fill="#d79b00" stroke="#d79b00" stroke-miterlimit="10" pointer-events="all"/></g><g id="cell-tOEe9SfIMc0OkmSjwjGe-4"><ellipse cx="470" cy="100" rx="20" ry="20" fill="#dae8fc" stroke="#6c8ebf" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 38px; height: 1px; padding-top: 100px; margin-left: 451px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">95</div></div></div></foreignObject><text x="470" y="104" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">95</text></switch></g></g><g id="cell-tOEe9SfIMc0OkmSjwjGe-7"><ellipse id="Ellipse-B" cx="170" cy="157" rx="20" ry="20" fill="#dae8fc" stroke="#6c8ebf" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 38px; height: 1px; padding-top: 157px; margin-left: 151px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">98</div></div></div></foreignObject><text x="170" y="161" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">98</text></switch></g></g><g id="cell-tOEe9SfIMc0OkmSjwjGe-8"><ellipse cx="172" cy="64" rx="20" ry="20" fill="#dae8fc" stroke="#6c8ebf" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 38px; height: 1px; padding-top: 64px; margin-left: 153px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">100</div></div></div></foreignObject><text x="172" y="68" fill="rgb(255, 255, 255)" font-family="Helvetica" font-size="12px" text-anchor="middle">100</text></switch></g></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.drawio.com/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a></switch></svg>\n```\n\n### JavaScript\n\n```js\nfunction getRandomInt(max) {\n  return Math.floor(Math.random() * max);\n}\n\n//console.log(\'After Content Ready : use Context object to access data \' + context.data[0].country)\nvar dataPt_1 = 100 - getRandomInt(9);\nvar dataPt_2 = dataPt_1 - getRandomInt(6);\nvar dataPt_3 = dataPt_2 - getRandomInt(12);\n\nconsole.log(dataPt_1);\nd3.selectAll("#Metric-A").text(dataPt_1);\nd3.selectAll("#Metric-B").text(dataPt_2);\nd3.selectAll("#Metric-C").text(dataPt_3);\n\nif (dataPt_2 < 97) {\n  d3.selectAll("#Ellipse-B").style("fill", "green");\n} else {\n  d3.selectAll("#Ellipse-B").style("fill", "red");\n}\n```\n\n## Let\'s sum up\n\nThe latest version of the Dynamic Text panel opens up a lot of possibilities that we can achieve with the Grafana dashboarding tool.\n\nAlso, it gives good control over what metrics can be shown and changed dynamically based on business needs.',
  },
  {
    id: "big-1.6.0-20240117/",
    metadata: {
      permalink: "/blog/big-1.6.0-20240117/",
      source: "@site/blog/2024-01-17-big-1.6.0/index.mdx",
      title: "Business Intelligence App 1.6.0",
      description:
        "We are excited to announce the release of the Business Intelligence App, version 1.6.0. It accumulates massive functionality enhancements and, thus, marks an important milestone in transitioning from a POC (proof of concept) to a development type of release.",
      date: "2024-01-17T00:00:00.000Z",
      formattedDate: "January 17, 2024",
      tags: [
        {
          label: "Business Intelligence",
          permalink: "/blog/tags/business-intelligence",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "big-1.6.0-20240117/",
        tags: ["Business Intelligence", "Release Notes"],
        image: "/img/blog/2024-01-17-big-1.6.0/banner.png",
        keywords: ["Business Intelligence", "Alerting", "Grafana"],
      },
      prevItem: {
        title: "Extend visualization capabilities with D3.js",
        permalink: "/blog/dynamic-text-d3-community-20240121/",
      },
      nextItem: {
        title: "Dynamic Text Panel 4.3.0",
        permalink: "/blog/dynamictext-panel-4.3.0-20240108/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are excited to announce the release of the Business Intelligence App, version 1.6.0. It accumulates massive functionality enhancements and, thus, marks an important milestone in transitioning from a POC (proof of concept) to a development type of release.\n\nThe Business Intelligence App, version 1.6.0 includes the following updates:\n\n- Allowed Variables support.\n- Added Support for Prometheus data source.\n- Enabled Prometheus monitoring.\n- Extended UI functionality.\n- Added Alert History.\n\n## Variables Support\n\nSupporting dashboard variables greatly simplifies work with configuring the alerting in general. Let\'s say, you have two very similar devices and your task is to monitor their technical health by creating alerts in the event of an alert rule breach.\n\nYour alert rules are almost identical for both devices with only thresholds being slightly different. For instance, one device is allowed to rotate no faster than 50 rpm and the other device no more than 100 rpm.\n\nWithout dashboard variables, you have to create two separate alert rules. For a small number of devices, this approach is reasonable. However, it turns into a severe headache once instead of two devices you need to maintain hundreds. For every device, you will have to create and maintain a separate alert rule containing an identical query.\n\nWith dashboard variables enabled, creating one alert rule is enough. The thresholds could be configured in the **Overrides**.\n\n### Prometheus Data Source\n\nAt this stage, we ensured that the BI App supports the variables in Prometheus Data Source. Some data source has unique support for the variables and we plan to support most popular of the them in the future.\n\n## Enabled Prometheus Monitoring\n\nIn this release, we added a Prometheus middleware and container to allow the collection of the BI Engine system health statistics. Having Prometheus monitoring built-in in the BI App allows you to monitor the alerting system itself. Being an outside system, the BI App is an excellent choice for observing the observability system while using the familiar interface.\n\nFollowing the enabling of the Prometheus monitoring, we crafted a [ready-to-use, out-of-the-box dashboard](https://github.com/VolkovLabs/volkovlabs-bi-grafana/blob/main/provisioning/dashboards/engine.json) with all necessary metrics for kick-off the successful monitoring.\n\n<Image\n  title="Built-in BI Engine monitoring dashboard. Data collected and stored via Prometheus."\n  src="/img/blog/2024-01-17-big-1.6.0/prom.png"\n/>\n\nThe BI Engine consists of two components which provides metrics:\n\n- API Server - **Instance** `engine:3001`\n- Scheduler - **Instance** `engine:3002`\n\n<Image\n  title="API Server and Scheduler are two components of the BI App."\n  src="/img/blog/2024-01-17-big-1.6.0/bi-app.png"\n/>\n\n## Alert rules workflow\n\nThe below schema illustrates the conceptual workflow from the user point of view. Prometheus serves to collect all system health-related and other data to ensure troubleshooting and reporting on system behavior.\n\n<Image\n  title="Conceptual workflow from the user POV."\n  src="/img/blog/2024-01-17-big-1.6.0/workflow.png"\n/>\n\n## Extended UI functionality\n\n### Actions\n\nTo align with the alerting basics terminology [Alert rule-Alert record-Alert action](/big/big-alerting/), we renamed the **Webhooks** tab into the **Actions** tab.\n\n### Annotations\n\nIn the Edit mode->**Action section**->**Add annotations** parameter, now you can specify whether you need to attach them to a panel or a dashboard (i.e. all panels of the specified dashboard).\n\n<Image\n  title="The Alerting panel and the Edit alert drawer."\n  src="/img/blog/2024-01-17-big-1.6.0/alerting-panel.png"\n/>\n\n### Alert details\n\nFor the alert rules in the **Alerting** and **Error** statuses, we added the **Event Details** section.\n\nTo review, click the **Details** button on an alert card, then **Event Details** header.\n\n<Image\n  title="Event details for the alert rules in the Alerting and Error statuses."\n  src="/img/blog/2024-01-17-big-1.6.0/event-details.png"\n/>\n\n## Alert History\n\nWe added a new option to the **Request** parameter of the Business Intelligence Engine data source. It allows you to display alert history in a visualization panel of your choice.\n\nIn the example below, the alert history is displayed in the Table visualization panel.\n\n<Image\n  title="New request type, Alerts History, allows to display."\n  src="/img/blog/2024-01-17-big-1.6.0/alert-history.png"\n/>\n\n## Getting Started\n\nYou can download the Development release from our [GitHub repository](https://github.com/volkovlabs/volkovlabs-bi-grafana) and follow this hands-on tutorial.\n\n<Video\n  src="https://www.youtube.com/embed/8UaY916PPXc"\n  title="Metrics, Logs, CPU Usage with BIG Alerting in Grafana | Unscripted and Hands-On"\n/>\n\n### Docker Compose\n\nThe `docker-compose.yml` file consists of the following containers:\n\n- **Grafana** includes the provisioned BI Engine data source, an Alerting panel, and dashboards.\n- **Timescale** is required to store configuration, events, rules, etc.\n- **BI Engine** has a service account key to access Grafana HTTP APIs. It evaluates alert rules and calls webhooks when alert statuses change.\n- **JSON webhook** is a webhook example based on NodeJS, which accepts alert payload and saves it to the files for testing purposes.\n- **Prometheus** collects and store performance metrics from BI Engine.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-bi-grafana/blob/main/docker-compose.yml"\n  language="yaml"\n/>\n\n### Start\n\nWhen you run a docker-compose file, it launches the Grafana, Timescale, BI Engine, Prometheus and Webhook containers:\n\n```\ndocker compose pull && docker compose up\n```\n\n### Stop\n\nStop and remove all containers:\n\n```\ndocker compose down\n```\n\n## Release Notes\n\n### Features / Enhancements in 1.6.0\n\n- Update BI App and BI Engine (#11)\n- [App] Update Prometheus dashboard.\n- [App] Make repeated variable is multi and add all option.\n- [App] Add Group Statuses.\n- [Engine] Add execution batching.\n- [Engine] Add running migrations only via server app.\n- [Engine] Skip creating annotations for repeat variables without results.\n- [Engine] Update Production scripts.\n\n### Features / Enhancements in 1.5.0\n\n- [App] Add Prometheus dashboard.\n- [App] Add showing load variables error.\n- [App] Add check for creating alerts without variable values.\n- [App] Update to Grafana Utils 1.2.0.\n- [Engine] Create mapper service to convert entities.\n- [Engine] Add Prometheus middleware.\n- [Engine] Add failing load variables request if unable to query variable options.\n- [Engine] Add redirect support for Home dashboard.\n- [Engine] Add prometheus datasource for getting variable options.\n- [Engine] Update the License Key.\n- [Engine] Update to Node 20.\n\n### Features / Enhancements in 1.4.0\n\n- Update BI App and BI Engine (#10)\n- [App] Add Variables support.\n- [App] Add Grafana proxy requests.\n- [App] Update Dashboard annotation modes.\n- [App] Add License Info tab.\n- [App] Add Evaluation overrides.\n- [Engine] Add Alert State to created Annotations.\n- [Engine] Add Variables support.\n- [Engine] Modules refactoring.\n- [Engine] Add Grafana proxy for App requests.\n- [Engine] Update alert checksum.\n- [Engine] Update Dashboard annotations.\n- [Engine] Add Configurable grafana request timeout.\n- [Engine] Add License Info.\n- [Engine] Add Alert history.\n- [Engine] Add Evaluation overrides.\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-bi-grafana/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Support our project by starring the repository.',
  },
  {
    id: "dynamictext-panel-4.3.0-20240108/",
    metadata: {
      permalink: "/blog/dynamictext-panel-4.3.0-20240108/",
      source: "@site/blog/2024-01-12-dynamictext-panel-4.3.0/index.mdx",
      title: "Dynamic Text Panel 4.3.0",
      description:
        "We're excited to announce the release of the Dynamic Text Panel 4.3.0. This release includes the following updates:",
      date: "2024-01-12T00:00:00.000Z",
      formattedDate: "January 12, 2024",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "dynamictext-panel-4.3.0-20240108/",
        tags: ["Dynamic Text", "Release Notes"],
        image: "/img/blog/2024-01-12-dynamictext-panel-4.3.0/banner.png",
        keywords: ["Dynamic Text", "Panel", "JavaScript", "Events", "Grafana"],
      },
      prevItem: {
        title: "Business Intelligence App 1.6.0",
        permalink: "/blog/big-1.6.0-20240117/",
      },
      nextItem: {
        title: "Data Manipulation Panel 3.4.0",
        permalink: "/blog/form-panel-3.4.0-20240105/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe\'re excited to announce the release of the Dynamic Text Panel 4.3.0. This release includes the following updates:\n\n- Extended the list of Render Templates.\n- Simplified access to the panel data and the selected data frame along with some other features via a new object `context`.\n- Added a new `variableValue` helper.\n- Improved re-render action.\n- Added compatibility with Grafana 10.2.2 and upcoming 10.3.0.\n\nToward the end of this article, I included some fascinating use cases, thank you for submitting them (see credits below).\n\n:::info Grafana Plugins catalog\nThe plugin was updated in Grafana Catalog on January 2, 2024.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/wZMJ6XJ4XYM"\n  title="Dynamic Text 4.3.0 for Grafana."\n/>\n\n## New Render Template\n\nThe **Render template** parameter instructs the plugin on how to apply the content template (the **Content** parameter) to the fetched data.\n\n<Image\n  title="New render template - All data."\n  src="/img/blog/2024-01-12-dynamictext-panel-4.3.0/alldata.png"\n/>\n\nThe existing previously [templates](/plugins/volkovlabs-dynamictext-panel/content/):\n\n- **Every row** - the content template applies to <u>every row</u> from the fetched data of <u>the selected data frame</u>.\n- **All rows** - the content template applies to <u>all rows</u> from the fetched data of <u>the selected data frame</u>.\n\nThe new template:\n\n- **All data** - the content template applies to <u>all rows</u> from the fetched data of <u>all specified data frames</u>.\n\nBelow are the illustrations of all three **Render templates** created using data generated by the Static data source. Follow the order number in the comments, starting from 1.\n\n<Image\n  title="Render templates differences."\n  src="/img/blog/2024-01-12-dynamictext-panel-4.3.0/render-modes.png"\n/>\n\n### Content\n\n````handlebars\n```json\n{{{json @root}}}\n```\n````\n\n### Referencing data in the **All data** template\n\nBelow is an example illustrating how you can reference `data` in the **All data** template.\n\nIf your data looks like this:\n\n```json\n{\n  "data": [\n    [\n      {\n        "Metric": "Pace",\n        "Values": 234\n      },\n      {\n        "Metric": "Pace",\n        "Values": 111\n      }\n    ],\n    [\n      {\n        "Attitude": 45\n      }\n    ]\n  ]\n}\n```\n\nYou can reference it using the following code:\n\n```handlebars\n{{#each data.[0]}}\n{{Metric}} - {{#with (lookup ../data.[1] @index)}}{{Attitude}}{{/with}}\n{{/each}}\n```\n\n## Simplified access via a new object `context`\n\nStarting from this release, we allowed access to the panel data `panelData` and selected data frame `data` via a new object `context`.\n\nIn addition, we are actively working on refactoring existing JavaScript and Grafana parameters and made them a part of the `context`.\n\nStart typing the `context` word in the **Before Content Rendering** or **After Content Ready** boxes and see the latest list of all available features.\n\n<Image\n  title="Simplified access to the panel data and selected data frame and some other features."\n  src="/img/blog/2024-01-12-dynamictext-panel-4.3.0/context.png"\n  width="70%"\n/>\n\n## New helper - variableValue\n\nThe existing [helper](/plugins/volkovlabs-dynamictext-panel/helpers/#helper-variable) `variable` supports only one format. The `variableValue` is a new helper implemented starting from this release. It works with all [Grafana variable formats](https://grafana.com/docs/grafana/latest/dashboards/variables/variable-syntax/).\n\nBelow is an example for the `queryparam` type.\n\n```handlebars\n<a href="/d/abc?{{variableValue \'${example:queryparam}\'}}">Link</a>\n```\n\nIf example equal to `["value1", "value2"]` then result will be:\n\n```html\n<a href="/d/abc?var-example=value1&var-example=value2">Link</a>\n```\n\n## Re-render on dashboard refresh\n\nThis feature adds refresh to the list of events triggering the Dynamic Text panel re-render action.\n\nLet\'s say, your **Content** contains a dashboard variable. Before this release, when the variable takes a new value (is updated by a user or API), the Dynamic text panel was not reacting. After this release, any variable change triggers the panel re-render action.\n\n<Image\n  title="The Dynamic Text plugin has something to say."\n  src="/img/blog/2024-01-12-dynamictext-panel-4.3.0/t-speaks.png"\n  width="60%"\n/>\n\n## Community use-cases\n\n### Flowchart\n\nThank you [Josiah Solomon](https://github.com/yosiasz) for exploring an epic Flowchart.js return to Grafana! We are happy to share your example with the world.\n\nBelow you can find how the beloved by many Flowchart libraries can be implemented using the Dynamic Text plugin. Simply, add two external libraries and then write your code addressing the Flowchart libraries directly.\n\n<Image\n  title="Delivering Flowchart libraries to a Grafana dashboard using the Dynamic Text plugin."\n  src="/img/blog/2024-01-12-dynamictext-panel-4.3.0/flow.png"\n/>\n\n#### External Resources\n\n```\nhttps://flowchart.js.org/flowchart-latest.js\nhttps://cdnjs.cloudflare.com/ajax/libs/raphael/2.3.0/raphael.min.js\n```\n\n#### Content\n\n```html\n<div id="addisAbeba"></div>\n```\n\n#### JavaScript code\n\n```\nvar flow = `\nst=>start: Start:>http://www.google.com[blank]\ne=>end:>http://www.google.com\nop1=>operation: My Operation\nsub1=>subroutine: My Subroutine\ncond=>condition: Yes\nor No?:>http://www.google.com\nio=>inputoutput: catch something...\npara=>parallel: parallel tasks\nin=>input: some in\nout=>output: some out\n\nst->op1->cond\ncond(yes)->io->e\ncond(no)->para\npara(path1, bottom)->sub1(right)->op1\npara(path2, top)->op1\npara(path3, right)->in->out->e`\n\nvar diagram = flowchart.parse(flow);\ndiagram.drawSVG(\'addisAbeba\');\n```\n\n:::info Render template parameter\n\nUse **All rows** or **All data** template to execute template only once. With **Every row**, the **Content** will be applied to every row of retrieved data. Even though the data frames of the specified data source are not used, still the plugin runs the code as many times as the number of rows is retrieved.\n\n:::\n\n### Table styling\n\nHere I have a simple, yet amazing styling approach. For instance, you can display the status of your devices/servers as green or red dots in a table.\n\n<Image\n  title="Simple, yet stylish way to display unit status."\n  src="/img/blog/2024-01-12-dynamictext-panel-4.3.0/dots.png"\n/>\n\nTo have this on your dashboard, copy the **Content** and **CSS Styles** parameters from below.\n\n#### Content\n\n```html\n<table>\n  <tbody>\n    <tr>\n      <td style="width: 10%;" colspan="10" class="header">\n        SPC (last 10 samples)\n      </td>\n    </tr>\n    <tr>\n      <td style="width: 10%;"><span class="dot_niO"></span></td>\n      <td style="width: 10%;"><span class="dot_iO"></span></td>\n      <td style="width: 10%;"><span class="dot_iO"></span></td>\n      <td style="width: 10%;"><span class="dot_iO"></span></td>\n      <td style="width: 10%;"><span class="dot_iO"></span></td>\n      <td style="width: 10%;"><span class="dot_iO"></span></td>\n      <td style="width: 10%;"><span class="dot_niO"></span></td>\n      <td style="width: 10%;"><span class="dot_iO"></span></td>\n      <td style="width: 10%;"><span class="dot_iO"></span></td>\n      <td style="width: 10%;"><span class="dot_iO"></span></td>\n    </tr>\n    <tr>\n      <td style="text-align: left;" colspan="5">last</td>\n      <td style="text-align: right;" colspan="5">10th</td>\n    </tr>\n    <tr>\n      <td style="width: 10%;" colspan="5" class="down">\n        Control interval: every 50 pcs\n      </td>\n      <td style="text-align: right;" colspan="5"></td>\n    </tr>\n  </tbody>\n</table>\n```\n\n#### CSS Styles\n\n```css\n.dot_iO {\n  height: 45px;\n  width: 45px;\n  background-color: #56ff56;\n  border-radius: 50%;\n  border: 2px solid black;\n  display: inline-block;\n}\n\n.dot_niO {\n  height: 45px;\n  width: 45px;\n  background-color: #ff5656;\n  border-radius: 50%;\n  border: 2px solid black;\n  display: inline-block;\n}\n\ntable {\n  border-style: unset !important;\n}\n\ntr td {\n  border-style: unset !important;\n}\n```\n\n### JSON parsing\n\nThe community member [havedill](https://github.com/havedill) [asked](https://github.com/VolkovLabs/volkovlabs-dynamictext-panel/issues/255) how to parse a JSON data format in the case when the transformation **Convert field type** is not available.\n\nWe believe the solution might be helpful for many, so here is how you can do it.\n\n<Image\n  title="Create a handlebars Helper to parse JSON string."\n  src="/img/blog/2024-01-12-dynamictext-panel-4.3.0/json-parsing.png"\n/>\n\n#### JSON example\n\n```json\n{ "title": { "text": "Area Chart", "size": 45, "font": "Arial" } }\n```\n\n```json\n{ "title": { "text": "Bar Chart", "color": "black" } }\n```\n\n#### Content\n\n```json\n{{{json (parse JSON)}}}\n```\n\n#### JavaScript\n\n```js\nhandlebars.registerHelper("parse", (context) => JSON.parse(context));\n```\n\n## Getting Started\n\nYou can install Dynamic Text Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-dynamictext-panel\n```\n\n## YouTube Tutorial\n\nThe Dynamic Text panel is a mighty Grafana plugin to convert any monotonous bulk of data into vibrant, effortlessly comprehended visualization.\n\nTo this moment, I have created three videos. The latest one describes more features as more features have been implemented to the day of creation.\nYet, the latest Dynamic Text plugin version is far more advanced with numerous new features implemented since August.\n\n### Video 3, published on August 15, 2023\n\nIn this video, I touch upon the main features and panel options along with demonstrating community use cases.\n\n<Video\n  src="https://www.youtube.com/embed/AcQi-6GCrNU"\n  title="Dynamic Text plugin for Grafana | Use HTML, Markdown, JavaScript and CSS | Community use cases."\n/>\n\n### Video 2, published on January 29, 2023\n\nSince the latest release, the community has requested many changes. This video outlines all the new features we implemented, including the most asked-for JavaScript area code.\n\n<Video\n  src="https://www.youtube.com/embed/lJqk5Gobec4"\n  title="JavaScript code in Dynamic Text Panel."\n/>\n\n### Video 1, published on October 24, 2022\n\nThis is the first guide we created for the Dynamic Text plugin for Grafana.\nThe plugin does a fantastic job by transforming bland table data into vibrant, readable visualization emphasizing critical tidbits.\n\n<Video\n  src="https://www.youtube.com/embed/MpNZ4Yl-p0U"\n  title="Markdown, HTML, and Handlebars for transforming data visualizations."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update ESLint configuration and refactor (#239)\n- Update Collapse from @volkovlabs/components (#239)\n- Update Introduction video in README (#240)\n- Add data render mode and passing selected data frame (#246)\n- Update to Grafana 10.2.2 and Volkov labs packages (#247)\n- Add variableValue helper (#252)\n- Add re-render on dashboard refresh (#252)\n\n### Bug fixes\n\n- Fix draggable icon in Grafana 10.3 (#249)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "form-panel-3.4.0-20240105/",
    metadata: {
      permalink: "/blog/form-panel-3.4.0-20240105/",
      source: "@site/blog/2024-01-05-form-panel-3.4.0/index.mdx",
      title: "Data Manipulation Panel 3.4.0",
      description:
        "We are happy to announce the release of the Data Manipulation Panel 3.4.0. This release includes the following updates:",
      date: "2024-01-05T00:00:00.000Z",
      formattedDate: "January 5, 2024",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "form-panel-3.4.0-20240105/",
        tags: ["Data Manipulation", "Release Notes"],
        image: "/img/blog/2024-01-05-form-panel-3.4.0/banner.png",
        keywords: ["Data Manipulation", "Form Panel", "Data", "Grafana"],
      },
      prevItem: {
        title: "Dynamic Text Panel 4.3.0",
        permalink: "/blog/dynamictext-panel-4.3.0-20240108/",
      },
      nextItem: {
        title: "Highlights of 2023",
        permalink: "/blog/top-of-2023-20231222/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\nimport Shorts from "@theme/Shorts";\n\n\nWe are happy to announce the release of the Data Manipulation Panel 3.4.0. This release includes the following updates:\n\n- Added a new parameter **Synchronize with data** in the Initial Request section.\n- Extended the Context parameter by adding EventBus and AppEvents.\n- Enabled replacing variables in Payload functions.\n- Ensured compatibility with Grafana 10.2.2 and upcoming 10.3.0.\n\n:::info Grafana Catalog\nThe plugin was updated in the Grafana Plugins catalog on December 15, 2023.\n:::\n\n## State of the Plugin\n\n### Downloads\n\nThe Grafana Community has downloaded the Data Manipulation plugin more than 175K times! We are happy to learn what goals this plugin helped you to achieve. [Contact us](https://github.com/volkovlabs/volkovlabs-form-panel/issues) with your use case to share with the rest of the world.\n\n<Image\n  title="The Data Manipulation plugin downloads exceed 175K in 2023."\n  src="/img/blog/2024-01-05-form-panel-3.4.0/downloads.png"\n/>\n\n### GitHub issues\n\nThanks to the active community members who do not stop to surprise us with incredible ideas for improvements. During the summer of 2023, this plugin had a record number of open issues. We keep battling that number and are proud to report that as of now there are only 3 outstanding issues left.\n\nKeep asking and requesting, it is the best way to improve the plugin and keep it useful and relevant.\n\n<Image\n  title="The Data Manipulation plugin open issues fluctuation."\n  src="/img/blog/2024-01-05-form-panel-3.4.0/issues.png"\n/>\n\n### LIVE project\n\nIf you ever wondered where we take the downloads and other statistics, please check out our [LIVE](http://live.volkovlabs.io) project.\nYou can find general statistics about all our open-source plugins, including release calendar, download number, and links to all related blog posts and YouTube videos. We created the [LIVE](http://live.volkovlabs.io) project for internal use, but since many people found the presented information useful we made it open to anyone.\n\nIf you believe that some other statistical measures would add depth to the overview, contact us and we will consider modifying the existing dashboards.\n\n## Panel syncing for Initial Request\n\nAs you know, one of the basic Grafana dashboard parameters is the frequency of updates. In other words, admins/editors can set up how often the whole dashboard is going to be refreshed.\n\n<Image\n  title="The frequency of a dashboard update can be set up in the top right corner."\n  src="/img/blog/2024-01-05-form-panel-3.4.0/freq.png"\n  width="100%"\n/>\n\nSome of the time frequencies might bring a challenge for a user trying to populate a Data Manipulation form. If the user does not hit the Submit button often enough then everything they entered is lost. With frequencies less than 3-5 minutes, the task the user faces is practically impossible.\n\nTo avoid user stress, we added a new parameter - **Synchronize with data**.\n\nWhen it is **Disabled**, the Data Manipulation form is excluded from the frequency of update and the user can enter data in peace.\n\n<Image\n  title="Synchronize with data is a new parameter in the Initial Request section."\n  src="/img/blog/2024-01-05-form-panel-3.4.0/sync-w-data.png"\n  width="40%"\n/>\n\n## Context\n\n**Custom code** allows you to access the panel\'s options, REST API responses, form elements, and various Grafana services. To keep the Data Manipulation plugin organized and simplify the search among the available options, we allowed to access them all under the **context** object.\n\nSimply type **context** and get the list of everything available from the Data Manipulation arsenal.\n\n<Image\n  title="Panel\'s options, REST API responses, form elements, and various Grafana services are now can be referenced from the Context parameter."\n  src="/img/blog/2024-01-05-form-panel-3.4.0/context.png"\n/>\n\n### Event Bus and App Events\n\nStarting from this release, we added Event Bus and App Events into the **Context** object. For the complete list, please, reference the [Data Manipulation plugin documentation](/plugins/volkovlabs-form-panel/code).\n\nRefresh all dashboard panels using `EventBus` with global scope called `AppEvents`:\n\n```\ncontext.grafana.appEvents.publish({ type: \'variables-changed\', payload: { refreshAll: true } });\n```\n\nor\n\n```\ncontext.grafana.refresh();\n```\n\n## Variable in Payload functions\n\nStarting from this release we enabled the usage of dashboard variables in the Initial and Update Payloads.\n\n<Image\n  title="You can use dashboard variables in the Initial and Update Payloads."\n  src="/img/blog/2024-01-05-form-panel-3.4.0/var-payload.png"\n/>\n\n## Getting Started\n\nYou can install the Data Manipulation Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-form-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-form-panel\n```\n\n## YouTube Tutorial\n\nData Manipulation Panel is a plugin for Grafana that allows you to insert and update application data, as well as modify configuration directly from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/hVy9NfFiI5U"\n  title="Use REST API, Data Source, and Queries to manipulate your data."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Add ability to disable panel syncing (#298)\n- Update ESLint configuration and refactor (#299)\n- Update Collapse from @volkovlabs/components (#299)\n- Add EventBus and AppEvents to Context (#307)\n- Add replacing variables in Payload functions (#309)\n- Update to Grafana 10.2.2 and Volkov labs packages (#313)\n- Add options migration (#315)\n\n### Bugfixes\n\n- Fix draggable control to support upcoming Grafana changes (#314)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-form-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "top-of-2023-20231222/",
    metadata: {
      permalink: "/blog/top-of-2023-20231222/",
      source: "@site/blog/2023-12-22-top-of-2023/index.mdx",
      title: "Highlights of 2023",
      description:
        "Every December, my heart fills with excitement for the following year. At some point in this month, I usually realize it has been another year. While my consciousness reflects on the unavoidable passing of time, my subconsciousness starts to re-count all the fantastic things that happened that year.",
      date: "2023-12-22T00:00:00.000Z",
      formattedDate: "December 22, 2023",
      tags: [
        {
          label: "Volkov Labs",
          permalink: "/blog/tags/volkov-labs",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "top-of-2023-20231222/",
        tags: ["Volkov Labs"],
        image: "/img/blog/2023-12-22-top-of-2023/banner.png",
        keywords: ["Volkov Labs", "Highlights"],
      },
      prevItem: {
        title: "Data Manipulation Panel 3.4.0",
        permalink: "/blog/form-panel-3.4.0-20240105/",
      },
      nextItem: {
        title: "Variable Panel 2.3.1",
        permalink: "/blog/variable-panel-2.3.1-20231214/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nEvery December, my heart fills with excitement for the following year. At some point in this month, I usually realize it has been another year. While my consciousness reflects on the unavoidable passing of time, my subconsciousness starts to re-count all the fantastic things that happened that year.\n\nThe 2023 year was filled with many intriguing, inspiring, and even jaw-dropping events for us at Volkov Labs. In this article, I wanted to share the highlights of 2023 and why we are excited for 2024!\n\nLet\'s go!\n\n## Grafana Champions\n\nMikhail and I became [Grafana Champions](https://grafana.com/community/champions/) this year.\n\n<Image\n  title="Mikhail and Daria are Grafana Champions starting from 2023."\n  src="/img/blog/2023-12-22-top-of-2023/champs.png"\n/>\n\nGrafana made a quick announcement about that during the ObservabilityCon in London. Standing on the stage and seeing our names on the backdrop screen was a tremendous accomplishment and recognition.\n\n<Image\n  title="Grafana Champions on the stage of Grafana ObservabilityCon in London."\n  src="/img/blog/2023-12-22-top-of-2023/stage.png"\n/>\n\nThe thoughtful company swag for champions that was awaiting us at home, made everything real.\n\nIn addition, Grafana added [our videos](https://grafana.com/story-of-grafana/?plcmt=learn-nav) to the **Community, Innovation, Fun** page.\n\n<Image\n  title="Grafana added our videos on the Community, Innovation, Fun page."\n  src="/img/blog/2023-12-22-top-of-2023/fun.png"\n/>\n\n## Grafana Crash Course\n\nThis fantastic project was never a part of our plan. With me learning Grafana comes a collection of notes about its basics. After some time, I realized that my notes might be helpful to others who were like myself, learning Grafana. Long story short, I transferred everything from my scattered jots into beautiful SVG schemas and articles and posted all that as <a href=\'/grafana\'>Grafana Crash Course</a>.\n\nAfter a couple of refinement cycles, the Grafana Crash course was born. It has already helped so many Grafana enthusiasts that we lost count of the number, somewhere in the hundreds. The crash course contains straight-to-the-point, insightful information that, in many cases, you cannot find anywhere else. I worked on conceptual schemas, term definitions, code examples, and tutorials in this course.\n\nI even created a series for developers where I built a panel plugin demonstrating every step. Any JavaScript Developer can follow my lead and create their first Grafana plugin!\n\nThis project reflects our hard work featuring Grafana\'s unique architectural design, which brings unparalleled flexibility to tackle any real-world task with technical elegance.\n\nThe crash course is far from being complete. As always, if you have any ideas about what else should be covered there, contact us and share your thoughts. We are always up for fruitful discussions.\n\n## Our plugins are always compatible with the latest Grafana versions\n\nThat takes time, intelligent scheduling, quick wit, and deep knowledge to keep all our plugins compatible with the latest Grafana versions **all the time**. We are proud to be able to keep up and ensure the best results for the community.\n\n<Image\n  title="Grafana plugins by Volkov Labs."\n  src="/img/blog/2023-12-22-top-of-2023/honeycomb.png"\n/>\n\n## Our YouTube channel reached the mark of 2,140 subscribers\n\nWe started this year with 340 subscribers, which was, we believed, quite a significant number for such a narrow technical niche we chose. However, as the year went on and more and more people showed their support, we realized that we were just scratching the surface.\n\n340 people subscribed to our channel in the first year and then another ~1,800 hoped on board during the second year. We are grateful to everyone, no matter how you show your support, whether by subscribing, commenting, sharing, becoming a member, using **Big Thanks**, sponsoring, or referencing our work on your resources. All that together makes a beautiful notification buzz noise, which, if you listen closely, has a resemblance to the Jungle Bell song! Thank you all for spreading the Holiday spirit.\n\nWith humble hearts, we are pleased to report that no one expressed anything negative for the last two years of Volkov Labs being present online. This is another reason to admire the Grafana community, like-minded people who focus on solutions that make the lives of thousands easier.\n\n<Image\n  title="Volkov Labs channel growth in 2023."\n  src="/img/blog/2023-12-22-top-of-2023/subs.png"\n/>\n\n## Grafana Documentary\n\nIn Stockholm, Sweden, Mikhail was interviewed for the second episode of [the 10th-anniversary documentaries](https://www.youtube.com/watch?v=lbBQk_QPnEs), where he mentioned our beloved Apache ECharts panel as his favorite Community plugin.\n\n<Image\n  title="10th-anniversary documentaries, episode 2, Community features Mikhail Volkov and the Apache ECharts panel."\n  src="/img/blog/2023-12-22-top-of-2023/docu.png"\n/>\n\n## Our team expanded\n\nAlex Simonok joining our team signifies a new chapter of our company. His solid technical background and unique ability to solve challenging problems exceed expectations. Our Director of Engineering is here to stay and introduce the best of all worlds in our upcoming BI(G) project!\n\n<Image title="Welcome, Alex!" src="/img/blog/2023-12-22-top-of-2023/team.png" />\n\n## The BI(G) idea\n\n:::info BI(G)\n\nBI(G) stands for Business Intelligence in Grafana. At the time of this article, it contains the Alerting panel and BI Alert Engine. We add the breakthrough features weekly (watch our blog for updates). The plan is to grow the BI(G) as big as possible into a fully standalone Business Intelligence Application with forecasting and AI.\n\n:::\n\nThe idea of the BI(G) project rushed into our hungry for fresh ideas minds in September of 2023. Previously, we had to work on projects with hundreds of alerts, trying to streamline the management for the end-users. Our users often focus on the business side of the processes where their deep expertise is. They lacked the time to comprehend all the technical Grafana intricacies and needed a lot of guidance.\n\nThe idea of the BI(G) was born from a bare necessity to simplify everyday work for data analysts and project managers with profound expertise in their subject area but not in the Grafana.\n\nOverall, this project is a quintessential result of our knowledge and experience and is, indeed, the most indicative achievement of Volkov Labs thus far.\n\n## Conclusion, but not really\n\nWe are not ready to conclude. We are just beginning. The upcoming year has a lot for us in store. I am buckled up and ready!\n\nIndeed, I am looking forward with a fast-beating heart to sitting down at the end of 2024 and writing another article with a big smile, more hopes, more plans, and the feeling of outstanding accomplishments!\n\nHappy Holidays, and may you find peace and happiness!',
  },
  {
    id: "variable-panel-2.3.1-20231214/",
    metadata: {
      permalink: "/blog/variable-panel-2.3.1-20231214/",
      source: "@site/blog/2023-12-14-variable-panel-2.3.1/index.mdx",
      title: "Variable Panel 2.3.1",
      description:
        "We are happy to announce the release of the Variable Panel 2.3.1. This release includes the following updates:",
      date: "2023-12-14T00:00:00.000Z",
      formattedDate: "December 14, 2023",
      tags: [
        {
          label: "Variables",
          permalink: "/blog/tags/variables",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "variable-panel-2.3.1-20231214/",
        tags: ["Variables", "Release Notes"],
        image: "/img/blog/2023-12-14-variable-panel-2.3.1/banner.png",
        keywords: ["Variable", "Panel", "Status"],
      },
      prevItem: {
        title: "Highlights of 2023",
        permalink: "/blog/top-of-2023-20231222/",
      },
      nextItem: {
        title: "Business Intelligence App 1.3.0",
        permalink: "/blog/big-1.3.0-20231206/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Variable Panel 2.3.1. This release includes the following updates:\n\n- Added the feature to automatically clear **Search values** after switching tabs.\n- Added the **Persistent** mode.\n- Added compatibility with Grafana 10.2.2 and Grafana 10.3.0 (pre-release).\n\n:::info Grafana Catalog\nThe plugin was updated in the Grafana Plugins catalog on December 15, 2023.\n:::\n\n## Number of downloads\n\nThe Variable plugin shoots for the stars and is very close to 100K downloads! :clap:\n\n<Image\n  title="Variable panel was downloaded almost 100K times."\n  src="/img/blog/2023-12-14-variable-panel-2.3.1/downloads.png"\n/>\n\n## Clear **Search values** after switching tabs\n\nThis feature is applicable when your Variable panel displays multiple tabs.\n\nIn the example below, the variable panel displays two tabs: **Location** and **Country**. When a user clicks a funnel icon and types in the **Search values**, only the nodes containing, in this example, 5 are shown.\n\nNext, if this user switches to the **Country** tab, the **Search values** are cleared and no filters are applied.\n\nThat means that when a user changes tabs, all previous **Search values** are removed.\n\n<Image\n  title="Clear Search value on a tab change feature."\n  src="/img/blog/2023-12-14-variable-panel-2.3.1/clear-tab.png"\n/>\n\nThe same rule applies to the **Favorites**. The **Show only favorites** filter is cleared when a user switches to another tab.\n\n<Image\n  title="Clear Only Favorites on a tab change feature."\n  src="/img/blog/2023-12-14-variable-panel-2.3.1/clear-tab-fav.png"\n/>\n\n### Persistent Mode\n\nThis feature is applicable when Variable configured in Minimized and Button layouts. This mode could be turned on and off in the Variable panel options.\n\n<Image\n  title="Enable/Disable the Persistent mode."\n  src="/img/blog/2023-12-14-variable-panel-2.3.1/persist-on-off.png"\n  width="50%"\n/>\n\nWhen **Enabled**, the selected values are stored in the browser\'s local storage. It comes in handy when one variable panel is controlled by the other variable panel.\n\nFor instance, in the illustration below, I have two variable panels. One displays countries and the other one displays states within the selected country. I chose **USA** in the first panel and then **IL** on the other panel.\n\nDepending on the **Persistent** option value set for the **State** variable panel, the selected value is either <u>saved</u> in the browser for future use or <u>not</u>.\n\n<Image\n  title="Persistent option allows to keep the selected values in the browser\'s local cache."\n  src="/img/blog/2023-12-14-variable-panel-2.3.1/persistent.png"\n/>\n\n## Getting Started\n\nThe Variable panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-variable-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-variable-panel\n```\n\n## YouTube Tutorial\n\nThe Variable panel builds on top of the regular dashboard variables. It allows you to have dashboard filters in a separate panel which you can place anywhere on the dashboard.\n\nThe variable panel offers you single- and multi-variable layouts along with an advanced Tree View.\n\n<Video\n  src="https://www.youtube.com/embed/1ogv2jstrlI"\n  title="Demonstrates the Variable panel functionality."\n/>\n\n## Release Notes\n\n### Bugfixes in 2.3.1\n\n- Fix draggable icon for Grafana 10.3 (#107)\n\n### Features / Enhancements in 2.3.0\n\n- Add clean table state on tab change (#101)\n- Update ESLint configuration and refactor (#102)\n- Add persistent mode (#103)\n- Update to Grafana 10.2.2 and Volkov labs packages (#104)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-variable-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "big-1.3.0-20231206/",
    metadata: {
      permalink: "/blog/big-1.3.0-20231206/",
      source: "@site/blog/2023-12-06-big-1.3.0/index.mdx",
      title: "Business Intelligence App 1.3.0",
      description:
        "We are excited to announce the release of the Business Intelligence App, version 1.3.0. At this early stage, it is a proof-of-concept product, meaning a product created as a starter to vastly extend its functionality in the future. This release includes the following updates:",
      date: "2023-12-06T00:00:00.000Z",
      formattedDate: "December 6, 2023",
      tags: [
        {
          label: "Business Intelligence",
          permalink: "/blog/tags/business-intelligence",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "big-1.3.0-20231206/",
        tags: ["Business Intelligence", "Release Notes"],
        image: "/img/blog/2023-12-06-big-1.3.0/banner.png",
        keywords: ["Business Intelligence", "Alerting", "Grafana"],
      },
      prevItem: {
        title: "Variable Panel 2.3.1",
        permalink: "/blog/variable-panel-2.3.1-20231214/",
      },
      nextItem: {
        title: "Data Manipulation Panel 3.3.0",
        permalink: "/blog/form-panel-3.3.0-20231203/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are excited to announce the release of the Business Intelligence App, version 1.3.0. At this early stage, it is a proof-of-concept product, meaning a product created as a starter to vastly extend its functionality in the future. This release includes the following updates:\n\n- Enriched the Alerting panel with Grafana user roles.\n- Made the BI Alert Engine follow color configuration (specified in the **Thresholds** section).\n- Added support for transformations (beta) and multi-frames.\n- Added retry and timeout parameters for Grafana health check.\n\n<Shorts\n  src="https://www.youtube.com/embed/mAdwQ32SmMc"\n  title="Business Intelligence App 1.3.0 for Grafana."\n/>\n\n## User roles in the Alerting panel\n\nThe latest version of the Alerting panel supports user roles.\n\n### Alert rules tab\n\nFor Admins and Editors, all four action buttons are available: info, pause/resume, edit, delete.\nFor Viewers, only two action buttons are available: info, pause/resume.\n\n<Image\n  title="Action buttons accessibility for different Grafana roles on the Alert rules tab."\n  src="/img/blog/2023-12-06-big-1.3.0/roles.png"\n/>\n\n### Webhooks tab\n\nFor Admins and Editors, all three action buttons are available: test, edit, delete.\nFor Viewers, only one action button is available: test.\n\n:::info\nA greyed-out delete button in the **Webhook** tab means the alert rule with this webhook is currently active and can not be deleted.\n:::\n\n<Image\n  title="Action buttons accessibility for different Grafana roles on the Webhooks tab."\n  src="/img/blog/2023-12-06-big-1.3.0/roles-hooks.png"\n/>\n\n## Color range in Thresholds\n\nTo support higher high and lower low ranges, we pointed the BI Alert Engine to the **Thresholds** color for reading the allowable range of data. The BI Engine uses the **Thresholds** colors as a guide in the creation of alert records and calls the assigned webhook.\n\n:::info\nThe allowable range of data is a way to set what is normal, not requiring anyone\'s attention. No alerts/actions are needed when the data is within the allowable range.\n:::\n\nIn the illustration below, three alert records have been created due to the data being outside the allowable range three times.\n\nThe alert records (annotations) are displayed on the graph as light blue highlighted areas. They highlight all time ranges when the data values (temperature, in this example) went outside the allowable range. In this example, the allowable range is from 50 to 80 (set in the **Thresholds** section).\n\n:::info\nPlease note, that there are no values (no registered temperature data) between the highest peak and the lowest deep on the graph. The temperature changes abruptly from max to min.\n:::\n\n- The temperature for alert 1 goes from below 40 to 50.\n- The temperature for alert 2 goes from 80 to 94.7 (illustrated with a tooltip) and then from about 20.4 (illustrated with a tooltip) to 50.\n- The temperature for alert 3 goes from 80 to about 93.4 and then from about 21.1 to about 33.7.\n\nThe temperature then continues still within the not allowable interval though it is not yet alerted since the alert rules run periodically. In this example, the last time, the alert rule was challenged was 11:04:50. After the next alert rule run, the interval for alert 3 will extend and a bigger area will be highlighted with light blue (not shown here).\n\n<Image\n  title="BI Alert Engine looks up the threshold color to create an alert record and calls the assigned webhook."\n  src="/img/blog/2023-12-06-big-1.3.0/thresh-color.png"\n/>\n\n## Transformations and Multi-frames\n\nAs you know, an alert rule is created for a particular panel on a particular dashboard.\n\n<Image\n  title="Dashboard and Panel are mandatory parameters for an alert rule."\n  src="/img/blog/2023-12-06-big-1.3.0/dash-panel.png"\n/>\n\nStarting from this release, BI(G) supports multi-frame data sets. That means that the alert rule assigned to a dashboard and panel will be applied to all data frames fetched from the connected data source.\n\nIn the picture below, the panel fetches three data frames, one for each device.\n\n- The alert is created when at least one device temperature goes beyond the allowable range (in this example, it is device 2, yellow line).\n- The alert stops ringing when the last device temperature (in this example, it is device 3, blue line) comes back into the allowable range.\n\n<Image\n  title="Multi-frames data set example."\n  src="/img/blog/2023-12-06-big-1.3.0/multi-frame.png"\n/>\n\nIn addition, Grafana transformations are now also supported. However, please, note, that Grafana offers a large number of transformations, hence, there is a chance that some of them will not work correctly.\n\n:::info\n\nSupport of Grafana transformation is in beta state. This is due to the number of existing transformations.\n\n:::\n\n## Grafana Health Check\n\nTo successfully run the BI(G) app, you need Grafana and BI Engine. In some instances, Grafana might take longer time to launch than the BI Engine. This scenario may lead to the failure of the startup health check. Simply put, if the BI Engine does not find Grafana running, it shuts itself down.\n\nTo avoid this false health check failure, we added timing parameters that determine how long the BI Engine waits before checking Grafana\'s active status using Grafana token and URL to connect to.\n\nBy default, the waiting is 5 seconds. You can configure that by using the parameters below.\n\n```\n##\n## Service Account\n## - Viewer permission is required to access dashboards\n## - Editor permission is required to access dashboards and add Annotations\n##\nGRAFANA_TOKEN=SERVICE-ACCOUNT-TOKEN\n\n##\n## Grafana HTTP API\n##\nGRAFANA_URL=http://grafana:3000\n\n##\n## Grafana Health-Check timeout, ms\n## Waiting for Grafana availability for (Timeout * Number of Retries / 1000 ) seconds\n##\nGRAFANA_HEALTH_CHECK_TIMEOUT=1000\n\n##\n## Grafana Health-Check number of retries\n##\nGRAFANA_HEALTH_CHECK_RETRY=5\n```\n\n## Getting Started\n\nYou can download the Development release from our [GitHub repository](https://github.com/volkovlabs/volkovlabs-bi-grafana) and follow this hands-on tutorial.\n\n<Video\n  src="https://www.youtube.com/embed/8UaY916PPXc"\n  title="Metrics, Logs, CPU Usage with BIG Alerting in Grafana | Unscripted and Hands-On"\n/>\n\n### Docker Compose\n\nThe `docker-compose.yml` file consists of the following containers:\n\n- **Grafana** includes the provisioned BI Engine data source, an Alerting panel, and a demo dashboard.\n- **Timescale** is required to store configuration, events, rules, etc.\n- **BI Engine** has a service account key to access Grafana HTTP APIs. It evaluates alert rules and calls webhooks when alert statuses change.\n- **JSON webhook** is a webhook example based on NodeJS, which accepts alert payload and saves it to the files for testing purposes.\n- **Node-RED** provides an HTTP POST endpoint and sends a Slack notification with alert details.\n- **Data Generator** generates test data for threshold evaluation in the demo dashboard.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-bi-grafana/blob/main/docker-compose.yml"\n  language="yaml"\n/>\n\n### Start\n\nWhen you run a docker-compose file, it launches the Grafana, Timescale, BI Engine and Webhook containers:\n\n```\ndocker compose pull && docker compose up\n```\n\n### Stop\n\nStop and remove all containers:\n\n```\ndocker compose down\n```\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update BI App and Docker Compose configuration (#6)\n- [App] Add features access for Grafana user role.\n- [App] Update ESLint configuration and refactor.\n- [App] Add Thresholds in range.\n- [App] Remove Docker container workflow.\n- [App] Update Icons and Threshold Colors.\n- [Engine] Add calculation range thresholds.\n- [Engine] Add Transformations and Multi Frames.\n- [Engine] Add retry and timeout for grafana health check.\n- [Engine] Update ESLint configuration and packages.\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-bi-grafana/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.',
  },
  {
    id: "form-panel-3.3.0-20231203/",
    metadata: {
      permalink: "/blog/form-panel-3.3.0-20231203/",
      source: "@site/blog/2023-12-03-form-panel-3.3.0/index.mdx",
      title: "Data Manipulation Panel 3.3.0",
      description:
        "We are happy to announce the release of the Data Manipulation Panel 3.3.0. This release includes the following updates:",
      date: "2023-12-03T00:00:00.000Z",
      formattedDate: "December 3, 2023",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "form-panel-3.3.0-20231203/",
        tags: ["Data Manipulation", "Release Notes"],
        image: "/img/blog/2023-12-03-form-panel-3.3.0/banner.png",
        keywords: ["Data Manipulation", "Form Panel", "Data", "Grafana"],
      },
      prevItem: {
        title: "Business Intelligence App 1.3.0",
        permalink: "/blog/big-1.3.0-20231206/",
      },
      nextItem: {
        title: "Variable Panel 2.2.0",
        permalink: "/blog/variable-panel-2.2.0-20231130/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\nimport Shorts from "@theme/Shorts";\n\n\nWe are happy to announce the release of the Data Manipulation Panel 3.3.0. This release includes the following updates:\n\n- New element type **Read-only Text Area**.\n- New element type **Link**.\n- New option **Options Source**, applicable for all types with Custom options.\n- New **Data Source** option for the Reset request.\n- **Confirmation Window** labels are now customizable.\n- Usability improvement: Code Editor automatic size change.\n- Added compatibility with Grafana 10.2.1.\n\n:::info Grafana Catalog\nThe plugin was updated in the Grafana Plugins catalog on November 23, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/wzFfAk1eIGg"\n  title="Data Manipulation panel 3.3.0 for Grafana."\n/>\n\n## Read-only Text Area\n\nThis new element type is similar to the previously existing read-only type, but this one allows to display multiple rows of text.\n\n<Image\n  title="Read-only Text is a new element type."\n  src="/img/blog/2023-12-03-form-panel-3.3.0/read-text.png"\n/>\n\n## Link Element\n\nThis new element type allows you to add links on your Data Manipulation form. The link text is customizable using the **Link Text** option. If not specified, link address will be displayed.\n\nThe link can be opened in the same or a new tab.\n\n<Image\n  title="Link is a new element type."\n  src="/img/blog/2023-12-03-form-panel-3.3.0/link.png"\n/>\n\n## Select Options from Query\n\nPreviously all types with Custom options supported only options entered manually during the configuration or set using Custom code. Starting from this release, you can reference a query from any configured data source.\n\nYou can specify the **Label** and **Value** fields.\n\n<Image\n  title="Use values from the query for your types with select options."\n  src="/img/blog/2023-12-03-form-panel-3.3.0/options-from-query.png"\n/>\n\n## Data Source for the Reset button\n\nNow you can specify a data source for the **Reset Request** and set payload.\n\n<Image\n  title="Data Source is a new option for Reset Request."\n  src="/img/blog/2023-12-03-form-panel-3.3.0/reset.png"\n/>\n\n## Confirmation Window\n\nThe Confirmation window, if enabled, is shown after a user clicks the submit button to highlight all changes made in the Data Manipulation form.\n\nStarting from this release, you can customize all labels using the **Confirmation Window** section.\n\n<Image\n  title="Customize confirmation window label names."\n  src="/img/blog/2023-12-03-form-panel-3.3.0/confirm.png"\n/>\n\n## Autosize Code Editor\n\nAny option containing code (for instance, **Custom code**, **Show if returned value is true**) changes its size (number of rows) following the number of code rows in it. The smallest size is 10 rows of code which means the size will not shrink to be less than 10 rows. The size can increase up to 50 rows of code.\n\n<Image\n  title="Any option with code changes size (number of rows) automatically."\n  src="/img/blog/2023-12-03-form-panel-3.3.0/size.png"\n/>\n\n## Getting Started\n\nYou can install the Data Manipulation Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-form-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-form-panel\n```\n\n## YouTube Tutorial\n\nData Manipulation Panel is a plugin for Grafana that allows you to insert and update application data, as well as modify configuration directly from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/hVy9NfFiI5U"\n  title="Use REST API, Data Source, and Queries to manipulate your data."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Add Disabled Text Area element type (#243)\n- Add Confirmation Window options (#242)\n- Add context object to the custom code (#255)\n- Add Select Options From Query (#254)\n- Add NumberInput component which allows to enter decimals (#291)\n- Update to Plugin Tools 2.1.1 (#292)\n- Use Grafana Access Policy to sign plugin (#292)\n- Update to Grafana 10.2.1 (#292)\n- Update ESLint configuration (#294)\n- Add Autosize Code Editor (#295)\n- Add Data Source option for Reset button (#296)\n- Add Link Element (#297)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-form-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "variable-panel-2.2.0-20231130/",
    metadata: {
      permalink: "/blog/variable-panel-2.2.0-20231130/",
      source: "@site/blog/2023-11-30-variable-panel-2.2.0/index.mdx",
      title: "Variable Panel 2.2.0",
      description:
        "We are happy to announce the release of the Variable Panel 2.2.0. This release includes the following updates:",
      date: "2023-11-30T00:00:00.000Z",
      formattedDate: "November 30, 2023",
      tags: [
        {
          label: "Variables",
          permalink: "/blog/tags/variables",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "variable-panel-2.2.0-20231130/",
        tags: ["Variables", "Release Notes"],
        image: "/img/blog/2023-11-30-variable-panel-2.2.0/banner.png",
        keywords: ["Variable", "Panel", "Status"],
      },
      prevItem: {
        title: "Data Manipulation Panel 3.3.0",
        permalink: "/blog/form-panel-3.3.0-20231203/",
      },
      nextItem: {
        title: "Business Intelligence App 1.2.0",
        permalink: "/blog/big-1.2.0-20231127/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\nimport Shorts from "@theme/Shorts";\n\n\nWe are happy to announce the release of the Variable Panel 2.2.0. This release includes the following updates:\n\n- Added dashboard redirect option.\n- Search usability improvements:\n  - Added clean filter value button.\n  - Added a new option **Always Visible Search**.\n- TreeView usability improvements:\n  - Added group rename functionality(edit button).\n  - Expanded action area to expand a treeview node.\n- Updated Safari layout and alignment for favorites.\n- Added compatibility with Grafana 10.2.1.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on November 21, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/TtC2bh7a4fE"\n  title="Variable panel 2.2.0 for Grafana."\n/>\n\n## Dashboard redirect option\n\nThis feature allows opening the corresponding dashboard to a variable value. It is useful, for instance, if a variable panel displays a list of some devices where every device requires a specific dashboard.\n\nWhen a user selects a device in the variable panel, the corresponding dashboard opens. With that, the dashboard switch is not obvious for the users. For them, it might seem they stay in one place.\n\nLet us review, how to make it work.\n\n### Map dashboard variables\n\nCreate two dashboard variables. One to retrieve all devices needed. The second is to contain one `dashboard_id` at a time following the device from the first variable.\n\n<Image\n  title="Create a dashboard/variable mapping example."\n  src="/img/blog/2023-11-30-variable-panel-2.2.0/vars.png"\n/>\n\n### Dashboards\n\nCreate specific device dashboards with an identical variable panel on each dashboard.\n\n<Image\n  title="Create specific device dashboards with an identical variable panel."\n  src="/img/blog/2023-11-30-variable-panel-2.2.0/switch-dash.png"\n/>\n\n### Variable panel\n\nConfigure the variable panel. Specify a value for the new parameter **Dashboard**.\n\n<Image\n  title="New parameter - dashboard for redirection."\n  src="/img/blog/2023-11-30-variable-panel-2.2.0/var-conf.png"\n/>\n\nAfter the above-presented configuration, the variable panel switches dashboards when a user selects a device. A sleek transition makes the user experience smooth and pleasant.\n\n## Search usability\n\nTwo features make the search user experience better.\n\n### Clean filter value button\n\nIt is a small, but very nice improvement. Once you start typing in the search text field, you can remove all entered symbols by using an X button appearing at the far-right corner of the search text.\n\n<Image\n  title="Clean filter value button is a new feature."\n  src="/img/blog/2023-11-30-variable-panel-2.2.0/clean.png"\n/>\n\n### Always Visible Search option\n\nThe ability to hide a search text area can be taken away from users by using a new option **Always Visible search**.\n\nWhen it is **Disabled**, the funnel icon is shown on the dashboard. By clicking on the funnel icon, users can alternate between hiding and showing the search text area.\n\nWhen it is **Enabled**, the funnel icon is hidden and with that users are not capable of hiding the search text area.\n\n<Image\n  title="Always visible search is a new feature."\n  src="/img/blog/2023-11-30-variable-panel-2.2.0/hide-search.png"\n/>\n\n## Tree View improvements\n\n### Group rename\n\nNow you can rename a group in the TreeView layout.\n\n<Image\n  title="Always visible search is a new feature."\n  src="/img/blog/2023-11-30-variable-panel-2.2.0/edit-treeview.png"\n/>\n\n### Expand by clicking anywhere\n\nBefore this feature, in order to expand the tree node, you had to be very precise and aim exactly at the arrow next to the name. After this release, clicking anywhere on the whole row with the name expands the tree node.\n\n<Image\n  title="Expand by clicking anywhere on the name row."\n  src="/img/blog/2023-11-30-variable-panel-2.2.0/row.png"\n/>\n\n## Updated Safari layout\n\nIn the Safari web browser, the positioning of star icons indicating the favorites is now aligned in the same style as in all other browsers.\n\n<Image\n  title="The position of the star icons indicating favorites is styled in the same manner as for all other browsers."\n  src="/img/blog/2023-11-30-variable-panel-2.2.0/favs.png"\n/>\n\n## Getting Started\n\nThe Variable panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-variable-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-variable-panel\n```\n\n## YouTube Tutorial\n\nThe Variable panel builds on top of the regular dashboard variables. It allows you to have dashboard filters in a separate panel which you can place anywhere on the dashboard.\n\nThe variable panel offers you single- and multi-variable layouts along with an advanced Tree View.\n\n<Video\n  src="https://www.youtube.com/embed/mYYtMW9qiPA"\n  title="Demonstrates the Variable panel functionality."\n/>\n\n## Release Notes\n\n### Features / Enhancements in 2.2.0\n\n- Add dashboard redirect option (#92)\n- Update ESLint configuration and sort imports (#93)\n- Update Safari layout for favorites (#97)\n- Update to Grafana 10.2.1 (#98)\n- Add clean filter value button (#99)\n\n### Features / Enhancements in 2.1.0\n\n- Add an option for an always-visible search filter (#83)\n- Add Group rename functionality (#84)\n- Add selecting fields from data frames without RefId (#85)\n- Add toggle expanded row state by clicking on the label (#86)\n\n### Bugfixes in 2.1.0\n\n- Update the deselection of All variable value which is not defined in the URL (#87)\n- Removed ability to add group to favorites (#88)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-variable-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "big-1.2.0-20231127/",
    metadata: {
      permalink: "/blog/big-1.2.0-20231127/",
      source: "@site/blog/2023-11-27-big-1.2.0/index.mdx",
      title: "Business Intelligence App 1.2.0",
      description:
        "We are excited to announce the release of the Business Intelligence App, version 1.2.0. At this early stage, it is a proof-of-concept, meaning a product created as a starter to vastly extend its functionality in the future.",
      date: "2023-11-27T00:00:00.000Z",
      formattedDate: "November 27, 2023",
      tags: [
        {
          label: "Business Intelligence",
          permalink: "/blog/tags/business-intelligence",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "big-1.2.0-20231127/",
        tags: ["Business Intelligence", "Release Notes"],
        image: "/img/blog/2023-11-27-big-1.2.0/banner.png",
        keywords: ["Business Intelligence", "Alerting", "Grafana"],
      },
      prevItem: {
        title: "Variable Panel 2.2.0",
        permalink: "/blog/variable-panel-2.2.0-20231130/",
      },
      nextItem: {
        title: "Alerting with Business Intelligence in Grafana",
        permalink: "/blog/big-alerting-20231121/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are excited to announce the release of the Business Intelligence App, version 1.2.0. At this early stage, it is a proof-of-concept, meaning a product created as a starter to vastly extend its functionality in the future.\nThis release includes the following updates:\n\n- Improved the Alerting panel.\n- Added regex patterns for alerts.\n- New for webhooks: added test connectivity and a new **Use by Default** parameter.\n\n<Shorts\n  src="https://www.youtube.com/embed/X2An_gbxX5k"\n  title="Business Intelligence App 1.2.0 for Grafana."\n/>\n\n## Proof of Concept\n\nBusiness Intelligence App is a proof-of-concept project with an expected launch in January 2024. It will include the following components:\n\n- Alerting,\n- High performance Engine,\n- Reporting (Q1 2024),\n- Dashboard management (Q1 2024),\n- Forecasting (Q2 2024).\n\n<Image\n  title="Business Intelligence for Grafana. Our BI(G) project."\n  src="/img/big/concept.png"\n/>\n\n## Alerting panel improvements\n\nThe latest version of the Alerting panel is depicted below. This panel is designed to simplify work with alerts by having all controls in one place and having an intuitive order of configuration settings.\n\nThe creation logic follows the Grafana [alerting basics](/big/big-alerting/).\n\n### Alert card\n\nEvery alert on the Alerting panel has a sleek card with the title, the panel name it evaluates, schedule details, statuses and action buttons.\n\n<Image\n  title="Alert card components."\n  src="/img/blog/2023-11-27-big-1.2.0/alert-card.png"\n/>\n\n### Statuses\n\nThere are two statuses for each alert. One indicates whether the alert is **Active** or has been **Paused**.\n\nAnd the other status might be one of the four values:\n\n- **Scheduled**. The alert is scheduled, but never run yet.\n- **OK**. The alert has been run and the thresholds are NOT breached or the regex pattern is NOT found.\n- **Alerting**. The alert has been run and the thresholds are being breached or the regex pattern is found.\n- **Error**. Something is wrong, which could be the query, annotation or webhook.\n\nRight after an alert is created it becomes **Active** and **Scheduled**. Any active alert could be paused. After any change, the alert status changes to **Scheduled**.\n\n### Action buttons\n\nFour action buttons are available:\n\n- **Info**. Open the drawer with the alert details.\n- **Pause/Active**. Set the alert to pause or active mode.\n- **Edit**. Opens the Edit drawer. When you click in the Edit drawer, the alert status changes to Scheduled.\n- **Delete**. Delete the alert after the user\'s confirmation.\n\n<Image\n  title="The Alerting panel and the Edit alert rule drawer."\n  src="/img/blog/2023-11-27-big-1.2.0/alerting-panel.png"\n/>\n\n## Regex Pattern\n\nThe regex pattern evaluation is a new evaluation option. The alert evaluation could be set to Thresholds or a Regex Pattern:\n\n- **Thresholds**. The alert examines data against the specified thresholds in the panel options.\n- **Regex Pattern**. The alert examines the specified fields (optional) and searches the specified pattern.\n\nThe Evaluation section is shown in the picture above.\n\n## Webhook updates\n\n### Test connectivity\n\nYou can test connectivity in the Edit Webhook drawer using the red button at the bottom.\n\n### Use by Default\n\nYou can set any webhook to be assigned by default, meaning, when a webhook is not specified, the default one is executed.\n\n<Image\n  title="New features for a webhook - connectivity test and use by default."\n  src="/img/blog/2023-11-27-big-1.2.0/webhook.png"\n/>\n\n## Getting Started\n\nYou can download the Development release from our [GitHub repository](https://github.com/volkovlabs/volkovlabs-bi-grafana) and follow this hands-on tutorial.\n\n<Video\n  src="https://www.youtube.com/embed/8UaY916PPXc"\n  title="Metrics, Logs, CPU Usage with BIG Alerting in Grafana | Unscripted and Hands-On"\n/>\n\n### Docker Compose\n\nThe `docker-compose.yml` file consists of the following containers:\n\n- **Grafana** includes the provisioned BI Engine data source, an Alerting panel, and a demo dashboard.\n- **Timescale** is required to store configuration, events, rules, etc.\n- **BI Engine** has a service account key to access Grafana HTTP APIs. It evaluates alert rules and calls webhooks when alert statuses change.\n- **JSON webhook** is a webhook example based on NodeJS, which accepts alert payload and saves it to the files for testing purposes.\n- **Node-RED** provides an HTTP POST endpoint and sends a Slack notification with alert details.\n- **Data Generator** generates test data for threshold evaluation in the demo dashboard.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-bi-grafana/blob/main/docker-compose.yml"\n  language="yaml"\n/>\n\n### Start\n\nWhen you run a docker-compose file, it launches the Grafana, Timescale, BI Engine and Webhook containers:\n\n```\ndocker compose pull && docker compose up\n```\n\n### Stop\n\nStop and remove all containers:\n\n```\ndocker compose down\n```\n\n## Release Notes\n\n### Features / Enhancements\n\n- Initial Proof of Concept (POC) release for testing.\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-bi-grafana/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.',
  },
  {
    id: "big-alerting-20231121/",
    metadata: {
      permalink: "/blog/big-alerting-20231121/",
      source: "@site/blog/2023-11-21-big-alerting/index.mdx",
      title: "Alerting with Business Intelligence in Grafana",
      description:
        "While working closely with the Community and helping to solve production use cases, we have accumulated quite a list of wishes for reimagined alerting functioning.",
      date: "2023-11-21T00:00:00.000Z",
      formattedDate: "November 21, 2023",
      tags: [
        {
          label: "Business Intelligence",
          permalink: "/blog/tags/business-intelligence",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "big-alerting-20231121/",
        tags: ["Business Intelligence"],
        image: "/img/blog/2023-11-21-big-alerting/banner.png",
        keywords: ["Alerting", "Business Intelligence"],
      },
      prevItem: {
        title: "Business Intelligence App 1.2.0",
        permalink: "/blog/big-1.2.0-20231127/",
      },
      nextItem: {
        title: "Dynamic Text Panel 4.2.0",
        permalink: "/blog/dynamictext-panel-4.2.0-20231121/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWhile working closely with the Community and helping to solve production use cases, we have accumulated quite a list of wishes for reimagined alerting functioning.\n\nMost asks were related to simplifying user interaction by possibly having all controls in one UI place. Many users were eager to incorporate forecasting paired with AI for self-hosted Grafana.\n\nThis is how the idea of the BI(G) Alerting was born. With the general thought of making alerting accessible for business users.\n\nIn the video below, I go over the alerting basics, existing alerting system components and our vision of BI(G) Alerting.\n\nBy the way, BI stands for Business Intelligence and G for Grafana. The article below reiterates many points I made in the video and adds more details to some topics.\n\n<Video\n  src="https://www.youtube.com/embed/vky-7-DfvXE"\n  title="BI(G) Alerting Announcement."\n/>\n\n## Alerting basics\n\n**Alerting** is a system to observe how your data changes and act when a change occurs.\n\nThe three main alerting components:\n\n1. **An alert rule**. It is an instruction to evaluate the observable data.\n   Most alert rules have parameters like time frame to check, how often, query to run (SQL and PromQL, etc.), and thresholds.\n\n2. **An alert record**. An alert record is created when observable data goes beyond the threshold.\n\n3. **An alert action**. It is an action triggered by an alert record.\n\n<Image\n  title="Alerting basics."\n  src="/img/blog/2023-11-21-big-alerting/basics.png"\n  width="50%"\n/>\n\n:::note Basics\n\nSo, you describe WHAT to observe and specify the rules of HOW exactly. Then every time the rule is broken, a detailed record with specifics is created. Following the created alert records, alert actions are initiated.\n\n:::\n\n## Native versus BI(G) Alerting\n\nThe schema below depicts the Alerting as it is side-by-side with the BI(G) Alerting, so you can see the similarities and differences. Each of the main alerting components (rule, record, and action) has a corresponding software module.\n\n<Image\n  title="Alerting versus BI(G) alerting."\n  src="/img/blog/2023-11-21-big-alerting/alerting-vs-big.png"\n/>\n\nUsers create alert rules using the Alerting UI.\n\nThe alerting records are created by the alert manager. Every time a rule is broken it creates a record in the annotation table, that way Grafana knows to add a vertical line on a corresponding Time Series.\nThe alert manager works only with backend data sources.\n\nFor the alert actions, Grafana has an extensive notification alerting channel system. Based on the amount of questions we received and came across, it has a steep learning curve. It allows you to set the channels to configure sending text, Slack messages, emails and OnCall.\n\nWebhooks, which are 3rd party APIs, can also be added as triggered by an alert rule record. However, even if the possibility exists the implementation might be foggy for many.\n\nIn the BI(G) Alerting, we reimaged all three modules.\n\n## Alerting Management panel\n\nThe alerting management panel is set to simplify the alert rule creation. We designed it to be intuitive and business-oriented users friendly. You specify all parameters in a one-screen form.\n\nThe new alert rule/edit mode has the following configuration elements to specify:\n\n- **Title** is an alert name.\n- **Schedule** is a frequency of how often the rule should run. With CRON expressions your schedule can be as complex as needed.\n- **Target Dashboard** and **Target Panel** are drop-downs to select from the existing ones. The alert rule will take queries and thresholds from there automatically.\n- **Time Range** could be either taken from the dashboard and specified custom.\n- For the alert **action**, select from the drop-down list of the existing, pre-configured webhook APIs.\n- Disabled **Annotation** option will prevent sending a record into the annotation table.\n\nWe target to have the Alert Management UI panel work with hundreds or even thousands of alerts with grouping and filtering to ensure easy navigation and control.\n\n<Image\n  title="Alerting Management Panel."\n  src="/img/blog/2023-11-21-big-alerting/alert-management-ui.png"\n/>\n\n### BI Engine\n\nWe reimagined the alert manager and came up with the BI Engine:\n\n- It supports both frontend and backend data sources.\n- It uses dashboards as configuration which means it retrieves dashboard queries and thresholds and uses them as alert rule parameters. That eliminates the duplicative work when users have to enter the same specifics twice.\n- It is installed in a separate container which makes the system architecture flexible.\n\nIn the future, we will include forecasting with AI algorithms.\n\nTo connect to the Alerting BI Engine, you need the Business Intelligence data source installed and configured.\n\n<Image\n  title="Business Intelligence Data Source."\n  src="/img/blog/2023-11-21-big-alerting/bi-ds.png"\n/>\n\n### Webhooks UI panel\n\nThis panel lists all configured webhooks. In the edit mode, you specify a name, type (HTTP or Test), request URL and request method. For now, only POST is available.\n\n<Image\n  title="Webhook configuration panel."\n  src="/img/blog/2023-11-21-big-alerting/web-hooks-panel.png"\n/>\n\n## Development release\n\nYou can download the Development release from our [GitHub repository](https://github.com/volkovlabs/volkovlabs-bi-grafana) and follow this hands-on tutorial.\n\n<Video\n  src="https://www.youtube.com/embed/8UaY916PPXc"\n  title="Metrics, Logs, CPU Usage with BIG Alerting in Grafana | Unscripted and Hands-On"\n/>\n\nThe docker-compose file consists of the following containers:\n\n- **Grafana** includes the provisioned BI Engine data source, an Alerting panel, and an example dashboard.\n- **Timescale** is required to store configuration, events, rules, etc.\n- **BI Engine** has a service account key to access Grafana HTTP APIs. It evaluates alert rules and calls webhooks when alert statuses change.\n- **JSON webhook** is a webhook example based on NodeJS, which accepts alert payload and saves it to the files for testing purposes.\n- **Node-RED** provides an HTTP POST endpoint and sends a Slack notification with alert details.\n\nWhen you run a docker-compose file, it launches the Grafana, Timescale, BI Engine and Webhook containers.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-bi-grafana/blob/main/docker-compose.yml"\n  language="yaml"\n/>\n\n## Early adopters\n\nReach out if you are interested in the product roadmap discussion. We are happy to gather a group of early adopters to swiftly push this product forward.\n\nThe first official version is planned in January \'24, and there is so much more to come afterwards. Together we can ensure the product includes the most desired features.\n\n## Questions?\n\nIf you have any questions about this article, please, do not hesitate to leave them in the comments section under the [YouTube video](https://www.youtube.com/embed/vky-7-DfvXE).\n\n## Become a member!\n\nBecome a [member of our fan club](https://www.youtube.com/channel/UCQadniwbukI6ZmTN2oTTb-g/join) and earn loyalty badges!',
  },
  {
    id: "dynamictext-panel-4.2.0-20231121/",
    metadata: {
      permalink: "/blog/dynamictext-panel-4.2.0-20231121/",
      source: "@site/blog/2023-11-21-dynamictext-panel-4.2.0/index.mdx",
      title: "Dynamic Text Panel 4.2.0",
      description:
        "We're excited to announce the release of the Dynamic Text Panel 4.2.0. This feature release includes the following updates:",
      date: "2023-11-21T00:00:00.000Z",
      formattedDate: "November 21, 2023",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "dynamictext-panel-4.2.0-20231121/",
        tags: ["Dynamic Text", "Release Notes"],
        image: "/img/blog/2023-11-21-dynamictext-panel-4.2.0/banner.png",
        keywords: ["Dynamic Text", "Panel", "JavaScript", "Events", "Grafana"],
      },
      prevItem: {
        title: "Alerting with Business Intelligence in Grafana",
        permalink: "/blog/big-alerting-20231121/",
      },
      nextItem: {
        title: "Calendar Panel 2.3.1",
        permalink: "/blog/calendar-panel-2.3.0-20231101/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe\'re excited to announce the release of the Dynamic Text Panel 4.2.0. This feature release includes the following updates:\n\n- Added **JavaScript->After Content Ready** option to execute after the DOM rendered.\n- Added an option to enable/disable text wrapping to support empty lines in HTML.\n- Added handlebars (startsWith, endsWith, match).\n- Added compatibility with Grafana 10.2.1.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in Grafana Catalog on November 21, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/qsHtYoPL0LI"\n  title="Dynamic Text 4.2.0 for Grafana."\n/>\n\n## 4.4 million downloads\n\nWe celebrated 2 million downloads this February. Since then many more fundamental features have been added like JavaScript, CSS styles and Grafana events. We suspect them to be the primary reason for the extreme adaptability acceleration.\n\nMore than four million downloads as of today! Thank you for your trust!\n\n<Image\n  title="Dynamic Text Panel was downloaded more than four million times."\n  src="/img/blog/2023-11-21-dynamictext-panel-4.2.0/downloads.png"\n  lazy={false}\n/>\n\n## JavaScript code after content ready\n\nThis is a new panel option to specify another JavaScript code. This one will be executed after the **Content** option rendered.\n\nAnother important change to point out is we reorganized the UI positioning of panel options for a more intuitive display.\n\nStarting from this release, you see separate sections for:\n\n- Content (with Content and Default content inside),\n- JavaScript (with the Before and After rendering options inside),\n- CSS styles.\n\n<Image\n  title="New order of the panel options."\n  src="/img/blog/2023-11-21-dynamictext-panel-4.2.0/order.png"\n/>\n\nFor a cleaner view, you can control which options are visible in the **Dynamic Text** section.\n\n<Image\n  title="Show/hide the options you need using the Dynamic Text section."\n  src="/img/blog/2023-11-21-dynamictext-panel-4.2.0/show-hide.png"\n/>\n\n## The Rendering Order\n\nBelow are two schemas of the rendering order in the Dynamic text plugin. They represent the same thing.\n\nThe first is oriented toward the general public and the second is targeted to answer developers\' questions.\n\n### For Users\n\n<Image\n  title="The Rendering Order for Users."\n  src="/img/blog/2023-11-21-dynamictext-panel-4.2.0/order-all.png"\n/>\n\n### For Developers\n\n<Image\n  title="The Rendering Order for Developers."\n  src="/img/blog/2023-11-21-dynamictext-panel-4.2.0/order-dev.png"\n/>\n\n## Content Wrapping\n\nWe added a new option **Wrap automatically in paragraphs** into the **Content** section.\n\n- If enabled, every row of the content will be wrapped into paragraph `<p>` tags.\n- If disabled, every row will NOT be wrapped into paragraph `<p>` tags.\n\nThe example below shows the Content that does not contain any spaces. In that event, the new parameter is irrelevant and both Enabled and Disabled modes generate the same output.\n\n<Image\n  title="No spaces in the Content, the wrap parameter is irrelevant. The dashboard looks as expected for both, Enabled and Disabled, modes."\n  src="/img/blog/2023-11-21-dynamictext-panel-4.2.0/no-empty-lines.png"\n/>\n\nThe example below shows the Content that contains one empty line and how the form will be interpreted with Enabled and Dispaled modes.\n\n<Image\n  title="The wrap option effect on the Content with space in it."\n  src="/img/blog/2023-11-21-dynamictext-panel-4.2.0/yes-empty-lines.png"\n/>\n\nThe code used in the examples above:\n\n```html\n<figure>\n  <ul>\n    <li>In Progress : 34</li>\n    <li>Completed : 5</li>\n  </ul>\n</figure>\n```\n\n## New handlebars\n\nIn the **JavaScript->before rendering content** option a user can register handlebars which are functions to use in the rest of the code.\n\nThe Dynamic Text panel has plenty of predefined handlebars that are registered automatically and ready to use. All of them are listed on our [documentation page](/plugins/volkovlabs-dynamictext-panel/helpers/).\n\nIn this release, we added three more:\n\n### startsWith\n\nReturns true if the variable starts with a specified value.\nExample:\n\n```md\n|Name| My Value| |---|---|\n{{#each @root}}\n{{#if (startsWith @key "My_")}}\n| {{@key}} | {{this}} |\n{{/if}}\n{{/each}}\n```\n\n### endsWith\n\nReturns true if the variable ends with a specified value.\nExample:\n\n```md\n|Name| My Keys| |---|---|\n{{#each @root}}\n{{#if (endsWith @key "_key")}}\n| {{@key}} | {{this}} |\n{{/if}}\n{{/each}}=\n```\n\n### match\n\nReturns true if the variable matches with a specified value.\nExample:\n\n```md\n|Key| Value| |---|---|\n{{#each @root}}\n{{#if (match @key "^(Country|Street|Post)")}}\n| {{@key}} | {{this}} |\n{{/if}}\n{{/each}}\n```\n\n## Getting Started\n\nYou can install Dynamic Text Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-dynamictext-panel\n```\n\n## YouTube Tutorial\n\nThe Dynamic Text panel is a mighty Grafana plugin to convert any monotonous bulk of data into vibrant, effortlessly comprehended visualization.\n\nTo this moment, I have created three videos. The latest one describes more features as more features have been implemented to the day of creation.\nYet, the latest Dynamic Text plugin version is far more advanced with numerous new features implemented since August.\n\n### Video 3, published on August 15, 2023\n\nIn this video, I touch upon the main features and panel options along with demonstrating community use cases.\n\n<Video\n  src="https://www.youtube.com/embed/AcQi-6GCrNU"\n  title="Dynamic Text plugin for Grafana | Use HTML, Markdown, JavaScript and CSS | Community use cases."\n/>\n\n### Video 2, published on January 29, 2023\n\nSince the latest release, the community has requested many changes. This video outlines all the new features we implemented, including the most asked-for JavaScript area code.\n\n<Video\n  src="https://www.youtube.com/embed/lJqk5Gobec4"\n  title="JavaScript code in Dynamic Text Panel."\n/>\n\n### Video 1, published on October 24, 2022\n\nThis is the first guide we created for the Dynamic Text plugin for Grafana.\nThe plugin does a fantastic job by transforming bland table data into vibrant, readable visualization emphasizing critical tidbits.\n\n<Video\n  src="https://www.youtube.com/embed/MpNZ4Yl-p0U"\n  title="Markdown, HTML, and Handlebars for transforming data visualizations."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Add ESLint deprecation check (#203)\n- Add custom code option which is called after content is ready (#231)\n- Add option to enabled/disable wrapping to support empty lines in HTML (#235)\n- Add handlebars (startsWith, endsWith, match) (#211)\n- Update ESLint configuration and sort imports (#236)\n- Update to Plugin Tools 2.1.1 (#236)\n- Use Grafana Access Policy to sign plugin (#236)\n- Update to Grafana 10.2.1 (#237)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "calendar-panel-2.3.0-20231101/",
    metadata: {
      permalink: "/blog/calendar-panel-2.3.0-20231101/",
      source: "@site/blog/2023-11-01-calendar-panel-2.3.0/index.mdx",
      title: "Calendar Panel 2.3.1",
      description:
        "We are happy to announce the release of the Calendar Panel 2.3.1. This release includes the following updates.",
      date: "2023-11-01T00:00:00.000Z",
      formattedDate: "November 1, 2023",
      tags: [
        {
          label: "Calendar",
          permalink: "/blog/tags/calendar",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "calendar-panel-2.3.0-20231101/",
        tags: ["Calendar", "Release Notes"],
        image: "/img/blog/2023-11-01-calendar-panel-2.3.0/banner.png",
        keywords: ["Calendar", "Panel", "Events", "Time Range", "Grafana"],
      },
      prevItem: {
        title: "Dynamic Text Panel 4.2.0",
        permalink: "/blog/dynamictext-panel-4.2.0-20231121/",
      },
      nextItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 4.1.0",
        permalink: "/blog/image-panel-4.1.0-20231029/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Calendar Panel 2.3.1. This release includes the following updates.\n\n- Added Internationalization(i18n), supported languages include English, Spanish, French, German, and Chinese.\n\nFor the **Big Calendar** type:\n\n- Added the **Year** view.\n- Added **Default View** option.\n- Added **Scroll To Time** option.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in Grafana Catalog on November 7, 2023.\n:::\n\n## Internationalization\n\nThe language you specify in the user profile menu will be used throughout the Calendar panel on the dashboard as well as in the edit mode for panel options.\n\n<Image\n  title="UI Internationalization on the Calendar panel."\n  src="/img/blog/2023-11-01-calendar-panel-2.3.0/i18n.png"\n/>\n\n## Year for Big Calendar\n\nFor the Big Calendar type, we added one more View option **Year**. It displays 12 months at the same time. The purpose of this view is to help navigate throughout the calendar since it makes it easier to jump into any day and month of the year.\n\nIf you need any particular information to be displayed in the Year view, please, let us know.\n\n<Image\n  title="The Year view of the Calendar panel."\n  src="/img/blog/2023-11-01-calendar-panel-2.3.0/year.png"\n/>\n\n## Default view for Big Calendar\n\nWith this setting, you can control what your calendar will look like after a page refresh. Any of the calendar views can be selected as a default view.\n\n<Image\n  title="The default view of the Calendar panel is a new option."\n  src="/img/blog/2023-11-01-calendar-panel-2.3.0/default.png"\n/>\n\n## Scroll to Time option for Big Calendar\n\nThis setting applies to the Day and Week views. The Calendar panel ensures that the specified in this option time is always visible.\n\nPlease, note, that there could be two visibility scenarios.\n\nOne is when the Calendar panel itself is stretched out to a bigger size than your browser window. In that case, the panel might consider the specified time visible when it is not visible to you. The scrolling in that scenario scrolls a browser window. Scenario 1 is in the picture below.\n\nAnother scenario is when the Calendar panel itself is fully visible in your browser window, but the calendar has to be scrolled within the panel. In that event, the Scroll to Time option takes effect. Scenario 2 is in the picture below.\n\n<Image\n  title="The new Scroll to Time option explained."\n  src="/img/blog/2023-11-01-calendar-panel-2.3.0/scroll.png"\n/>\n\n## Getting Started\n\nYou can install Calendar Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-calendar-panel\n```\n\n## YouTube Tutorial\n\nCalendar Panel is a Grafana plugin that displays events from various data sources.\n\n<Video\n  src="https://www.youtube.com/embed/iPJ122x0oos"\n  title="Display events from the JSON API data source."\n/>\n\n## Release Notes\n\n### Bugfixes in 2.3.1\n\n- Fix import order for default big-calendar styles and their overrides (#143)\n\n### Features / Enhancements in 2.3.0\n\n- Added yearly view (#134)\n- Added internationalization(Spanish, French, German, and Chinese) i18n (#135, #138)\n- Added default view option (#137)\n- Added scroll to Time option for BigCalendar (#140, #141)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-calendar-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "image-panel-4.1.0-20231029/",
    metadata: {
      permalink: "/blog/image-panel-4.1.0-20231029/",
      source: "@site/blog/2023-10-29-image-panel-4.1.0/index.mdx",
      title: "Base64 Image/Video/Audio/PDF Panel 4.1.0",
      description:
        "We are excited to announce the release of the Base64 Image/Video/Audio/PDF Panel 4.1.0. This major release includes the following updates:",
      date: "2023-10-29T00:00:00.000Z",
      formattedDate: "October 29, 2023",
      tags: [
        {
          label: "Base64 Image/Video/Audio/PDF",
          permalink: "/blog/tags/base-64-image-video-audio-pdf",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "image-panel-4.1.0-20231029/",
        tags: ["Base64 Image/Video/Audio/PDF", "Release Notes"],
        image: "/img/blog/2023-10-29-image-panel-4.1.0/banner.png",
        keywords: ["Base64", "Panel", "Zoom", "Label", "Images"],
      },
      prevItem: {
        title: "Calendar Panel 2.3.1",
        permalink: "/blog/calendar-panel-2.3.0-20231101/",
      },
      nextItem: {
        title: "Grafana HTTP API Data Source 2.2.0",
        permalink: "/blog/grapi-datasource-2.2.0-20231027/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are excited to announce the release of the Base64 Image/Video/Audio/PDF Panel 4.1.0. This major release includes the following updates:\n\n- Added Image Scale Algorithm option.\n- Added compatibility with Grafana 10.1.5.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in Grafana Catalog on October 30, 2023.\n:::\n\n## 1 million downloads\n\nThe Base64 Panel just hit an impressive milestone of being downloaded 1 million times! Thank you for your trust and support.\n\n<Image\n  title="Total downloads from Grafana Catalog for the Base64 Panel."\n  src="/img/blog/2023-10-29-image-panel-4.1.0/downloads.png"\n  lazy={false}\n/>\n\n## Image Scale Algorithm\n\nWe added a new section **Image** with one drop-down parameter **Scale Algorithm** to specify how scaling of the image should be done. We have three options to choose from:\n\n- **Auto**. A browser chooses the best available algorithm.\n- **Crisp Edges**. The image is scaled with an algorithm that preserves contrast and edges in the image. Generally intended for images such as pixel art or line drawings, no blurring or color smoothing occurs.\n- **Pixelated**. The image is scaled with the "nearest neighbor" or similar algorithm, preserving a "pixelated" look as the image changes in size.\n\n:::info\nThe **Crisp Edges** option is not supported in all browsers: https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering\n:::\n\n<Image\n  title="Difference between Auto and Pixelated Scale Algorithms."\n  src="/img/blog/2023-10-29-image-panel-4.1.0/auto-pix.png"\n/>\n\n## Getting Started\n\nYou can install Base64 Image/Video/Audio/PDF Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-image-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-image-panel\n```\n\n## YouTube Tutorial\n\nBase64 Image/Video/Audio/PDF Panel is a Grafana plugin that renders PNG, JPG, GIF, MP4, WEBM, MP3, OGG, and PDF files encoded in the Base64 format.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Video, Live Camera Feed on Grafana Dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update ESLint configuration (#84)\n- Add Image Scale Algorithm option (#89)\n- Update to Plugin Tools 2.1.1 (#90)\n- Use Grafana Access Policy to sign plugin (#90)\n- Update to Grafana 10.1.5 (#90)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-image-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "grapi-datasource-2.2.0-20231027/",
    metadata: {
      permalink: "/blog/grapi-datasource-2.2.0-20231027/",
      source: "@site/blog/2023-10-27-grapi-datasource-2.2.0/index.mdx",
      title: "Grafana HTTP API Data Source 2.2.0",
      description:
        "We are happy to announce the release of the Grafana HTTP API Data Source 2.2.0. This release includes the following updates:",
      date: "2023-10-27T00:00:00.000Z",
      formattedDate: "October 27, 2023",
      tags: [
        {
          label: "Grafana HTTP API Data Source",
          permalink: "/blog/tags/grafana-http-api-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "grapi-datasource-2.2.0-20231027/",
        tags: ["Grafana HTTP API Data Source", "Release Notes"],
        image: "/img/blog/2023-10-27-grapi-datasource-2.2.0/banner.png",
        keywords: ["Grafana", "HTTP API", "Data Source", "Annotations"],
      },
      prevItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 4.1.0",
        permalink: "/blog/image-panel-4.1.0-20231029/",
      },
      nextItem: {
        title: "Variable Panel 2.0.0",
        permalink: "/blog/variable-panel-2.0.0-20231019/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Grafana HTTP API Data Source 2.2.0. This release includes the following updates:\n\n- Added the <b>Local</b> mode to access a local instance.\n- Added the <b>Values</b> field for Annotations.\n- Added <b>Organization Users</b> into the Request options.\n- Refactored API and increased test coverage to 99%.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on September 21, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/K6U1ZpG6a5U"\n  title="HTTP API Data Source 2.2.0 for Grafana."\n/>\n\n## 100,000 downloads\n\nThe Grafana HTTP API Data Source was downloaded more than 100,000 times! Thank you for your trust and support.\n\n<Image\n  title="Total downloads from Grafana Catalog for the Grafana HTTP API Data Source."\n  src="/img/blog/2023-10-27-grapi-datasource-2.2.0/downloads.png"\n/>\n\n## Local mode\n\nWith the <b>Local</b> request mode, the Grafana HTTP API data source connects to the local configuration storage using the same Grafana privileges a user has been assigned during login and, thus, simplifies the access policy.\n\nThe <b>Local</b> request mode has no parameters.\n\n<Image\n  title="The new Local request mode has no parameters."\n  src="/img/blog/2023-10-27-grapi-datasource-2.2.0/local.png"\n/>\n\nWith the <b>Remote</b> request mode, the privileges are taken from the token and might differ from those assigned during login into Grafana.\n\n## Values in Annotations\n\nStarting from this release, the HTTP API data source digests the <b>Values</b> field from the Annotations\'s text.\n\n<Image\n  title="Values field is digested from the Annotations."\n  src="/img/blog/2023-10-27-grapi-datasource-2.2.0/value.png"\n/>\n\nAs shown below, you can always use transformations to have one value per column format.\n\n<Image\n  title="Use the transformation \'Extract fields\' to convert Values into columns."\n  src="/img/blog/2023-10-27-grapi-datasource-2.2.0/trans.png"\n/>\n\n## Organization Users\n\n**Request** in the query editor is a drop-down parameter that appears when you connect your panel\nto the HTTP API data source. In addition to all existing options, we added\n**Organization Users**. The picture below illustrates the new possibility.\n\n<Image\n  title="The new Organization Users option in the Request parameter."\n  src="/img/blog/2023-10-27-grapi-datasource-2.2.0/users.png"\n/>\n\n## Getting Started\n\nThe Grafana HTTP API Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-grapi-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-grapi-datasource\n```\n\n## YouTube Tutorial\n\n<Video\n  src="https://www.youtube.com/embed/0zibOEGqTJ8"\n  title="Easy access to Grafana backend using Grafana HTTP API data source."\n/>\n\n## Release Notes\n\n### Features / Enhancements in 2.2.0\n\n- Moved API methods under the feature flag to support various Grafana versions (#53)\n- Added an option to disable Alert Rules in Annotations (#55)\n- Added a values field from annotation text (#30)\n\n### Features / Enhancements in 2.1.0\n\n- Refactored API and increased test coverage (#50)\n- Updated ESLint configuration (#50)\n- Added Local mode to access local instance (#51)\n- Added Organization Users (#52)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-grapi-datasource/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "variable-panel-2.0.0-20231019/",
    metadata: {
      permalink: "/blog/variable-panel-2.0.0-20231019/",
      source: "@site/blog/2023-10-19-variable-panel-2.0.0/index.mdx",
      title: "Variable Panel 2.0.0",
      description:
        "We are happy to announce the release of the Variable Panel 2.0.0. This release includes the following updates:",
      date: "2023-10-19T00:00:00.000Z",
      formattedDate: "October 19, 2023",
      tags: [
        {
          label: "Variables",
          permalink: "/blog/tags/variables",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "variable-panel-2.0.0-20231019/",
        tags: ["Variables", "Release Notes"],
        image: "/img/blog/2023-10-19-variable-panel-2.0.0/banner.png",
        keywords: ["Variable", "Panel", "Status"],
      },
      prevItem: {
        title: "Grafana HTTP API Data Source 2.2.0",
        permalink: "/blog/grapi-datasource-2.2.0-20231027/",
      },
      nextItem: {
        title: "Data Manipulation Panel 3.2.1",
        permalink: "/blog/form-panel-3.2.1-20231010/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Variable Panel 2.0.0. This release includes the following updates:\n\n- Added handling of the enter key for the Text Box variable type.\n- Added a clear(empty) value for the multi-value variables.\n- Added support for the Grafana key-value variable format for all display modes.\n- Significant performance improvements.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on October 18, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/ghaFZ3ts3kk"\n  title="Variable panel 1.7.0 and 2.0.0 for Grafana."\n/>\n\n## Enter the key for the Text Box type\n\nHitting the enter key after typing a text value in the Text box variable type will trigger the dashboard refresh. Before implementing this feature, a user had to use a mouse cursor to click outside the box for the variable to take effect.\n\n<Image\n  title="You can use the enter key for the variable to take effect."\n  src="/img/blog/2023-10-19-variable-panel-2.0.0/enter.png"\n/>\n\n## Improved Performance\n\nUp to 10,000 records will work swiftly without significant performance degradation. For up to 50,000 records, you might notice a slight one- to two-second delay. We achieved that improvement by using a table virtualization approach.\n\nThe illustration below displays the performance statistics we collected in the Chrome extensions to confirm the approach is working.\n\n<Image\n  title="Initial load time with 50,000 items in the table view."\n  src="/img/blog/2023-10-19-variable-panel-2.0.0/performance.png"\n/>\n\n## Empty value in Multi-value Variables\n\nThis feature works for the following Minimize and Button display modes.\n\n<Image\n  title="Empty Value allowed for the Minimize and Button Display modes."\n  src="/img/blog/2023-10-19-variable-panel-2.0.0/empty-value.png"\n/>\n\nIn previous versions, after a user had selected an item in a Multi-value variable, there was no way to unselect all values.\n\n<Image\n  title="Multi-value setting for dashboard variables."\n  src="/img/blog/2023-10-19-variable-panel-2.0.0/multi-value.png"\n/>\n\nFor this feature to work, you must enable the <b>Empty Value</b> parameter in the Variable section.\n\n<Image\n  title="When Empty value is enabled, a user can unselect all variable values."\n  src="/img/blog/2023-10-19-variable-panel-2.0.0/empty-all.png"\n/>\n\n## Key-values format in Variables\n\nWe introduced this feature in version 1.7.0 and it was limited to the Table/Tree View. Starting from this release all display modes (Table/Tree View, Minimize, Button) support the key-value variable format.\n\nA Grafana variable can be composed of a key and value to make it possible to join data sets by IDs(key) while displaying user-friendly names(value).\n\nIn the illustration below, screen 1, the `city` variable is created with three key-value pairs.\n\n```text\nChicago:1, New York:2, Tampa:3\n```\n\nScreen 2 is a dashboard view where an end-user sees only city names. After the selection is made (here, New York:2), the variable carries a value equal to 2.\n\nFrom there the `city` variable\'s value can be used in the queries for other panels, screen 3.\n\n<Image\n  title="Example of the key-value variable format in the Variable panel."\n  src="/img/blog/2023-10-19-variable-panel-2.0.0/key-value.png"\n/>\n\n## Getting Started\n\nThe Variable panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-variable-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-variable-panel\n```\n\n## YouTube Tutorial\n\nThe Variable panel builds on top of the regular dashboard variables. It allows you to have dashboard filters in a separate panel which you can place anywhere on the dashboard.\n\nThe variable panel offers you single- and multi-variable layouts along with an advanced Tree View.\n\n<Video\n  src="https://www.youtube.com/embed/mYYtMW9qiPA"\n  title="Demonstrates the Variable panel functionality."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update variable option label for parent items in tree view (#62)\n- Add handling enter and escape keys for Text Variable (#69)\n- Add table virtualization to improve performance (#64, #74)\n- Clear value for the multi-choice variable (#66)\n- Update to Plugin Tools 2.1.1 (#72)\n- Use Grafana Access Policy to sign plugin (#72)\n- Update to Grafana 10.1.5 (#73)\n\n### Bugfixes\n\n- Fix key:value option selection for Minimize and Button views (#75)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-variable-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "form-panel-3.2.1-20231010/",
    metadata: {
      permalink: "/blog/form-panel-3.2.1-20231010/",
      source: "@site/blog/2023-10-10-form-panel-3.2.1/index.mdx",
      title: "Data Manipulation Panel 3.2.1",
      description:
        "We are happy to announce the release of the Data Manipulation Panel 3.2.1. This release includes the following updates:",
      date: "2023-10-10T00:00:00.000Z",
      formattedDate: "October 10, 2023",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "form-panel-3.2.1-20231010/",
        tags: ["Data Manipulation", "Release Notes"],
        image: "/img/blog/2023-10-10-form-panel-3.2.1/banner.png",
        keywords: ["Data Manipulation", "Form Panel", "Data", "Grafana"],
      },
      prevItem: {
        title: "Variable Panel 2.0.0",
        permalink: "/blog/variable-panel-2.0.0-20231019/",
      },
      nextItem: {
        title: "Calendar Panel 2.2.0",
        permalink: "/blog/calendar-panel-2.2.0-20231006/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Data Manipulation Panel 3.2.1. This release includes the following updates:\n\n- Added minimum and maximum date limit for the date time element.\n- Added a field mapping for the <b>Data Source</b> Initial Request type.\n- Added a field mapping for the <b>Query</b> Initial Request type.\n- <b>Show If returned value is true</b> element now supports variables.\n- Added the ability to restrict a file type for the File element.\n- Added indication of loading in progress for Initial, Update and Reset button actions.\n- Added the ability to have icons for radio and select options.\n\n:::info Grafana Catalog\nThe plugin was updated in the Grafana Plugins catalog on September 11, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/pBaKNTCjIVg"\n  title="Data Manipulation Panel 3.2.1 for Grafana."\n/>\n\n## Date Time\n\nNow you can impose the allowed minimum and maximum date by using the familiar built-in Grafana controls.\n\n<Image\n  title="Impose minimum and maximum for the Date Time type."\n  src="/img/blog/2023-10-10-form-panel-3.2.1/min-max.png"\n/>\n\n## Field Mapping\n\nFollowing many community requests, we made field-to-form element mapping for the <b>Data Source</b> and <b>Query</b> initial request type more straightforward. Now you can do it using a new parameter that appears for every form element when the proper initial request type is selected.\n\n### Data Source\n\n<Image\n  title="Explicitly specify the field-to-form element mapping for Data Source using a new parameter."\n  src="/img/blog/2023-10-10-form-panel-3.2.1/field-name-ds.png"\n/>\n\n### Query\n\n<Image\n  title="Explicitly specify the field-to-form element mapping for Query using a new parameter."\n  src="/img/blog/2023-10-10-form-panel-3.2.1/field-name-query.png"\n/>\n\n## Show If supports variables\n\nEvery form element has the <b>Show If returned value is true</b> parameter where you enter JavaScript code.\n\n- If this code returns `true`, the element is shown on the panel.\n- If this code returns `false`, the element is hidden from the panel.\n\n<Image\n  title="Conditional visibility example."\n  src="/img/blog/2023-10-10-form-panel-3.2.1/select.png"\n/>\n\nExample code to check the current value of the `select` element and show the `dateTime` element if the value equal to `max`:\n\n```js\nconst select = elements.find((element) => element.id === "select");\n\nif (select) {\n  return select.value === "max";\n}\n```\n\nIn this release, we made it possible to use dashboard and global variables within your JavaScript code.\n\n<Image\n  title="Conditional visibility using a dashboard variable example."\n  src="/img/blog/2023-10-10-form-panel-3.2.1/var.png"\n/>\n\nExample code to check the value of the dashboard variable `var`:\n\n```\nconst test = replaceVariables(\'$var\');\nreturn test === \'test\'\n```\n\n## File Upload\n\nFor the File type, you can specify a list of allowed file extensions.\n\n<Image\n  title="A new parameter for the File type - accepted file extensions."\n  src="/img/blog/2023-10-10-form-panel-3.2.1/accepted.png"\n/>\n\n## Indication of loading in progress\n\nIf the data loading takes time, the Data Manipulation form will indicate that as follows.\n\n### Initial Request\n\nThe end user will see a running blue line at the top of the form.\n\n<Image\n  title="A moving blue line indicates an initial request being in progress."\n  src="/img/blog/2023-10-10-form-panel-3.2.1/status-initial.png"\n/>\n\n### Update Request\n\nAll buttons are disabled and moving circled dots are placed instead of the Submit button icon.\n\n<Image\n  title="Dots moving in a circle indicate an update request being in progress."\n  src="/img/blog/2023-10-10-form-panel-3.2.1/status-update.png"\n/>\n\n### Custom Code\n\nCustom code can be asynchronous. For that, the custom code should return the promise.\n\n```\nconst getInitialData = async () => {\n  const response = await fetch(\'http://123\');\n\n  const data = await response.json();\n\n  /**\n   * Update Elements with data\n   */\n  onChange([])\n}\n\n/**\n * Return Promise\n */\nreturn getInitialData()\n```\n\n## Radio and Select icons\n\nRadio with Custom options element and two Select elements (Select with custom options and Multi Select with Custom options) have the <b>Options</b> parameter where you specify all possible choices that a user can make.\n\nStarting from this release, every such choice in addition to type, value and label, now has an icon parameter. You can select from the standard Grafana icon list.\n\n<Image\n  title="Icon is a new parameter."\n  src="/img/blog/2023-10-10-form-panel-3.2.1/icons.png"\n/>\n\n## Getting Started\n\nYou can install the Data Manipulation Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-form-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-form-panel\n```\n\n## YouTube Tutorial\n\nData Manipulation Panel is a plugin for Grafana that allows you to insert and update application data, as well as modify configuration directly from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/hVy9NfFiI5U"\n  title="Use REST API, Data Source, and Queries to manipulate your data."\n/>\n\n## Release Notes\n\n### Features / Enhancements in 3.2.1\n\n- Added backward compatibility for option id (#244)\n\n### Features / Enhancements in 3.2.0\n\n- Added min and max date for date time element (#225)\n- Added mapping Data Source values to elements (#224)\n- Updated element Show If to support variables (#230)\n- Added clearing errors before initial and update requests (#232)\n- Added URL encode to variables (#231)\n- Updated section name to allow empty values (#228)\n- Added Query Field Picker for Initial Request (#227)\n- Added File element type for File Upload (#229)\n- Added converting option value to string and number based on type (#233)\n- Added loading states for Initial, Update and Reset button actions (#234)\n- Added support for asynchronous custom code (#234)\n- Updated Query and Data Source initial request (#237)\n- Added icons for radio and select options (#238)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-form-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "calendar-panel-2.2.0-20231006/",
    metadata: {
      permalink: "/blog/calendar-panel-2.2.0-20231006/",
      source: "@site/blog/2023-10-06-calendar-panel-2.2.0/index.mdx",
      title: "Calendar Panel 2.2.0",
      description:
        "We are happy to announce the release of the Calendar Panel 2.2.0. This release includes the following updates.",
      date: "2023-10-06T00:00:00.000Z",
      formattedDate: "October 6, 2023",
      tags: [
        {
          label: "Calendar",
          permalink: "/blog/tags/calendar",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "calendar-panel-2.2.0-20231006/",
        tags: ["Calendar", "Release Notes"],
        image: "/img/blog/2023-10-06-calendar-panel-2.2.0/banner.png",
        keywords: ["Calendar", "Panel", "Events", "Time Range", "Grafana"],
      },
      prevItem: {
        title: "Data Manipulation Panel 3.2.1",
        permalink: "/blog/form-panel-3.2.1-20231010/",
      },
      nextItem: {
        title:
          "Monitoring Linux servers with Prometheus, Node Exporter and Grafana Time Series",
        permalink: "/blog/timeseries-dashboard-20230926/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Calendar Panel 2.2.0. This release includes the following updates.\n\nOnly for the Big Calendar.\n\n- New option parameter: event location.\n- Text color auto adjustment to ensure a readable contrast with the background.\n- New ability to select views: day, week, work week, and month.\n\nFor the Legacy and Big Calendar.\n\n- Added support for dashboard timezone in Start and End time.\n- Added compatibility with Grafana 10.1.4.\n\n<Image\n  title="Calendar panel supports Legacy and Big Calendar types."\n  src="/img/blog/2023-10-06-calendar-panel-2.2.0/calendar-type.png"\n  width="30%"\n/>\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on October 10, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/bshA7hVVYpY"\n  title="Calendar Panel 2.2.0 for Grafana."\n/>\n\n## 2 million downloads\n\nThe Calendar panel inevitably targets the 2 million downloads mark towards the end of this year! Thank you for your trust and support.\n\n<Image\n  title="Calendar panel is on the way to 2 million downloads."\n  src="/img/blog/2023-10-06-calendar-panel-2.2.0/downloads.png"\n/>\n\n## Event Location\n\nIn the Event section, a new <b>Location</b> parameter is available for Big Calendar type only.\n\nIt is displayed in two places. First is following the <b>Text</b>, separated by a colon character(:). The second is in the Event Details, a popup window appearing after you click on the event in the calendar panel.\n\n<Image\n  title="Location is a new parameter available for Big Calendar type only."\n  src="/img/blog/2023-10-06-calendar-panel-2.2.0/location.png"\n/>\n\n## Contrast Text\n\nThis feature ensures that a text color always contrasts well with the background color. It is available for Big Calendar type only.\n\n## Work Week and select views\n\nIn the Calendar section, for the Views parameter, we added a new option <b>work week</b>. The setting is similar to a week view, but instead of seven days, it displays 5 days and hides Saturdays and Sundays.\n\nIn addition, now you can configure which views out of four (day, week, month, work week) will be available for an end-user.\n\nThe feature is available for Big Calendar type only.\n\n<Image\n  title="Work week is a new view for the Calendar panel available for Big Calendar type only"\n  src="/img/blog/2023-10-06-calendar-panel-2.2.0/work-week.png"\n/>\n\n## Dashboard time zones\n\nStarting from this release, the Calendar panel supports dashboard time zones. Previously, it synched with the Browser time zone.\n\n<Image\n  title="The Calendar panel automatically syncs with the selected dashboard time zone."\n  src="/img/blog/2023-10-06-calendar-panel-2.2.0/timezone.png"\n/>\n\n## Getting Started\n\nYou can install Calendar Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-calendar-panel\n```\n\n## YouTube Tutorial\n\nCalendar Panel is a Grafana plugin that displays events from various data sources.\n\n<Video\n  src="https://www.youtube.com/embed/iPJ122x0oos"\n  title="Display events from the JSON API data source."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Added Event Location for Big Calendar (#127)\n- Added contrast text color for events (#129)\n- Added compatibility with Grafana 10.1.4 (#132)\n- Updated with Plugin Tools 2.0.2 (#132)\n- Updated to use Grafana Access Policy to sign plugin (#132)\n- Added support for dashboard timezone in Start and End time (#128)\n- Added ability to select views: day, week, work week and month (#133)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-calendar-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "timeseries-dashboard-20230926/",
    metadata: {
      permalink: "/blog/timeseries-dashboard-20230926/",
      source: "@site/blog/2023-09-26-timeseries-dashboard/index.mdx",
      title:
        "Monitoring Linux servers with Prometheus, Node Exporter and Grafana Time Series",
      description:
        "I am writing this article to supplement one of my recent YouTube videos. In there, I provided a step-by-step tutorial to create a Grafana dashboard to monitor Linux servers. The data is collected by Node Exporter and stored in the Prometheus database.",
      date: "2023-09-26T00:00:00.000Z",
      formattedDate: "September 26, 2023",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "timeseries-dashboard-20230926/",
        tags: ["Grafana Crash Course"],
        image: "/img/blog/2023-09-26-timeseries-dashboard/banner.png",
        keywords: [
          "Time Series",
          "Prometheus",
          "Visualization",
          "Grafana",
          "Monitoring",
        ],
      },
      prevItem: {
        title: "Calendar Panel 2.2.0",
        permalink: "/blog/calendar-panel-2.2.0-20231006/",
      },
      nextItem: {
        title:
          "Using Query and Data Sources in the Data Manipulation plugin for Grafana",
        permalink: "/blog/form-panel-data-source-20230908/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nI am writing this article to supplement one of my recent YouTube videos. In there, I provided a step-by-step tutorial to create a Grafana dashboard to monitor Linux servers. The data is collected by Node Exporter and stored in the Prometheus database.\n\nBoth, the video and this article, are complementing each other since some of the materials are better in a motion picture format and some shine brighter in the written word.\n\nTo get a better understanding of the topic, I recommend watching the video first and then getting back to this article. But the decision of what should go first is surely up to you.\n\n<Video\n  src="https://www.youtube.com/embed/YpOazX67GSo"\n  title="Monitoring Linux servers with Prometheus, Node Exporter and Grafana Time Series."\n/>\n\n## Data flow\n\nMy dashboard visualizes server diagnostic data that is stored in the Prometheus database where it gets collected from the Node Exporters. Every node exporter works with one Linux server instance.\n\n<Image\n  title="Node exporters collect data to store in Prometheus and then display in Grafana dashboard."\n  src="/img/blog/2023-09-26-timeseries-dashboard/timeseries-prometheus.png"\n/>\n\nFor more information on how such a system can be set up, please, refer to the [Prometheus documentation for Node Exporter](https://prometheus.io/docs/guides/node-exporter/).\n\n## Variable panel\n\nI started my dashboard by configuring a filtering functionality. To be more user-friendly, I wanted to position my filter on the same horizontal level as my Time Series.\n\nThere is only one Grafana plugin as of this moment that allows achieving such a requirement. It is the [Variable panel](/plugins/volkovlabs-variable-panel).\n\n<Image\n  title="Variable panel to select one or many servers for display."\n  src="/img/blog/2023-09-26-timeseries-dashboard/dash.png"\n/>\n\n## Data Source\n\nAll panels have the same data source to read data from. The data source is configured as a dashboard variable.\n\n<Image\n  title="The dashboard variables set up."\n  src="/img/blog/2023-09-26-timeseries-dashboard/vars.png"\n/>\n\n<Image\n  title="Selected data source for all four Time Series panels."\n  src="/img/blog/2023-09-26-timeseries-dashboard/ds.png"\n/>\n\n<Image\n  title="Variable panel configuration."\n  src="/img/blog/2023-09-26-timeseries-dashboard/var-p.png"\n/>\n\n## Dynamic Title\n\nI made the Time Series panels\' titles dynamic by including the dashboard variable `{instance}` in the value. That makes every title change according to the selected server on the variable panel.\n\n<Image\n  title="Using dashboard variable in the panel title."\n  src="/img/blog/2023-09-26-timeseries-dashboard/title.png"\n/>\n\n## Repeat Options\n\nThe dashboard variable `{$instance}` that I created to have the filtering functionality represents an array of values. Each value is a server name.\nAccording to my design, one server per chart should be displayed. What this means is when a user selects two servers in the variable panel, the same two charts should be created, one per server.\n\nTo archive that, in the Time Series edit mode, in the Panel Options section, you can specify which variable to use for the Repeat feature.\n\n<Image\n  title="Repeat options in Time Series."\n  src="/img/blog/2023-09-26-timeseries-dashboard/repeat.png"\n/>\n\n## Visualization Options\n\nBy visualization option I mean the settings that a user configures on the right-hand side of any Grafana panel. The configuration in my case is almost identical for all four panels.\n\nI already mentioned everything I changed in the <b>Panel options</b> section, namely, dynamic title and Repeat options. For the rest, I touched upon <b>Graph styles</b> and <b>Standard option</b> sections to set the fill opacity, gradient mode, and units.\n\n<Image\n  title="Graph styles and Standard options configuration."\n  src="/img/blog/2023-09-26-timeseries-dashboard/style.png"\n/>\n\n## Prometheus Queries\n\nThis dashboard consists of four time series for each selected server.\n\n- CPU Usage\n- Load Average\n- Memory Usage\n- Disk Space\n\n### CPU Usage\n\nThis panel contains one query to calculate the usage per CPU.\n\n```JavaScript\n(\n  (1 - rate(node_cpu_seconds_total{job="node", mode="idle", instance="$instance"}[$__interval]))\n/ ignoring(cpu) group_left\n  count without (cpu)( node_cpu_seconds_total{job="node", mode="idle", instance="$instance"})\n)\n```\n\n### Load Average\n\nQuery to compute the total number of active CPUs on the server.\n\n```JavaScript\ncount(node_cpu_seconds_total{job="node", instance="$instance", mode="idle"})\n```\n\nQuery to compute the average 1-minute load.\n\n```JavaScript\nnode_load1{job="node", instance="$instance"}\n```\n\nQuery to compute the average 5-minute load.\n\n```JavaScript\nnode_load5{job="node", instance="$instance"}\n```\n\nQuery to compute the average 15-minute load.\n\n```JavaScript\nnode_load15{job="node", instance="$instance"}\n```\n\n### Memory Usage\n\nQuery to retrieve used memory\n\n```JavaScript\n(\n  node_memory_MemTotal_bytes{job="node", instance="$instance"}\n-\n  node_memory_MemFree_bytes{job="node", instance="$instance"}\n-\n  node_memory_Buffers_bytes{job="node", instance="$instance"}\n-\n  node_memory_Cached_bytes{job="node", instance="$instance"}\n)\n```\n\nQuery to retrieve buffer memory\n\n```JavaScript\nnode_memory_Buffers_bytes{job="node", instance="$instance"}\n```\n\nQuery to retrieve cached memory\n\n```JavaScript\nnode_memory_Cached_bytes{job="node", instance="$instance"}\n```\n\nQuery to retrieve free memory\n\n```JavaScript\nnode_memory_MemFree_bytes{job="node", instance="$instance"}\n```\n\n### Disk Space\n\nQuery to retrieve used memory\n\n```JavaScript\nsum(\n  max by (device) (\n    node_filesystem_size_bytes{job="node", instance="$instance", fstype!=""}\n  -\n    node_filesystem_avail_bytes{job="node", instance="$instance", fstype!=""}\n  )\n)\n```\n\nQuery to retrieve available memory\n\n```JavaScript\nsum(\n  max by (device) (\n    node_filesystem_avail_bytes{job="node", instance="$instance", fstype!=""}\n  )\n)\n\n```\n\n## Questions?\n\nIf you have any questions about this article, please, do not hesitate to leave them in the comments section under the [YouTube video mentioned at the beginning](https://www.youtube.com/watch?v=YpOazX67GSo).\n\n## Become a member!\n\nBecome a [member of our fan club](https://www.youtube.com/channel/UCQadniwbukI6ZmTN2oTTb-g/join) and earn loyalty badges!',
  },
  {
    id: "form-panel-data-source-20230908/",
    metadata: {
      permalink: "/blog/form-panel-data-source-20230908/",
      source: "@site/blog/2023-09-08-form-panel-data-source/index.mdx",
      title:
        "Using Query and Data Sources in the Data Manipulation plugin for Grafana",
      description:
        "In recent months, the Data Manipulation Panel plugin has received a lot of attention from the community. With over 500 daily downloads, we were swamped with requests and great enhancement ideas for quite some time.",
      date: "2023-09-08T00:00:00.000Z",
      formattedDate: "September 8, 2023",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "form-panel-data-source-20230908/",
        tags: ["Data Manipulation"],
        image: "/img/blog/2023-09-08-form-panel-data-source/banner.png",
        keywords: ["Data Manipulation", "Form Panel", "Data", "Grafana"],
      },
      prevItem: {
        title:
          "Monitoring Linux servers with Prometheus, Node Exporter and Grafana Time Series",
        permalink: "/blog/timeseries-dashboard-20230926/",
      },
      nextItem: {
        title: "Data Manipulation Panel 3.1.0",
        permalink: "/blog/form-panel-3.1.0-20230823/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nIn recent months, the Data Manipulation Panel plugin has received a lot of attention from the community. With over 500 daily downloads, we were swamped with requests and great enhancement ideas for quite some time.\n\n:::info Thanks\nMany thanks to everyone who took part in the creative thinking feast!\n:::\n\nWe knew the functionality provided by this plugin had been long awaited, but we did not expect such an outpouring of interest.\n\nGrafana is well-known for its unrivaled data visualization capabilities. The Data Manipulation Panel plugin is praised for adding data manipulation capability to Grafana\'s expansive visualization toolset.\n\nIn other words, Data Manipulation Panel transforms a one-way data street into a two-way data street, allowing users to add and modify data in the database.\n\nThe REST API is the first method the Data Manipulation Panel plugin started with. Now, in addition to the REST API, you can use queries and data sources. We also have a fully custom method available for use cases dealing with the most unusual requirements.\n\nThe query utilizes the standard Grafana data retrieval functionality, which limits this method to exist only in the initial request data flow.\n\n## The final product\n\nThis article describes the steps to complete a basic Grafana project where the central requirement is the user\'s ability to update a device setting stored in an external database.\n\nBelow, you can see a Grafana dashboard with the Data Manipulation Panel plugin. It provides two similar examples with the difference in the initial request type. In the first example, I use the query and in the other, I use the data source with the initial request type.\n\n<Image\n  title="Data Manipulation with query and data source as initial request on dashboard."\n  src="/img/blog/2023-09-08-form-panel-data-source/dashboard.png"\n/>\n\nFor switching between devices, I choose to use the [variable panel](/plugins/volkovlabs-variable-panel/). It is optional for data manipulation, but I needed a filter located on the side of the users\' forms, so that\'s what I went with.\n\n## Database\n\nPostgreSQL is our go-to database for most dummy and production projects, including this one. The following table demonstrates the basic data structure for Data Manipulation Panel.\n\nThe `name` column captures the device name, and the remaining columns are for corresponding device metrics.\n\n```sql\nCREATE TABLE configuration (\n    name text,\n    max integer not null,\n    min integer not null,\n    speed integer not null\n);\n\ninsert into configuration values (\'device1\', 100, 10, 54);\ninsert into configuration values (\'device2\', 60, 0, 10);\ninsert into configuration values (\'device3\', 60, 30, 40);\ninsert into configuration values (\'device4\', 34, 10, 20);\n```\n\n## Initial Request\n\nIn the initial request, you can choose among the following:\n\n- Custom[-]\n- Data Source\n- Query\n- REST API (GET)\n\n### Query\n\nFor the first example, I used the query type. This method relates to Grafana\'s standard fetching mechanism. That implies you must have a Grafana data source configured and choose it from the drop-down box on the left. All Grafana data sources are supported by Data Manipulation Panel.\n\nThe following step is to define a query. In my example, I get min, max, and speed metrics from a configuration table for all devices using a simple SQL expression.\n\nThen, I created three read-only form elements. Every element is mapped to the corresponding field from the query.\n\nWhen the Highlight Changes feature is enabled, the updated values are highlighted with a specific color.\n\n<Image\n  title="Initial request using query configuration."\n  src="/img/blog/2023-09-08-form-panel-data-source/init-query.png"\n/>\n\nThe SQL query from the screenshot above:\n\n```sql\nSELECT min, max, speed\nFROM configuration\nWHERE name = \'$device\';\n```\n\n:::note Good to know\nQuery is only available as an initial request type, not as an update request type. This solution relied on Grafana\'s standard retrieval mechanism, which is one-way at its core and hence limited to the initial request.\n:::\n\n### Data Source\n\nWhen you select a data source as your initial request type, the standard query settings on the left become irrelevant.\n\nOn the right, I specified PostgreSQL as a data source and the SQL query in the **Create Payload** box within the **Initial Request Payload** section.\n\nTo use the highlighting of changes for the data source type, you need to execute the `SetInitial()` function in the post-process stage. In the screenshot below, I provide an example of such code with the `SetInitial()` function.\n\n<Image\n  title="Initial Request using Data Source configuration."\n  src="/img/blog/2023-09-08-form-panel-data-source/init-ds.png"\n/>\n\n#### Initial Request payload\n\n```js\nreturn {\n  rawSql: "select * from configuration where name =\'$device\';",\n  format: "table",\n};\n```\n\n#### Initial Request Custom Code\n\n```js\nconst payload = {};\n\nelements.forEach((element) => {\n  if (!element.value) {\n    return;\n  }\n\n  payload[element.id] = element.value;\n});\n\nsetInitial(payload);\n```\n\n## Update Request\n\nIn my example, I decided to have an identical update request for both examples. My configuration is in the screenshot below.\n\n<Image\n  title="Update Request configuration."\n  src="/img/blog/2023-09-08-form-panel-data-source/update.png"\n/>\n\n### Update Request Payload\n\n```js\nconst payload = {};\n\nelements.forEach((element) => {\n  if (!element.value) {\n    return;\n  }\n\n  payload[element.id] = element.value;\n});\n\n/**\n * Data Source payload\n */\nreturn {\n  rawSql: `update configuration set min=${payload.min}, max=${payload.max}, speed=${payload.speed} where name=\'$device\'`,\n  format: "table",\n};\n```\n\n### Update Request Custom Code\n\n```js\nif (response && response.ok) {\n  notifySuccess(["Update", "Values updated successfully."]);\n  initialRequest();\n} else {\n  notifyError(["Update", "An error occurred updating values."]);\n}\n```\n\n## Tutorial\n\nIn this video, I reviewed all the new features of Data Manipulation Panel for Grafana.\n\n<Video\n  src="https://www.youtube.com/embed/hVy9NfFiI5U"\n  title="Use REST API, data Source, and queries to manipulate your data."\n/>\n\n## Become a member!\n\nBecome a [member of our fan club](https://www.youtube.com/channel/UCQadniwbukI6ZmTN2oTTb-g/join) and earn loyalty badges!',
  },
  {
    id: "form-panel-3.1.0-20230823/",
    metadata: {
      permalink: "/blog/form-panel-3.1.0-20230823/",
      source: "@site/blog/2023-08-23-form-panel-3.1.0/index.mdx",
      title: "Data Manipulation Panel 3.1.0",
      description:
        "We are happy to announce the release of the Data Manipulation Panel 3.1.0. This release includes the following updates:",
      date: "2023-08-23T00:00:00.000Z",
      formattedDate: "August 23, 2023",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "form-panel-3.1.0-20230823/",
        tags: ["Data Manipulation", "Release Notes"],
        image: "/img/blog/2023-08-23-form-panel-3.1.0/banner.png",
        keywords: ["Data Manipulation", "Form Panel", "Data", "Grafana"],
        updated: "2023-09-22T00:00:00.000Z",
      },
      prevItem: {
        title:
          "Using Query and Data Sources in the Data Manipulation plugin for Grafana",
        permalink: "/blog/form-panel-data-source-20230908/",
      },
      nextItem: {
        title: "Apache ECharts Panel 5.1.0",
        permalink: "/blog/echarts-panel-5.1.0-20230822/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Data Manipulation Panel 3.1.0. This release includes the following updates:\n\n- Added a multi-select box.\n- Added the conditional visibility of form elements.\n- Added the code editor for a custom payload.\n- Added the code editor for the custom reset operation.\n- Added support for the Data Source request.\n- Added the `onChange` function to update elements in the local state within the custom code.\n\n:::info Grafana Catalog\nThe plugin was updated in the Grafana Plugins catalog on August 15, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/0ratMv5XYSk"\n  title="Data Manipulation Panel 3.1.0 for Grafana."\n/>\n\n## Multi-Select\n\nA new multi-select box is similar to the select box and allows selecting multiple options.\n\n<Image\n  title="A new multi-select box allows you to select multiple options."\n  src="/img/blog/2023-08-23-form-panel-3.1.0/multi.png"\n/>\n\n## Conditional element visibility\n\nThe new **Show If** option available for any form element allows you to control the visibility of the form element depending on other elements\' values. The JavaScript function should return `true` to show the element or `false` to hide it.\n\nFor example, this form element is shown only if the selected value for the `select` element is equal to `max`.\n\n```js\nconst select = elements.find((element) => element.id === "select");\n\nif (select) {\n  return select.value === "max";\n}\n```\n\n<Image\n  title="Element visibility can be controlled using a JavaScript function, which should return true or false."\n  src="/img/blog/2023-08-23-form-panel-3.1.0/showif.png"\n/>\n\n## Custom payload code editor\n\n### Initial request with Data Source\n\nThe code editor for the custom payload is available for initial requests using the data source. When the data source is selected, you can specify a custom payload to execute the `rawSql` SQL statement and any other property required for a specific data source.\n\n```\nreturn {\n  rawSql: \'\',\n  format: \'table\',\n}\n```\n\nA response from the data source can be manually parsed in the custom code using the `toDataQueryResponse()` function, which returns data frames. Values from the data frames can be applied to the form elements as described in the documentation.\n\n```\nconst dataQuery = toDataQueryResponse(response);\nconsole.log(dataQuery);\n```\n\n<Image\n  title="Initial request for data source allows you to specify a request payload."\n  src="/img/blog/2023-08-23-form-panel-3.1.0/initial.png"\n/>\n\n### Update request\n\nIn the update request, you can send the payload as follows:\n\n- All Elements\n- Updated only\n- Custom Code\n\nIn the **Custom Code** section, you can create your own logic to form a payload.\n\n```\nconst payload = {};\n\nelements.forEach((element) => {\n  if (!element.value) {\n    return;\n  }\n\n  payload[element.id] = element.value;\n})\n\nreturn payload;\n\n/**\n * Data Source payload\n */\nreturn {\n  rawSql: \'\',\n  format: \'table\',\n};\n```\n\n<Image\n  title="Update request can send all, updated elements, and a custom payload."\n  src="/img/blog/2023-08-23-form-panel-3.1.0/update.png"\n/>\n\n## Code editor Custom reset\n\nThe Reset button enables adding custom logic in the JavaScript code editor. By default, it calls the initial request.\n\n<Image\n  title="Reset button allows you to add custom logic in JavaScript code editor."\n  src="/img/blog/2023-08-23-form-panel-3.1.0/reset.png"\n/>\n\n## Data Source request\n\nSupport for data sources was one of the most requested community features. Since version 3.1.0, you don\'t need a REST API server to interact with databases and storages configured as data sources.\n\n### Initial Request\n\nResponse from the initial request can be parsed manually as demonstrated above or automatically assigned to the form elements.\n\nTo get the latest value of any field returned from the data source, provide the field name and send it in the payload to update.\n\n<Image\n  title="Assign element values based on the data from the initial request using data source."\n  src="/img/blog/2023-08-23-form-panel-3.1.0/fieldname.png"\n/>\n\n### Update Request\n\nThe update request payload for the data source should be created in the custom code according to the data source specification. For SQL databases, it\'s `rawSql` and `format`:\n\n```\nconst payload = {};\n\nelements.forEach((element) => {\n  if (!element.value) {\n    return;\n  }\n\n  payload[element.id] = element.value;\n})\n\n/**\n * Data Source payload\n */\nreturn {\n  rawSql: \'\',\n  format: \'table\',\n};\n```\n\n<Image\n  title="Update requests using data source."\n  src="/img/blog/2023-08-23-form-panel-3.1.0/datasource.png"\n/>\n\n## onChange to update elements in the local state\n\nIn Data Manipulation Panel 3.X, the `onChange()` function is required to manually update the form element\'s values in the local state.\n\n```\nonChange(elements.map((element) => {\n  return element.id === \'name\' ? { ...element, value: \'test\' } : element\n});\n```\n\n## Getting Started\n\nYou can install Data Manipulation Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-form-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-form-panel\n```\n\n## YouTube Tutorial\n\nData Manipulation Panel is a brand-new Grafana plugin. It is the first plugin that allows you to insert and update application data, as well as modify settings, straight from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entry and user input into dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Updated `jest` selectors to use the `npm` package (#209).\n- Added the `onChange` function to update elements in the local state within the custom code (#214).\n- Updated ESLint configuration (#215).\n- Added the multi-select element (#217).\n- Added the conditional element visibility (#219).\n- Added the code editor for the Custom Payload section (#220).\n- Added the code editor for the Custom Reset section (#221).\n- Added the Data Source request (#222).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-form-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "echarts-panel-5.1.0-20230822/",
    metadata: {
      permalink: "/blog/echarts-panel-5.1.0-20230822/",
      source: "@site/blog/2023-08-22-echarts-panel-5.1.0/index.mdx",
      title: "Apache ECharts Panel 5.1.0",
      description:
        "We are happy to announce the release of the Apache ECharts Panel 5.1.0. This release includes the following updates:",
      date: "2023-08-22T00:00:00.000Z",
      formattedDate: "August 22, 2023",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "echarts-panel-5.1.0-20230822/",
        tags: ["Apache ECharts", "Release Notes"],
        image: "/img/blog/2023-08-22-echarts-panel-5.1.0/banner.png",
        keywords: [
          "Apache ECharts",
          "Panel",
          "Chart",
          "Visualization",
          "Grafana",
        ],
        updated: "2023-09-06T00:00:00.000Z",
      },
      prevItem: {
        title: "Data Manipulation Panel 3.1.0",
        permalink: "/blog/form-panel-3.1.0-20230823/",
      },
      nextItem: {
        title: "Calendar Panel 2.1.0",
        permalink: "/blog/calendar-panel-2.1.0-20230815/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Apache ECharts Panel 5.1.0. This release includes the following updates:\n\n- Added Result v2 with the `unsubscribe` function.\n- Added Wordcloud Extension to create a tag cloud presentation.\n- Updated the streaming functionality to redraw charts.\n- Fixed memory leaks when resubscribing to the restore event.\n- Updated the Apache ECharts library to version 5.4.3\n- Requires Grafana 9 or Grafana 10.\n- Added support for Grafana 10.0.3 and deprecated support for Grafana 8.5.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on August 11, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/bEBA5Q8PNCE"\n  title="Apache ECharts Panel 5.1.0 for Grafana."\n/>\n\n## Result v2 with unsubscribe function\n\nThe extended result object allows you to return the configuration, options, and unsubscribe functions to prevent memory leaks. You can use it to subscribe and publish events to the [event bus](/grafana/developer/eventbus/).\n\n```json\nreturn {\n  version: 2,\n  config: { notMerge: true },\n  option: {\n    tooltip: {\n      formatter: \'{a} <br/>{b} : {c}%\'\n    },\n    series: [\n      {\n        name: \'Pressure\',\n        type: \'gauge\',\n        detail: {\n          formatter: \'{value}\'\n        },\n        data: [\n          {\n            value: 50,\n            name: \'SCORE\'\n          }\n        ]\n      }\n    ]\n  },\n  unsubscribe: () => {\n    console.log(\'unsubscribeFunction\')\n  }\n};\n```\n\nPlease explore details about the extended result in [our product documentation](/plugins/volkovlabs-echarts-panel/extended/).\n\n## Wordcloud Extension\n\nThe Wordcloud extension renders a tag cloud presentation on a two-dimensional canvas.\n\n<Image\n  title="A tag cloud presentation on 2D canvas with Apache ECharts Panel."\n  src="/img/blog/2023-08-22-echarts-panel-5.1.0/wordcloud.png"\n/>\n\nPlease check out the extension documentation for details on the [Wordcloud extension](https://github.com/ecomfe/echarts-wordcloud).\n\n## Streaming\n\nStreaming enables the real-time data update with streaming data sources and Grafana Live. Apache ECharts Panel supports the streaming since version 4.1.0.\n\nApache ECharts version 5.0.0 addressed the rendering issue for live data.\n\n<Image\n  title="Display a gauge with the live data in real-time."\n  src="/img/blog/2023-08-22-echarts-panel-5.1.0/gauge.png"\n/>\n\nPlease check our documentation with [Streaming use cases](/plugins/volkovlabs-echarts-panel/streaming/).\n\n## Memory Leak\n\nWe\'ve fixed the memory leaks on resubscribing to the restore event handler. We want to thank you our community member [sergiomonteroselma](https://github.com/VolkovLabs/volkovlabs-echarts-panel/issues/205) for reporting this issue and helping us with its troubleshooting.\n\nWe recommend that you update Apache ECharts Panel to the latest version 5.1.0 to avoid `Out Of Memory` errors after continuous refresh of the dashboard for a long period of time.\n\n## Apache ECharts 5.4.3\n\nWe continue updating the plugin with the latest version of the Apache ECharts library and recently updated it to version 5.4.3:\n\n- [Feature] [axisPointer] Add triggerEmphasis option to disable emphasis. #18524 (juliepagano)\n- [Feature] [sankey] Support trajectory for emphasis state. #17451 (ElayGelbart)\n- [Fix] [sankey] Fix sankey line color \'target\'/\'source\'/\'gradient\' doesn\'t work in non-normal state. #18834 (linghaoSu)\n- [Fix] [sankey] Fix value is undefined in label/edgeLabel formatter. #18733 (plainheart)\n- [Fix] [sunburst] Fix sunburst label may rotate when labelLayout.hideOverlap is enabled. #18808 (linghaoSu)\n- [Fix] [graph] Fix graph chart can\'t be hidden by legend due to edgeLabel NPE. #18624 (plainheart)\n- [Fix] [state] Fix focus self doesn\'t work when item emphasis by other component. #18511 (linghaoSu)\n- [Fix] [axis] Fix last tick doesn\'t show for single data. #18469 (Ovilia)\n- [Fix] [pie] Fix incorrect response area of pie piece when selectedOffset is enabled and animation is disabled. #1011 (plainheart)\n- [Fix] [custom] Fix user-defined info property was not available in the event handler. #18400 (sobolewsk)\n- [Fix] [legend] Inherit legend rich text color from legend\'s options. #18260 (ChepteaCatalin)\n- [Fix] [label] Fix ellipsis was not working. #18525 (Ovilia)\n- [Fix] [label] Fix endLabel fails with null data. #18841 (Ovilia)\n- [Fix] [util] Fix {yy} pattern has no zero padding in time format util. #18535 (linghaoSu)\n- [Fix] [api] Only deprecate disConnect but not disconnect. #18758 (Justineo)\n- [Fix] [i18n] Fix the abbr of "March" for the DE language ("Mar" -> "Mrz"). #18387 (Stebeber)\n- [Fix] [type] Fix wrong type for data item value of the parallel series. #18425 (ManishDait)\n- [Fix] [type] Allow passing null to the parameters of init function. #18575 (zhuscat)\n\n## Wind Speed\n\nA graph example showing both wind speed & direction prepared by our community member [tkurki](https://gist.github.com/tkurki/0bb07f29987cc2af471b5e44706b00b4):\n\n<Image\n  title="Showing both wind speed & direction on the same chart using Apache ECharts."\n  src="/img/blog/2023-08-22-echarts-panel-5.1.0/0wind.png"\n/>\n\n```js\nconst ecData = [];\n\nif (data.series.length === 0) {\n  return {};\n}\n\nconst time = data.series[0].fields[0].values;\nconst direction = data.series[0].fields[1].values;\nconst speed = data.series[1].fields[1].values;\n\nfor (let i = 0; i < data.series[0].length; i++) {\n  ecData.push({\n    value: [time.get(i), Number(speed.get(i)).toFixed(2)],\n    symbolRotate: (direction.get(i) / Math.PI) * 180 - 90,\n  });\n}\n\nconst series = {\n  name: data.series[0].refId,\n  type: "line",\n  showSymbol: true,\n  symbol:\n    "path://m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z",\n  symbolSize: 15,\n  areaStyle: {\n    opacity: 0.1,\n  },\n  lineStyle: {\n    width: 1,\n  },\n  data: ecData,\n};\n\n/**\n * Enable Data Zoom by default\n */\nsetTimeout(\n  () =>\n    echartsInstance.dispatchAction({\n      type: "takeGlobalCursor",\n      key: "dataZoomSelect",\n      dataZoomSelectActive: true,\n    }),\n  500\n);\n\n/**\n * Update Time Range on Zoom\n */\nechartsInstance.on("datazoom", function (params) {\n  const startValue = params.batch[0]?.startValue;\n  const endValue = params.batch[0]?.endValue;\n  locationService.partial({ from: startValue, to: endValue });\n});\n\nreturn {\n  backgroundColor: "transparent",\n  tooltip: {\n    trigger: "axis",\n  },\n  legend: {\n    left: "0",\n    bottom: "0",\n    data: ["Wind Speed & Angle"],\n    textStyle: {\n      color: "rgba(128, 128, 128, .9)",\n    },\n  },\n  toolbox: {\n    feature: {\n      dataZoom: {\n        yAxisIndex: "none",\n        icon: {\n          zoom: "path://",\n          back: "path://",\n        },\n      },\n      saveAsImage: {},\n    },\n  },\n  xAxis: {\n    type: "time",\n  },\n  yAxis: {\n    type: "value",\n    min: "dataMin",\n  },\n  grid: {\n    left: "2%",\n    right: "2%",\n    top: "2%",\n    bottom: 24,\n    containLabel: true,\n  },\n  series,\n};\n```\n\n## Getting Started\n\nYou can install Apache ECharts Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-echarts-panel\n```\n\n## YouTube Tutorial\n\nThe Apache ECharts Panel plugin is a data visualization extension for Grafana that allows you to integrate charts and graphs from the popular Apache ECharts library into your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/S3PiL1p1v5U"\n  title="Explore possibilities of the Apache ECharts."\n/>\n\n## Release Notes\n\n### Features / Enhancements in 5.1.0\n\n- Added compatibility with Grafana 10.0.3 (#206).\n\n### Bugfixes in 5.1.0\n\n- Fixed memory leaks when resubscribing to the restore event (#208).\n\n### Breaking changes in 5.0.0\n\n- Requires Grafana 9 and Grafana 10\n\n### Features / Enhancements in 5.0.0\n\n- Updated the product documentation with recent updates (#182).\n- Updated examples for Grafana 10 (#190).\n- Added Result v2 with unsubscribe function (#188).\n- Updated the streaming to redraw charts (#188).\n- Added compatibility with Grafana 10.0.0 (#191).\n- Updated the README file and panel options (#192).\n- Deprecated support for Grafana 8.5 (#193).\n- Updated support for Grafana 10.0.2 dependencies (#195).\n- Updated ESLint configuration (#196).\n- Integrated the Wordcloud extension (#198).\n- Updated the Apache ECharts library to version 5.4.3 (#199).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-echarts-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "calendar-panel-2.1.0-20230815/",
    metadata: {
      permalink: "/blog/calendar-panel-2.1.0-20230815/",
      source: "@site/blog/2023-08-15-calendar-panel-2.1.0/index.mdx",
      title: "Calendar Panel 2.1.0",
      description:
        "We are happy to announce the release of the Calendar Panel 2.1.0. This release includes the following updates:",
      date: "2023-08-15T00:00:00.000Z",
      formattedDate: "August 15, 2023",
      tags: [
        {
          label: "Calendar",
          permalink: "/blog/tags/calendar",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "calendar-panel-2.1.0-20230815/",
        tags: ["Calendar", "Release Notes"],
        image: "/img/blog/2023-08-15-calendar-panel-2.1.0/banner.png",
        keywords: ["Calendar", "Panel", "Events", "Time Range", "Grafana"],
        updated: "2023-09-11T00:00:00.000Z",
      },
      prevItem: {
        title: "Apache ECharts Panel 5.1.0",
        permalink: "/blog/echarts-panel-5.1.0-20230822/",
      },
      nextItem: {
        title: "Variable Panel 1.7.0",
        permalink: "/blog/variable-panel-1.7.0-20230810/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Calendar Panel 2.1.0. This release includes the following updates:\n\n- Added an updated version of the calendar, Big Calendar, a React library-based calendar that allows users to switch between month, week, and day views.\n- Added multi-language support into Big Calendar: Spanish, French, German, and simplified Chinese.\n- Added the filtering of annotations by type and maximum limit.\n- Requires Grafana 9.2+ or Grafana 10.\n- Added compatibility with Grafana 10.0.3 and deprecated support for Grafana 8.5.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on August 15, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/DV3HLdHMz5Y"\n  title="Calendar Panel 2.1.0 for Grafana."\n/>\n\n## Big Calendar\n\nBig Calendar is a new version of the calendar panel based on a powerful React library.\n\nIt adds a multi-language toolbar that allows you to:\n\n1. Switch between month, week, and day views.\n2. Switch back to the current day (today).\n3. Display events from the previous and subsequent time ranges.\n\n<Image\n  title="Calendar Panel displays Volkov Labs\' releases in July 2023."\n  src="/img/blog/2023-08-15-calendar-panel-2.1.0/big.png"\n/>\n\n## Legacy calendar\n\nThe legacy calendar is a native implementation of the calendar based on custom components. Unlike Big Calendar, it does not provide a toolbar and has limited support for week and day views.\n\nThe legacy calendar allows you to display events from several months and scroll through them.\n\n<Image\n  title="Calendar Panel displays Grafana plugins updated in July 2023."\n  src="/img/blog/2023-08-15-calendar-panel-2.1.0/legacy.png"\n/>\n\n## Multi-language support\n\nThe legacy calendar and Big Calendar support dates in four native Grafana languages: Spanish, French, German, and simplified Chinese. Big Calendar also provides a multi-language toolbar.\n\n<Image\n  title="Big Calendar displays Grafana plugins updated in July 2023 ."\n  src="/img/blog/2023-08-15-calendar-panel-2.1.0/spanish.png"\n/>\n\n## Annotations\n\nThe Calendar Panel plugin allows you to display and filter annotations in Grafana.\n\nIn the plugin settings, you can do the following:\n\n- Select what to display: both alerts and annotations, alerts only, or annotations only.\n- Set the maximum limit of returned annotations.\n\n<Image\n  title="Options to select an annotation type and set the limit."\n  src="/img/blog/2023-08-15-calendar-panel-2.1.0/annotations.png"\n/>\n\n## Getting Started\n\nYou can install Calendar Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-calendar-panel\n```\n\n## YouTube Tutorial\n\nCalendar Panel is a Grafana plugin that displays events from various data sources.\n\n<Video\n  src="https://www.youtube.com/embed/iPJ122x0oos"\n  title="Display events from the JSON API data source."\n/>\n\n## Release Notes\n\n### Features / Enhancements in 2.1.0\n\n- Added annotation types and display limits (#121).\n- Added compatibility with Grafana 10.0.3 (#122).\n- Added language messages for Big Calendar (#123).\n\n### Bugfixes in 2.0.1\n\n- Fixed the options regulating the display of annotations (#119).\n\n### Breaking changes in 2.0.0\n\n- Requires Grafana 9.2 or Grafana 10.\n\n### Features / Enhancements in 2.0.0\n\n- Increased the test coverage for the plugin\'s functionality (#105).\n- Added the Big Calendar component for rendering calendars (#106).\n- Updated the ESLint configuration (#106).\n- Deprecated support for Grafana 8.5 (#110).\n- Added compatibility with Grafana 10.0 (#110).\n- Updated the event display mechanism to correctly show events in Big Calendar when their start date equals the end date (#112).\n- Added quick links for Big Calendar (#113).\n- Updated the back and next buttons for weekly and daily views in the Big Calendar component (#114).\n- Updated button styles in the Big Calendar component (#115).\n- Updated the calendar resizing in the Big Calendar component (#116).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-calendar-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "variable-panel-1.7.0-20230810/",
    metadata: {
      permalink: "/blog/variable-panel-1.7.0-20230810/",
      source: "@site/blog/2023-08-10-variable-panel-1.7.0/index.mdx",
      title: "Variable Panel 1.7.0",
      description:
        "We are happy to announce the release of the Variable Panel 1.7.0. This release includes the following updates:",
      date: "2023-08-10T00:00:00.000Z",
      formattedDate: "August 10, 2023",
      tags: [
        {
          label: "Variables",
          permalink: "/blog/tags/variables",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "variable-panel-1.7.0-20230810/",
        tags: ["Variables", "Release Notes"],
        image: "/img/blog/2023-08-10-variable-panel-1.7.0/banner.png",
        keywords: ["Variable", "Panel", "Status"],
      },
      prevItem: {
        title: "Calendar Panel 2.1.0",
        permalink: "/blog/calendar-panel-2.1.0-20230815/",
      },
      nextItem: {
        title: "Dynamic Text Panel 4.1.0",
        permalink: "/blog/dynamictext-panel-4.1.0-20230731/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Variable Panel 1.7.0. This release includes the following updates:\n\n- Added the Button display mode.\n- Added group selection for the Tree View layout (beta).\n- Added support of the Grafana key-value variable format for the <b>Table</b> display mode.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on August 11, 2023.\n:::\n\n## Button display mode\n\nIn the Button display mode, you get horizontally positioned variable values instead of them being placed from top to bottom. Optionally, you can set up color-coding rules in the Thresholds section on the right.\n\n<Image\n  title="The Button mode converts vertical listing into horizontal elements. Color coding follows the threshold rules."\n  src="/img/blog/2023-08-10-variable-panel-1.7.0/button-mode.png"\n/>\n\n## Group selection\n\n:::info\nThis parameter is still under development and now is available in the Beta version. Try it out with care.\n:::\n\nIn the Layout section, for the Tree View, we added a new parameter, \'Allow group selection\'. When it is enabled, choosing a root of the group will automatically select all elements belonging to this group.\n\n<Image\n  title="With a new parameter, \'Allow group selection\', the selection of a group automatically selects all elements in this group."\n  src="/img/blog/2023-08-10-variable-panel-1.7.0/group-selection.png"\n/>\n\n## Key-values format in Variables\n\nA Grafana variable can be composed of a key and value to make it possible to join data sets by IDs(key) while displaying user-friendly names(value).\n\nStarting from this release, the Variable panel in the <b>Table</b> view supports this feature.\n\nIn the illustration below, screen 1, the `city` variable is created with three key-value pairs.\n\n```text\nChicago:1, New York:2, Tampa:3\n```\n\nScreen 2 is a dashboard view where an end-user sees only city names. After the selection is made (here, New York:2), the variable carries a value equal to 2.\n\nFrom there the `city` variable\'s value can be used in the queries for other panels, screen 3.\n\n<Image\n  title="Example of the key-value variable format in the Variable panel."\n  src="/img/blog/2023-08-10-variable-panel-1.7.0/key-value.png"\n/>\n\n## Getting Started\n\nThe Variable panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-variable-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-variable-panel\n```\n\n## YouTube Tutorial\n\nThe Variable panel builds on top of the regular dashboard variables. It allows you to have dashboard filters in a separate panel which you can place anywhere on the dashboard.\n\nThe variable panel offers you single- and multi-variable layouts along with an advanced Tree View.\n\n<Video\n  src="https://www.youtube.com/embed/mYYtMW9qiPA"\n  title="Demonstrates the Variable panel functionality."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Add variables with text and value in Table/Tree View (#57)\n- Add Button View (#59)\n- Add group selection (#58)\n- Update dependencies to Grafana 10.0.3 (#60)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-variable-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "dynamictext-panel-4.1.0-20230731/",
    metadata: {
      permalink: "/blog/dynamictext-panel-4.1.0-20230731/",
      source: "@site/blog/2023-07-31-dynamictext-panel-4.1.0/index.mdx",
      title: "Dynamic Text Panel 4.1.0",
      description:
        "We're excited to announce the release of the Dynamic Text Panel 4.1.0. This feature release includes the following updates:",
      date: "2023-07-31T00:00:00.000Z",
      formattedDate: "July 31, 2023",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "dynamictext-panel-4.1.0-20230731/",
        tags: ["Dynamic Text", "Release Notes"],
        image: "/img/blog/2023-07-31-dynamictext-panel-4.1.0/banner.png",
        keywords: ["Dynamic Text", "Panel", "JavaScript", "Events", "Grafana"],
        updated: "2023-09-15T00:00:00.000Z",
      },
      prevItem: {
        title: "Variable Panel 1.7.0",
        permalink: "/blog/variable-panel-1.7.0-20230810/",
      },
      nextItem: {
        title: "Variable Panel 1.6.0",
        permalink: "/blog/variable-panel-1.6.0-20230726/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe\'re excited to announce the release of the Dynamic Text Panel 4.1.0. This feature release includes the following updates:\n\n- Added support for external JavaScript and CSS resources.\n- Added the status field to display a background color.\n- Increased test coverage up to 99%.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on July 18, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/PHuQMCjM8es"\n  title="Dynamic Text Panel 4.1.0 for Grafana."\n/>\n\n## External JavaScript and CSS resources\n\nThe Dynamic Text Panel plugin enables the loading of additional JavaScript and CSS resources from external URLs like CDN (Content Delivery Network). To prevent the loading of third-party URLs, you can store CSS and JS files on your Grafana instance in the public folder.\n\n:::note Sanitization\nYou need to disable sanitization in your Grafana instance to see external resources in the panel options.\n:::\n\n<Image\n  title="Loading Google Material CSS and JS files from an external resource."\n  src="/img/blog/2023-07-31-dynamictext-panel-4.1.0/external.png"\n  lazy={false}\n/>\n\nYou can use external CSS and JS files to include additional visual elements and execute JavaScript functions from the [JavaScript code](/plugins/volkovlabs-dynamictext-panel/code) editor.\n\n## Status field\n\nThe `statusColor` variable can be used to set a background or foreground color of any HTML element based on the threshold ranges for the selected status field.\n\n<Image\n  title="Status field allows you to dynamically set a background or foreground color."\n  src="/img/blog/2023-07-31-dynamictext-panel-4.1.0/status.png"\n/>\n\n### Example\n\n```handlebars\n<div style="background-color: {{statusColor}}">\n  {{A-series}}\n</div>\n```\n\n## Sophisticated solution from the community\n\nDynamic Text Panel enables the creation of the most comprehensive solutions without building additional panels.\n\nRegister the `aggr_val` Handlebars helper to aggregate values returned from a data source.\n\n```js\nhandlebars.registerHelper(\n  "aggr_val",\n  (\n    data = my_data,\n    key_value,\n    aggr,\n    key_to_filter1,\n    val_to_filter1,\n    key_to_filter2,\n    val_to_filter2\n  ) =>\n    ((numbers) => {\n      const result =\n        numbers.length === 0\n          ? 0\n          : aggr === "sum"\n          ? numbers.reduce((total, num) => total + num, 0)\n          : aggr === "avg"\n          ? numbers.reduce(\n              (total, num, _, { length }) => total + num / length,\n              0\n            )\n          : aggr === "min"\n          ? numbers.reduce((min, num) => (num < min ? num : min), numbers[0])\n          : aggr === "max"\n          ? numbers.reduce((max, num) => (num > max ? num : max), numbers[0])\n          : aggr === "first"\n          ? numbers[0]\n          : aggr === "last"\n          ? numbers[numbers.length - 1]\n          : (() => {\n              throw new Error(\n                "Invalid aggr. Supported aggr are: sum, avg, min, max, first, last"\n              );\n            })();\n      return Number.isInteger(result) ? result : result.toFixed(2);\n    })(\n      data\n        .filter(\n          (item) =>\n            item[key_to_filter1] === val_to_filter1 &&\n            item[key_to_filter2] === val_to_filter2\n        )\n        .map((item) => item[key_value])\n    )\n);\n\nhandlebars.registerHelper(\n  "sel_val",\n  (\n    data = my_data,\n    key_value,\n    key_to_filter1,\n    val_to_filter1,\n    key_to_filter2,\n    val_to_filter2\n  ) => {\n    return data\n      .filter(\n        (item) =>\n          item[key_to_filter1] === val_to_filter1 &&\n          item[key_to_filter2] === val_to_filter2\n      )\n      .map((item) => item[key_value]);\n  }\n);\n```\n\nDisplay aggregated values based on any rules, which the native Grafana transformations do not support.\n\n```handlebars\n# ### sel_val data "value"\n{{sel_val data "value"}}\n- sum:\n{{aggr_val data "value" "sum"}}, avg:\n{{aggr_val data "value" "avg"}}, min:\n{{aggr_val data "value" "min"}}, max:\n{{aggr_val data "value" "max"}}, first:\n{{aggr_val data "value" "first"}}, last:\n{{aggr_val data "value" "last"}}, # ### sel_val data "value" "category" "A"\n{{sel_val data "value" "category" "A"}}\n- sum:\n{{aggr_val data "value" "sum" "category" "A"}}, avg:\n{{aggr_val data "value" "avg" "category" "A"}}, min:\n{{aggr_val data "value" "min" "category" "A"}}, max:\n{{aggr_val data "value" "max" "category" "A"}}, first:\n{{aggr_val data "value" "first" "category" "A"}}, last:\n{{aggr_val data "value" "last" "category" "A"}}, # ### sel_val data "value"\n"category" "A" "type" "T1"\n{{sel_val data "value" "category" "A" "type" "T1"}}\n\nsum:\n{{aggr_val data "value" "sum" "category" "A" "type" "T1"}}, avg:\n{{aggr_val data "value" "avg" "category" "A" "type" "T1"}}, min:\n{{aggr_val data "value" "min" "category" "A" "type" "T1"}}, max:\n{{aggr_val data "value" "max" "category" "A" "type" "T1"}}, first:\n{{aggr_val data "value" "first" "category" "A" "type" "T1"}}, last:\n{{aggr_val data "value" "last" "category" "A" "type" "T1"}},\n```\n\n## Code Coverage\n\nWith our plugins installed on thousands of Grafana instances, we recognize that our users do not experience any unexpected changes, thus we increased Dynamic Text Panel\'s test coverage up to 99% and refactored its legacy components.\n\n<Image\n  title="For all of our Grafana plugins, we aim for greater than 90% test coverage."\n  src="/img/blog/2023-07-31-dynamictext-panel-4.1.0/codecov.png"\n/>\n\n## Getting Started\n\nYou can install Dynamic Text Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-dynamictext-panel\n```\n\n## YouTube Tutorial\n\nDynamic Text Panel is a Grafana visualization plugin that converts plain text and table data into visually appealing, easy-to-read information cards. You can use variables, Markdown, and Handlebars to customize the look of the outputted cards.\n\nThe Dynamic Text Panel plugin allows you to construct a text visualization template from the values of a dataset returned by a data source query.\n\n<Video\n  src="https://www.youtube.com/embed/MpNZ4Yl-p0U"\n  title="Markdown, HTML, and Handlebars for transforming data visualizations."\n/>\n\n<Video\n  src="https://www.youtube.com/embed/lJqk5Gobec4"\n  title="JavaScript code in Dynamic Text Panel."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Updated ESLint configuration (#192).\n- Increased test coverage for the plugin\'s functionality (#194).\n- Added the status field (#196).\n- Added support for external JavaScript and CSS resources (#197).\n- Added compatibility with Grafana 10.0.2 (#201).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "variable-panel-1.6.0-20230726/",
    metadata: {
      permalink: "/blog/variable-panel-1.6.0-20230726/",
      source: "@site/blog/2023-07-26-variable-panel-1.6.0/index.mdx",
      title: "Variable Panel 1.6.0",
      description:
        "We are happy to announce the release of the Variable Panel 1.6.0. This release includes the following updates:",
      date: "2023-07-26T00:00:00.000Z",
      formattedDate: "July 26, 2023",
      tags: [
        {
          label: "Variables",
          permalink: "/blog/tags/variables",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "variable-panel-1.6.0-20230726/",
        tags: ["Variables", "Release Notes"],
        image: "/img/blog/2023-07-26-variable-panel-1.6.0/banner.png",
        keywords: ["Variable", "Panel", "Status"],
        updated: "2023-08-21T00:00:00.000Z",
      },
      prevItem: {
        title: "Dynamic Text Panel 4.1.0",
        permalink: "/blog/dynamictext-panel-4.1.0-20230731/",
      },
      nextItem: {
        title: "Pizzeria observability on Grafana Canvas panel",
        permalink: "/blog/pizzeria-canvas-20230723/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Variable Panel 1.6.0. This release includes the following updates:\n\n- Added status sort button.\n- Added minimized mode similar to the native select for Query and Custom variables.\n- Added input for Text box variable.\n- Updated ESLint configuration.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on July 27, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/zD3QLYmnqsI"\n  title="Variable panel 1.6.0 for Grafana."\n/>\n\n## 2,500 downloads\n\nWe hit the milestone of 2,500 downloads and appreciate the feedback from the community.\n\n<Image\n  title="The variable panel was downloaded 1,000 times from the Grafana Catalog."\n  src="/img/blog/2023-07-26-variable-panel-1.6.0/downloads.png"\n  lazy={false}\n/>\n\n## Status sort button\n\nThe status sort button allows filtering values in ascending and descending directions based on the status field from the data source. Status fields with variable and status values should be specified.\n\n<Image\n  title="Sort button allows to sort values by status field in both directions."\n  src="/img/blog/2023-07-26-variable-panel-1.6.0/sort.png"\n  width="60%"\n/>\n\n## Minimized mode\n\nThe minimized mode is similar to the native select and works for Query and Custom variables.\n\nDepending on the variable options user allow to select a single or multi-value in the multi-lines element.\n\n<Image\n  title="Multi-line select element allows to select and deselect multiple values."\n  src="/img/blog/2023-07-26-variable-panel-1.6.0/minimize.png"\n  width="60%"\n/>\n\nThe variable panel allows updating dashboard variables without occupying valuable top space and placing it anywhere on the dashboard.\n\n<Image\n  title="The Variable panel is an excellent alternative to the native implementation."\n  src="/img/blog/2023-07-26-variable-panel-1.6.0/select.gif"\n/>\n\n## Input text box\n\nWe added a community-requested feature allowing input value for the Text box variables.\n\nThe input text box is supported in the table and minimized display modes. If you select the table and enable the feature, the input can be sticky and follow used when scrolling the dashboard.\n\n<Image\n  title="New input feature for the Text box variables."\n  src="/img/blog/2023-07-26-variable-panel-1.6.0/input.png"\n  width="60%"\n/>\n\n## Getting Started\n\nThe Variable panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-variable-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-variable-panel\n```\n\n## YouTube Tutorial\n\nThe Variable panel builds on top of the regular dashboard variables. It allows you to have dashboard filters in a separate panel which you can place anywhere on the dashboard.\n\nThe variable panel offers you single- and multi-variable layouts along with an advanced Tree View.\n\n<Video\n  src="https://www.youtube.com/embed/mYYtMW9qiPA"\n  title="Demonstrates the Variable panel functionality."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update ESLint configuration (#47)\n- Add status sort button (#49, #51)\n- Add minimize mode similar to the native select for Query and Custom (#50)\n- Add input for text box variable (#53)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-variable-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "pizzeria-canvas-20230723/",
    metadata: {
      permalink: "/blog/pizzeria-canvas-20230723/",
      source: "@site/blog/2023-07-23-pizzeria-canvas/index.mdx",
      title: "Pizzeria observability on Grafana Canvas panel",
      description:
        "Can you smell it? The aroma of the baked pizza? Do you feel it? The increasing heartbeat rate when you look at the countdown timer where only 30 seconds left? How about joy mixed with pride when watching the number of completed orders increase and your revenue of the day bloom?",
      date: "2023-07-23T00:00:00.000Z",
      formattedDate: "July 23, 2023",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
        {
          label: "Analytics",
          permalink: "/blog/tags/analytics",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "pizzeria-canvas-20230723/",
        tags: ["Grafana Crash Course", "Analytics"],
        image: "/img/blog/2023-07-23-pizzeria-canvas/banner.png",
        keywords: ["Pizzeria", "Canvas", "Data", "Grafana"],
        updated: "2023-07-31T00:00:00.000Z",
      },
      prevItem: {
        title: "Variable Panel 1.6.0",
        permalink: "/blog/variable-panel-1.6.0-20230726/",
      },
      nextItem: {
        title: "Grafana HTTP API Data Source 2.0.0",
        permalink: "/blog/grapi-datasource-2.0.0-20230718/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nCan you smell it? The aroma of the baked pizza? Do you feel it? The increasing heartbeat rate when you look at the countdown timer where only 30 seconds left? How about joy mixed with pride when watching the number of completed orders increase and your revenue of the day bloom?\n\nAll that is possible now with Grafana 10 and the canvas panel, which becomes generally available in the latest Grafana 10 release. It saw the light of dawn in June 2023, and no doubt it could be called the best Grafana release yet.\n\nThe canvas panel is far from being complete but mature enough for a production environment. The breathtaking presentation featuring the house\'s energy with metrics and animated wind turbines gave many of us the itch to drop everything and try to build something with it.\n\nAs proved many times, Grafana is a champion in the observability of K8s clusters, monitoring logs, and traces.\n\nHowever, we at Volkov Labs find it delightful to explore other Grafana possibilities. Time after time, we uncovered it being effective in areas yet to be considered. This time our love for pizza and the news about the Canvas panel being released as part of the core begged us to challenge ourselves with the pizzeria observability dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/ZIjUOr_HYFQ"\n  title="Canvas panel for Grafana | Advanced animated SVG element."\n/>\n\nThe results are in and look pleasing. Keep reading to learn what we were able to come up with.\n\n## Mockup\n\nWe started by designing the layout of the panel in Figma. The canvas panel requires the background to be a raster image, and custom elements are based on vector SVG graphics. Figma can do both at the same time!\n\nWe selected the most important metrics to track in the pizzeria observability journey:\n\n- Number of online and walk-in orders.\n- How many orders were completed today.\n- Revenue based on the completed orders.\n- Waiting time for walk-in customers.\n- Status of the ovens and progress of pizza baking.\n\nThe pizza oven includes:\n\n- Timer to display time left.\n- Smoke, lights, fire and knob lights to indicate that the oven is working.\n- Pizza opacity to imitate the baking process. The fully cooked pizza has 100%.\n\n<Image\n  title="We used Figma to create an SVG mockup with observability metrics."\n  src="/img/blog/2023-07-23-pizzeria-canvas/mockup.png"\n  lazy={false}\n/>\n\n## Background\n\nThe data metrics were removed from the Mockup and will be replaced with data elements on the canvas panel. Pizza ovens will be replaced with advanced custom elements.\n\n<Image\n  title="Background image with pizzeria layout and placeholders."\n  src="/img/blog/2023-07-23-pizzeria-canvas/background.png"\n  width="80%"\n/>\n\nThe exported background file can be placed in the `public/img/bg/` folder mapped in the Docker container or referenced from the URL in the panel\'s options:\n\n<Image\n  title="Background image can be placed in the container or referenced by URL."\n  src="/img/blog/2023-07-23-pizzeria-canvas/bg-options.png"\n  width="80%"\n/>\n\n## Pizza oven\n\nAs we mentioned the wind turbine, drone and server elements in the canvas panel look interesting, but these kinds of elements can\'t be easily incorporated in the working version of Grafana. New advanced elements should be scripted in the Grafana source code, compiled and built into the new Docker container to take advantage of.\n\nCreating new advanced elements starts with a transparent SVG file. This file will be used in the React display component. We recommend including `id` attributes to identify and animate layers.\n\nCreated oven\'s layers consist of text, vector, and ellipse elements with added filters and effects for a natural look and feel.\n\n<Image\n  title="Pizza oven was exported as transparent SVG with id attribute to identify layers."\n  src="/img/blog/2023-07-23-pizzeria-canvas/figma.png"\n  width="100%"\n/>\n\n## Advanced canvas element\n\nThe advanced canvas element consists of:\n\n- Definition with id, name, and description.\n- Options with default parameters for background, and placement.\n- UI options for element configuration.\n- Function to return data from data sources.\n- React component to display the element.\n\n### Element definitions\n\nAll custom elements should be identified with id, name and description. Name and description will be displayed for user selection in the panel options. The default size should be set based on the exported SVG width and height.\n\n```js\nexport const pizzaOvenItem: CanvasElementItem = {\n  id: "pizzaOven",\n  name: "Pizza Oven",\n  description: "Animated pizza oven",\n  display: PizzaOvenDisplay,\n  defaultSize: {\n    width: 200,\n    height: 300,\n  },\n};\n```\n\n### UI configuration options\n\nWe selected `state` and `time` options as input dimensions which can be set as fixed or data source field values:\n\n- `state` controls lights, fire and knob lights to indicate that the oven is working.\n- `time` displays how much time is left and controls the opacity of the pizza layers.\n\n```js\nregisterOptionsUI: (builder: any) => {\n  const category = ["Pizza Oven"];\n  builder\n    .addCustomEditor({\n      category,\n      id: "state",\n      path: "config.state",\n      name: "State",\n      editor: ResourceDimensionEditor,\n    })\n    .addCustomEditor({\n      category,\n      id: "time",\n      path: "config.time",\n      name: "Time",\n      editor: ResourceDimensionEditor,\n    });\n};\n```\n\n### Values from data sources\n\nBased on the configured options values will be static or returned from the data source. To create a `data` structure to display elements we used `getResource` method to retrieve the last value from the data source.\n\n```js\n  prepareData: (ctx: DimensionContext, cfg: PizzaOvenConfig) => {\n    const stateValues = cfg?.state && ctx.getResource(cfg.state).field?.values || [];\n    const timeValues = cfg?.time && ctx.getResource(cfg.time).field?.values || [];\n\n    const data: PizzaOvenData = {\n      state: stateValues.length && stateValues[stateValues.length-1],\n      time: timeValues.length ? timeValues[timeValues.length-1] : 0\n    };\n\n    return data;\n  },\n```\n\n### React display component\n\nThe display component for the pizza oven returns SVG graphics with smoke animation and is controlled by the configured UI options and data source values.\n\n<details>\n  <summary>An advanced element with styles, types and a React component</summary>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-07-23-pizzeria-canvas/pizzaOven.tsx"\n  language="js"\n/>\n\n</details>\n\nThe proposed canvas element was created in the `public/app/features/canvas/elements/` folder and included in the registry (`public/app/features/canvas/registry.ts`) as an advanced element item:\n\n```js\nexport const defaultElementItems = [\n  metricValueItem, // default for now\n  textItem,\n  rectangleItem,\n  iconItem,\n  serverItem,\n];\n\nexport const advancedElementItems = [\n  buttonItem,\n  windTurbineItem,\n  droneTopItem,\n  droneFrontItem,\n  droneSideItem,\n  pizzaOvenItem,\n];\n\nexport const canvasElementRegistry =\n  new Registry() <\n  CanvasElementItem >\n  (() => [...defaultElementItems, ...advancedElementItems]);\n```\n\n### Developing and building a Docker image\n\nTo get started with Grafana development on Mac or Linux:\n\n1. Clone repository `git clone https://github.com/grafana/grafana.git`\n2. Install dependencies `yarn install --immutable`\n3. Start Frontend `yarn start`\n4. Start Backend `make run`\n\nDeveloping and building Docker images is explained in the [Grafana developer guide](https://github.com/grafana/grafana/blob/main/contribute/developer-guide.md).\n\nIf you followed all the steps you should see a Pizza Oven advanced element in the list:\n\n<Image\n  title="Pizza Oven element can be added to the Canvas panel."\n  src="/img/blog/2023-07-23-pizzeria-canvas/layers.png"\n  width="60%"\n/>\n\n## PostgreSQL with Timescale data source\n\nFor the demonstration, we used the PostgreSQL with Timescale database, which is the ultimate storage partner for Grafana. You can find an explanation in the tutorial:\n\n<Video\n  src="https://www.youtube.com/embed/SbjIWnrMIgk"\n  title="Ultimate storage partner for Grafana."\n/>\n\nThe table `orders` to keep track of online and walk-in orders and the cooking progress:\n\n```sql\nCREATE TABLE orders (\n    id integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,\n    created timestamp with time zone NOT NULL,\n    name text,\n    phone text,\n    description text,\n    online boolean,\n    price integer,\n    oven integer,\n    started timestamp with time zone NOT NULL\n);\n\nCREATE SEQUENCE seq_orders START 1;\n\ninsert into orders values(nextval(\'seq_orders\'), now(), \'Mike\', \'123-456-789\', \'Cheese Pizza\', true, 19.99, 1, now());\ninsert into orders values(nextval(\'seq_orders\'), now(), \'Ella\', \'132-461-782\', \'Pepperoni Pizza\', false, 24.99, 2, now());\n```\n\n## The canvas panel is awesome\n\nThe canvas panel can be used for a variety of use cases, pizzeria included.\n\n<Image\n  title="Configured canvas panel with custom pizza oven elements based on the data source data."\n  src="/img/blog/2023-07-23-pizzeria-canvas/pizzeria.gif"\n/>',
  },
  {
    id: "grapi-datasource-2.0.0-20230718/",
    metadata: {
      permalink: "/blog/grapi-datasource-2.0.0-20230718/",
      source: "@site/blog/2023-07-18-grapi-datasource-2.0.0/index.mdx",
      title: "Grafana HTTP API Data Source 2.0.0",
      description:
        "We are happy to announce the release of the Grafana HTTP API Data Source 2.0.0. This release includes the following updates:",
      date: "2023-07-18T00:00:00.000Z",
      formattedDate: "July 18, 2023",
      tags: [
        {
          label: "Grafana HTTP API Data Source",
          permalink: "/blog/tags/grafana-http-api-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "grapi-datasource-2.0.0-20230718/",
        tags: ["Grafana HTTP API Data Source", "Release Notes"],
        image: "/img/blog/2023-07-18-grapi-datasource-2.0.0/banner.png",
        keywords: ["Grafana", "HTTP API", "Data Source", "Annotations"],
      },
      prevItem: {
        title: "Pizzeria observability on Grafana Canvas panel",
        permalink: "/blog/pizzeria-canvas-20230723/",
      },
      nextItem: {
        title: "Data Manipulation Panel 3.0.0",
        permalink: "/blog/form-panel-3.0.0-20230715/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Grafana HTTP API Data Source 2.0.0. This release includes the following updates:\n\n- Added compatibility with Grafana 10.0.2 and deprecated support for Grafana 8.5.\n- Requires Grafana 9 or Grafana 10.\n- Migrated to Plugin Tools 1.5.2 with the update of Node.js 18 and `npm`.\n- Increased test coverage of the plugin\'s functionality up to 86%.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on July 18, 2023.\n:::\n\n## Getting Started\n\nThe Grafana HTTP API Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-grapi-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-grapi-datasource\n```\n\n## YouTube Tutorial\n\n<Video\n  src="https://www.youtube.com/embed/0zibOEGqTJ8"\n  title="Easy access to Grafana backend using Grafana HTTP API data source."\n/>\n\n## Release Notes\n\n### Breaking changes\n\n- Requires Grafana 9 and Grafana 10\n\n### Features / Enhancements\n\n- Update to Grafana 10.0.2 (#31, #40, #45, #47)\n- Add Annotations Tutorial to README (#33)\n- Add Authentication to Getting Started (#36)\n- Add exception handling for Alert Rules in Annotations (#39)\n- Update tests with testing-library/react (#42)\n- Add tests for Components and datasource (#44)\n- Migrate to Plugin Tools 1.5.2 (#45)\n- Update to Node 18 and npm (#45)\n- Add E2E Cypress testing (#48)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-grapi-datasource/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "form-panel-3.0.0-20230715/",
    metadata: {
      permalink: "/blog/form-panel-3.0.0-20230715/",
      source: "@site/blog/2023-07-15-form-panel-3.0.0/index.mdx",
      title: "Data Manipulation Panel 3.0.0",
      description:
        "We are happy to announce the release of the Data Manipulation Panel 3.0.0. This release includes the following updates:",
      date: "2023-07-15T00:00:00.000Z",
      formattedDate: "July 15, 2023",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "form-panel-3.0.0-20230715/",
        tags: ["Data Manipulation", "Release Notes"],
        image: "/img/blog/2023-07-15-form-panel-3.0.0/banner.png",
        keywords: ["Data Manipulation", "Form Panel", "Data", "Grafana"],
        updated: "2023-09-22T00:00:00.000Z",
      },
      prevItem: {
        title: "Grafana HTTP API Data Source 2.0.0",
        permalink: "/blog/grapi-datasource-2.0.0-20230718/",
      },
      nextItem: {
        title: "Variable Panel 1.5.0",
        permalink: "/blog/variable-panel-1.5.0-20230711/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Data Manipulation Panel 3.0.0. This release includes the following updates:\n\n- Added a hidden option for the string inputs.\n- Added the `notifyWarning` function for warnings.\n- Added drag-and-drop support for the form elements editor.\n- Added portrait layout orientation.\n- Updated form elements to delay save changes with auto-save.\n- Updated form elements to use a local state instead of saving values in the dashboard.\n- Added compatibility with Grafana 10.0.0 and deprecated support for Grafana 8.5.\n- Requires Grafana 9 or Grafana 10.\n- Migrated to Plugin Tools 1.5.2 with the update of Node.js 18 and `npm`.\n- Increased test coverage of the plugin\'s functionality up to 97%.\n\n:::info Grafana Catalog\nThe plugin was updated in the Grafana Plugins catalog on July 18, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/zNrFOtW6j-o"\n  title="Data Manipulation Panel 3.0.0 for Grafana."\n/>\n\nData Manipulation Panel is a brand-new Grafana plugin. It is the first plugin that allows you to insert and update application data, as well as modify settings, straight from your Grafana dashboard.\n\n<Image\n  title="Data Manipulation Panel allows creating dynamic forms in Grafana."\n  src="/img/blog/2023-07-15-form-panel-3.0.0/panel.png"\n  lazy={false}\n/>\n\n:::warning Breaking changes\n\nUpdated values of form elements are kept in the local state and are not saved in the dashboard by default.\n\nThe refactoring of local states and form elements may introduce breaking changes. Please test this version before updating the plugin on production Grafana instances.\n:::\n\n## 85,000 downloads\n\nThis year, we are seeing growing community interest in data manipulation and are trying to deliver the backlog items and requested features as fast as possible.\n\nThe plugin was downloaded more than 85,000 times and we aim at the 100,000 downloads milestone.\n\n<Image\n  title="Data Manipulation Panel was downloaded 85,000 times from the Grafana Plugins catalog."\n  src="/img/blog/2023-07-15-form-panel-3.0.0/downloads.png"\n  width="80%"\n/>\n\n## Elements\n\nForm elements in the panel\'s options were placed into new collapsible components and received support for drag-and-drop support and delayed auto-save.\n\nTo improve performance, we added the delayed saving of form elements. Form elements are automatically saved after a one-second timeout or when clicking the Save button to prevent numerous updates when creating new forms.\n\n<Image\n  title="Panel options are saved and rendered on the form after a 1-second timeout."\n  src="/img/blog/2023-07-15-form-panel-3.0.0/elements.png"\n  width="80%"\n/>\n\n## Sections\n\nForm elements can be separated into sections. In addition to the landscape orientation, we added the portrait orientation, which can be selected in the plugin options.\n\n<Image\n  title="Sections with form elements can be positioned vertically or horizontally."\n  src="/img/blog/2023-07-15-form-panel-3.0.0/sections.png"\n/>\n\n## Hidden strings\n\nWe added an option to hide the string input, which can store additional information that is not visible to end-users.\n\n<Image\n  title="Hidden string input can store additional information."\n  src="/img/blog/2023-07-15-form-panel-3.0.0/hidden.png"\n/>\n\n## Getting Started\n\nYou can install Data Manipulation Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-form-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-form-panel\n```\n\n## YouTube Tutorial\n\nData Manipulation Panel is a brand-new Grafana plugin. It is the first plugin that allows you to insert and update application data, as well as modify settings, straight from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entry and user input into dashboard."\n/>\n\n## Release Notes\n\n### Breaking changes\n\n- Requires Grafana 9 or Grafana 10.\n- Form elements are kept in the local state and are not saved in the dashboard by default.\n- The refactoring of local states and form elements may introduce breaking changes. Please test this version before updating the plugin on production Grafana instances.\n\n### Features / Enhancements\n\n- Updated the product documentation for API Servers (#149).\n- Added compatibility with Grafana 10.0.0 (#165, #172, #184, #200).\n- Added the Hidden option into the string element (#171).\n- Integrated E2E Cypress testing (#180).\n- Increased the test coverage for the plugin\'s functionality and updated the test library (#181, #183, #185).\n- Updated form elements to delay the saving of changes with auto-save (#186).\n- Migrated to Plugin Tools 1.5.2 (#187, #192).\n- Updated to Node.js 18 (#188).\n- Updated constants and E2E tests (#190).\n- Updated the form elements to use the local state (#191).\n- Added the `notifyWarning()` function (#201).\n- Added the drag and drop for elements editor (#202).\n- Deprecated support for Grafana 8.5 (#203).\n- Added the execution of the initial request on initial updates (#205).\n- Added the landscape orientation for the layout (#206).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-form-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "variable-panel-1.5.0-20230711/",
    metadata: {
      permalink: "/blog/variable-panel-1.5.0-20230711/",
      source: "@site/blog/2023-07-11-variable-panel-1.5.0/index.mdx",
      title: "Variable Panel 1.5.0",
      description:
        "We are happy to announce the release of the Variable Panel 1.5.0. This release includes the following updates:",
      date: "2023-07-11T00:00:00.000Z",
      formattedDate: "July 11, 2023",
      tags: [
        {
          label: "Variables",
          permalink: "/blog/tags/variables",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "variable-panel-1.5.0-20230711/",
        tags: ["Variables", "Release Notes"],
        image: "/img/blog/2023-07-11-variable-panel-1.5.0/banner.png",
        keywords: ["Variable", "Panel", "Status"],
      },
      prevItem: {
        title: "Data Manipulation Panel 3.0.0",
        permalink: "/blog/form-panel-3.0.0-20230715/",
      },
      nextItem: {
        title: "Dynamic Text Panel 4.0.0",
        permalink: "/blog/dynamictext-panel-4.0.0-20230709/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Variable Panel 1.5.0. This release includes the following updates:\n\n- Added sticky header.\n- Added auto-scroll for multi-group selection.\n- Added drag and drop for tree view groups.\n- Added expand and collapse all in the header.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on July 12, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/YJXXMUgXDys"\n  title="Variable panel 1.5.0 for Grafana."\n/>\n\nWe appreciate the feedback and interest in the Variable panel plugin. Provided functionality was requested by the community many times and we gladly contributed.\n\n## Demo\n\nInterested to try the panel? Take a look at [Grafana plugins registered in the Grafana Catalog](https://release.volkovlabs.io/d/O73WAt27z/plugin-info?orgId=1&var-slug=volkovlabs-variable-panel).\n\nOne of my favorite features in this release is the sticky header, which allows you to filter values and select favorites. Statuses indicate when the plugin was updated:\n\n- Green less than 365 days.\n- Yellow for more than 365 days.\n- Red for more than 730 days.\n\n<Image\n  title="Plugins dashboard helps us to learn about new plugins in the Grafana Catalog."\n  src="/img/blog/2023-07-11-variable-panel-1.5.0/demo.png"\n  lazy={false}\n/>\n\n## Single value table\n\nThe single value table was updated to support the `All` option and allows to select a single value by clicking on it.\n\n<Image\n  title="To select a single value, choose the value from the list."\n  src="/img/blog/2023-07-11-variable-panel-1.5.0/single.png"\n/>\n\n## Collapse and expand all\n\nWe added a new collapse and expand all button next to the variable title in the header. It\'s a must-have feature to expand and collapse all branches at the same time for 5+ levels.\n\n<Image\n  title="Expand and collapse all feature allows to quickly switch between branches."\n  src="/img/blog/2023-07-11-variable-panel-1.5.0/collapse.png"\n/>\n\n## Tree View groups\n\nA new feature allows to drag and drop configured Tree View groups to rearrange how they will be displayed on the panel.\n\n<Image\n  title="Groups and Levels support drag and drop functionality."\n  src="/img/blog/2023-07-11-variable-panel-1.5.0/groups.png"\n/>\n\n## Getting Started\n\nThe Variable panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-variable-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-variable-panel\n```\n\n## YouTube Tutorial\n\nThe Variable panel builds on top of the regular dashboard variables. It allows you to have dashboard filters in a separate panel which you can place anywhere on the dashboard.\n\nThe variable panel offers you single- and multi-variable layouts along with an advanced Tree View.\n\n<Video\n  src="https://www.youtube.com/embed/mYYtMW9qiPA"\n  title="Demonstrates the Variable panel functionality."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update single select variable with All enabled (#41)\n- Add sticky header and auto scroll on multi-group selection (#38)\n- Add drag and drop for Groups (#42)\n- Add expand and collapse all in the header (#46)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-variable-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "dynamictext-panel-4.0.0-20230709/",
    metadata: {
      permalink: "/blog/dynamictext-panel-4.0.0-20230709/",
      source: "@site/blog/2023-07-09-dynamictext-panel-4.0.0/index.mdx",
      title: "Dynamic Text Panel 4.0.0",
      description:
        "We're excited to announce the release of the Dynamic Text Panel 4.0.0. This major release includes the following updates:",
      date: "2023-07-09T00:00:00.000Z",
      formattedDate: "July 9, 2023",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "dynamictext-panel-4.0.0-20230709/",
        tags: ["Dynamic Text", "Release Notes"],
        image: "/img/blog/2023-07-09-dynamictext-panel-4.0.0/banner.png",
        keywords: ["Dynamic Text", "Panel", "JavaScript", "Events", "Grafana"],
        updated: "2023-09-15T00:00:00.000Z",
      },
      prevItem: {
        title: "Variable Panel 1.5.0",
        permalink: "/blog/variable-panel-1.5.0-20230711/",
      },
      nextItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 4.0.0",
        permalink: "/blog/image-panel-4.0.0-20230709/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe\'re excited to announce the release of the Dynamic Text Panel 4.0.0. This major release includes the following updates:\n\n- Requires Grafana 9 or Grafana 10.\n- Added the Event Bus object into JavaScript functions.\n- Added support for dashboard variables in CSS styles.\n- Added compatibility with Grafana 10.0.0 and deprecated support for Grafana 8.5.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on June 28, 2023.\n:::\n\n## 3 million downloads\n\nWe celebrated 2 million downloads in February. The panel\'s adaptability has been extremely accelerated since then.\n\nJavaScript code, a CSS style editor, and Grafana events offer functionalities that no native or community plugin has yet to provide.\n\n<Image\n  title="Dynamic Text Panel was downloaded more than three million times."\n  src="/img/blog/2023-07-09-dynamictext-panel-4.0.0/downloads.png"\n  lazy={false}\n/>\n\n## Dashboard variables\n\nDynamic Text Panel provides helpers to support variables. You can also use variables in JavaScript code and CSS styles.\n\n### JavaScript code\n\nUse the `replaceVariables` function to replace dashboard variables in the JavaScript code.\n\n```\nconst bonjour = replaceVariables("${variable}");\nconsole.log(bonjour.toUpperCase())\n```\n\n### Styles\n\nDashboard variables are replaced automatically in CSS styles.\n\n### Content\n\nReturns a string array of the currently selected values for a certain variable.\n\n```handlebars\n{{variable "hostname"}}\n\n<!-- result: [\'server1\', \'server2\', \'server3\']  -->\n```\n\nYou can find more examples in our [documentation](/plugins/volkovlabs-dynamictext-panel/variables/).\n\n## Event Bus\n\nGrafana uses an event bus to publish application events to notify different parts of Grafana when the user interacts with it. Dynamic Text Panel can respond to these interactions by subscribing to one or more events.\n\n### Predefined Events\n\nA full list of events is available in our [Grafana Crash Course](/grafana/developer/eventbus).\n\n### Subscribe to events\n\nTo avoid memory leaks, all events must be unsubscribed.\n\n```\nconst subscription = eventBus.subscribe({ type: \'data-hover\' }, () => {\n  console.log(\'React to Data Hover\')\n})\n\nreturn () => {\n  subscription.unsubscribe();\n  console.log(\'Unsubscribed\');\n}\n```\n\n## Getting Started\n\nYou can install Dynamic Text Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-dynamictext-panel\n```\n\n## YouTube Tutorial\n\nDynamic Text Panel is a Grafana visualization plugin that converts plain text and table data into visually appealing, easy-to-read information cards. You can use variables, Markdown, and Handlebars to customize the look of the outputted cards.\n\nThe Dynamic Text Panel plugin allows you to construct a text visualization template from the values of a dataset returned by a data source query.\n\n<Video\n  src="https://www.youtube.com/embed/MpNZ4Yl-p0U"\n  title="Markdown, HTML, and Handlebars for transforming data visualizations."\n/>\n\n<Video\n  src="https://www.youtube.com/embed/lJqk5Gobec4"\n  title="JavaScript code in Dynamic Text Panel."\n/>\n\n## Release Notes\n\n### Breaking changes\n\n- Requires Grafana 9 or Grafana 10\n\n### Features / Enhancements\n\n- Increased the test coverage and updated the library to test React code (#177).\n- Added the Event Bus object into a JavaScript function (#179).\n- Migrated to Plugin Tools 1.5.2 (#183).\n- Added compatibility with Grafana 10.0.0 (#166, #178, #183).\n- Updated the plugin to Node.js 18 and npm (#183).\n- Deprecated support for Grafana 8.5 (#183).\n- Integrated E2E Cypress testing into the plugin (#184).\n- Added support for variables in CSS styles editor (#185).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "image-panel-4.0.0-20230709/",
    metadata: {
      permalink: "/blog/image-panel-4.0.0-20230709/",
      source: "@site/blog/2023-07-09-image-panel-4.0.0/index.mdx",
      title: "Base64 Image/Video/Audio/PDF Panel 4.0.0",
      description:
        "We are excited to announce the release of the Base64 Image/Video/Audio/PDF Panel 4.0.0. This major release includes the following updates:",
      date: "2023-07-09T00:00:00.000Z",
      formattedDate: "July 9, 2023",
      tags: [
        {
          label: "Base64 Image/Video/Audio/PDF",
          permalink: "/blog/tags/base-64-image-video-audio-pdf",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "image-panel-4.0.0-20230709/",
        tags: ["Base64 Image/Video/Audio/PDF", "Release Notes"],
        image: "/img/blog/2023-07-09-image-panel-4.0.0/banner.png",
        keywords: ["Base64", "Panel", "Zoom", "Label", "Images"],
        updated: "2023-09-09T00:00:00.000Z",
      },
      prevItem: {
        title: "Dynamic Text Panel 4.0.0",
        permalink: "/blog/dynamictext-panel-4.0.0-20230709/",
      },
      nextItem: {
        title: "Variable Panel 1.4.0 available in Grafana Catalog",
        permalink: "/blog/variable-panel-1.4.0-20230708/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Shorts from "@theme/Shorts";\nimport Video from "@theme/Video";\n\n\nWe are excited to announce the release of the Base64 Image/Video/Audio/PDF Panel 4.0.0. This major release includes the following updates:\n\n- Requires Grafana 9 and Grafana 10.\n- Added the zoom-in and out functions in addition to the full-screen mode, introduced in 3.6.0.\n- Added the capability to specify captions for images and media files.\n- Added compatibility with Grafana 10.0.0 and deprecated support for Grafana 8.5.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on June 28, 2023.\n:::\n\n<Shorts\n  src="https://www.youtube.com/embed/cNxWxd6mqf8"\n  title="Base64 Image/Video/Audio/PDF Panel 4.0.0 for Grafana."\n/>\n\n## Image zooming in and out\n\nThe plugin supports image zooming in and out, which simplifies the display of images within the plugin\'s panel and allows you to reset the scale of high-resolution images to fit the available display area.\n\nWhen enabling the image zooming on the panel toolbar, you can choose between the Full Screen or Pan and Pinch modes.\n\n<Image\n  title="Tokyo image analyzed with the YOLO model and zoomed in for a detailed view."\n  src="/img/blog/2023-07-09-image-panel-4.0.0/zoom.png"\n  lazy={false}\n/>\n\n## Description\n\nWe added the capability to show captions for images and media files. Captions are displayed below the area rendering images or media files.\n\nImages are scaled automatically when using the Height option in the plugin settings. When using the original height, you need to manually adjust the dimensions of the display area.\n\n<Image\n  title="Captions displayed under the image."\n  src="/img/blog/2023-07-09-image-panel-4.0.0/description.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nYou can install Base64 Image/Video/Audio/PDF Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-image-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-image-panel\n```\n\n## YouTube Tutorial\n\nBase64 Image/Video/Audio/PDF Panel is a Grafana plugin that renders PNG, JPG, GIF, MP4, WEBM, MP3, OGG, and PDF files encoded in the Base64 format.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Video, Live Camera Feed on Grafana Dashboard."\n/>\n\n## Release Notes\n\n### Breaking changes\n\n- Requires Grafana 9 and Grafana 10.\n\n### Features / Enhancements\n\n- Added the zoom in/out actions on the image toolbar (#78).\n- Moved the zoom in/out buttons to the image toolbar (#79).\n- Added compatibility with Grafana 10.0.0 (#80).\n- Added captions for images and media files (#82).\n- Deprecated support for Grafana 8.5 (#83).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-image-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "variable-panel-1.4.0-20230708/",
    metadata: {
      permalink: "/blog/variable-panel-1.4.0-20230708/",
      source: "@site/blog/2023-07-08-variable-panel-1.4.0/index.mdx",
      title: "Variable Panel 1.4.0 available in Grafana Catalog",
      description:
        "We are happy to announce the first community-signed version of Variable Panel 1.4.0. This release includes the following updates:",
      date: "2023-07-08T00:00:00.000Z",
      formattedDate: "July 8, 2023",
      tags: [
        {
          label: "Variables",
          permalink: "/blog/tags/variables",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "variable-panel-1.4.0-20230708/",
        tags: ["Variables", "Release Notes"],
        image: "/img/blog/2023-07-08-variable-panel-1.4.0/banner.png",
        keywords: ["Variable", "Panel", "Status"],
      },
      prevItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 4.0.0",
        permalink: "/blog/image-panel-4.0.0-20230709/",
      },
      nextItem: {
        title: "Volkov Labs App 2.5.0 supports Grafana 10",
        permalink: "/blog/volkovlabs-app-2.5.0-20230617/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the first community-signed version of Variable Panel 1.4.0. This release includes the following updates:\n\n- Added a Favorite icon to filter selected favorites.\n- Added Tree View groups to provide location, configuration, manufacturer, etc. selections in the same panel.\n- Added auto-scroll to the selected value when the panel loads.\n- Added an option to display the variable name in front of the value.\n- Updated Sticky scrollbar to support Grafana 9.\n- Increased Test coverage to 99%.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on July 7, 2023.\n:::\n\n## Favorites\n\nThe variable panel allows selecting values as favorites, which are stored in the Web browser\'s storage and are unique for each user.\n\nThe new favorite icon in the header allows you to filter all selected favorites for quick navigation and selection.\n\n<Image\n  title="Selected values are unique for each user and stored in the Web browser\'s storage."\n  src="/img/blog/2023-07-08-variable-panel-1.4.0/favorites.png"\n  lazy={false}\n/>\n\n## Tree View groups\n\nMultiple tree view groups allow selecting variables based on location, configuration, manufacturer, etc.\n\nEach group has its level configuration and is based on the data from the data frames. Levels from the data frame should have the same name as the variable.\n\nAn additional option to display the variable name in front of the value can be enabled to provide additional context for the users.\n\n<Image\n  title="Groups consist of levels with the same names as variables."\n  src="/img/blog/2023-07-08-variable-panel-1.4.0/groups.png"\n/>\n\n## Test Coverage\n\nFor developing our plugins we use continuous integration with 80+% test coverage to make sure that any changes won\'t break existing functionality. We talked about it in [our developing panel plugins series](https://www.youtube.com/watch?v=ga5Ik32vqIw).\n\n<Image\n  title="The variable panel has 99% test coverage."\n  src="/img/blog/2023-07-08-variable-panel-1.4.0/codecov.png"\n/>\n\n## Getting Started\n\nThe Variable panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-variable-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-variable-panel\n```\n\n## YouTube Tutorial\n\nThe Variable panel builds on top of the regular dashboard variables. It allows you to have dashboard filters in a separate panel which you can place anywhere on the dashboard.\n\nThe variable panel offers you single- and multi-variable layouts along with an advanced Tree View.\n\n<Video\n  src="https://www.youtube.com/embed/mYYtMW9qiPA"\n  title="Demonstrates the Variable panel functionality."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Add Tutorial (#21)\n- Update adding new Level to last (#22)\n- Hide unselectable items (#24)\n- Use the main view scroll element to support Grafana 9 (#26)\n- Add a Favorite icon to filter selected favorites (#25)\n- Add Tree View groups. Requires to update Tree View configuration. (#20)\n- Add an option to display the variable name in front of the value (#30)\n- Increase tests coverage (#31)\n- Add auto scroll to the selected value (#32)\n- Community signed release (#37)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-variable-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "volkovlabs-app-2.5.0-20230617/",
    metadata: {
      permalink: "/blog/volkovlabs-app-2.5.0-20230617/",
      source: "@site/blog/2023-06-17-volkovlabs-app-2.5.0/index.mdx",
      title: "Volkov Labs App 2.5.0 supports Grafana 10",
      description:
        "We are happy to announce the release of the Volkov Labs App 2.5.0 with a customized Grafana docker image. This release includes the following updates:",
      date: "2023-06-17T00:00:00.000Z",
      formattedDate: "June 17, 2023",
      tags: [
        {
          label: "Development",
          permalink: "/blog/tags/development",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "volkovlabs-app-2.5.0-20230617/",
        tags: ["Development", "Release Notes"],
        image: "/img/blog/2023-06-17-volkovlabs-app-2.5.0/banner.png",
        keywords: ["Volkov Labs App", "Development", "Grafana"],
      },
      prevItem: {
        title: "Variable Panel 1.4.0 available in Grafana Catalog",
        permalink: "/blog/variable-panel-1.4.0-20230708/",
      },
      nextItem: {
        title: "Calendar Panel 1.4.0 supports Grafana 10",
        permalink: "/blog/calendar-panel-1.4.0-20230610/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Volkov Labs App 2.5.0 with a customized Grafana docker image. This release includes the following updates:\n\n- Updated to major Grafana version 10.0.0.\n- Increased Test coverage and added end-to-end test workflow.\n- Migrated to Plugin Tools 1.5.2 with Node 18 and npm.\n- Added Application Router for navigation.\n\n:::info Grafana Catalog\n\nVolkov Labs App is for internal use and is not included in the Grafana Catalog.\n\nWe share this project with the community as an example of how to create [a customized Docker image with included Application plugin and provisioning](https://github.com/volkovlabs/volkovlabs-app).\n\n:::\n\n<Image\n  title="We keep Volkov Labs App updated with the latest Grafana features."\n  src="/img/blog/2023-06-17-volkovlabs-app-2.5.0/app.png"\n  lazy={false}\n/>\n\n## Grafana 10.0.0\n\nMajor Grafana version 10.0.0 was released at GrafanaCON 2023. It has many visual and functional improvements.\n\nWe tested and updated all commands in the [Dockerfile](https://github.com/VolkovLabs/volkovlabs-app/blob/main/Dockerfile) for the latest Grafana release 10.0.0.\n\n## Customization\n\nMonths of work bundled with deep expertise nicely wrapped into a 7-minute long video revealing simple steps to customize Grafana. In this tutorial, we answered all community questions we collected to this moment.\n\n<Video\n  src="https://www.youtube.com/embed/ChI78v4UZc0"\n  title="How to customize Grafana 9.4. A cheat-sheet for Docker container and Windows."\n/>\n\n## Update Navigation (Mega) Menu\n\nThe mega menu is the left-side menu added in Grafana 9.5. It\'s hard-coded and there is no way to update it in the UI.\n\n<Image\n  title="The mega menu updated with the new dashboard link."\n  src="/img/blog/2022-08-14-customize-grafana/menu.png"\n/>\n\nThe menu elements can be added using JavaScript when rendering. We used the existing command for updating the Help menu to set the `nav` variable.\n\n```docker\n## Update Help menu\nRUN sed -i "s|\\[\\[.NavTree\\]\\],|nav,|g; \\\n    s|window.grafanaBootData = {| \\\n    let nav = [[.NavTree]]; \\\n    nav[nav.length -1][\'subTitle\'] = \'Application\'; \\\n    window.grafanaBootData = {|g" \\\n    /usr/share/grafana/public/views/index.html\n\n## Add News to the Mega Menu\nRUN sed -i "s|window.grafanaBootData = {| \\\n    nav.push({\\"id\\":\\"my-dashboard\\",\\"text\\":\\"Volkov Labs News\\",\\"icon\\":\\"play\\",\\"url\\":\\"/d/O4tc_E6Gz\\",\\"sortWeight\\":-2000}); \\\n    window.grafanaBootData = {|g" \\\n    /usr/share/grafana/public/views/index.html\n```\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update to Grafana 10.0.0 (#68, #72)\n- Update unit tests with testing-library/react (#70)\n- Migrate to Plugin Tools 1.5.2 (#71)\n- Update to Node 18 and npm (#71)\n- Update Docker image 10.0.0 (#72)\n- Add Application Router (#73)\n- Add E2E Cypress testing (#74)\n\n## Feedback\n\nSubscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.',
  },
  {
    id: "calendar-panel-1.4.0-20230610/",
    metadata: {
      permalink: "/blog/calendar-panel-1.4.0-20230610/",
      source: "@site/blog/2023-06-10-calendar-panel-1.4.0/index.mdx",
      title: "Calendar Panel 1.4.0 supports Grafana 10",
      description:
        "We are happy to announce the release of the Calendar Panel 1.4.0. This release includes the following updates:",
      date: "2023-06-10T00:00:00.000Z",
      formattedDate: "June 10, 2023",
      tags: [
        {
          label: "Calendar",
          permalink: "/blog/tags/calendar",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "calendar-panel-1.4.0-20230610/",
        tags: ["Calendar", "Release Notes"],
        image: "/img/blog/2023-06-10-calendar-panel-1.4.0/banner.png",
        keywords: ["Calendar", "Panel", "Events", "Time Range", "Grafana"],
        updated: "2023-09-11T00:00:00.000Z",
      },
      prevItem: {
        title: "Volkov Labs App 2.5.0 supports Grafana 10",
        permalink: "/blog/volkovlabs-app-2.5.0-20230617/",
      },
      nextItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 3.6.0 supports Grafana 10",
        permalink: "/blog/image-panel-3.6.0-20230606/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Calendar Panel 1.4.0. This release includes the following updates:\n\n- Tested the plugin on Grafana 10 Preview.\n- Added the text formatting, mappings, and overrides.\n- Removed the unused standard options.\n- Increased the event spacing to prevent overlapping.\n- Increased the test coverage and added the end-to-end test workflow.\n- Migrated the plugin to Plugin Tools 1.5.2 with Node.js 18 and npm.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on June 15, 2023.\n:::\n\n## Standard Options\n\nUnits, value mappings, and overrides are all supported in the Event text field. All unnecessary standard options, such as minimal and maximal values, were deprecated.\n\n<Image\n  title="Units, value mappings, and overrides are supported in Calendar Panel."\n  src="/img/blog/2023-06-10-calendar-panel-1.4.0/calendar.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nYou can install Calendar Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-calendar-panel\n```\n\n## YouTube Tutorial\n\nCalendar Panel is a Grafana plugin that displays events from various data sources.\n\n<Video\n  src="https://www.youtube.com/embed/iPJ122x0oos"\n  title="Display events from the JSON API data source."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Added compatibility with Grafana 9.5.2 (#96, #101).\n- Added the text formatting, mappings, and overrides (#97).\n- Remove the unused standard options (#97).\n- Increased the test coverage and updated the testing library (#100, #103).\n- Migrated to Plugin Tools 1.5.2 (#101).\n- Updated the plugin to Node.js 18 (#101).\n- Integrated E2E Cypress into the testing cycle (#102).\n\n### Bug fixes\n\n- Increased the event spacing to prevent the overlapping (#96).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-calendar-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "image-panel-3.6.0-20230606/",
    metadata: {
      permalink: "/blog/image-panel-3.6.0-20230606/",
      source: "@site/blog/2023-06-06-image-panel-3.6.0/index.mdx",
      title: "Base64 Image/Video/Audio/PDF Panel 3.6.0 supports Grafana 10",
      description:
        "We are excited to announce the release of the Base64 Image/Video/Audio/PDF Panel 3.6.0. This feature release includes the following updates:",
      date: "2023-06-06T00:00:00.000Z",
      formattedDate: "June 6, 2023",
      tags: [
        {
          label: "Base64 Image/Video/Audio/PDF",
          permalink: "/blog/tags/base-64-image-video-audio-pdf",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "image-panel-3.6.0-20230606/",
        tags: ["Base64 Image/Video/Audio/PDF", "Release Notes"],
        image: "/img/blog/2023-06-06-image-panel-3.6.0/banner.png",
        keywords: ["Base64", "Panel", "PDF", "Images", "Video", "Audio"],
        updated: "2023-09-09T00:00:00.000Z",
      },
      prevItem: {
        title: "Calendar Panel 1.4.0 supports Grafana 10",
        permalink: "/blog/calendar-panel-1.4.0-20230610/",
      },
      nextItem: {
        title: "Apache ECharts Panel 4.5.0 supports Grafana 10",
        permalink: "/blog/echarts-panel-4.5.0-20230603/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are excited to announce the release of the Base64 Image/Video/Audio/PDF Panel 3.6.0. This feature release includes the following updates:\n\n- Tested the plugin with Grafana 10 Preview.\n- Added a toolbar to download, zoom in/out, and navigate between images.\n- Increased the test coverage for the plugin functionality to 100% and implemented an end-to-end test procedure.\n- Migrated to Plugin Tools 1.5.2 with Node.js 18 and npm.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on June 15, 2023.\n:::\n\n## Image Toolbar\n\nThe new toolbar allows you to download, zoom, and navigate between multiple images retrieved from your data source.\n\nThe toolbar is enabled by default in the panel options, but you need to define what action buttons to display. The toolbar remains hidden until buttons are selected.\n\n<Image\n  title="Times Square image analyzed with the YOLO model and retrieved from a PostgreSQL database."\n  src="/img/blog/2023-06-06-image-panel-3.6.0/panel.png"\n  lazy={false}\n/>\n\nPlease let us know if there is anything else you would like to see on the plugin\'s toolbar.\n\n## Getting Started\n\nYou can install Base64 Image/Video/Audio/PDF Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-image-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-image-panel\n```\n\n## YouTube Tutorial\n\nBase64 Image/Video/Audio/PDF Panel is a Grafana plugin that renders PNG, JPG, GIF, MP4, WEBM, MP3, OGG, and PDF files encoded in the Base64 format.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Video, Live Camera Feed on Grafana Dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Added compatibility with Grafana 9.5.2 (#70).\n- Integrated E2E Cypress tests into the testing cycle (#71).\n- Migrated to Plugin Tools 1.5.2 (#72, #73)\n- Updated the plugin to Node.js 18 (#72).\n- Increased the test coverage for the plugin functionality (#72).\n- Tested the plugin on Grafana 10 Preview (#74).\n- Added the toolbar to download, zoom in/out, and navigate across images (#75, #76, #77).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-image-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "echarts-panel-4.5.0-20230603/",
    metadata: {
      permalink: "/blog/echarts-panel-4.5.0-20230603/",
      source: "@site/blog/2023-06-03-echarts-panel-4.5.0/index.mdx",
      title: "Apache ECharts Panel 4.5.0 supports Grafana 10",
      description:
        "We are happy to announce the release of the Apache ECharts Panel 4.5.0. This release includes the following updates:",
      date: "2023-06-03T00:00:00.000Z",
      formattedDate: "June 3, 2023",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "echarts-panel-4.5.0-20230603/",
        tags: ["Apache ECharts", "Release Notes"],
        image: "/img/blog/2023-06-03-echarts-panel-4.5.0/banner.png",
        keywords: [
          "Apache ECharts",
          "Panel",
          "Chart",
          "Visualization",
          "Grafana",
        ],
        updated: "2023-09-06T00:00:00.000Z",
      },
      prevItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 3.6.0 supports Grafana 10",
        permalink: "/blog/image-panel-3.6.0-20230606/",
      },
      nextItem: {
        title: "Apache ECharts Panel 4.4.0",
        permalink: "/blog/echarts-panel-4.4.0-20230526/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Apache ECharts Panel 4.5.0. This release includes the following updates:\n\n- Tested the plugin with Grafana 10 Preview.\n- Updated the function example to support Grafana 10.\n- Added an alert for custom theme parsing errors.\n- Migrated to Plugin Tools 1.5.2 with Node 18 and npm.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on June 15, 2023.\n:::\n\n## Changes in Grafana 10\n\nSome data sources in Grafana 10 return field values as `values` instead of `values.buffer` as in Grafana 9 and prior versions. We updated the function example to work in Grafana 9 and Grafana 10:\n\n```\n  const sData = s.fields.find((f) => f.type === \'number\').values.buffer || s.fields.find((f) => f.type === \'number\').values;\n  const sTime = s.fields.find((f) => f.type === \'time\').values.buffer || s.fields.find((f) => f.type === \'time\').values;\n```\n\nYou can remove the `||` statement and choose the correct expression for your Grafana version.\n\n## Custom Themes\n\nWe added an alert for theme parsing errors. It may be difficult to identify JSON errors when applying a modified theme until all issues are resolved.\n\nA new alert makes the troubleshooting process simpler and more effective.\n\n<Image\n  title="Apache ECharts Panel supports custom themes from Theme Builder."\n  src="/img/blog/2023-06-03-echarts-panel-4.5.0/theme.png"\n/>\n\n## Getting Started\n\nApache ECharts visualization panel can be installed from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-echarts-panel\n```\n\n## YouTube Tutorial\n\nThe Apache ECharts Panel plugin is a data visualization extension for Grafana that allows you to integrate charts and graphs from the popular Apache ECharts library into your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Migrated to Plugin Tools 1.5.2 (#171, #176).\n- Updated the plugin to Node 18 and npm (#172, #173).\n- Added an alert for the theme parsing error (#175).\n- Updated the default function to support Grafana 10 (#178).\n- Tested the plugin on Grafana 10 Preview (#179).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-echarts-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "echarts-panel-4.4.0-20230526/",
    metadata: {
      permalink: "/blog/echarts-panel-4.4.0-20230526/",
      source: "@site/blog/2023-05-26-echarts-panel-4.4.0/index.mdx",
      title: "Apache ECharts Panel 4.4.0",
      description:
        "We are happy to announce the release of the Apache ECharts Panel 4.4.0. This release includes the following updates:",
      date: "2023-05-26T00:00:00.000Z",
      formattedDate: "May 26, 2023",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "echarts-panel-4.4.0-20230526/",
        tags: ["Apache ECharts", "Release Notes"],
        image: "/img/blog/2023-05-26-echarts-panel-4.4.0/banner.png",
        keywords: [
          "Apache ECharts",
          "Panel",
          "Chart",
          "Visualization",
          "Grafana",
        ],
        updated: "2023-09-06T00:00:00.000Z",
      },
      prevItem: {
        title: "Apache ECharts Panel 4.5.0 supports Grafana 10",
        permalink: "/blog/echarts-panel-4.5.0-20230603/",
      },
      nextItem: {
        title: "Environment Data Source 2.4.0",
        permalink: "/blog/env-datasource-2.4.0-20230522/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Apache ECharts Panel 4.4.0. This release includes the following updates:\n\n- Added Theme Editor to use custom-generated themes from Theme Builder.\n- Updated the Google Maps extension to the latest release 1.6.0.\n- Increased the test coverage to 90% and added end-to-end test workflow.\n- Updated to the latest Grafana 9.5.2 toolkit.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on May 30, 2023.\n:::\n\n## Jack of all trades\n\nApache ECharts Panel can solve any visualization challenges reported by our community. When native plugins lack some features or a data source cannot return or transform data in the required format, Apache ECharts Panel let you address any appeared challenges and achieve the results you anticipate.\n\nWe have addressed most critical issues in our GitHub repository as we see an increasing number of daily downloads on our way to 200k downloads the Grafana Plugins catalog.\n\n<Image\n  title="Live Dashboard for the Apache ECharts Panel resources."\n  src="/img/blog/2023-05-26-echarts-panel-4.4.0/live.png"\n  lazy={false}\n/>\n\n## Theme Editor\n\nTheme Editor allows using custom themes generated with [Theme Builder](https://echarts.apache.org/en/theme-builder.html).\n\n<Image\n  title="Apache ECharts Panel supports custom themes from Theme Builder."\n  src="/img/blog/2023-05-26-echarts-panel-4.4.0/theme.png"\n/>\n\n### Theme Builder\n\nTheme Builder created by the Apache ECharts team provides advanced options to create fully customizable themes. A theme configuration is saved into a JSON file, which you can download and paste into Theme Editor.\n\n<Image\n  title="Theme Builder allows creating custom theme for Apache ECharts Panel."\n  src="/img/blog/2023-05-26-echarts-panel-4.4.0/theme-builder.png"\n/>\n\n## Documentation\n\nAnswering numerous questions from our community, we continue constantly improving our documentation. We\'ve recently added and updated:\n\n| Section                                                              | Description                                |\n| -------------------------------------------------------------------- | ------------------------------------------ |\n| [Annotations](/plugins/volkovlabs-echarts-panel/annotations)         | Explains how to use annotations.           |\n| [Theme Editor](/plugins/volkovlabs-echarts-panel/theme)              | Explains how to use Theme Editor.          |\n| [Transformations](/plugins/volkovlabs-echarts-panel/transformations) | Explains how to work with transformations. |\n| [GeoJSON](/plugins/volkovlabs-echarts-panel/maps/geojson)            | Explains how to work with GeoJSON Maps.    |\n\n## Getting Started\n\nYou can install Apache ECharts Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-echarts-panel\n```\n\n## YouTube Tutorial\n\nThe Apache ECharts Panel plugin is a data visualization extension for Grafana that allows you to integrate charts and graphs from the popular Apache ECharts library into your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\nOne of the three plugins that completes Grafana is Apache ECharts Panel. With Dynamic Text, Data Manipulation, and Apache ECharts Panel you can create fully functional web applications meeting your needs and expectations.\n\n<Video\n  src="https://www.youtube.com/embed/wPr4gZYzUVA"\n  title="Dynamic Text, Data Manipulation, and Apache ECharts Panel plugins."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Increased the test coverage and updated the test library (#163).\n- Added compatibility with Grafana 9.5.2 (#164).\n- Updated the Google Maps extension to version 1.6.0 (#164).\n- Added E2E Cypress testing (#165).\n- Added Theme Editor to enable usage of custom themes (#167).\n- Updated the documentation (#166, #168).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-echarts-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "env-datasource-2.4.0-20230522/",
    metadata: {
      permalink: "/blog/env-datasource-2.4.0-20230522/",
      source: "@site/blog/2023-05-22-env-datasource-2.4.0/index.mdx",
      title: "Environment Data Source 2.4.0",
      description:
        "We are happy to announce the release of the Environment Data Source 2.4.0. This release includes the following updates:",
      date: "2023-05-22T00:00:00.000Z",
      formattedDate: "May 22, 2023",
      tags: [
        {
          label: "Environment Data Source",
          permalink: "/blog/tags/environment-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "env-datasource-2.4.0-20230522/",
        tags: ["Environment Data Source", "Release Notes"],
        image: "/img/blog/2023-05-22-env-datasource-2.4.0/banner.png",
        keywords: ["Data Source", "Environment", "Grafana"],
      },
      prevItem: {
        title: "Apache ECharts Panel 4.4.0",
        permalink: "/blog/echarts-panel-4.4.0-20230526/",
      },
      nextItem: {
        title: "Transformations in Grafana",
        permalink: "/blog/transformations-grafana-20230519/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Environment Data Source 2.4.0. This release includes the following updates:\n\n- Updated to Go 1.20 and the latest Go SDK.\n- Updated to the latest Grafana 9.5.2 toolkit and workflows.\n\n:::info Grafana Catalog\nEnvironment Data Source is not included in the Grafana Catalog.\n:::\n\n<Image\n  title="Environment Variables displayed on the Grafana dashboard."\n  src="/img/blog/2023-05-22-env-datasource-2.4.0/dashboard.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nThe Environment Data Source can be installed from our Private Repository or downloaded directly from GitHub.\n\n```bash\ngrafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource\n```\n\n## YouTube Tutorial\n\nThe Environment Data Source is a plugin for Grafana that returns environment variables to display on your dashboard or use as Variables in your code.\n\n<Video\n  src="https://www.youtube.com/embed/sczRq2lI3e4"\n  title="Dashboard, Global and Environment variables."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update to Grafana 9.5.2 (#24)\n- Update backend and workflows to Go 1.20 (#25)\n\n## Feedback\n\nSubscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.',
  },
  {
    id: "transformations-grafana-20230519/",
    metadata: {
      permalink: "/blog/transformations-grafana-20230519/",
      source: "@site/blog/2023-05-19-transformations-grafana/index.mdx",
      title: "Transformations in Grafana",
      description:
        "As usual, before posting an article on this blog, I created a Youtube video about the subject.",
      date: "2023-05-19T00:00:00.000Z",
      formattedDate: "May 19, 2023",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "transformations-grafana-20230519/",
        tags: ["Grafana Crash Course"],
        image: "/img/blog/2023-05-19-transformations-grafana/banner.png",
        keywords: ["Grafana", "Transformations", "Data Source"],
      },
      prevItem: {
        title: "Environment Data Source 2.4.0",
        permalink: "/blog/env-datasource-2.4.0-20230522/",
      },
      nextItem: {
        title: "Celebrate with us! Our YouTube Channel is 1 year!",
        permalink: "/blog/youtube-one-year-20230510/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nAs usual, before posting an article on this blog, I created a Youtube video about the subject.\nFeel free to switch to the pictures in motion if you are a visual person. I use the Loki data source in my examples there; if that fact makes any difference.\n\nThe following article contains similar to my video material with some extra insights.\n\n<Video\n  title="YouTube video. Transformations in Grafana. Config from the query results."\n  src="https://www.youtube.com/embed/aoAmRHq3vhU"\n/>\n\n## What is a Transformation?\n\nA transformation is a set of optional, behind-the-scene steps that Grafana performs on the data source data format in order to match it with a visualization panel data format.\n\nIn the schema below, I put two scenarios:\n\n- Scenario 1, you do not need transformation. Probably, many SQL database users are here.\n- Scenario 2, you do need a transformation.\n\nWhat is in the middle is a special transformation "Config from query results" that does not fit into the mold and has to be described separately. I will explain it later in the text.\n\n<Image\n  title="You need a transformation if data frames do not match."\n  src="/img/blog/2023-05-19-transformations-grafana/needed-when.png"\n  lazy={false}\n/>\n\n## Why Data frames might not match\n\nOr, in other words, why does someone need a transformation, to begin with, if the data can be formatted to perfection on the database side? We received this question from one of our YouTube subscribers after I posted the video. I believe many would benefit from the answer. So, here we go.\n\nI came up with the following 6 cases when transformation saves the day. If you know more, please, let me know!\n\n### Merging requests from databases of the same type\n\nIf you store data in multiple databases, let\'s say, two architecturally identical databases, you will have to have a step in your data pipeline where you combine and possibly aggregate your data.\n\nGrafana transformations in that event are an easy and quick solution. No need to worry about another entity in your data flow. Any visualization panel can combine as many databases (via data sources) as needed.\n\n### Merging requests from databases of the different types\n\nThis case is similar to the above, but remember, with Grafana, your visualization panel can consolidate many data sources. You easily can combine, for instance, PostgreSQL database queries with external API calls.\n\nIn my experience, a client had an analytical dashboard to compare one company\'s results with national averages. The national averages were downloaded from the government servers using API calls functions.\n\nThe transformation layer would be the ideal place to perform merging and/or aggregation calculation steps.\n\n### Requests to NoSQL databases\n\nNoSQL databases, like Prometheus and Redis, are famous for many things. However, flexible data slicing and dicing is not one of them.\n\nSimple `LIMIT` or `GROUP BY` might be an unexpected pain in the neck. Transformations easily alleviate it with quiet grace.\n\n### Re-using the Request results\n\nI like this one a lot. When you display detailed and summary visualizations on the same dashboard, why would you send multiple requests to your database?\n\nYou can run one query to fetch the detailed data and then compute aggregations (and apply other transformations) right on the dashboard. Transformations here are time and a performance savior!!\n\n### Using external API data\n\nIf your data source is an external API server you have zero control over what is coming your way. Somewhere and somehow you will have to modify the incoming data to fit into the visualization panels requirements.\n\nHonestly, I am not sure if there are any alternatives to transformations in this case.\n\n### Analyst\'s independence\n\nIn addition to all mentioned above, transformations can give freedom to the analyst who creates dashboards in Grafana. They do not have to request any changes to be made in the database just for them.\n\nThey can work with the current datasets and modify the data layouts with a couple of extra clicks in Grafana.\n\n## How transformations work\n\nThe three following examples are taken from our website analytics project. We collect data to stay on top of the community interest and transformations help big time on our attendance dashboard.\n\n### Series to rows and Group by\n\nIn the first example, we extract data from Loki via the Loki data source. It comes in multiple data frames (a.k.a tables). Every data frame comprises Time and Value columns. The Value column represents the number of clicks at that time.\n\nThe first transformation, \'Series to rows\', combines all data frames into one, placing them one after another and identifying from which country every row comes by specifying a country (data frame name) in a new column.\n\nThe second transformation, \'Group by\', is to calculate the total number of requests coming from every country. Conceptually, this transformation works the same as the SQL `GROUP BY` clause.\n\n<Image\n  title="The data transforms from multiple data frames into one."\n  src="/img/blog/2023-05-19-transformations-grafana/example-1.png"\n  width="80%"\n/>\n\n### Sort by and limit\n\nIn the second example, we move a little further and add two more transformations on top of the ones from the first example.\n\nWe add `SORT BY` and `LIMIT` modifications to have the retrieved results sorted in descending order of summed Value and keep only 15 first rows. The geography of our web resources attendance covers more than 130 countries, and keeping an eye on the first 15 is good enough for our goals.\n\n<Image\n  title="Extend the first example by applying sort by and limit transformations."\n  src="/img/blog/2023-05-19-transformations-grafana/example-2.png"\n/>\n\n### Join by field and organize fields\n\nThis example uses Time Series in a Stacked Bar Chart mode. The input data layout should be a single data frame where all stacked data series should reside in a column.\n\nThe first transformation, \'Join by field\', has two modes - INNER and OUTER.\n\n- INNER keeps rows if the value of the selected field exists in ALL data frames.\n- OUTER keeps all records from all data frames, so, most likely you will end up with a lot of NULLs in your resulting dataset.\n\n<Image\n  title="Transform multiple data frames into one, with data series being placed into columns."\n  src="/img/blog/2023-05-19-transformations-grafana/example-3.png"\n  width="80%"\n/>\n\nThe second transformation, \'Organize\', allows to replace field names and move columns up and down in order.\n\n## Transformations in Grafana UI\n\nThe transformation menu is located in any visualization panel in Edit mode. It is the second tab, next to the "Query" tab.\n\nYou can pile up multiple transformations. Every time one transformation is performed after the previous one, so, the order matters. The output from one transformation goes as input to the next.\n\n<Image\n  title="Select transformations from the menu."\n  src="/img/blog/2023-05-19-transformations-grafana/config.png"\n  width="80%"\n/>\n\n## Config from query results transformation\n\nI wish Grafana made it clearer that this transformation is not like any other. It does transform the input data, however, then it sends the results to the panel parameters. This transformation makes the panel configuration dynamic, or, in other words, to be reactive to your data source values.\n\nThis transformation can be used alone or in addition to many other transformations. Once it is ON, Grafana puts yellow circles next to the parameter names it impacts on the right-hand side.\n\nAlso, once the transformation is ON, you lose simple access to the fetched values (the values that go into configuration).\n\nIf for troubleshooting you need to review the values, simply turn the transformation OFF by clicking an eye icon and selecting the corresponding data frame from the newly appeared drop-down box.\n\nI demonstrate all the above in my video in case my wordy explanation only confuses you more.\n\n<Image\n  title="Config from query results transformation details."\n  src="/img/blog/2023-05-19-transformations-grafana/where.png"\n/>\n\n## Instead of a boring conclusion\n\nThe transformation topic is not as convoluted as many others in Grafana. However, despite all benefits they provide, the transformations feature is not widely known or used. The goal of this article was to shine more light on transformations, give examples and show how they exactly work.\n\nIf there are any transformations that you struggle to utilize, shoot us a question on our Youtube channel under [the transformation video](https://www.youtube.com/watch?v=aoAmRHq3vhU).',
  },
  {
    id: "youtube-one-year-20230510/",
    metadata: {
      permalink: "/blog/youtube-one-year-20230510/",
      source: "@site/blog/2023-05-10-youtube-one-year/index.mdx",
      title: "Celebrate with us! Our YouTube Channel is 1 year!",
      description:
        "After one year, we are proud to look back and descry what we have accomplished.",
      date: "2023-05-10T00:00:00.000Z",
      formattedDate: "May 10, 2023",
      tags: [
        {
          label: "Volkov Labs",
          permalink: "/blog/tags/volkov-labs",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "youtube-one-year-20230510/",
        tags: ["Volkov Labs"],
        image: "/img/blog/2023-05-10-youtube-one-year/banner.png",
        keywords: ["Grafana", "YouTube", "1 year"],
      },
      prevItem: {
        title: "Transformations in Grafana",
        permalink: "/blog/transformations-grafana-20230519/",
      },
      nextItem: {
        title: "Provisioning in Grafana",
        permalink: "/blog/provisioning-grafana-20230509/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nAfter one year, we are proud to look back and descry what we have accomplished.\n\nStarting with zero Youtube experience, we called the artistic side of our brain to come up with a recognizable format that would be engaging with a touch of a good friend sharing an intriguing gossip. We focused on topics meaningful for many and carefully picked use cases that would illustrate the most of the topic.\n\nThe pouring questions from the community gave us directions and flowing gratitude fueled us with energy. We were excited to be able to address the most commonly asked questions that are not easily accessible elsewhere.\n\nFollowing our zeal, we created a platform for spreading technical knowledge and earning a trustworthy reputation.\n\n## Our Platform\n\n<Image\n  title="Volkov Labs platform where YouTube has its honorable spot."\n  src="/img/blog/2023-05-10-youtube-one-year/volkovlabs-platform.png"\n  width="60%"\n  lazy={false}\n/>\n\nOur platform consists of six resources.\n\n| Resource                                           | Description                                                                                                                                                                                                                             |\n| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| [YouTube Channel](https://youtube.com/@volkovlabs) | As they say, it is better to see something once than to hear about it a thousand times.                                                                                                                                                 |\n| [Documentation](https://docs.volkovlabs.io)        | We constantly improve documentation by ensuring to include the latest helpful findings and listening to community feedback.                                                                                                             |\n| [Blog](https://blog.volkovlabs.io)                 | Our blog is another medium to have your questions answered. We share our experience and provide a lot of code snippets and guidance to solve various tasks.                                                                             |\n| [GitHub](https://github.com/VolkovLabs)            | Feel free to learn by browsing our code and get inspired with ideas and simple elegant solutions.                                                                                                                                       |\n| [Live Dashboard](https://live.volkovlabs.io)       | Originally we built this project for internal use. However, the project turned out worthy of sharing with the world. We depicted our digital footprint using Grafana dashboards and made all that we do transparent and easy to follow. |\n| [Release dashboard](https://release.volkovlabs.io) | It is the best way to follow the release calendar for our open-source Grafana plugins. When was the last release? How many open issues exist at the time? Those and other questions are taken care of there.                            |\n\n### YouTube Community\n\nWe are on the lookout for the best ways to interact with the community and our followers. For the daily updates and quick surveys, we favor the [YouTube Community](https://youtube.com/@volkovlabs/community) at this time.\n\nMany people reacted to the post about a new panel idea. A panel to provide movable real estate for displaying variables. That hints us to move the creation of this panel up in our to-do list and possibly consider a video or at least an article with a sound use case.\n\nEven though we are completely focused on the technical side of things, many people like our behind the scene photographs. That is honestly a surprising observation, but we take it too.\n\nAfter being Grafana story-tellers for that long, we came up with three areas that we are particularly good at and would like to grow more towards:\n\n- Concepts\n- Tutorials\n- Use cases\n\n## Concept\n\nBefore diving into a new topic and creating a step-by-step tutorial, I like to look at the system architecture from up high and understand how all parts interact and coexist with each other. As a result, most of the time, we come up with an astonishing schema that explains far from trivial processes.\n\nAs a nice bonus, our schemas are great memory refreshers when you go back to the subject after being focused on something else.\n\n<table>\n  <tr style={{ border: "none" }}>\n    <td width="50%" style={{ border: "none" }}>\n      <Image\n        title="How JSON data sources work at a glance"\n        src="/img/blog/2023-05-10-youtube-one-year/json-schema.png"\n      />\n    </td>\n    <td width="*" style={{ border: "none" }}>\n      <Image\n        title="Alerts, Annotations and Annotation queries"\n        src="/img/blog/2023-05-10-youtube-one-year/alerts-schema.png"\n      />\n    </td>\n  </tr>\n</table>\n\n<Image\n  title="System architecture where tailored metrics lead to decision making."\n  src="/img/blog/2023-05-10-youtube-one-year/website-analytics.png"\n  width="80%"\n/>\n\n## Tutorials and use cases\n\nTutorials are the backbone of our channel. Those videos get the most views and questions. We always try to find relevant to many scenarios and ensure anyone can follow along and learn the topic as they go.\n\n<table>\n  <tr style={{ border: "none" }}>\n    <td width="50%" style={{ border: "none" }}>\n      <Video\n        title="Create your Business Grafana dashboard. Step-by-step tutorial for analysts."\n        src="https://www.youtube.com/embed/HNCKbGfAU0Q"\n        height={250}\n      />\n    </td>\n    <td width="*" style={{ border: "none" }}>\n      <Video\n        title="Apache ECharts panel for Grafana. How to create modern dashboards in Grafana."\n        src="https://www.youtube.com/embed/DxqCrBEmrQw"\n        height={250}\n      />\n    </td>\n  </tr>\n</table>\n\nSome tutorials are best when done on solid use cases. Anything that we explain you can easily recreate on your side. A lot of pieces can be downloaded from our GitHub organization. And be certain, all your questions are going to be answered!\n\n<table>\n  <tr style={{ border: "none" }}>\n    <td width="50%" style={{ border: "none" }}>\n      <Video\n        title="Build a Website Analytics Dashboard in Grafana."\n        src="https://www.youtube.com/embed/cgu3wMOo03w"\n        height={250}\n      />\n    </td>\n    <td width="*" style={{ border: "none" }}>\n      <Video\n        title="How to display the unemployment rate."\n        src="https://www.youtube.com/embed/B4Uj1n4Cr88"\n        height={250}\n      />\n    </td>\n  </tr>\n</table>\n\nWe are thankful to be part of a growing, vibrant Grafana community. We wholeheartedly believe in Grafana and its vast potential.\n\nIt amazes us almost every time to hear another use case solved. A variety of industries and the number of countries that share our praises for Grafana are off the charts. We are at the right place and time, no stopping, just moving forward! Charge!!!!\n\nSubscribe to our [YouTube channel](https://www.youtube.com/@volkovlabs) and add a comment to ask questions. Join the [members\' club](https://www.youtube.com/channel/UCQadniwbukI6ZmTN2oTTb-g/join) to show your support and earn loyalty badges.',
  },
  {
    id: "provisioning-grafana-20230509/",
    metadata: {
      permalink: "/blog/provisioning-grafana-20230509/",
      source: "@site/blog/2023-05-09-provisioning-grafana/index.mdx",
      title: "Provisioning in Grafana",
      description:
        "Provisioning is one step up from the primary Grafana mindset. It is optional, but I recommend investing some time in researching this topic since harnessing it will bring you smooth and speedy deployments.",
      date: "2023-05-09T00:00:00.000Z",
      formattedDate: "May 9, 2023",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "provisioning-grafana-20230509/",
        tags: ["Grafana Crash Course"],
        image: "/img/blog/2023-05-09-provisioning-grafana/banner.png",
        keywords: ["Grafana", "Provisioning", "Data Source"],
      },
      prevItem: {
        title: "Celebrate with us! Our YouTube Channel is 1 year!",
        permalink: "/blog/youtube-one-year-20230510/",
      },
      nextItem: {
        title: "Volkov Labs App 2.4.0",
        permalink: "/blog/volkovlabs-app-2.4.0-20230430/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nProvisioning is one step up from the primary Grafana mindset. It is optional, but I recommend investing some time in researching this topic since harnessing it will bring you smooth and speedy deployments.\n\n## What is provisioning\n\nSimply put, provisioning is when you push configuration via JSON, YAML, and other files into a Grafana instance. In Grafana 9.5.1, you can push configuration for:\n\n- RBAC (role-based access control)\n- Alerting rules\n- Dashboards\n- Data sources\n- Alert notifies\n- Plugins (applications)\n\nSince Grafana comprises many independent parts, what components can be provisioned might be confusing. The general rule of thumb is you can provision configurations. You must install all data sources and visualization panels outside the provisioning processes.\n\n<Image\n  title="Provisioning in grand schema Grafana things."\n  src="/img/blog/2023-05-09-provisioning-grafana/basics.png"\n  lazy={false}\n  width="80%"\n/>\n\n## Explained in a nutshell\n\nIn most cases, provisioning is used to update production environments to subsequent versions.\n\n- You make all necessary changes in the development environment.\n- Prepare provision files based on changes.\n- Place updated configuration into the corresponding folders.\n\nAfter restarting all involved in the upgrade production Grafana instances, all changes are in place. If you need to get back to the previous state(version), remove the new files and use the old ones instead. Version control is one of the provisioning advantages.\n\nBelow is the link to my YouTube video, where I explain provisioning and demonstrate some examples.\n\n<Video\n  title="Basics, pitfalls, file examples in Windows and Docker Demo."\n  src="https://www.youtube.com/embed/sGHKY0VmbLw"\n/>\n\n## Alternatives\n\n### Grafana UI\n\nThere are two alternatives to provisioning. You can log in to every Grafana instance that needs to be updated and perform all modifications using UI. That does not sound productive, and I agree. This method is slow, prone to errors, and not scalable.\nConsider this method in the early stages of adopting Grafana.\n\n### HTTP API\n\nThe other method includes using HTTP API endpoints. Grafana provides a variety of API functions to work with its configuration. This method is the only choice in environments without access to the file system (for example, cloud).\n\n<Image\n  title="Provisioning is one of the ways to move changes from Development to Production environment."\n  src="/img/blog/2023-05-09-provisioning-grafana/provisioning-6-parts.png"\n/>\n\n## Getting started\n\nTo get a good first glimpse of provisioning, find the `provisioning` folder under the `conf` directory. Grafana 9.5.1 contains six subfolders, each representing a Grafana component you can provision.\n\n<Image\n  title="Every subfolder represents a component you can provision in Grafana."\n  src="/img/blog/2023-05-09-provisioning-grafana/provisioning-folder.png"\n/>\n\nYou can find a `sample.yaml` file in every subfolder, except for alerting. The files are provided as a starter, but I find them too generic and semi-useful. I hope your more profound experience leaves you with an opposite impression.\n\nDo not let the file name \'sample\' mislead you. Grafana checks for all YAML files regardless of their names.\n\n<Image\n  title="File sample.yaml is located in the dashboard subfolder."\n  src="/img/blog/2023-05-09-provisioning-grafana/yaml-dash.png"\n/>\n\nBy default, the provisioned dashboards are protected from any modifications made by users in UI. You can change that by using the `allowUpdates` parameter being set to true.\n\n### Dashboard\n\nFor provisioning a dashboard at minimum expect to have two files. One with the `yaml` extension and the other one with `json` extension.\n\n<Image\n  title="File sample.yaml is an example of how to provision dashboards."\n  src="/img/blog/2023-05-09-provisioning-grafana/sample-yaml.png"\n/>\n\nThe `path` option is where Grafana will look for dashboard JSON file descriptions. The `folder` is the corresponding folder in the Grafana UI.\n\n#### Export\n\nThe easiest way to have a dashboard in a JSON file is to create a dashboard in one of the Grafana instances and then use the \'Export\' functionality.\n\nYou can export for sharing externally with either YES or NO. The difference is for the external export all unique identifiers are going to be replaced with a variable. Those JSON files are good when you use Import functionality in UI.\n\nFor provisioning leave the default value for Export for sharing externally unchecked.\n\n<Image\n  title="How to export Grafana dashboard in a JSON format for further provisioning."\n  src="/img/blog/2023-05-09-provisioning-grafana/share-export.png"\n/>\n\n### Data sources\n\nYou only can provision a data source if it already has been installed as a plugin.\n\n<Image\n  title="Plugin installation should be done by other means not as part of provisioning."\n  src="/img/blog/2023-05-09-provisioning-grafana/plugin-datasource.png"\n/>\n\nUnfortunately and surprisingly, there is no UI functionality for exporting a data source configuration. You must create a YAML file for your data source from scratch.\n\nThis not-so-exciting fact leads to a sorrowful conclusion. There is no one solid approach to having such a file. I can share what we use for the PostgreSQL data source.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-grapi-datasource/blob/main/provisioning/datasources/datasources.yaml"\n  language="yaml"\n/>\n\nFor all others, go into the \'Inspect\' menu of your browser and then look at the Network tab. If nothing is shown, try to refresh the page.\n\n<Image\n  title="Where to find some data source attributes to create your YAML file from scratch."\n  src="/img/blog/2023-05-09-provisioning-grafana/inspect.png"\n/>\n\n### Alert rule\n\nProvisioning an alert rule should feel like a warm, gentle breeze if you are resourceful and persistent enough to get through the provisioning of a data source puzzle. After you create an alert rule, simply use the export button.\n\nThe export process has no parameters, and the file name is always the same - `export.yaml`. In case of multiple rules, you must rename each file according to your logic. That is the only hurdle in your provision of an alert path.\n\n## Examples\n\nIf you are like me, you prefer examples to theoretical templates. In that case, you are welcome to our [GitHub organization](https://github.com/VolkovLabs), where you can find many sound actual provisioning files. We use them for developing and testing our maintained plugins.\n\nThe concept of Provisioning allows isolating the core Grafana from the numerous features that could be added and configured separately.\n\nThe particular beauty of such architecture shines in a robust version control process. However, there is no one industry-accepted best way of performing Provisioning. You will have to make many decisions on your own, conduct research and explore the try-and-error route.',
  },
  {
    id: "volkovlabs-app-2.4.0-20230430/",
    metadata: {
      permalink: "/blog/volkovlabs-app-2.4.0-20230430/",
      source: "@site/blog/2023-04-30-volkovlabs-app-2.4.0/index.mdx",
      title: "Volkov Labs App 2.4.0",
      description:
        "We are happy to announce the release of the Volkov Labs App 2.4.0. This release includes the following updates:",
      date: "2023-04-30T00:00:00.000Z",
      formattedDate: "April 30, 2023",
      tags: [
        {
          label: "Development",
          permalink: "/blog/tags/development",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "volkovlabs-app-2.4.0-20230430/",
        tags: ["Development", "Release Notes"],
        image: "/img/blog/2023-04-30-volkovlabs-app-2.4.0/banner.png",
        keywords: ["Volkov Labs App", "Development", "Grafana"],
        updated: "2023-06-17T00:00:00.000Z",
      },
      prevItem: {
        title: "Provisioning in Grafana",
        permalink: "/blog/provisioning-grafana-20230509/",
      },
      nextItem: {
        title:
          "Grafana and the ultimate question of life, universe, and Customer Success",
        permalink: "/blog/planhat-dashboard-20230421/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Volkov Labs App 2.4.0. This release includes the following updates:\n\n- Updated to Grafana 9.5.1 toolkit.\n- Updated to Grafana docker image 9.5.1.\n- Updated the Application page and Home dashboard with an auto-scroll table.\n\n:::info Grafana Catalog\n\nVolkov Labs App is for internal use and is not included in the Grafana Catalog.\n\n:::\n\nWe share this project with the community as an example of how to create [a customized Docker image with included Application plugin and provisioning](https://github.com/volkovlabs/volkovlabs-app).\n\n## Grafana 9.5.1\n\nGrafana 9.5.0/9.5.1 introduced Connections as a new and easier way to install and add Data Sources. It\'s an interesting feature to explore various data sources, but we already know what we need and disabled it.\n\n<Image\n  title="Connections is a new and easier way to install and add Data Sources."\n  src="/img/blog/2023-04-09-native-grafana-plugins/connections.png"\n  lazy={false}\n/>\n\nOther notable changes in the [Docker file](https://github.com/VolkovLabs/volkovlabs-app/blob/main/Dockerfile):\n\n- Top navigation and Chrome UI features are enabled by default and were removed.\n- Commands to replace JavaScripts were updated according to the latest changes.\n\n## Customization\n\nMonths of work bundled with deep expertise nicely wrapped into a 7-minute long video revealing simple steps to customize Grafana. In this tutorial, we answered all community questions we collected to this moment.\n\n<Video\n  src="https://www.youtube.com/embed/ChI78v4UZc0"\n  title="How to customize Grafana 9.4. A cheat-sheet for Docker container and Windows."\n/>\n\n## Home Dashboard\n\nThe home dashboard, which we provisioned with data sources, displays the latest videos from our YouTube channel and blog posts. It is based on the [RSS/Atom Data Source](/plugins/volkovlabs-rss-datasource) and improved [Dynamic Text panel](/plugins/volkovlabs-dynamictext-panel).\n\n<Image\n  title="Home dashboard with RSS feeds from YouTube channel and blog."\n  src="/img/blog/2023-04-30-volkovlabs-app-2.4.0/home.png"\n/>\n\nThe table with blog posts has auto-scroll capabilities, which we explained in the documentation\n[JavaScript code to auto-scroll news](/plugins/volkovlabs-dynamictext-panel/code/#auto-scroll).\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update to Grafana 9.5.1 (#63)\n- Update Docker image 9.5.1 (#64)\n- Add Customization tutorial (#66)\n- Update Home Page and Plugins (#67)\n\n## Feedback\n\nSubscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.',
  },
  {
    id: "planhat-dashboard-20230421/",
    metadata: {
      permalink: "/blog/planhat-dashboard-20230421/",
      source: "@site/blog/2023-04-21-planhat-dashboard/index.mdx",
      title:
        "Grafana and the ultimate question of life, universe, and Customer Success",
      description:
        "Picture, if you will, a vast and endless universe of subscription-based businesses, each one hurtling through the cosmos at breakneck speed, racing toward the ultimate goal of profitability. And at the heart of each of these businesses lies a burning question, a question that has the power to make or break their entire enterprise.",
      date: "2023-04-21T00:00:00.000Z",
      formattedDate: "April 21, 2023",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Analytics",
          permalink: "/blog/tags/analytics",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Alexey Smolyanyy",
          image_url: "https://github.com/alex6058.png",
          title: "Director of Customer Success Strategy and Operations, Redis",
          imageURL: "https://github.com/alex6058.png",
        },
      ],
      frontMatter: {
        authors: [
          {
            name: "Alexey Smolyanyy",
            image_url: "https://github.com/alex6058.png",
            title:
              "Director of Customer Success Strategy and Operations, Redis",
            imageURL: "https://github.com/alex6058.png",
          },
        ],
        slug: "planhat-dashboard-20230421/",
        tags: ["Apache ECharts", "Analytics"],
        image: "/img/blog/2023-04-21-planhat-dashboard/banner.png",
        keywords: ["Grafana", "API", "Business", "Planhat"],
      },
      prevItem: {
        title: "Volkov Labs App 2.4.0",
        permalink: "/blog/volkovlabs-app-2.4.0-20230430/",
      },
      nextItem: {
        title: "Apache ECharts Panel 4.3.0/4.3.1",
        permalink: "/blog/echarts-panel-4.3.0-20230417/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nPicture, if you will, a vast and endless universe of subscription-based businesses, each one hurtling through the cosmos at breakneck speed, racing toward the ultimate goal of profitability. And at the heart of each of these businesses lies a burning question, a question that has the power to make or break their entire enterprise.\n\nThis question is none other than: "How much Annual Recurring Revenue (ARR) is at risk?"\n\nYes, it may not be the ultimate question of life, the universe, and everything, but it certainly feels like it when you\'re trying to keep your business afloat! For you, ARR is the precious lifeblood of any subscription-based business, and the risk of losing it is like a black hole that threatens to swallow everything on its path.\n\nAnd presenting this information to executive management is no easy feat. After all, executives are often juggling a multitude of metrics, reports, and projections and may not have the time or patience for a lengthy discussion of renewal tracking.\n\nThereby, Customer Success must be strategic in their approach, presenting the data in a way that is clear, concise, and impactful. They must speak the language of the C-suite and be prepared to answer tough questions, such as “Where is the biggest amount of money at risk” and "What specific actions are we taking to mitigate risk?"\n\nWith these hefty considerations weighing heavily on my mind, I found myself scouring the galaxy for a solution to help me track and present this critical metric to executive management. Eventually, I found a powerful tool to gather, analyze, and present data clearly and concisely - Planhat.\n\n## What is Planhat?\n\nAh, Planhat! The ultimate one-stop shop for all things customer success management! With its suite of powerful tools and features, Planhat helps us manage our customer relationships, improve retention, and deliver exceptional experiences.\n\nAlas, despite my initial excitement about Planhat\'s executive dashboard, it soon became apparent that it wasn\'t quite the solution I hoped for. While it has many valuable features and is a solid foundation for tracking customer success metrics, for power users like myself, there are some advanced BI features that are still missing.\n\nAnd so, like a solitary spacecraft hurtling through the void of space, I searched high and low for a solution that could meet my needs. Thus, when I found myself searching for a better dashboard solution for Planhat, it was only natural that Grafana came to mind.\n\n## What is Grafana?\n\nAh, Grafana! It has been a faithful companion on many visualization projects throughout the years. From creating a platform to analyze performance metrics to building a dashboard to track support tickets to even forecasting the weather, Grafana has always been up to the task.\n\nIts flexible and customizable nature has allowed me to craft unique dashboards and visualizations that met and exceeded my needs. And with its extensive library of plugins and integrations, I\'ve seamlessly incorporated various data sources and platforms into my projects.\n\n## Connect Grafana to Planhat\n\nWith a heavy heart, I accepted that there was no data source for Planhat in Grafana. But being the intrepid adventurer that I am, I knew that there had to be a way. And so, I began my quest for a DIY (Do It Yourself) solution.\n\nMy first idea was to use the Postgres database as the intermediary. The universal SQL database promised excellent performance on my data set and the ability to do initial data transformations during SQL query executions. It even had the potential for an extension like TimeScale, in case I needed to expand its basic capabilities.\n\nHowever, I soon realized that this was not a weekend project. I needed to create a synchronization mechanism between Planhat and the Postgres database, which would require either developing some code or spending time on integration with available 3rd party solutions, which is too much work for me.\n\nBut then, a glimmer of hope appeared. Planhat\'s [extensive API](https://docs.planhat.com/) provided a way out. It returned standard JSON output, and a helpful article [JSON API Data sources in Grafana](https://volkovlabs.io/blog/json-api-data-sources-in-grafana-20230104/) shed light on the differences between available JSON data sources and guided me towards Infinity Data Source, which had built-in authorization options, including mine - Bearer token.\n\n## Dashboard\n\nWith the hard part out of the way, the rest was super easy. I connected the Infinity data source to Planhat, executed queries, and displayed results in Grafana. And voila! I created a dashboard that showed me everything I longed for about my customer success metrics.\n\nTake a look at my dashboard.\n\n<Image\n  title="Dashboard with native, Apache ECharts, and Calendar panels."\n  src="/img/blog/2023-04-21-planhat-dashboard/dashboard.png"\n  lazy={false}\n/>\n\nBelow, I\'d like to focus on each of the major panels explaining its functionality and implementation.\n\nThe primary data entity for each of the views is Planhat Opportunity.\n\n<Image\n  title="API request to retrieve Planhat opportunity."\n  src="/img/blog/2023-04-21-planhat-dashboard/opportunity.png"\n/>\n\nBesides basic properties, such as Company Name, ARR, Renewal Start Date, Close Date, etc. we calculate the probability of the renewal, which is the primary element of forecasting and will be presented below.\n\n### Time picker\n\nBut first - Grafana time picker. With just a few clicks, you can focus your visualization on exactly the period you\'re interested in (a feature missing in Planhat dashboards). But that\'s not all. The Grafana time picker also allows you to choose the Fiscal quarter and year as your time range (obviously, you can set up the beginning of the Fiscal Year for your organization)!\n\n<Image\n  title="Grafana allows to select configurable fiscal quarter."\n  src="/img/blog/2023-04-21-planhat-dashboard/timerange.png"\n/>\n\n### ARR Won and ARR Lost\n\nThese panels just return the respective amount of ARR already successfully closed or lost since the beginning of the renewal period until now. I\'d like to highlight: it uses the new Grafana transformation “Config from query results” to dynamically calculate target ARR to proper display thresholds on gauges.\n\n<Image\n  title="Transformation Config from query results allows to dynamically calculate target ARR."\n  src="/img/blog/2023-04-21-planhat-dashboard/config.png"\n/>\n\n### ARR Won/Lost Forecast\n\nThese panels look very similar to gauges with already closed renewals, but there are two queries in the background of each of them:\n\n- how much ARR is already closed\n- how much ARR is forecasted to be closed or lost, correspondingly.\n\n<Image\n  title="Gauge panels display ARR won, lost and forecasts."\n  src="/img/blog/2023-04-21-planhat-dashboard/gauge.png"\n/>\n\nTwo queries get merged in one data frame using Grafana “Merge” transformation, and they also dynamically set thresholds with “Config from query results”.\n\n## Renewal Calendar\n\nIt\'s not a build-in panel in Grafana, but a popular community plugin [Calendar panel](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/), so you will need to install it.\n\n<Image\n  title="Calendar panel displays opportunities for each day."\n  src="/img/blog/2023-04-21-planhat-dashboard/calendar.png"\n/>\n\nOut of the box, it supports text on the panel, a clickable popup window with descriptions and labels, and colors from thresholds. You just need to define proper field mapping in the plugin settings, the “Events” section.\n\n<Image\n  title="Field mapping for the Calendar panel."\n  src="/img/blog/2023-04-21-planhat-dashboard/events.png"\n  height={600}\n/>\n\n## Renewal Progress\n\nAnother community plugin, which also needs to be installed [Apache ECharts](https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/).\n\n<Image\n  title="Cumulative won ARR and lost renewals for the Time Range."\n  src="/img/blog/2023-04-21-planhat-dashboard/echarts.png"\n/>\n\nFor those willing to take on the challenge, the Apache EChart panel is a potent tool that can unlock a world of possibilities. It allows for virtually any data transformation and visualization options, making it the gem of the Renewal Dashboard.\n\nHowever, unlike most Grafana panels, it\'s not plug-and-play. You need to write JavaScript code. This means it requires a certain level of mastery in JavaScript and an understanding of the Apache ECharts principles.\n\nWhile there is an extensive demo available [Apache ECharts Examples](https://echarts.volkovlabs.io/d/pL5iH7FVk/home?orgId=1) that covers hundreds of various scenarios, it doesn\'t necessarily cover every scenario.\n\nIn my case, I needed to get four time-series (renewal won, renewal lost, positive forecast, and negative forecast) and draw two lines (cumulative won renewal, including forecast, and cumulatively lost renewal, including forecast) out of them. I also needed to support custom fill and display a comprehensive tooltip.\n\nDespite the steep learning curve, the Apache EChart panel is well worth the effort. With its ability to implement the popular Apache EChart library in Grafana, the possibilities are truly endless. And for those who are up to the challenge, it can be a valuable addition to their visualization toolkit.',
  },
  {
    id: "echarts-panel-4.3.0-20230417/",
    metadata: {
      permalink: "/blog/echarts-panel-4.3.0-20230417/",
      source: "@site/blog/2023-04-17-echarts-panel-4.3.0/index.mdx",
      title: "Apache ECharts Panel 4.3.0/4.3.1",
      description:
        "We are happy to announce the release of the Apache ECharts Panel 4.3.0/4.3.1. This release include the following updates:",
      date: "2023-04-17T00:00:00.000Z",
      formattedDate: "April 17, 2023",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "echarts-panel-4.3.0-20230417/",
        tags: ["Apache ECharts", "Release Notes"],
        image: "/img/blog/2023-04-17-echarts-panel-4.3.0/banner.png",
        keywords: [
          "Apache ECharts",
          "Panel",
          "Chart",
          "Visualization",
          "Grafana",
        ],
        updated: "2023-09-06T00:00:00.000Z",
      },
      prevItem: {
        title:
          "Grafana and the ultimate question of life, universe, and Customer Success",
        permalink: "/blog/planhat-dashboard-20230421/",
      },
      nextItem: {
        title: "Hey, it is time for spring cleaning your Grafana",
        permalink: "/blog/native-grafana-plugins-20230409/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Apache ECharts Panel 4.3.0/4.3.1. This release include the following updates:\n\n- Added an alert state and annotations.\n- <del>\n    Added the `getDataSourceSrv` parameter to retrieve the entry point to data\n    sources.\n  </del>\n- Updated U.S. and world maps in the GeoJSON module.\n- Updated the plugin to the latest Grafana 9.4.7 toolkit and the Apache ECharts 5.4.2 library.\n\n:::info Grafana Plugins catalog\nAfter the plugin review by the Grafana team, the `getDataSourceSrv` parameter was removed due to security reasons in v4.3.1.\n\nThe plugin was updated in the Grafana Plugins catalog on April 24, 2023.\n:::\n\n## 100k downloads\n\nWe are pleased to announce that Apache ECharts Panel has been downloaded over 100,000 times. This extension is not a plug-and-play product and requires some learning. Our [YouTube tutorials](https://www.youtube.com/watch?v=B4Uj1n4Cr88&list=PLPow72ygztmQHGWFqksEf3LebUfhqBfFu) and [documentation](/plugins/volkovlabs-echarts-panel) will undoubtedly assist you in mastering the plugin and revealing its unrivaled customization potential.\n\n<Image\n  title="100,000 downloads in 6 months since we forked the panel."\n  src="/img/blog/2023-04-17-echarts-panel-4.3.0/downloads.png"\n  lazy={false}\n/>\n\n## Alert State and Annotations\n\nWe added support for Annotations in Apache ECharts using mark lines. Data for mark lines is retrieved from the `data.annotations` object as explained in the [product documentation](/plugins/volkovlabs-echarts-panel/annotations/).\n\n```js\nconst annotations = [];\ndata.annotations.map((a) => {\n  a.source.forEach((source) =>\n    annotations.push({\n      xAxis: source.time,\n      label: source.text,\n      lineStyle: {\n        color: source.color,\n        width: 2,\n      },\n    })\n  );\n});\n\n/**\n * Data Sources\n */\nconst series = data.series.map((s) => {\n  const sData =\n    s.fields.find((f) => f.type === "number").values.buffer ||\n    s.fields.find((f) => f.type === "number").values;\n  const sTime =\n    s.fields.find((f) => f.type === "time").values.buffer ||\n    s.fields.find((f) => f.type === "time").values;\n\n  return {\n    name: s.refId,\n    type: "line",\n    showSymbol: false,\n    areaStyle: {\n      opacity: 0.1,\n    },\n    lineStyle: {\n      width: 1,\n    },\n    data: sData.map((d, i) => [sTime[i], d.toFixed(2)]),\n    markLine: {\n      data: annotations,\n      label: {\n        show: false,\n      },\n      symbol: ["none", "none"],\n    },\n  };\n});\n```\n\n<Image\n  title="Annotations in Apache EChart looks similar to Time Series panels."\n  src="/img/blog/2023-04-17-echarts-panel-4.3.0/annotations.png"\n/>\n\n## Entry point to data sources\n\n:::info Security\n\nAfter the plugin review by the Grafana team, this functionality was removed due to security reasons in v4.3.1.\n\nWe are testing a security-safe technique in the Data Manipulation plugin and plan to include it into Apache ECharts Panel.\n:::\n\nApache ECharts Panel allows you to retrieve an entry point of a data source. You can use the data source instance to perform any methods supplied by the data source.\n\n```js\nasync () => {\n  const targets = data.request?.targets;\n  if (targets.length && targets[0].datasource) {\n    const datasource = await getDataSourceSrv().get(targets[0].datasource);\n    notifySuccess(["PostgreSQL Version", await datasource.getVersion()]);\n  }\n};\n```\n\n## GeoJSON updates\n\nGeoJSON files (U.S. and world maps) were synchronized with native maps provided within Grafana GeoMap. You may now quickly transition from GeoMap to Apache ECharts Panel to display visual maps, like we already did for the [Website Analytics blog](/blog/documentation-updates-20230214/).\n\n<Image\n  title="GeoJSON Map displays requests from users around the world."\n  src="/img/blog/2023-04-17-echarts-panel-4.3.0/geojson.png"\n/>\n\n## Panel Variables\n\nWe continue to explore with integrating DOM components straight into the Apache ECharts container to add more interactivity. This time, we introduced a dropdown box that lets you update Apache ECharts or establish a direct interaction with the data source through an entry point.\n\n<Image\n  title="Added a dropdown box to select an option and update options in Apache ECharts Panel."\n  src="/img/blog/2023-04-17-echarts-panel-4.3.0/select.png"\n/>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/docs/volkovlabs-echarts-panel/js/select.js"\n  language="js"\n/>\n\n## Getting Started\n\nYou can install Apache ECharts Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-echarts-panel\n```\n\n## YouTube Tutorial\n\nThe Apache ECharts Panel plugin is a data visualization extension for Grafana that allows you to integrate charts and graphs from the popular Apache ECharts library into your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\nOne of the three plugins that completes Grafana is Apache ECharts Panel. With Dynamic Text, Data Manipulation, and Apache ECharts Panel you can create fully functional web applications meeting your needs and expectations.\n\n<Video\n  src="https://www.youtube.com/embed/wPr4gZYzUVA"\n  title="Dynamic Text, Data Manipulation and Apache ECharts plugins."\n/>\n\n## Release Notes\n\n### Breaking changes in 4.3.1\n\n- Removed the `getDataSourceSrv` parameter due to security reasons (#156).\n\n### Features / Enhancements\n\n- Added compatibility with Grafana 9.4.7 (#146).\n- Added `getDataSourceSrv` parameter to retrieve the entry point to data sources (#146).\n- Updated the Apache ECharts library to version 5.4.2 (#147).\n- Updated U.S. and world GeoJSON maps used in the GeoMap module (#154).\n- Added the Alert State and Annotations (#155).\n\n### Apache ECharts 5.4.2\n\n- [Feature] [bar] Support borderRadius for polar bar and its background. #17995 (Ovilia)\n- [Feature] [i18n] Add Turkish(tr_TR) translation. #18012 (partitect)\n- [Feature] [i18n] Add Vietnamese(vi_VN) translation. #18279 (nghiepdev)\n- [Fix] [bar] Polar bar animation should start from r0 rather than 0. #17997 (Ovilia)\n- [Fix] [marker] Fix abnormal range of markArea in bar series. #18229 (Ovilia)\n- [Fix] [line] Fix labels don\'t show in line series when ssr is enabled. #18032 (plainheart)\n- [Fix] [svg] Fix defined CSS doesn\'t work due to unexpected encoding for style tag. #982 (plainheart)\n- [Fix] [sunburst] Fix labels might upside down in radial layout. #18240 (susiwen8)\n- [Fix] [dataset] Fix chart can\'t render when using object array and object item contains a property named length. #18276 (susiwen8)\n- [Fix] [tooltip] Fix tooltip still disappears after leaving the tooltip even if alwaysShowContent was enabled. #18221 (jianghaoran116)\n- [Fix] [text] Charsets like Cyrillic should break word the same as Latin. #973 (Ovilia)\n- [Fix] [type] Add missing treePathInfo property into sunburst formatter callback and add missing data option into SunburstSeriesOption. #18310 (plainheart)\n- [Fix] [type] Add missing callback function type for the symbol option of tree series. #18070 (ChepteaCatalin)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-echarts-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "native-grafana-plugins-20230409/",
    metadata: {
      permalink: "/blog/native-grafana-plugins-20230409/",
      source: "@site/blog/2023-04-09-native-grafana-plugins/index.mdx",
      title: "Hey, it is time for spring cleaning your Grafana",
      description:
        "In this article, I explain how to remove unnecessary native Grafana plugins from your build. It is an easy way to avoid clutter in the Grafana UI. Moreover, as a tempting bonus for keeping only operating parts, you will end up with a lighter package attuned to your needs only.",
      date: "2023-04-09T00:00:00.000Z",
      formattedDate: "April 9, 2023",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "native-grafana-plugins-20230409/",
        tags: ["Grafana Crash Course"],
        image: "/img/blog/2023-04-09-native-grafana-plugins/banner.png",
        keywords: ["Grafana", "Data Source", "Panels", "Cleanup"],
        updated: "2023-06-17T00:00:00.000Z",
      },
      prevItem: {
        title: "Apache ECharts Panel 4.3.0/4.3.1",
        permalink: "/blog/echarts-panel-4.3.0-20230417/",
      },
      nextItem: {
        title: "RSS/Atom Data Source 2.4.0",
        permalink: "/blog/rss-datasource-2.4.0-20230408/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nIn this article, I explain how to remove unnecessary native Grafana plugins from your build. It is an easy way to avoid clutter in the Grafana UI. Moreover, as a tempting bonus for keeping only operating parts, you will end up with a lighter package attuned to your needs only.\n\n:::info Less is More.\nThis approach involves stripping a design down to its bare essentials and casting aside any elements that do not contribute to the pure beauty or function of an object or space.\n\n:::\n\nThe default Grafana package includes many data sources and visualizations panels, such as Timeseries, Logging, Traces, etc. Having it all installed at the beginning of the Grafana journey is no doubt impressive and convenient.\n\nScrolling through a long list of available plugins is a simple way to discover what is within immediate reach.\nHowever, the list of essential plugins is relatively laconic for functioning applications. Searching for that one plugin in the list should not be a hefty task worthy of blocking your calendar.\n\nThe obvious question for any production environment is:\n\n- How to remove unused native plugins from the Grafana installation package and, therefore, get rid of unwanted weight?\n\n## Grafana Customization\n\nThe customization topic is among the most frequently looked at and asked questions on the Grafana Forum.\n\nIn July last year, we produced a short video sharing our experience with customization using Docker containers. It explains the basics in 90 seconds.\n\n<Video\n  src="https://www.youtube.com/embed/3GRoa8TzIxY"\n  title="Change titles, icons, footer, default dashboard in Grafana 9."\n/>\n\nIn addition, we published a blog post with similar material [How to customize the Grafana user interface](/blog/how-to-customize-the-grafana-user-interface-8d70a42dc2b6/).\n\n### Cheat-sheet\n\nMonths of work bundled with deep expertise nicely wrapped into a 7-minute long video revealing simple steps to customize Grafana. In this tutorial, we answered all community questions we collected to this moment.\n\n<Video\n  src="https://www.youtube.com/embed/ChI78v4UZc0"\n  title="How to customize Grafana 9.4. A cheat-sheet for Docker container and Windows."\n/>\n\n## Native Data Sources\n\nTo add a new data source, go to Administration -> Data Sources and click "+ Add a new data source". Then scroll through the list, hoping to spot what you need.\n\nAs we mentioned, it is beneficial to limit the selection when you already know your environment. The list could go down to as few as 3-4 native data sources, plus some from the community. The result might look like a concise one-pager.\n\n<Image\n  title="Concise one-pager with only data sources that are needed for the project."\n  src="/img/blog/2023-04-09-native-grafana-plugins/datasources.png"\n/>\n\n:::note Downside\nThe downside to this approach is that deleted data sources can\'t be installed, and a new Docker image is required.\n:::\n\nHere is the example from our Docker file, which removes all native data sources except Prometheus, Loki and PostgreSQL we use in our environment. Also, it drops Cloud and Enterprise hardcoded groups.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-04-09-native-grafana-plugins/datasources.docker"\n  language="docker"\n/>\n\n## Native Panels\n\nIn some of our projects, we do not use Annotation List, Dashboard List, News, Candlestick, Node Graph, and Traces.\nNarrowing down the selection to work with is a simple and elegant idea.\n\n<Image\n  title="Smaller number of panels helps to concentrate on the dashboard."\n  src="/img/blog/2023-04-09-native-grafana-plugins/panels.png"\n/>\n\nYou can pick and choose native panels using the same concepts.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-04-09-native-grafana-plugins/panels.docker"\n  language="docker"\n/>\n\n## Connections\n\nGrafana 9.5.0 introduced Connections as a new and easier way to install and add Data Sources.\n\nIt\'s an interesting feature to explore various data sources, but we already know what we need and disable it in the configuration file.\n\n<Image\n  title="Connections is a new and easier way to install and add Data Sources."\n  src="/img/blog/2023-04-09-native-grafana-plugins/connections.png"\n/>\n\n```docker\n# Disable Connections\nRUN sed -i \'s|# feature2 = false|dataConnectionsConsole = false|g\' /usr/share/grafana/conf/defaults.ini\n```\n\n## Docker file\n\nThe docker file below includes all Grafana customization instructions as they exist now. That means all we mentioned in the previous blog post and the 90 seconds video are included below.\n\n:::info Grafana 10.0\n\nWe keep the docker file updated to the latest version of Grafana.\n\n:::\n\nYou can find our collection of various customizations in the Docker file on GitHub. Thank you to the community for sharing ideas and helping us to improve the list.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-app/blob/main/Dockerfile"\n  language="docker"\n/>\n\nRest assured that we constantly update the list with all the latest configuration commands we can identify.',
  },
  {
    id: "rss-datasource-2.4.0-20230408/",
    metadata: {
      permalink: "/blog/rss-datasource-2.4.0-20230408/",
      source: "@site/blog/2023-04-08-rss-datasource-2.4.0/index.mdx",
      title: "RSS/Atom Data Source 2.4.0",
      description:
        "We are happy to announce the release of the RSS/Atom Data Source 2.4.0. This release includes the following updates:",
      date: "2023-04-08T00:00:00.000Z",
      formattedDate: "April 8, 2023",
      tags: [
        {
          label: "RSS/Atom Data Source",
          permalink: "/blog/tags/rss-atom-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "rss-datasource-2.4.0-20230408/",
        tags: ["RSS/Atom Data Source", "Release Notes"],
        image: "/img/blog/2023-04-08-rss-datasource-2.4.0/banner.png",
        keywords: ["Data Source", "RSS", "Atom", "Grafana"],
        updated: "2023-04-14T00:00:00.000Z",
      },
      prevItem: {
        title: "Hey, it is time for spring cleaning your Grafana",
        permalink: "/blog/native-grafana-plugins-20230409/",
      },
      nextItem: {
        title: "Environment Data Source 2.3.0",
        permalink: "/blog/env-datasource-2.3.0-20230405/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the RSS/Atom Data Source 2.4.0. This release includes the following updates:\n\n- Added URL parameters with dashboard variables support.\n- Updated to the latest Grafana 9.4.7 toolkit and workflows.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on April 14, 2023.\n:::\n\n<Image\n  title="RSS/Atom Data Source allows displaying any News Feeds on your dashboard."\n  src="/img/blog/2023-04-08-rss-datasource-2.4.0/dashboard.png"\n  lazy={false}\n/>\n\n## URL parameters\n\nURL parameters allow reusing the data source for news feeds with the same URL.\n\nFor example, a data source can be set to YouTube. You can display specific or multiple news feeds using a dashboard variable.\n\n<Image\n  title="Dashboard variables can be used in URL parameters."\n  src="/img/blog/2023-04-08-rss-datasource-2.4.0/parameters.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nRSS/Atom data source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-rss-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-rss-datasource\n```\n\n## YouTube Tutorial\n\nThe RSS/Atom data source is a plugin for Grafana that retrieves RSS/Atom feeds and allows visualizing them using Dynamic Text and other panels.\n\n<Video\n  src="https://www.youtube.com/embed/RAxqS2hpWkg"\n  title="News feed tutorial for Grafana Dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update to Grafana 9.4.7 (#44)\n- Update CI and Release workflows (#45)\n- Update Documentation, Provisioning (#46)\n- Add URL parameters with variables support (#47, #48)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-rss-datasource/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "env-datasource-2.3.0-20230405/",
    metadata: {
      permalink: "/blog/env-datasource-2.3.0-20230405/",
      source: "@site/blog/2023-04-05-env-datasource-2.3.0/index.mdx",
      title: "Environment Data Source 2.3.0",
      description:
        "We are happy to announce the release of the Environment Data Source 2.3.0. This release includes the following updates:",
      date: "2023-04-05T00:00:00.000Z",
      formattedDate: "April 5, 2023",
      tags: [
        {
          label: "Environment Data Source",
          permalink: "/blog/tags/environment-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "env-datasource-2.3.0-20230405/",
        tags: ["Environment Data Source", "Release Notes"],
        image: "/img/blog/2023-04-05-env-datasource-2.3.0/banner.png",
        keywords: ["Data Source", "Environment", "Grafana"],
        updated: "2023-05-23T00:00:00.000Z",
      },
      prevItem: {
        title: "RSS/Atom Data Source 2.4.0",
        permalink: "/blog/rss-datasource-2.4.0-20230408/",
      },
      nextItem: {
        title: "Annotations, Alerts and Annotation Queries in Grafana",
        permalink: "/blog/annotations-grafana-api-20230401/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Environment Data Source 2.3.0. This release includes the following updates:\n\n- Added deployment options to Documentation and NGINX examples.\n- Updated to Go 1.19 and the latest Go SDK.\n- Updated to the latest Grafana 9.4.7 toolkit and workflows.\n\n:::info Grafana Catalog\nEnvironment Data Source is not included in the Grafana Catalog.\n:::\n\n<Image\n  title="Environment Variables displayed on the Grafana dashboard."\n  src="/img/blog/2023-04-05-env-datasource-2.3.0/dashboard.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nThe Environment Data Source can be installed from our Private Repository or downloaded directly from GitHub.\n\n```bash\ngrafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource\n```\n\n## YouTube Tutorial\n\nThe Environment Data Source is a plugin for Grafana that returns environment variables to display on your dashboard or use as Variables in your code.\n\n<Video\n  src="https://www.youtube.com/embed/sczRq2lI3e4"\n  title="Dashboard, Global and Environment variables."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update README to explain how to use data source for a custom domain (#18)\n- Add NGINX configuration example (#18)\n- Update to Grafana 9.3.6 (#19)\n- Update to Grafana 9.4.7 (#20)\n- Update backend and workflows to Go 1.19 (#21)\n- Update Documentation (#22)\n\n## Feedback\n\nSubscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.',
  },
  {
    id: "annotations-grafana-api-20230401/",
    metadata: {
      permalink: "/blog/annotations-grafana-api-20230401/",
      source: "@site/blog/2023-04-01-annotations-grafana-api/index.mdx",
      title: "Annotations, Alerts and Annotation Queries in Grafana",
      description:
        "Grafana's time series visualization is designed to display one-dimensional data arrays. In most cases that we have come across, a time series panel shows data points collected from a device.",
      date: "2023-04-01T00:00:00.000Z",
      formattedDate: "April 1, 2023",
      tags: [
        {
          label: "Grafana HTTP API Data Source",
          permalink: "/blog/tags/grafana-http-api-data-source",
        },
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "annotations-grafana-api-20230401/",
        tags: ["Grafana HTTP API Data Source", "Grafana Crash Course"],
        image: "/img/blog/2023-04-01-annotations-grafana-api/banner.png",
        keywords: ["Grafana", "HTTP API", "Data Source", "Annotations"],
        updated: "2023-06-06T00:00:00.000Z",
      },
      prevItem: {
        title: "Environment Data Source 2.3.0",
        permalink: "/blog/env-datasource-2.3.0-20230405/",
      },
      nextItem: {
        title: "Grafana HTTP API Data Source 1.2.0",
        permalink: "/blog/grapi-datasource-1.2.0-20230331/",
      },
    },
    content:
      'import BlogPost from "@theme/BlogPost";\nimport Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nGrafana\'s time series visualization is designed to display one-dimensional data arrays. In most cases that we have come across, a time series panel shows data points collected from a device.\n\nOut of the box, Grafana allows adding native annotations, alert rules for your time series, and visualizing annotation queries.\n\n## Native Annotations\n\nNative annotation is a simple commentary on a data point. Users with at least Editor privileges can add a native annotation manually by clicking on the data point of interest, typing a description, and specifying tags.\n\nAlternatively, you can create HTTP API calls to automate the entry process.\n\n<Image\n  title="Editors and Administrator can add native annotations."\n  src="/img/blog/2023-04-01-annotations-grafana-api/native.png"\n  lazy={false}\n/>\n\n## Alerts\n\nAlerts might seem like a different kind of animal, but under the hood, alerts are very similar to native annotations.\n\nAlerts are created by the Grafana alert manager according to the alert rules you put in place. Here is an example of an alert rule:\n\n:::note Alert Rule\n\nWatch the Value column from the Metric table, PostgreSQL data source. Evaluate\nevery 10 seconds for 30 seconds for the condition greater than 100.\n\n:::\n\nThe rule means to capture three values (30 seconds/10 seconds).\n\n- If all three are above 100, then fire an alert.\n- In addition to generating an annotation, fire (or create) an alert means to send a notification via the configured channels.\n  Your options are Email, Slack messenger, and OnCall.\n\n## Alerts vs Native annotations\n\nNative annotations serve well for non-time-critical comments, while alerts work best for vigilant data monitoring. The alert manager creates alerts according to the rules you put in place. Alerts immediately signal if something is off (the value is outside of the expected range).\n\nPeople tend to reference both alerts and native annotations simply as annotations. This, unfortunately, confuses things a little further.\n\n<Image\n  title="Annotations, Alerts, and Annotation queries in Grafana."\n  src="/img/grafana/annotations.png"\n/>\n\nThis introductory video highlights the differences and similarities between Grafana alerts, annotations, and annotation queries.\n\n<Video\n  src="https://www.youtube.com/embed/4asWJ_Dhcmw"\n  title="Annotations, Alerts, and Annotation queries in Grafana explained."\n/>\n\n## Grafana configuration database\n\nBoth alerts and native annotations are stored in the Grafana configuration database. Please, refer to another blog post where I explained in detail what that is.\n\nIn short, every Grafana needs a configuration database to capture its settings, including native annotations and alerts. If you do not configure otherwise, you will end up with sqlite3 as your configuration database. The other choices are PostgreSQL and MySQL.\n\n<BlogPost\n  href="/blog/grafana-setup-20230122/"\n  title="Blog post about Grafana configuration database."\n  src="/img/blog/2023-01-22-grafana-setup/banner.png"\n/>\n\n## Configuration Menu\n\nTo access the configuration menu for alerts and native annotation use the \'Annotations\' section of the dashboard setting menu.\n\n<Image\n  title="Example of what you see under Annotations menu."\n  src="/img/blog/2023-04-01-annotations-grafana-api/annotation-menu.png"\n/>\n\nTo work with alert rules, go under the Alerting menu.\n\n<Image\n  title="Alerting rules are periodically evaluated and fired if the threshold is reached."\n  src="/img/blog/2023-04-01-annotations-grafana-api/alerting.png"\n/>\n\n## Annotations queries\n\nAnnotation queries are an advanced way to work with annotation records. You can store annotation records in a database like PostgreSQL or any other storage of your choice and access them using a corresponding data source.\n\nAnnotation queries could be divided into two types, built-in and user-defined.\n\n<Image\n  title="Get access to built-in and user-defined annotation queries in the Annotations menu "\n  src="/img/blog/2023-04-01-annotations-grafana-api/built-in.png"\n/>\n\n### Annotations & Alerts (Built-in)\n\nThe built-in Annotation Query, is used to display native annotations, and does not provide features like filters and support for dashboard variables.\n\n:::info Time Series\nTime Series do not rely on built-in Annotations and use internal API calls to get Alert Annotations with the same limitations as built-in annotations query.\n:::\n\n### User-defined\n\nTo overcome the mentioned limitations for the built-in annotation query, we created the Grafana HTTP API Data Source.\n\n## Grafana HTTP API Data Source\n\nThe [Grafana HTTP API Data Source](/plugins/volkovlabs-grapi-datasource) allows:\n\n- Work with local and remote Grafana instances.\n- Use API Keys or Tokens to request information from the configuration database and visualize in panels or use in annotations.\n- Work with user-defined annotation types.\n- Work with dashboard variables and utilize them as panel filters.\n- Avoid the broken heart emoji, which is usually shown if at least one alert rule has been triggered.\n\n<Image\n  title="Grafana HTTP API Data Source works with Grafana configuration database."\n  src="/img/blog/2023-04-01-annotations-grafana-api/schema-around-config.png"\n  lazy={false}\n/>\n\nThe query options where you specify which annotations to display using Grafana HTTP API Data source look like this.\n\n<Image\n  title="Display annotation using Grafana HTTP API Data Source for the selected dashboard variable."\n  src="/img/blog/2023-04-01-annotations-grafana-api/annotations.png"\n/>\n\n## We healed a broken heart\n\nAs you know, if an alerting rule has a Dashboard and Panel Ids set, the Time Series panel will display the broken heart emoji. It is expected behavior for particular graphs which do not depend on the Dashboard variables.\n\nHowever, when you display data points from multiple devices the broken heart emoji might be a misleading overkill. The broken heart emoji will not be displayed, but your alerts and annotations will if you use Grafana HTTP API Data Source and configure dashboard filters.\n\n<Video\n  src="https://www.youtube.com/embed/bmOkirtC65w"\n  title="Annotations and Alerts tutorial for Grafana with Timescale."\n/>\n\n## Alerting History\n\nThe Grafana HTTP API Data Source can be used with any native or community plugin. Our community member sent us a screenshot of his alerting history for Timescale Linux memory usage over time.\n\n<Image\n  title="Grafana HTTP API Data Source used to display Alerting History."\n  src="/img/blog/2023-04-01-annotations-grafana-api/history.png"\n/>\n\nWe are looking forward to seeing what you can do with it.',
  },
  {
    id: "grapi-datasource-1.2.0-20230331/",
    metadata: {
      permalink: "/blog/grapi-datasource-1.2.0-20230331/",
      source: "@site/blog/2023-03-31-grapi-datasource-1.2.0/index.mdx",
      title: "Grafana HTTP API Data Source 1.2.0",
      description:
        "We are happy to announce the release of the Grafana HTTP API Data Source 1.2.0. This release includes the following updates:",
      date: "2023-03-31T00:00:00.000Z",
      formattedDate: "March 31, 2023",
      tags: [
        {
          label: "Grafana HTTP API Data Source",
          permalink: "/blog/tags/grafana-http-api-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "grapi-datasource-1.2.0-20230331/",
        tags: ["Grafana HTTP API Data Source", "Release Notes"],
        image: "/img/blog/2023-03-31-grapi-datasource-1.2.0/banner.png",
        keywords: ["Grafana", "HTTP API", "Data Source", "Annotations"],
        updated: "2023-04-15T00:00:00.000Z",
      },
      prevItem: {
        title: "Annotations, Alerts and Annotation Queries in Grafana",
        permalink: "/blog/annotations-grafana-api-20230401/",
      },
      nextItem: {
        title: "Static Data Source 2.2.0",
        permalink: "/blog/static-datasource-2.2.0-20230327/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Grafana HTTP API Data Source 1.2.0. This release includes the following updates:\n\n- Added formatted Annotation labels for Alerts.\n- Added Alert Rules and Alert UID field to Alert Annotations.\n- Added Variables support.\n- Updated Scoped Variables for Annotations.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 31, 2023.\n:::\n\n## Alert labels\n\nWe added formatted Alert labels in the `labels` field, which can be parsed using `Extract field` transformation to sort, filter, and display by values.\n\n<Image\n  title="Grafana HTTP API Data Source used to display Alerting History."\n  src="/img/blog/2023-03-31-grapi-datasource-1.2.0/history.png"\n  lazy={false}\n/>\n\n## Alert Rules and UID\n\nBased on the alert rules Annotations will return the Alert name and UID fields. Alert UID can be used for data links to quickly direct to the rules configuration.\n\n<Image\n  title="Alert Name and UID displayed for each Alert annotation."\n  src="/img/blog/2023-03-31-grapi-datasource-1.2.0/alerts.png"\n/>\n\n## Annotations\n\nAnnotations might seem different from the Alerts, but under the hood, they are very similar. With a little help from the Grafana HTTP API data source, you can easily work with both.\n\nThis is an introductory video for anyone interested in Grafana Alerts and Annotations.\n\n<Video\n  src="https://www.youtube.com/embed/4asWJ_Dhcmw"\n  title="Annotations, Alerts, and Annotation queries in Grafana explained."\n/>\n\n## How to and Demo\n\nIn this tutorial, we look at the concept from a data flow point of view and provide step-by-step instructions which you can follow and learn as you go.\n\n<Video\n  src="https://www.youtube.com/embed/bmOkirtC65w"\n  title="Annotations and Alerts tutorial for Grafana with Timescale."\n/>\n\n## Variables support\n\nWe added initial Variables support to the data source. You can select Alert Rules, Data Sources, and Annotations by UID or text fields.\n\n<Image\n  title="Grafana HTTP API Data Source can be used for Dashboard Variables."\n  src="/img/blog/2023-03-31-grapi-datasource-1.2.0/variables.png"\n/>\n\n## Calendar\n\nThe Grafana HTTP API Data Source can be used together with [Calendar panel](/plugins/volkovlabs-calendar-panel) to visualize alerts that happened in a week or month.\n\n<Image\n  title="Alerts for this week displayed using Calendar panel."\n  src="/img/blog/2023-03-31-grapi-datasource-1.2.0/calendar.png"\n/>\n\n## Getting Started\n\nThe Grafana HTTP API Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-grapi-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-grapi-datasource\n```\n\n## YouTube Tutorial\n\n<Video\n  src="https://www.youtube.com/embed/0zibOEGqTJ8"\n  title="Easy access to Grafana backend using Grafana HTTP API data source."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Add formatted Annotation labels for Alerts (#19)\n- Update Annotation Limit to 100 by default (#19)\n- Add Alert Rules and UID for Alerts Annotations (#20)\n- Update Scoped Variables for Annotations (#21)\n- Add Variable Support (#25)\n- Update provisioning for testing Alerts (#26, #28)\n- Add Annotations Tutorial (#29)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-grapi-datasource/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "static-datasource-2.2.0-20230327/",
    metadata: {
      permalink: "/blog/static-datasource-2.2.0-20230327/",
      source: "@site/blog/2023-03-27-static-datasource-2.2.0/index.mdx",
      title: "Static Data Source 2.2.0",
      description:
        "We are happy to announce the release of the Static Data Source 2.2.0. This release includes the following updates:",
      date: "2023-03-27T00:00:00.000Z",
      formattedDate: "March 27, 2023",
      tags: [
        {
          label: "Static Data Source",
          permalink: "/blog/tags/static-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "static-datasource-2.2.0-20230327/",
        tags: ["Static Data Source", "Release Notes"],
        image: "/img/blog/2023-03-27-static-datasource-2.2.0/banner.png",
        keywords: ["Data Source", "Static", "Storage", "Grafana"],
        updated: "2023-03-30T00:00:00.000Z",
      },
      prevItem: {
        title: "Grafana HTTP API Data Source 1.2.0",
        permalink: "/blog/grapi-datasource-1.2.0-20230331/",
      },
      nextItem: {
        title: "Data Manipulation Panel 2.8.0",
        permalink: "/blog/form-panel-2.8.0-20230316/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Static Data Source 2.2.0. This release includes the following updates:\n\n- Added examples for Node Graph, Base64, Pie Chart, and Logs panels in Documentation.\n- Updated Variable replacement to support Scoped Variables.\n- Updated to the latest Grafana 9.4.7 toolkit and workflows.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 29, 2023.\n:::\n\n## Half a Million downloads\n\nThe Static Data Source was downloaded more than half a million times. We plan exciting new features for the upcoming release to get it to a million and become a go-to data source for JavaScript enthusiasts.\n\n<Image\n  title="More than half a million downloads in 2 years."\n  src="/img/blog/2023-03-27-static-datasource-2.2.0/downloads.png"\n  lazy={false}\n/>\n\n## Examples\n\nWe added various examples in the [Documentation](/plugins/volkovlabs-static-datasource/) to get started with Static Data Source.\n\n<Image\n  title="Pie Chart panel visualized data from the Static Data Source."\n  src="/img/blog/2023-03-27-static-datasource-2.2.0/pie.png"\n/>\n\n## Variables\n\nThe Static Data Source supports dashboard and global variables in the String fields. In this release, we added support for the Scoped variables used when repeating panels based on multi-select variables.\n\nThree types of variables are discussed in the [Grafana Crash Course](/grafana/variables).\n\n## Getting Started\n\nThe Static Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-static-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install marcusolsson-static-datasource\n```\n\n## YouTube Tutorial\n\nThe Static Data Source is a plugin for Grafana that allows you to store and emulate any data.\n\n<Video\n  src="https://www.youtube.com/embed/QOV8ECOUjWs"\n  title="Mimic any data with Static data source."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update CI and Release workflows (#33)\n- Update to Grafana 9.4.7 (#34)\n- Update README with Documentation (#35)\n- Add Scoped Variables for Variables replacement (#35)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-static-datasource/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "form-panel-2.8.0-20230316/",
    metadata: {
      permalink: "/blog/form-panel-2.8.0-20230316/",
      source: "@site/blog/2023-03-16-form-panel-2.8.0/index.mdx",
      title: "Data Manipulation Panel 2.8.0",
      description:
        "We are happy to announce the release of the Data Manipulation Panel 2.8.0. This release includes the following updates:",
      date: "2023-03-16T00:00:00.000Z",
      formattedDate: "March 16, 2023",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "form-panel-2.8.0-20230316/",
        tags: ["Data Manipulation", "Release Notes"],
        image: "/img/blog/2023-03-16-form-panel-2.8.0/banner.png",
        keywords: ["Data Manipulation", "Form Panel", "Data", "Grafana"],
        updated: "2023-09-22T00:00:00.000Z",
      },
      prevItem: {
        title: "Static Data Source 2.2.0",
        permalink: "/blog/static-datasource-2.2.0-20230327/",
      },
      nextItem: {
        title: "Grafana HTTP API Data Source 1.1.0",
        permalink: "/blog/grapi-datasource-1.1.0-20230315/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Data Manipulation Panel 2.8.0. This release includes the following updates:\n\n- Added the string and number type selection for select boxes and radio buttons.\n- Added lookup options for disabled form elements.\n- Added support for `DELETE` requests.\n- Added the **Buttons only** layout to perform `GET`, `POST`, and `DELETE` requests.\n- Added the panel padding configuration allowing the usage of the entire panel area.\n- Refactored documentation and examples of using API Servers with MySQL, PostgreSQL, and Deno.\n- Updated to the latest Grafana 9.4.3 toolkit and workflows.\n\n:::info Grafana Catalog\nThe plugin was updated in the Grafana Plugins catalog on March 23, 2023.\n:::\n\n<Image\n  title="Data Manipulation Panel enables the entry and editing of different kinds of data."\n  src="/img/blog/2023-03-16-form-panel-2.8.0/panel.png"\n  lazy={false}\n/>\n\n## Layout\n\nThe new **Buttons Only** layout does not require any elements and allows performing update requests.\n\n<Image\n  title="Layout can be Basic, Buttons only, and Sections with no or extra padding if required."\n  src="/img/blog/2023-03-16-form-panel-2.8.0/layout.png"\n/>\n\nThe panel padding can be adjusted within the range of 0 to 20 pixels depending on your use case.\n\n## Select and Radio options\n\nFor the select boxes and radio buttons, you can configure the format type (string or number) to correctly visualize returned values and update them using API.\n\n<Image\n  title="Select a string or a number type for each option."\n  src="/img/blog/2023-03-16-form-panel-2.8.0/options.png"\n/>\n\n## Lookup for Read-only (Disabled) elements\n\nWe added a lookup for read-only form elements similar to radio buttons and select boxes to implement control forms and verify initial values before updating.\n\n<Image\n  title="Add options to lookup labels for returned values."\n  src="/img/blog/2023-03-16-form-panel-2.8.0/readonly.png"\n/>\n\n### Control Form\n\nA control form is a special form with multiple sections consisting of read-only and input fields.\n\n<Image\n  title="Control form to verify and update Id and Type."\n  src="/img/blog/2023-03-16-form-panel-2.8.0/control.png"\n/>\n\n## DELETE requests\n\nThe update request supports the `DELETE`, `PATCH`, `POST`, and `PUT` methods.\n\n<Image\n  title="DELETE update requests allows you to execute DELETE API calls."\n  src="/img/blog/2023-03-16-form-panel-2.8.0/update.png"\n/>\n\n## Magic (JavaScript) Trio\n\nData Manipulation Panel is one of the three plugins that complete Grafana. With Dynamic Text, Data Manipulation, and Apache ECharts Panel you can create fully functional web applications meeting your needs and expectations.\n\n<Video\n  src="https://www.youtube.com/embed/wPr4gZYzUVA"\n  title="Dynamic Text, Data Manipulation, and Apache ECharts Panel plugins."\n/>\n\n## Getting Started\n\nYou can install Data Manipulation Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-form-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-form-panel\n```\n\n## YouTube Tutorial\n\nData Manipulation Panel is a brand-new Grafana plugin. It is the first plugin that allows you to insert and update application data, as well as modify settings, straight from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entry and user input into dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Added the string and number type for select boxes and radio buttons (#120).\n- Added the lookup options for disabled elements (#121).\n- Added support for Server API with MySQL for the feedback dashboard (#125).\n- Added compatibility with Grafana 9.3.1 (#129).\n- Added options for the `DELETE` request (#130).\n- Added the Buttons-only layout to perform `GET`/`POST`/`DELETE` requests (#131).\n- Updated the README file and moved product documentation to docs.volkovlabs.io (#132).\n- Updated the README file and product documentation (#134).\n- Refactored API servers (#128).\n- Updated CI and release workflows (#145).\n- Added compatibility with Grafana 9.4.3 (#146).\n- Added the `NoPadding` parameter to remove extra padding around the panel and make it configurable (#146).\n- Updated the README file and product documentation (#147).\n\n### Bug fixes\n\n- Fixed the password and Boolean elements confirmation (#120).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-form-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "grapi-datasource-1.1.0-20230315/",
    metadata: {
      permalink: "/blog/grapi-datasource-1.1.0-20230315/",
      source: "@site/blog/2023-03-15-grapi-datasource-1.1.0/index.mdx",
      title: "Grafana HTTP API Data Source 1.1.0",
      description:
        "We are happy to announce the release of the Grafana HTTP API Data Source 1.1.0. This release includes the following updates:",
      date: "2023-03-15T00:00:00.000Z",
      formattedDate: "March 15, 2023",
      tags: [
        {
          label: "Grafana HTTP API Data Source",
          permalink: "/blog/tags/grafana-http-api-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "grapi-datasource-1.1.0-20230315/",
        tags: ["Grafana HTTP API Data Source", "Release Notes"],
        image: "/img/blog/2023-03-15-grapi-datasource-1.1.0/banner.png",
        keywords: ["Grafana", "HTTP API", "Data Source", "Annotations"],
      },
      prevItem: {
        title: "Data Manipulation Panel 2.8.0",
        permalink: "/blog/form-panel-2.8.0-20230316/",
      },
      nextItem: {
        title: "Dynamic Text Panel 3.1.0",
        permalink: "/blog/dynamictext-panel-3.1.0-20230312/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Grafana HTTP API Data Source 1.1.0. This release includes the following updates:\n\n- Signed as a community plugin and available in Grafana Cloud and On-Premises.\n- Updated Plugin configuration, types and README.\n- Updated to the latest Grafana 9.4.3 toolkit.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 15, 2023.\n:::\n\n## We just started\n\nThe first release can retrieve\n\n- Health information.\n- List of Data Sources.\n- Annotations and Alarms with filter capabilities.\n\n<Image\n  title="Dashboard displays Data sources, annotations and health information of the Grafana instance."\n  src="/img/blog/2023-03-15-grapi-datasource-1.1.0/dashboard.png"\n  lazy={false}\n/>\n\n## Roadmap\n\nWe are planning to add most of the HTTP API endpoints for Dashboards, Users management, and Configuration. You are welcome to open feature requests in the repository.\n\n## Getting Started\n\nThe Grafana HTTP API Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-grapi-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-grapi-datasource\n```\n\n## YouTube Tutorial\n\n<Video\n  src="https://www.youtube.com/embed/0zibOEGqTJ8"\n  title="Easy access to Grafana backend using Grafana HTTP API data source."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update to Grafana 9.4.3 (#13)\n- Update Bearer token plugin configuration (#13)\n- Signed as community plugin (#14)\n- Update Grafana types and description (#15)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-grapi-datasource/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "dynamictext-panel-3.1.0-20230312/",
    metadata: {
      permalink: "/blog/dynamictext-panel-3.1.0-20230312/",
      source: "@site/blog/2023-03-12-dynamictext-panel-3.1.0/index.mdx",
      title: "Dynamic Text Panel 3.1.0",
      description:
        "We're excited to announce the release of the Dynamic Text Panel 3.1.0. This feature release includes the following updates:",
      date: "2023-03-12T00:00:00.000Z",
      formattedDate: "March 12, 2023",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "dynamictext-panel-3.1.0-20230312/",
        tags: ["Dynamic Text", "Release Notes"],
        image: "/img/blog/2023-03-12-dynamictext-panel-3.1.0/banner.png",
        keywords: [
          "Dynamic Text",
          "Panel",
          "Data",
          "Code",
          "Highlight",
          "Grafana",
        ],
        updated: "2023-09-15T00:00:00.000Z",
      },
      prevItem: {
        title: "Grafana HTTP API Data Source 1.1.0",
        permalink: "/blog/grapi-datasource-1.1.0-20230315/",
      },
      nextItem: {
        title: "Calendar Panel 1.3.0",
        permalink: "/blog/calendar-panel-1.3.0-20230311/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe\'re excited to announce the release of the Dynamic Text Panel 3.1.0. This feature release includes the following updates:\n\n- Added Time Zone and Range parameters for JavaScript Code.\n- Added Replace variables and Location service parameters for Javascript Code.\n- Updated the `replaceVariable` function with a scoped function. Variables in repeated panels are supported.\n- Updated to the latest Grafana 9.4.3 toolkit.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 13, 2023.\n:::\n\n## Time Range and Zone\n\nAdded the Time Zone and Time Range parameters enabling the display of the selected time zone and time ranges with custom handlers.\n\nHere is an example of how to display the selected dashboard, user\'s time zone, and time range in Grafana.\n\n### Content\n\n````\n<h2>Dashboard {{tz}}</h1>\n<h2>Browser {{browser}}</h1>\n\n```json\n{{{json (range)}}}\n```\n````\n\n### JavaScript Code\n\n```\nhandlebars.registerHelper(\'tz\', () => timeZone);\nhandlebars.registerHelper(\'range\', () => timeRange);\nhandlebars.registerHelper(\'browser\', () => Intl.DateTimeFormat().resolvedOptions().timeZone);\n```\n\n<Image\n  title="Dynamic Text allows displaying updated time zone and range in Grafana."\n  src="/img/blog/2023-03-12-dynamictext-panel-3.1.0/time.png"\n  lazy={false}\n/>\n\n## Replace Variables\n\nUpdated the `replaceVariable` function with a scoped function and added support for repeated panels.\n\nDynamic Text Panel provides the `{{variable}}` helper to work with dashboard and global variables. Alternatively, you can create a custom Handlebars helper to introduce additional logic and formats.\n\n### Content\n\n```md\n- Native helper **{{variable "test"}}**\n- Custom helper **{{myVariable "test"}}**\n```\n\n### JavaScript Code\n\n```js\nhandlebars.registerHelper("myVariable", (name) => replaceVariables(`$${name}`));\n```\n\n## Magic (JavaScript) Trio\n\nOne of the three plugins that complete Grafana is Dynamic Text Panel. With Dynamic Text, Data Manipulation, and Apache ECharts Panel you can create fully functional web applications meeting your needs and expectations.\n\n<Video\n  src="https://www.youtube.com/embed/wPr4gZYzUVA"\n  title="Dynamic Text, Data Manipulation, and Apache ECharts Panel plugins."\n/>\n\n## Getting Started\n\nYou can install Dynamic Text Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-dynamictext-panel\n```\n\n## YouTube Tutorial\n\nDynamic Text Panel is a Grafana visualization plugin that converts plain text and table data into visually appealing, easy-to-read information cards. You can use variables, Markdown, and Handlebars to customize the look of the outputted cards.\n\nThe Dynamic Text Panel plugin allows you to construct a text visualization template from the values of a dataset returned by a data source query.\n\n<Video\n  src="https://www.youtube.com/embed/MpNZ4Yl-p0U"\n  title="Markdown, HTML, and Handlebars for transforming data visualizations."\n/>\n\n<Video\n  src="https://www.youtube.com/embed/lJqk5Gobec4"\n  title="JavaScript code in Dynamic Text Panel."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Added support for the Time Zone and Time Range parameters in JavaScript code (#155).\n- Added compatibility with Grafana 9.4.3 (#156).\n- Added the Magic (JavaScript) Trio tutorial in the README file (#157).\n- Updated the `replaceVariables` function with a scoped function (#160).\n- Added the Replace variables and Location service parameters for JavaScript code (#160).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "calendar-panel-1.3.0-20230311/",
    metadata: {
      permalink: "/blog/calendar-panel-1.3.0-20230311/",
      source: "@site/blog/2023-03-11-calendar-panel-1.3.0/index.mdx",
      title: "Calendar Panel 1.3.0",
      description:
        "We are happy to announce the release of the Calendar Panel 1.3.0. This release includes the following updates:",
      date: "2023-03-11T00:00:00.000Z",
      formattedDate: "March 11, 2023",
      tags: [
        {
          label: "Calendar",
          permalink: "/blog/tags/calendar",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "calendar-panel-1.3.0-20230311/",
        tags: ["Calendar", "Release Notes"],
        image: "/img/blog/2023-03-11-calendar-panel-1.3.0/banner.png",
        keywords: ["Calendar", "Panel", "Events", "Time Range", "Grafana"],
        updated: "2023-09-11T00:00:00.000Z",
      },
      prevItem: {
        title: "Dynamic Text Panel 3.1.0",
        permalink: "/blog/dynamictext-panel-3.1.0-20230312/",
      },
      nextItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 3.5.0",
        permalink: "/blog/image-panel-3.5.0-20230307/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Calendar Panel 1.3.0. This release includes the following updates:\n\n- Added an option to display colors based on Event ID or Frame ID if the Color field is not specified.\n- Added support for color schemes.\n- Added the splitting of labels when showing in the drawer.\n- Added display of annotation tags as labels.\n- Updated multi-day intervals to automatically align events throughout the week.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on March 13, 2023.\n:::\n\n## Configuration\n\nOur latest video tutorial explains how to configure the Calendar Panel plugin in Grafana. We store our events in the PostgreSQL database, but you can use any supported storage.\n\n<Video\n  src="https://www.youtube.com/embed/6WGmm5y4fs4"\n  title="How to display events from PostgreSQL."\n/>\n\n### Events Duration\n\nEvents are categorized into four types:\n\n1. **instantaneous**: an event having only the start time.\n2. **continuing**: an event having the start and end time.\n3. **multi-day**: an event having the start and end time and lasting for two days or more.\n4. **ongoing**: an event having the start time without the end time.\n\n<Image\n  title="Schema explains how events are classified depending on the End Time field."\n  src="/img/blog/2023-03-11-calendar-panel-1.3.0/schema.png"\n  lazy={false}\n/>\n\n## Multi-day events\n\nWe improved the aligning of multi-day events. In the latest version, events are aligned by week, which prevents in-between gaps for events spanning for more than one week.\n\nEvents are displayed in chronological order, with the earliest events appearing at the top.\n\n<Image\n  title="Release Management dashboard using Calendar Panel for Grafana."\n  src="/img/blog/2023-03-11-calendar-panel-1.3.0/release.png"\n/>\n\n## Event colors\n\nWe improved the coloring options for events. If the Color field is not specified, events can be colored based on Frame ID or Event ID. In the plugin preferences, you can also select the classic palette.\n\n<Image\n  title="Releases colored based on Event ID using the classic palette."\n  src="/img/blog/2023-03-11-calendar-panel-1.3.0/colors.png"\n/>\n\n## Event details\n\nThe splitting of comma-separated values in the Labels field has been added into event details. The Description field supports the HTML elements that you can use for formatting event descriptions.\n\n<Image\n  title="Event details with HTML-formatted description and labels."\n  src="/img/blog/2023-03-11-calendar-panel-1.3.0/drawer.png"\n/>\n\nAnnotation tags are also displayed as labels.\n\n## Getting Started\n\nYou can install Calendar Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-calendar-panel\n```\n\n## YouTube Tutorial\n\nCalendar Panel is a Grafana plugin that displays events from various data sources.\n\n<Video\n  src="https://www.youtube.com/embed/iPJ122x0oos"\n  title="Display events from the JSON API data source."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Added compatibility with Grafana 9.4.3 (#87).\n- Added the splitting of labels when showing them in the Drawer component (#88).\n- Added annotation tags as labels (#88).\n- Refactored the multi-day interval (#89).\n- Added the event coloring based on Event ID or Frame ID if the Color field is not specified (#90).\n- Added support for color schemes (#91).\n- Added the video configuration tutorial (#92).\n\n### Bug fixes\n\n- Fixed the content scrolling in the Day drawer (#93).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-calendar-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "image-panel-3.5.0-20230307/",
    metadata: {
      permalink: "/blog/image-panel-3.5.0-20230307/",
      source: "@site/blog/2023-03-07-image-panel-3.5.0/index.mdx",
      title: "Base64 Image/Video/Audio/PDF Panel 3.5.0",
      description:
        "We are excited to announce the release of the Base64 Image/Video/Audio/PDF Panel 3.5.0. This maintenance release includes the following updates:",
      date: "2023-03-07T00:00:00.000Z",
      formattedDate: "March 7, 2023",
      tags: [
        {
          label: "Base64 Image/Video/Audio/PDF",
          permalink: "/blog/tags/base-64-image-video-audio-pdf",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "image-panel-3.5.0-20230307/",
        tags: ["Base64 Image/Video/Audio/PDF", "Release Notes"],
        image: "/img/blog/2023-03-07-image-panel-3.5.0/banner.png",
        keywords: ["Base64", "Panel", "PDF", "Images", "Video", "Audio"],
        updated: "2023-09-09T00:00:00.000Z",
      },
      prevItem: {
        title: "Calendar Panel 1.3.0",
        permalink: "/blog/calendar-panel-1.3.0-20230311/",
      },
      nextItem: {
        title: "Apache ECharts Panel 4.2.0",
        permalink: "/blog/echarts-panel-4.2.0-20230304/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are excited to announce the release of the Base64 Image/Video/Audio/PDF Panel 3.5.0. This maintenance release includes the following updates:\n\n- Removed the panel padding, allowing you to use the entire area of the panel.\n- Updated workflows and compatibility with the latest Grafana 9.4.3 toolkit.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on March 8, 2023.\n:::\n\n## No Padding\n\nRemoved the panel padding, which allows you to use the entire panel area for displaying images and PDF or media files.\n\n<Image\n  title="How to use the plugin to display Base64-encoded PNG images."\n  src="/img/blog/2023-03-07-image-panel-3.5.0/panel.png"\n  lazy={false}\n/>\n\n## MQTT Data source\n\nBase64 Image/Video/Audio/PDF Panel works with any data source. You can also use it with the MQTT data source to display the live camera feed.\n\n## Getting Started\n\nYou can install Base64 Image/Video/Audio/PDF Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-image-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-image-panel\n```\n\n## YouTube Tutorial\n\nBase64 Image/Video/Audio/PDF Panel is a Grafana plugin that renders PNG, JPG, GIF, MP4, WEBM, MP3, OGG, and PDF files encoded in the Base64 format.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Video, Live Camera Feed on Grafana Dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Updated CI and release workflows (#64).\n- Added compatibility with Grafana 9.4.3 (#65)\n- Set the `NoPadding` parameter to use the entire area of the panel (#66).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-image-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "echarts-panel-4.2.0-20230304/",
    metadata: {
      permalink: "/blog/echarts-panel-4.2.0-20230304/",
      source: "@site/blog/2023-03-04-echarts-panel-4.2.0/index.mdx",
      title: "Apache ECharts Panel 4.2.0",
      description:
        "We are happy to announce the release of Apache ECharts Panel 4.2.0. This release includes the following updates:",
      date: "2023-03-04T00:00:00.000Z",
      formattedDate: "March 4, 2023",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "echarts-panel-4.2.0-20230304/",
        tags: ["Apache ECharts", "Release Notes"],
        image: "/img/blog/2023-03-04-echarts-panel-4.2.0/banner.png",
        keywords: [
          "Apache ECharts",
          "Panel",
          "Chart",
          "Visualization",
          "Grafana",
        ],
        updated: "2023-09-06T00:00:00.000Z",
      },
      prevItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 3.5.0",
        permalink: "/blog/image-panel-3.5.0-20230307/",
      },
      nextItem: {
        title: "Grafana HTTP API Data Source 1.0.0",
        permalink: "/blog/grapi-datasource-1.0.0-20230302/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of Apache ECharts Panel 4.2.0. This release includes the following updates:\n\n- Added the `EventBus` parameter to publish events.\n- Removed the panel padding, allowing you to use all of the panel space from corner to corner.\n- Updated the default background to `transparent` for light and dark themes.\n- Updated the plugin to the latest Grafana 9.4.3 toolkit and workflows.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on March 8, 2023.\n:::\n\n## No Padding\n\nThe removal of the panel padding lets you use the panel space more effectively for displaying charts, maps, and graphics across the entire width and height of the panel.\n\n<Image\n  title="GeoJSON Map displays requests from users around the world."\n  src="/img/blog/2023-03-04-echarts-panel-4.2.0/map.png"\n  lazy={false}\n/>\n\n## Community Use cases\n\nWe are amazed by the everyday developments of the community that make use of the latest capabilities in Apache ECharts Panel for Grafana.\n\n### Dynamic toolbox\n\nOur community member [ftasso](https://github.com/ftasso) shared an extremely interesting use case that displays complex ECharts objects like a sunburst with the toolbox. It dynamically retrieves data and uses a variety of variables for chart generation.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-03-04-echarts-panel-4.2.0/dynamic.js"\n  language="js"\n/>\n\n### Preserve the selected range on a visual map\n\nOur community member [Barryetter](https://github.com/Barryetter) shared another use case that allows you to preserve the range slider settings of the `visualMap` object after the dashboard refresh.\n\n1. Specify two dashboard variables. Constants are also fine but you need to hide them from the user. Name them `datarangeStart` and `datarangeEnd` and apply some initial values to them.\n2. In the Apache EChart Panel code editor (before the `return` snippet), add an event handler for the `datarangeselected` event. Remove any other event handler to prevent creation of duplicate handlers.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-03-04-echarts-panel-4.2.0/range.js"\n  language="js"\n/>\n\n3. In the `visualMap` definition, set the `range` property to the dashboard variables using the `replaceVariables` method as described in our [documentation](/plugins/volkovlabs-echarts-panel/variables).\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-03-04-echarts-panel-4.2.0/visual-map.js"\n  language="js"\n/>\n\n## Create DOM (Document Object Model) Elements\n\nYou can add elements (buttons, checkboxes, dropdown boxes, etc.) to the DOM (Document Object Model) using `echartsInstance` contributed by [Lroy](https://github.com/Lroy).\n\n<Image\n  title="Add a button to add Events into the Apache ECharts container."\n  src="/img/blog/2023-03-04-echarts-panel-4.2.0/dom.png"\n/>\n\nFor example, you can add a button with an event handler.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-03-04-echarts-panel-4.2.0/dom.js"\n  language="js"\n/>\n\n## Getting Started\n\nYou can install Apache ECharts Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-echarts-panel\n```\n\n## YouTube Tutorial\n\nThe Apache ECharts Panel plugin is a data visualization extension for Grafana that allows you to integrate charts and graphs from the popular Apache ECharts library into your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\nOne of the three plugins that completes Grafana is Apache ECharts Panel. With Dynamic Text, Data Manipulation, and Apache ECharts Panel you can create fully functional web applications meeting your needs and expectations.\n\n<Video\n  src="https://www.youtube.com/embed/wPr4gZYzUVA"\n  title="Dynamic Text, Data Manipulation, and Apache ECharts Panel plugins."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Added `EventBus` to the available parameters for publishing events (#122).\n- Added compatibility with Grafana 9.3.6 (#132).\n- Added compatibility with Grafana 9.4.3 (#142).\n- Updated CI and release workflows (#134).\n- Added `NoPadding` to remove extra padding around (#138).\n- Set the background color as transparent by default (#139).\n- Added the Magic (JavaScript) Trio tutorial (#141).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-echarts-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "grapi-datasource-1.0.0-20230302/",
    metadata: {
      permalink: "/blog/grapi-datasource-1.0.0-20230302/",
      source: "@site/blog/2023-03-02-grapi-datasource-1.0.0/index.mdx",
      title: "Grafana HTTP API Data Source 1.0.0",
      description:
        "A new plugin Grafana HTTP API Data Source 1.0.0 was released today. This first release",
      date: "2023-03-02T00:00:00.000Z",
      formattedDate: "March 2, 2023",
      tags: [
        {
          label: "Grafana HTTP API Data Source",
          permalink: "/blog/tags/grafana-http-api-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "grapi-datasource-1.0.0-20230302/",
        tags: ["Grafana HTTP API Data Source", "Release Notes"],
        image: "/img/blog/2023-03-02-grapi-datasource-1.0.0/banner.png",
        keywords: ["Grafana", "HTTP API", "Data Source", "Annotations"],
        updated: "2023-03-17T00:00:00.000Z",
      },
      prevItem: {
        title: "Apache ECharts Panel 4.2.0",
        permalink: "/blog/echarts-panel-4.2.0-20230304/",
      },
      nextItem: {
        title: "Calendar Panel 1.2.0",
        permalink: "/blog/calendar-panel-1.2.0-20230223/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nA new plugin Grafana HTTP API Data Source 1.0.0 was released today. This first release\n\n- Allows connecting to Local and Remote Grafana instances via HTTP API using API Keys and Tokens.\n- Tested with Grafana HTTP API versions 8.5+. It may work with previous versions.\n- Allows retrieving Health information, Annotations, Alerts, and Data Sources.\n- Supports Dashboard annotations to display filtered annotations and alerts.\n- Based on the Grafana 9.3.6 toolkit and workflows.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 15, 2023.\n:::\n\n## Why?\n\nImagine you have many Grafana instances and you want to\n\n- Quickly check information, configuration and usage reports from all of them.\n- Validate users and teams across all instances.\n- Display annotations collected from many instances on a Time Series panel.\n\nEven if you have a single Grafana instance and you want to display Alerting Annotations filtered by variable on a Time Series panel, which was one of the reasons we created this data source. We will discuss this use case in the upcoming blog.\n\n## First release\n\nThis is the first release of the Grafana HTTP API Data Source. It is a game-changer to retrieve annotations, check health information, and verify the configuration of the local and remote Grafana instances, including Grafana Cloud.\n\nGrafana HTTP API requires API Key or Token to access local and remote instances.\n\n<Image\n  title="Grafana HTTP API Data Source allows to connect to Grafana Cloud instances."\n  src="/img/blog/2023-03-02-grapi-datasource-1.0.0/cloud.png"\n  lazy={false}\n/>\n\n## Highlights\n\nThe first release can retrieve\n\n- Health information.\n- List of Data Sources.\n- Annotations and Alarms with filter capabilities.\n\n<Image\n  title="Dashboard displays Data sources, annotations and health information of the Grafana instance."\n  src="/img/blog/2023-03-02-grapi-datasource-1.0.0/dashboard.png"\n/>\n\n## Annotations\n\nGrafana HTTP API Data Source supports Dashboard annotations to display filtered annotations and alerts.\n\n| Filter       | Options                                     |\n| ------------ | ------------------------------------------- |\n| Type         | All, Annotation, or Alert.                  |\n| Dashboards   | All or This.                                |\n| Time Range   | None or Selected in the dashboard.          |\n| Prev State   | All, Normal, Pending, or Alerting.          |\n| Next State   | All, Normal, Pending, or Alerting.          |\n| Text Pattern | Supports Regular expressions and variables. |\n| Max Limit    | Maximum number of annotations to retrieve.  |\n\n<Image\n  title="Dashboard annotations use Grafana HTTP API Data Source to retrieve Alerting annotations filtered with text pattern."\n  src="/img/blog/2023-03-02-grapi-datasource-1.0.0/annotations.png"\n/>\n\n## Getting Started\n\nThe Grafana HTTP API Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-grapi-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-grapi-datasource\n```\n\n## YouTube Tutorial\n\n<Video\n  src="https://www.youtube.com/embed/0zibOEGqTJ8"\n  title="Easy access to Grafana backend using Grafana HTTP API data source."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Initial release based on Volkov Labs Abc Data source template\n- Update README and configuration (#1)\n- Add Postgres for Alerting (#2)\n- Add Annotations (#3)\n- Update name to Grafana HTTP API (#4)\n- Improve Annotations and update to Timescale (#5)\n- Improve Data Source to check Organization (#6)\n- Add Notifications and increase Test Coverage (#7)\n- Add Annotation filters (#8)\n- Add Annotation Alert States filter (#9)\n- Add Health and Data Sources (#10)\n- Update README to prepare for the release (#11, #12)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-grapi-datasource/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "calendar-panel-1.2.0-20230223/",
    metadata: {
      permalink: "/blog/calendar-panel-1.2.0-20230223/",
      source: "@site/blog/2023-02-23-calendar-panel-1.2.0/index.mdx",
      title: "Calendar Panel 1.2.0",
      description:
        "We are happy to announce the release of the Calendar Panel 1.2.0. This release includes the following updates:",
      date: "2023-02-23T00:00:00.000Z",
      formattedDate: "February 23, 2023",
      tags: [
        {
          label: "Calendar",
          permalink: "/blog/tags/calendar",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "calendar-panel-1.2.0-20230223/",
        tags: ["Calendar", "Release Notes"],
        image: "/img/blog/2023-02-23-calendar-panel-1.2.0/banner.png",
        keywords: ["Calendar", "Panel", "Events", "Time Range", "Grafana"],
        updated: "2023-09-11T00:00:00.000Z",
      },
      prevItem: {
        title: "Grafana HTTP API Data Source 1.0.0",
        permalink: "/blog/grapi-datasource-1.0.0-20230302/",
      },
      nextItem: {
        title: "Dynamic Text Panel 3.0.0",
        permalink: "/blog/dynamictext-panel-3.0.0-20230219/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Calendar Panel 1.2.0. This release includes the following updates:\n\n- Added the event coloring based on the configuration of threshold ranges.\n- Added support for the system week start day (Monday, Satuday, Sunday, or default) pulled from Grafana.\n- Added a time display option for events.\n- Updated the Drawer component (sidebar) for a new card-based design.\n- Added compatibility with Grafana 9.3.6 and updated workflows.\n- Refactored the legacy code and migrated to Theme v2.\n- Removed the panel padding and modified styles for a modern visual look of the plugin.\n\n:::info Grafana Plugins catalog\nThe plugin was updated in the Grafana Plugins catalog on February 24, 2023.\n:::\n\n## 1 million downloads\n\nThe Calendar Panel plugin has been downloaded over one million times.\n\n<Image\n  title="More than one million downloads in two years."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/downloads.png"\n  lazy={false}\n/>\n\n## Display Events from PostgreSQL\n\nThis video explains how to configure Calendar Panel in Grafana to retrieve events from the PostgreSQL database, but you can use any supported storage.\n\n<Video\n  src="https://www.youtube.com/embed/6WGmm5y4fs4"\n  title="How to display events from PostgreSQL."\n/>\n\n## Updated Styles\n\nTheme v1 was upgraded to v2, and most styles were modified for a modern look and the provision of a Google Calendar-like experience. **Display Time** is an additional option that displays the time of an event before the title.\n\n<Image\n  title="Calendar Panel displays the latest updates in the Grafana Plugins catalog."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/dashboard.png"\n/>\n\n## Week Start\n\nThe plugin considers the Grafana system settings when choosing the first day of the week - Saturday, Sunday, or Monday, or uses the default day from Grafana settings.\n\n<Image\n  title="You can select the appropriate first day of the week in the user or organization preferences."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/week-start.png"\n/>\n\n## Event colors\n\nWe have released the most frequently requested feature! You can now color events differently depending on whether their values fall inside the chosen threshold ranges.\n\n<Image\n  title="Showing single- and multi-day events in different colors using the configured threshold ranges."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/duration.png"\n/>\n\n## Event details\n\nThe `N more` line appears at the bottom of the event list when events do not fit within the allocated day cell. When you click this line, the opened tab will display the full list of events for that day. You may also click an event to view its information in a new tab.\n\n<Image\n  title="Calendar Panel displays the latest updates in the Grafana Catalog."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/drawer.png"\n/>\n\nYou can also click a particular event directly on the calendar grid to see its details or navigate to the first data link if the `On Click` option is set to `Open Link`.\n\n<Image\n  title="Event details with links are displayed using card components."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/event.png"\n/>\n\n## Time Range\n\nTo filter events against a time range, click a specific day in the calendar. Then, hold down the Shift key and drag the selection to the appropriate day. Click **Apply time range** to confirm the selection. The selected time range will be applied to all events in your calendar.\n\n<Image\n  title="Update the time range by selecting days in the calendar."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/time-range.png"\n/>\n\n## Getting Started\n\nYou can install Calendar Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-calendar-panel\n```\n\n## YouTube Tutorial\n\nCalendar Panel is a Grafana plugin that displays events from various data sources.\n\n<Video\n  src="https://www.youtube.com/embed/iPJ122x0oos"\n  title="Display events from the JSON API data source."\n/>\n\n## Release Notes\n\n### Breaking changes\n\nRefactoring and style migration may introduce breaking changes. Please test before upgrading the plugin on production Grafana instances.\n\n### Features / Enhancements\n\n- Selected the color for calendar entry queries (#67).\n- Added the filtering of undefined events (#69).\n- Updated the CI and release workflows (#72).\n- Added compatibility with Grafana 9.3.6 (#73).\n- Refactored the plugin options to use field pickers (#74).\n- Refactored the Day and Events drawers (#75).\n- Removed the padding for the panel area (#75).\n- Refactored the day view and updated styles (#76).\n- Migrated styles to version 2 (#79).\n- Applied the system Grafana settings to the week\'s start day (#80).\n- Added the skipping of undefined events in the Drawer component (#81).\n- Added the display of time (#82).\n- Updated styles and screenshots (#83).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-calendar-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "dynamictext-panel-3.0.0-20230219/",
    metadata: {
      permalink: "/blog/dynamictext-panel-3.0.0-20230219/",
      source: "@site/blog/2023-02-19-dynamictext-panel-3.0.0/index.mdx",
      title: "Dynamic Text Panel 3.0.0",
      description:
        "We're excited to announce the release of the Dynamic Text Panel 3.0.0. This major release includes the following updates:",
      date: "2023-02-19T00:00:00.000Z",
      formattedDate: "February 19, 2023",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "dynamictext-panel-3.0.0-20230219/",
        tags: ["Dynamic Text", "Release Notes"],
        image: "/img/blog/2023-02-19-dynamictext-panel-3.0.0/banner.png",
        keywords: [
          "Dynamic Text",
          "Panel",
          "Data",
          "Code",
          "Highlight",
          "Grafana",
        ],
        updated: "2023-09-15T00:00:00.000Z",
      },
      prevItem: {
        title: "Calendar Panel 1.2.0",
        permalink: "/blog/calendar-panel-1.2.0-20230223/",
      },
      nextItem: {
        title: "Grafana Development Templates 2.2.0",
        permalink: "/blog/development-templates-2.2.0-20230216/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe\'re excited to announce the release of the Dynamic Text Panel 3.0.0. This major release includes the following updates:\n\n- Added the style editor.\n- Added the code syntax highlighting.\n- Added an option to select optional editors for display, by default, they are hidden. Editors with modified values are always displayed.\n- Removed the panel padding. You can add the padding through the style editor.\n- Added compatibility with Grafana 9.3.6 and updated workflows.\n\n:::info Grafana Catalog\nThe plugin was updated in the Grafana Plugins catalog on February 21, 2023.\n:::\n\n## 2 Million downloads\n\nDynamic Text Panel was downloaded more than two million times.\n\n<Image\n  title="Two million plugin downloads in two years."\n  src="/img/blog/2023-02-19-dynamictext-panel-3.0.0/downloads.png"\n  lazy={false}\n/>\n\n## Community use case\n\nWe are consistently impressed by the innovative ways that the Grafana community uses the latest features of Dynamic Text Panel. One particularly fascinating use case is the creation of tabs using CSS styles, JavaScript code, and a combination of Handlebars and HTML. This functionality was previously only available with custom panels, but our plugin makes it possible to implement these tabs.\n\n<Image\n  title="JavaScript code with CSS styles and a mix of Handlebars with HTML to display navigation tabs."\n  src="/img/blog/2023-02-19-dynamictext-panel-3.0.0/example.png"\n/>\n\n## Magic (JavaScript) Trio\n\nOne of the three plugins that complete Grafana is Dynamic Text Panel. With Dynamic Text, Data Manipulation, and Apache ECharts Panel you can create fully functional web applications meeting your needs and expectations.\n\n<Video\n  src="https://www.youtube.com/embed/wPr4gZYzUVA"\n  title="Dynamic Text, Data Manipulation, and Apache ECharts Panel plugins."\n/>\n\n## Select Editor to display\n\nTo make the plugin\'s panel easier to use, we have hidden the default Content, JavaScript code, and styles editors by default. However, if you have modified the default content or are already using JavaScript code or CSS styles, the editors will be displayed even if they are not selected.\n\n<Image\n  title="Enable display of optional editors for default content and JavaScript code."\n  src="/img/blog/2023-02-19-dynamictext-panel-3.0.0/select.png"\n/>\n\nIn most cases, you won\'t need to modify the default content, JavaScript code, or CSS styles. We prefer the minimalist design of displaying only one content editor, and we hope you will too.\n\n## Styles editor\n\nUsing the dedicated code editor with CSS syntax highlighting, you can create new CSS styles or alter the default ones.\n\n<Image\n  title="Add custom styles for table cells and bold text."\n  src="/img/blog/2023-02-19-dynamictext-panel-3.0.0/styles.png"\n/>\n\n<details>\n  <summary>Default styles</summary>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-dynamictext-panel/blob/main/src/components/Text/Text.styles.ts"\n  language="js"\n/>\n\n</details>\n\n### Padding and margins\n\nTo display content without padding and margins, you need to override the parent CSS style.\n\n```css\n& {\n  padding: 0;\n  margin: 0;\n}\n```\n\n## Code Syntax Highlighting\n\nCode syntax highlighting is based on the `highlight.js` library, which supports key programming languages.\n\n<Image\n  title="Random Walk data displayed with the highlighting and without margins or paddings."\n  src="/img/blog/2023-02-19-dynamictext-panel-3.0.0/highlight.png"\n/>\n\n### Styling\n\nWe included the Accessibility (A11Y) syntax highlighting style for light and dark themes. You can override it in the styles editor by copying one of the styles from the [project source files](https://github.com/highlightjs/highlight.js/tree/main/src/styles).\n\n<details>\n  <summary>A11Y light theme</summary>\n\n<Code\n  url="https://github.com/highlightjs/highlight.js/blob/main/src/styles/a11y-light.css"\n  language="css"\n/>\n\n</details>\n\n<details>\n  <summary>A11Y dark theme</summary>\n\n<Code\n  url="https://github.com/highlightjs/highlight.js/blob/main/src/styles/a11y-dark.css"\n  language="css"\n/>\n\n</details>\n\n## Getting Started\n\nYou can install Dynamic Text Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-dynamictext-panel\n```\n\n## YouTube Tutorial\n\nDynamic Text Panel is a Grafana visualization plugin that converts plain text and table data into visually appealing, easy-to-read information cards. You can use variables, Markdown, and Handlebars to customize the look of the outputted cards.\n\nThe Dynamic Text Panel plugin allows you to construct a text visualization template from the values of a dataset returned by a data source query.\n\n<Video\n  src="https://www.youtube.com/embed/MpNZ4Yl-p0U"\n  title="Markdown, HTML and Handlebars to transform data visualizations."\n/>\n\n<Video\n  src="https://www.youtube.com/embed/lJqk5Gobec4"\n  title="JavaScript code in the Dynamic text panel."\n/>\n\n## Release Notes\n\n### Breaking changes\n\nThe default Content and JavaScript editors are not displayed unless values are modified. To display required editors, including the new Styles, they should be selected in the list.\n\n### Features / Enhancements\n\n- Updated the features section in the README file with a new tutorial about JavaScript code editor (#141).\n- Added compatibility with Grafana 9.3.6 (#147).\n- Update the CI and release workflows (#147).\n- Update the README file with a tutorial about using JavaScript (#148).\n- Added custom styles (#149).\n- Added an option to display optional editors (#149).\n- Removed the panel padding (#150).\n- Added the code syntax highlighting (#151).\n- Introduced the breaking changes that impact the display of optional editors (#152).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "development-templates-2.2.0-20230216/",
    metadata: {
      permalink: "/blog/development-templates-2.2.0-20230216/",
      source: "@site/blog/2023-02-16-development-templates-2.2.0/index.mdx",
      title: "Grafana Development Templates 2.2.0",
      description:
        "We are happy to announce the release of the Grafana Development Templates 2.2.0. This release includes the following updates:",
      date: "2023-02-16T00:00:00.000Z",
      formattedDate: "February 16, 2023",
      tags: [
        {
          label: "Development",
          permalink: "/blog/tags/development",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "development-templates-2.2.0-20230216/",
        tags: ["Development", "Release Notes"],
        image: "/img/blog/2023-02-16-development-templates-2.2.0/banner.png",
        keywords: [
          "Panel",
          "Data Source",
          "Application",
          "Grafana",
          "Development",
        ],
        updated: "2023-04-22T00:00:00.000Z",
      },
      prevItem: {
        title: "Dynamic Text Panel 3.0.0",
        permalink: "/blog/dynamictext-panel-3.0.0-20230219/",
      },
      nextItem: {
        title:
          "Romance of documentation and blog produced a story-telling analytics",
        permalink: "/blog/documentation-updates-20230214/",
      },
    },
    content:
      'import Image from "@theme/Image";\n\n\nWe are happy to announce the release of the Grafana Development Templates 2.2.0. This release includes the following updates:\n\n- Updated to the latest Grafana toolkit 9.3.6.\n- Updated CI and Release workflows.\n- Updated README, and configuration.\n- Added screenshots and updated plugin JSON file.\n\n<Image\n  title="The Abc panel uses Static Data Source to display value from the field."\n  src="/img/blog/2023-02-16-development-templates-2.2.0/dashboard.png"\n  lazy={false}\n/>\n\n## Grafana Plugin Tools\n\n:::info Improvements\nGrafana Team did some improvements in the tools and added deprecated messaging to the Grafana Toolkit.\n\nWe will migrate our plugins to Grafana tools for Grafana 10 release.\n:::\n\nGrafana recently released `@grafana/create-plugin@1.0.0`, which will eventually replace the plugin development parts of `@grafana/toolkit`. There is no timeline for when it happens.\n\nPlugin Tools are supposed to be\n\n- Easy to Use.\n- Focus on What Matters.\n- Provides Transparency.\n\nWe created a new plugin and migrated the existing one using Plugin Tools. I don\'t see any reason to migrate from the toolkit yet considering\n\n- Project is not well maintained with legacy issues still open.\n- Project has separate [documentation](https://grafana.github.io/plugin-tools/) from the Grafana docs.\n- Released version is based on an older version of libraries when the toolkit is built on 9.3.6.\n\nUntil we have a clear direction, we will continue using the toolkit in our templates.\n\n## GitHub Actions\n\nIn our Continuous Integration (CI) and Release GitHub Actions we used `Is Compatible` and custom `plugin-validator` steps, which were removed.\n\nBoth of them we consider as works in progress and use on-demand when required.\n\n- `Is Compatible` GitHub Action is outdated based on Node 12 and set-output commands, which will stop working soon. The open issue to migrate has not been fixed since October.\n- Plugin Validator requires setup of Golang environment and we have not seen any valuable feedback from it using our templates.\n\n## Getting Started\n\nWe created many Grafana panels, data sources and applications to this moment. To make the creation process efficient, starting with a well-constructed template is always easier.\n\n| Template                                                               | Description                                | Generate                                                                     |\n| ---------------------------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------- |\n| [Application](https://github.com/volkovlabs/volkovlabs-abc-app)        | Explains how to create Application plugin. | [Generate](https://github.com/VolkovLabs/volkovlabs-abc-app/generate)        |\n| [Data Source](https://github.com/volkovlabs/volkovlabs-abc-datasource) | Explains how to create Data Source plugin. | [Generate](https://github.com/VolkovLabs/volkovlabs-abc-datasource/generate) |\n| [Panel](https://github.com/volkovlabs/volkovlabs-abc-panel)            | Explains how to create Panel plugin.       | [Generate](https://github.com/VolkovLabs/volkovlabs-abc-panel/generate)      |\n\n## Feedback\n\nSubscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.',
  },
  {
    id: "documentation-updates-20230214/",
    metadata: {
      permalink: "/blog/documentation-updates-20230214/",
      source: "@site/blog/2023-02-14-documentation-updates/index.mdx",
      title:
        "Romance of documentation and blog produced a story-telling analytics",
      description:
        "When Volkov Labs initiated multiple online channels to share our Grafana experience, we could not even think our documentation and blog would be in such grand demand.",
      date: "2023-02-14T00:00:00.000Z",
      formattedDate: "February 14, 2023",
      tags: [
        {
          label: "Volkov Labs",
          permalink: "/blog/tags/volkov-labs",
        },
        {
          label: "Analytics",
          permalink: "/blog/tags/analytics",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["daria", "mikhail"],
        slug: "documentation-updates-20230214/",
        tags: ["Volkov Labs", "Analytics"],
        image: "/img/blog/2023-02-14-documentation-updates/banner.png",
        keywords: ["Documentation", "Grafana", "Analytics"],
        updated: "2023-03-02T00:00:00.000Z",
      },
      prevItem: {
        title: "Grafana Development Templates 2.2.0",
        permalink: "/blog/development-templates-2.2.0-20230216/",
      },
      nextItem: {
        title: "Website Analytics based on Nginx, Loki, Promtail, and Grafana",
        permalink: "/blog/nginx-loki-grafana-20230129/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWhen Volkov Labs initiated multiple online channels to share our Grafana experience, we could not even think our documentation and blog would be in such grand demand.\n\nI personally never liked what documentation is in its classic flavor. And I am not alone. No one from the problem-solving gang wants to "Learn Grafana". People who get things done need specific answers to particular questions.\n\nThat\'s why in December, we realized it was time to shake up the standard approach to documentation. Little did we know two months later, when we got visitors from 100+ countries.\n\n<Image\n  title="Users\' feedback has immense potential when collected and analyzed right."\n  src="/img/blog/2023-02-14-documentation-updates/analytics.png"\n  lazy={false}\n/>\n\nAll that time for face-lifting and organizing various READMEs, existing doc files, issues, examples and blog posts paid off with worthwhile dividends. Now we have structured educational materials with meticulously tuned web analytics on top.\n\n<Video\n  src="https://www.youtube.com/embed/0EyFmMlIXPo"\n  title="How to tell the story with Grafana dashboard. Apache ECharts, Bar Chart, Logs, and Heatmap."\n/>\n\nWe can move toward new projects while still having a firm grasp on the current web resources state, simultaneously getting little hints on what to work on next.\n\n## Blog\n\nA year ago, we started with the idea that having a technical blog describing personal experience and development thought processes could be a viable way of telling the world who we are.\n\nAt the time, Volkov Labs did not have its platform and, indeed, outsourcing was invented by good Gods.\n\nWe chose Medium, an excellent platform for mostly technological blogging. It served us well until we studied Google Analytics and Search tools to realize that Medium competes with our flimsy (back then) documentation instead of helping.\n\nMoreover, the obligation to follow the stylistic requirements prevents us from having one recognizable visual appearance.\n\n<Image\n  title="Our fully remodeled blog, collecting helpful use cases, tutorials, new release notes, big announcements and more."\n  src="/img/blog/2023-02-14-documentation-updates/blog.png"\n/>\n\nMedium is a great platform. We have been and will be using it as readers to educate ourselves and stay tuned to the ever-changing technological world. However, business wit whispers to post all our materials in one place, where we have complete control over all aspects from style to analytics.\n\n## Documentation\n\nDocumentation and blog are two sides of one platform, ideally complementing each other.\n\n<Image\n  title="We collected answers to questions from the community in one place."\n  src="/img/blog/2023-02-14-documentation-updates/docs.png"\n/>\n\nDocumentation is a quick WHAT and HOWTO, while blog posts range from entry-level step-by-step tutorials to groundbreaking use cases, from release notes to big announcements and other projects we are working on.\n\nBoth our blog and documentation are living things. We improve them daily following requests and questions from the community.\n\n## Analytics Dashboard\n\nThe [analytics dashboard](/blog/nginx-loki-grafana-20230129/) is on our main office display. A quick glance tells us many things.\n\n- How many users are reading us right now.\n- What countries they are from.\n- If there are any delays in our responses (are we still online and responsive).\n- If anyone is trying to break in.\n- What is the topic that people are interested in the most?\n\n<Image\n  title="We collected answers to questions from the community in one place."\n  src="/img/blog/2023-02-14-documentation-updates/tv.jpg"\n/>\n\n<details>\n  <summary>Grafana dashboard source code</summary>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-02-14-documentation-updates/analytics.json"\n  language="json"\n/>\n\n</details>\n\n## Search\n\nSearch should not be painful and sometimes we got lost ourselves. We implemented Algolia Search for our Blog and Documentation and couldn\'t be happier with the outcome.\n\n<Image\n  title="Searching for PostgreSQL across documentation and blog posts."\n  src="/img/blog/2023-02-14-documentation-updates/search.png"\n/>\n\nDuring installation, the Algolia Crawler helped us to fix multiple internal issues and was easy to configure with an intuitive UI.\n\nAlgolia Search provides us with valuable information on what visitors are looking for and having a hard time finding.\n\n## Tutorial\n\nWe explained how to set up Nginx, Loki, Promtail and Grafana in the article [Website Analytics based on Nginx, Loki, Promtail, and Grafana](/blog/nginx-loki-grafana-20230129/). It\'s up to date with our latest findings.\n\nIn the following video, I will walk you through the visual panel configuration. Please be aware demonstrated dashboard is a little different from the one we use in our production.\n\n<Video\n  src="https://www.youtube.com/embed/cgu3wMOo03w"\n  title="Tutorial on how to create a website analytics dashboard in Grafana."\n/>\n\n## Summary\n\nDocumentation is a skeleton, blog posts are the meat. The documentation is an outline, and blog posts are coloring. They complement each other.\n\nWhen one gives direction, the other explains why. We believe that both are equally important. That is why we improve them daily.\n\nThe analytical dashboard is our web heart rate monitor that helps us to maneuver in the sea of questions and requests.',
  },
  {
    id: "nginx-loki-grafana-20230129/",
    metadata: {
      permalink: "/blog/nginx-loki-grafana-20230129/",
      source: "@site/blog/2023-01-29-nginx-loki-grafana/index.mdx",
      title: "Website Analytics based on Nginx, Loki, Promtail, and Grafana",
      description:
        "In this weekend's project, we found a way to collect and visualize the content metrics for our website. Who, What, and from Where requested our resources, like our blog and documentation. To achieve this goal, we assembled Nginx, Loki, and Promtail into a pipeline to work together, showing all required metrics on a Grafana dashboard.",
      date: "2023-01-29T00:00:00.000Z",
      formattedDate: "January 29, 2023",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "nginx-loki-grafana-20230129/",
        tags: ["Grafana Crash Course"],
        image: "/img/blog/2023-01-29-nginx-loki-grafana/banner.png",
        keywords: ["NGINX", "Loki", "Grafana", "Analytics"],
        updated: "2023-04-14T00:00:00.000Z",
      },
      prevItem: {
        title:
          "Romance of documentation and blog produced a story-telling analytics",
        permalink: "/blog/documentation-updates-20230214/",
      },
      nextItem: {
        title:
          "PostgreSQL with Timescale is the ultimate storage partner for Grafana",
        permalink: "/blog/grafana-postgresql-20230123/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nIn this weekend\'s project, we found a way to collect and visualize the content metrics for our website. Who, What, and from Where requested our resources, like our blog and documentation. To achieve this goal, we assembled Nginx, Loki, and Promtail into a pipeline to work together, showing all required metrics on a Grafana dashboard.\n\n<Image\n  title="Website Analytics based on NGINX, Loki and Grafana."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/dashboard.png"\n  lazy={false}\n/>\n\nIf you google how to collect Nginx logs using Promtail and Loki, you most likely will find various dashboards, outdated GitHub repositories, and other fragments of information. None of them represent a solution as a whole, covering all steps from collecting to visualizing.\n\n## Google Analytics\n\nInitially, we used Google Analytics to track activities on our website. Whenever I opened it, I wanted to close it. Why? The interface is too cluttered with campaigns, revenue, retention, and channels. I am forced to dig through a pile of distracting information to find a single useful tidbit. Yet, even after spending time configuring existing custom dashboards and reports, one vital piece was still missing: user activities.\n\nThe one that set me on this endeavor of creating story-telling analytics, to begin with. User activities are often blocked on firewalls, security, and VPN devices. All that made me look elsewhere, surfacing a simple idea of collecting user activities directly from the web server. That approach will help to keep the essential data.\n\n## Log flow\n\nBelow is the schema of the system we came up with. It illustrates what pieces come together in our puzzle and the data flow.\n\nLet\'s examine each component\'s functions and take a closer look at each one.\n\n- Nginx serves the website and produces log files.\n- Promtail collects, and processes log files from Nginx and pushes them to Loki.\n- Loki aggregates log files.\n- Grafana displays content metrics along with some technical details. The data comes from Loki via the Loki data source.\n\n<Image\n  title="System architecture where tailored metrics lead to decision making."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/flow.png"\n/>\n\n## Nginx\n\nNginx is a web server that can be a reverse proxy, load balancer, and cache. We use it in front of all our projects. For optimal performance, we chose to install it on the host.\n\nNginx configuration allows you to choose the data elements you want to store. You can keep everything and gift yourself a pass to think later about what you will do with all that data. On the downside of this, the volume of data snowballs. Are you willing to take on the extra task of keeping everything up and running?\n\nFrom the beginning of this project, I had a clear vision of what data elements are required. Therefore, our minimalist set of cherry-picked variables are:\n\n| Variable             | Description                                              |\n| -------------------- | -------------------------------------------------------- |\n| `time_local`         | Local time.                                              |\n| `remote_addr`        | Client IP.                                               |\n| `request_uri`        | Full path and arguments for the request.                 |\n| `status`             | Response status code.                                    |\n| `http_referer`       | HTTP referer.                                            |\n| `http_user_agent`    | HTTP clients - user agents.                              |\n| `server_name`        | The name of the server handling the request.             |\n| `request_time`       | Request processing time in seconds with msec resolution. |\n| `geoip_country_code` | Geo location based on client IP.                         |\n\nWe also added additional configuration to the main configuration file `nginx.conf` to get as clean input data as possible and avoid further processing in Promtail and Grafana.\n\n- Replace empty values in `http_referer` with `(direct)` similar to Google Analytics.\n- Replace empty values in `http_user_agent` with `Unknown`.\n- Replace empty values in `geoip_country_code` with `Unknown`.\n- Use preinstalled Geo IP database `/usr/share/GeoIP/GeoIP.dat`.\n- Add `json_analytics` logging JSON format with provided variables, which we will use for server blocks.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-01-29-nginx-loki-grafana/nginx.conf"\n  language="nginx"\n/>\n\nA produced JSON record from the log file looks like this.\n\n```json title=analytics.log\n{\n  "time_local": "29/Jan/2023:02:57:08 +0000",\n  "remote_addr": "111.222.334.444",\n  "request_uri": "/plugins/volkovlabs-form-panel/request/",\n  "status": "200",\n  "http_referer": "(direct)",\n  "http_user_agent": "Mozilla/5.0",\n  "server_name": "volkovlabs.io",\n  "request_time": "0.000",\n  "geoip_country_code": "CZ"\n}\n```\n\n### Geo IP database\n\nA Geo IP database is a database of IP addresses with their locations tagged, which we use in Nginx to perform geolocation using an IP address.\n\nPreinstalled Geo IP database on our Linux server is outdated, but works great for this project and does not require additional configuration. To be able to do geolocation, Nginx should have the module [`ngx_http_geoip_module`](http://nginx.org/en/docs/http/ngx_http_geoip_module.html) enabled.\n\n```sh\n/usr/share/GeoIP# ls -lrt\ntotal 7912\n-rw-r--r-- 1 root root 6426573 Nov  8  2018 GeoIPv6.dat\n-rw-r--r-- 1 root root 1672893 Nov  8  2018 GeoIP.dat\n```\n\nModern [GeoIP2 database](https://www.maxmind.com/en/geoip2-databases) can be used instead of outdated Geo IP. It requires:\n\n- Set up an account.\n- Additional configuration for daily updates.\n- Compile Nginx with an additional module supporting GeoIP2.\n\nYou can easily find instructions on how to do it and go this route if required.\n\n### Server configuration\n\nServer blocks in Nginx can be used to encapsulate configuration details and host more than one domain on a single server. In the configuration file for the website we added additional logging in the file `analytics.log` using discussed JSON format.\n\n```nginx\nserver {\n  access_log /var/log/nginx/analytics.log json_analytics;\n}\n```\n\n## Loki\n\nLoki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus. It does not index the contents of the logs, but rather a set of labels for each log stream.\n\nIn our environment we are running Loki in a Docker container orchestrated using `docker-compose`.\n\n- The data folder `/loki` stored in the volume folder on a local drive.\n- Configuration file `/etc/loki/local-config.yaml` stored in the `loki` folder next to the data.\n- Uses the latest stable version `2.8.0`.\n\n```docker title=docker-compose.yml\n  loki:\n    container_name: loki\n    image: grafana/loki:2.8.0\n    restart: always\n    network_mode: host\n    volumes:\n      - ./loki/data:/loki\n      - ./loki/loki.yml:/etc/loki/local-config.yaml\n```\n\nLoki, Promtail, and Grafana containers are distributed on separate hosts, and we run them in the network host mode.\n\n### Configuration\n\nThe configuration file is based on the default file shipped with the `2.7.1` release. We updated the configuration to increase the number of maximum outstanding requests to accommodate the Grafana dashboard.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-01-29-nginx-loki-grafana/loki.yml"\n  language="yaml"\n/>\n\nYou can learn more about Loki configuration in the [Documentation](https://grafana.com/docs/loki/latest/configuration/).\n\n## Promtail\n\nPromtail is an agent which ships the contents of local logs to a private Grafana Loki instance. It is usually deployed to every machine that has applications needed to be monitored.\n\nSimilar to Loki we are running Promtail in a Docker container orchestrated with `docker-compose`.\n\n- Configuration file `/etc/promtail/config.yml` stored in the `loki` folder.\n- The Nginx log folder `/var/log/nginx` was added to the container.\n- Uses the latest stable version `2.8.0`.\n\n```docker title=docker-compose.yml\n  promtail:\n    image: grafana/promtail:2.8.0\n    restart: always\n    container_name: promtail\n    network_mode: host\n    volumes:\n      - ./loki/promtail.yml:/etc/promtail/config.yml\n      - /var/log/nginx:/var/log/nginx\n```\n\n### Configuration\n\nThe configuration file is based on the default file shipped with the `2.7.1` release. We updated the configuration for Nginx analytics log files to add labels `job`, `host`, and `agent` and watch for `analytics.log` files.\n\nPromtail push logs to the Loki specified in the configuration file `http://LOKI-IP:3100/loki/api/v1/push`, which is located on a separate host in our configuration.\n\nWe added Pipeline stages to drop records we are not interested in.\n\n- Requests from Googlebot, inspectors, test, network devices and RSS collectors.\n- Requests for images and assets (Javascript, CSS) in the special folders.\n- Requests for particular files for browsers and indexing engines.\n- Malicious request from scanners to find PHP and XML files.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-01-29-nginx-loki-grafana/promtail.yml"\n  language="yaml"\n/>\n\nThe [Pipelines](https://grafana.com/docs/loki/latest/clients/promtail/pipelines/) can be changed and updated based on your requirements.\n\n## Grafana\n\nWe love Grafana and use it for all our projects. We covered the installation process in the video.\n\n<Video\n  src="https://www.youtube.com/embed/xTQpV7B700w"\n  title="How to Install Grafana for Data Analysts and Data Scientists."\n/>\n\n### Loki data source\n\nA Loki data source is preinstalled in Grafana. We used the URL `http://localhost:3100` to connect to the private Loki instance without authorization.\n\n<Image\n  title="Loki data source configuration in Grafana."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/loki.png"\n/>\n\n## Analytics Dashboard\n\nWebsite Analytics dashboard was inspired by [Grafana Loki Dashboard for NGINX Service Mesh](https://grafana.com/grafana/dashboards/12559-grafana-loki-dashboard-for-nginx-service-mesh/?pg=dashboards&plcmt=featured-main), one of the most interesting and updated dashboards we can find for Nginx.\n\nEach panel and query was updated according to our styling guidelines and requirements. In this video, Daria will guide you through the process of creating the dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/cgu3wMOo03w"\n  title="Tutorial on how to create a website analytics dashboard in Grafana."\n/>\n\n### Content metrics\n\nThe first part of the dashboard provides content metrics - Who, What and from Where requested resources.\n\n- Geomap displays a number of requests for each Geo location, except unrecognized countries replaced with `Unknown`.\n- Requests panel displays the total number of requests in the selected Time Range.\n- Visitors per Hour displays a number of unique remote IP addresses per hour.\n- A list of countries as a sorted table with values mapping. The list of countries can be updated if required.\n- Referers display the location from where requested resources are being used.\n- Successfully Requested Pages displays the most frequently requested resources.\n\n<Image\n  title="Content metrics for the website requests."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/content.png"\n/>\n\n### Technical metrics\n\nThe second part of the dashboard contains technical information.\n\n- Processing Time (95th Percentile and Max latency) to diagnose any technical issues with delivering content.\n- Status of the HTTP requests in 5 minutes blocks displayed as bars.\n- The most frequently used User Agents with information about browsers and platforms.\n- Logs to display raw logging information and verify that we are collecting only required fields and records.\n\n<Image\n  title="Technical metrics for the website requests."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/technical.png"\n/>\n\n### Heatmap\n\nThe third part of the dashboard contains heatmaps, which help to understand when and from where resources were requested in the selected Time Range.\n\n- Country displays requests per country.\n- Requested pages display requests per resource.\n\n<Image\n  title="Heatmap of the website requests."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/heatmap.png"\n/>\n\n### Import\n\nTo import the created dashboard, find the `Import` menu. The location might differ depending on your installed Grafana version, but that menu should always be somewhere.\n\n<Image\n  title="Import dashboard file into Grafana."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/import-menu.png"\n/>\n\nFor the dashboard to function correctly, you must have the Loki data source installed and configured.\n\n<details>\n  <summary>Grafana dashboard source code</summary>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-01-29-nginx-loki-grafana/dashboard.json"\n  language="json"\n/>\n\n</details>\n\n## Apache ECharts\n\nWe started with the default GeoMap panel to display requests per country. It worked as expected, plotting markers on the map with city-level precision. I prefer the country look from Google Analytics.\n\n<Image\n  title="Apache ECharts panel displays requests per country."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/echarts.png"\n/>\n\nCountry Heatmap is not supported in the GeoMap, and we used the [Apache ECharts panel](/plugins/volkovlabs-echarts-panel) instead. In the following video, we demonstrated how we did it.\n\n<Video\n  src="https://www.youtube.com/embed/0EyFmMlIXPo"\n  title="How to tell the story with Grafana dashboard. Apache ECharts, Bar Chart, Logs, and Heatmap."\n/>\n\n## Summary\n\nThe proposed solution beat our expectations, and we are looking forward to updating the Grafana dashboard based on the collected data in the upcoming weeks.\n\nEliminating unnecessary data allows us to laser focus on the metrics we are looking for. The created dashboard is clean without unnecessary clutter — an excellent example of pure elegance.',
  },
  {
    id: "grafana-postgresql-20230123/",
    metadata: {
      permalink: "/blog/grafana-postgresql-20230123/",
      source: "@site/blog/2023-01-23-postgres-in-grafana/index.mdx",
      title:
        "PostgreSQL with Timescale is the ultimate storage partner for Grafana",
      description:
        "You landed at the right article if you wonder what database to choose for your commercial Grafana-based web application. I will share my thoughts on when it should be PostgreSQL, and you can decide if your use case is any close.",
      date: "2023-01-23T00:00:00.000Z",
      formattedDate: "January 23, 2023",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "grafana-postgresql-20230123/",
        tags: ["Grafana Crash Course"],
        image: "/img/blog/2023-01-23-postgres-in-grafana/banner.png",
        keywords: ["PostgreSQL", "Timescale", "Configuration", "Storage"],
        updated: "2023-03-19T00:00:00.000Z",
      },
      prevItem: {
        title: "Website Analytics based on Nginx, Loki, Promtail, and Grafana",
        permalink: "/blog/nginx-loki-grafana-20230129/",
      },
      nextItem: {
        title: "From default Grafana setup to the real deal",
        permalink: "/blog/grafana-setup-20230122/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nYou landed at the right article if you wonder what database to choose for your commercial Grafana-based web application. I will share my thoughts on when it should be PostgreSQL, and you can decide if your use case is any close.\n\nThis article is written to supplement the YouTube video we recently published on our channel. I will add source code to all my examples below.\n\n<Video\n  src="https://www.youtube.com/embed/SbjIWnrMIgk"\n  title="Ultimate storage partner for Grafana."\n/>\n\n## Grafana configuration\n\nGrafana stores its configuration (connected data sources, employed visualizations, variables, etc.) in the configuration storage. You end up with an SQLite database after downloading and installing the default Grafana package.\n\nThe [default setup is excellent for discovering Grafana](/blog/grafana-setup-20230122), but for the Next level (when you design the actual application) you would need to switch to either PostgreSQL or MySQL. PostgreSQL is an excellent choice for capturing Grafana configuration.\n\n<Image\n  title="Grafana management basics: Configuration, Provisioning and Data storage."\n  src="/img/blog/2023-01-23-postgres-in-grafana/basics.png"\n  lazy={false}\n/>\n\nBoth databases are open-source, and both are supported by Grafana. The benefits are.\n\n- Configuration in a separate container (or host) makes your application design flexible and manageable, with a more straightforward backup/restoration process.\n- The separated configuration storage does not get lost when the Grafana UI container is acting up.\n- You also can use it for as many UI instances as needed when switching to the High-Availability setup.\n\n## PostgreSQL\n\nIn the video above, I demonstrated how to redirect Grafana UI to a PostgreSQL database. Below I leave the same instructions.\n\nMake sure you have a dedicated PostgreSQL database created. You can surely use the one that is already part of your application ecosystem. Creating a brand new PostgreSQL database is preferable to keep things clean and organized.\n\nStart the PostgreSQL container with TimescaleDB.\n\n```sh\ndocker run -d --name timescaledb -p 5432:5432 \\\n  -e POSTGRES_PASSWORD=password \\\n  timescale/timescaledb:latest-pg14\n```\n\nStart the `psql` to connect to the database.\n\n```sh\ndocker exec -it timescaledb psql -h localhost -p 5432 -U postgres -w\n```\n\n### Create database\n\nCreate a new database to store Grafana UI configuration.\n\n```sql\ncreate database grafana_configuration_database;\n```\n\nVerify the database is created. It should appear in the output listing.\n\n```sql\n\\l\n\n                                        List of databases\n              Name              |  Owner   | Encoding | Collate |  Ctype  |   Access privileges\n--------------------------------+----------+----------+---------+---------+-----------------------\n grafana_configuration_database | postgres | UTF8     | C.UTF-8 | C.UTF-8 |\n postgres                       | postgres | UTF8     | C.UTF-8 | C.UTF-8 |\n template0                      | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +\n                                |          |          |         |         | postgres=CTc/postgres\n template1                      | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +\n                                |          |          |         |         | postgres=CTc/postgres\n(4 rows)\n```\n\nMake the new database current.\n\n```sql\n\\c grafana_configuration_database\n\nYou are now connected to database "grafana_configuration_database" as user "postgres".\n```\n\nReview the list of existing relations. It should be none.\n\n```sql\n\\d\n\nDid not find any relations.\n```\n\n### Start Grafana\n\nNext, run your Grafana UI container and point it to the PostgreSQL database.\n\n```sh\ndocker run --network=host -e GF_DATABASE_TYPE=postgres \\\n -e GF_DATABASE_HOST=localhost:5432 \\\n -e GF_DATABASE_NAME=grafana_configuration_database \\\n -e GF_DATABASE_USER=postgres \\\n -e GF_DATABASE_PASSWORD=password grafana/grafana:latest\n```\n\nYou need to reassign five environment variables. Ensure to prefix each with `-e`. Do not forget all environment variables\' names should be in upper case.\n\nNow, if you switch back to the `psql` and run the command to list all relations, you should see ~114 objects (in Grafana v9.3.X).\n\n```sql\n\\d\n\n                       List of relations\n Schema |              Name               |   Type   |  Owner\n--------+---------------------------------+----------+----------\n public | alert                           | table    | postgres\n public | alert_configuration             | table    | postgres\n public | alert_configuration_id_seq      | sequence | postgres\n public | alert_id_seq                    | sequence | postgres\n public | alert_instance                  | table    | postgres\n public | alert_notification              | table    | postgres\n ....\n```\n\nThat\'s it. Your Grafana UI will now work with the PostgreSQL database. Go ahead, make some changes in Grafana and find them in the database.\n\n## TimescaleDB is a PostgreSQL extension\n\nThe second reason to love PostgreSQL is its particular extension for time-series data Timescale. The huge Timescale advantage is its SQL support. You are free to mix two data formats, relational and time-series, in the same instance and query both via familiar and dearly loved SQL.\n\nAll time-series-specific functions are designed in a way to fit into SQL clauses. Combining two very needed formats is simply genius and, honestly, satisfying.\n\n### Aggregation\n\nIn the video above, I briefly explain one possible data aggregation. My original table has 5-minute stock ticks. The data comes from the [twelvedata](https://twelvedata.com) website via API calls.\n\nTimescale does aggregations by creating Materialized views. You need to specify which field from your original table is `time` and convert it into `bucket`. The materialized view will be updated on any original table data changes without slowing down anything.\n\nIn my example, I chose to aggregate 5-minute ticks into 1-hour ticks.\n\n```sql\nCREATE MATERIALIZED VIEW one_hour_candle\nWITH (timescaledb.continuous) AS\n    SELECT\n        time_bucket(\'1 hour\', datetime) AS bucket,\n        stock_symbol,\n        FIRST(open, datetime) AS "open",\n        MAX(high) AS high,\n        MIN(low) AS low,\n        LAST(close, datetime) AS "close",\n        LAST(volume, datetime) AS volume\n    FROM stocks\n    GROUP BY bucket, stock_symbol;\n```\n\n### Hypertable\n\nThe table `stocks` to capture stock data is a hyper table. I created it as a regular and converted it into a hyper table. The first parameter is a table name to convert, and the second is a column name with a timestamp.\n\n```sql\ncreate table stocks (\n  datetime timestamptz,\n  open real,\n  high real,\n  low real,\n  close real,\n  volume integer,\n  stock_symbol text\n);\n\nSELECT create_hypertable(\'stocks\', \'datetime\');\n```\n\n## Relational data\n\nAnd the third reason we love PostgreSQL is that it is the world\'s most advanced open-source relational database.\n\nThis fact, along with time-series ability and using PostgreSQL for configuration storage, makes it an ultimate choice for Grafana. Working with one database for all your needs is more accessible than with many different kinds.\n\nLoad stock data from a file into the `stocks` table.\n\n```sql\nCOPY stocks FROM \'/tmp/time_series-TSLA-5min.csv\' (DELIMITER(\';\'), HEADER TRUE, FORMAT CSV);\nupdate tesla_stocks set stock_symbol = \'TSLA\';\n```\n\nCreate a table to capture descriptive information along with logo images.\n\n```sql\ncreate table stock_image (\n  stock_symbol text,\n  stock_name text,\n  scaleX real,\n  scaleY real,\n  image_svgxml text\n);\n```\n\nPopulate the `stock_image` table.\n\n:::info Replace\nNote, I replaced the symbol `#` with `%23` in the `fill` attribute.\n\n`fill="#f90"` change to `fill="%23f90"`\n:::\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-01-23-postgres-in-grafana/image.sql"\n  language="sql"\n/>\n\n## Grafana dashboard\n\nTo import the dashboard, find the Import menu. The location might differ depending on your installed Grafana version, but that menu should always be somewhere.\n\n<Image\n  title="Import dashboard file into Grafana."\n  src="/img/blog/2023-01-23-postgres-in-grafana/import-menu.png"\n/>\n\nFor the code to function correctly, you will need to have the PostgreSQL data source setup and have the same tables and materialized view in your database.\n\n<details>\n  <summary>Grafana dashboard source code from the video</summary>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-01-23-postgres-in-grafana/dashboard.json"\n  language="json"\n/>\n\n</details>\n\nFeel free to ask questions and let me know if I forgot any steps. I will gladly alter the instructions accordingly.\n\n## Summary\n\nPostgreSQL combines the three most required storage needs:\n\n- Configuration,\n- Time-series,\n- Relational.\n\nThose are the three primary storage needs for our commercial applications. PostgreSQL was an easy and obvious choice.',
  },
  {
    id: "grafana-setup-20230122/",
    metadata: {
      permalink: "/blog/grafana-setup-20230122/",
      source: "@site/blog/2023-01-22-grafana-setup/index.mdx",
      title: "From default Grafana setup to the real deal",
      description:
        "I did not find much-organized information about Grafana configuration from the management point of view. There is this famous default setup, but it is not clear what its limits are. Also, for those who would want to take the next step to an actual application, what direction should it be, or in other words, what should be modified in the default Grafana installation package to convert it into the real deal?",
      date: "2023-01-22T00:00:00.000Z",
      formattedDate: "January 22, 2023",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "grafana-setup-20230122/",
        tags: ["Grafana Crash Course"],
        image: "/img/blog/2023-01-22-grafana-setup/banner.png",
        keywords: ["PostgreSQL", "Setup", "Grafana", "High-Availability"],
        updated: "2023-02-13T00:00:00.000Z",
      },
      prevItem: {
        title:
          "PostgreSQL with Timescale is the ultimate storage partner for Grafana",
        permalink: "/blog/grafana-postgresql-20230123/",
      },
      nextItem: {
        title: "Apache ECharts Panel 4.1.0",
        permalink: "/blog/echarts-panel-4.1.0-20230113/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nI did not find much-organized information about Grafana configuration from the management point of view. There is this famous default setup, but it is not clear what its limits are. Also, for those who would want to take the next step to an actual application, what direction should it be, or in other words, what should be modified in the default Grafana installation package to convert it into the real deal?\n\nThis article consists of the notes I took during my research. I share them to save the reader\'s time and effort.\n\nIn any setup, Grafana can be installed directly on the host or in a Docker container. That\'s why every rectangle representing Grafana has the docker slash host symbol on the diagram below.\n\n<Image\n  title="The Default, Next level and High Availability setups side-by-side."\n  src="/img/blog/2023-01-22-grafana-setup/setup.png"\n  lazy={false}\n/>\n\nLet\'s review every level and who can benefit from each.\n\n## Default setup\n\nYou get the default setup when you download Grafana and follow the simple installation steps.\n\n<Image\n  title="In the default setup, Grafana is bundled with the SQLite database."\n  src="/img/blog/2023-01-22-grafana-setup/default.png"\n  height="400px"\n/>\n\nGrafana configuration is a set of parameters describing\n\n- Dashboards.\n- Data sources.\n- Installed plugins.\n- Variables.\n- Users and permissions, etc.\n\nGrafana configuration is stored in a database. In the default setup, Grafana is bundled with the SQLite database.\n\n### Provisioning\n\n[Provisioning](https://grafana.com/docs/grafana/latest/administration/provisioning/) is a mechanism to push dashboards and data source configuration using JSON files into Grafana UI. This mechanism is a simplified way to create applications with embedded/preset data sources, plugins, and dashboards.\n\nUsers cannot introduce changes to the provisioned dashboard and data sources unless it\'s allowed in the configuration.\n\n### SQLite database\n\nSQLite is designed explicitly for small applications and is widely employed in myriads of applications across the globe. The database is meant to be coupled with an application, ensuring high reliability and efficiency.\n\nThe database is so tiny and fast that some people do not even realize it exists side by side with their favorite applications on the phone or computer. The code of SQLite is open for anyone to use for any purpose.\n\nThe default setup suits beginners well since it eliminates the maintenance needs allowing them to start exploring Grafana instantly, literally minutes after they learned about Grafana\'s existence.\n\n### Skills level\n\nThe skill level required for this setup is relatively minimal. An inquisitive beginner-to-intermediate developer or analyst can tackle the task with ease.\n\n## Next Level\n\nThe next level setup is the lowest level you must be on for any commercial and industrial applications.\n\n<Image\n  title="In the Next level setup, Grafana UI connects to the external PostgreSQL or MySQL database."\n  src="/img/blog/2023-01-22-grafana-setup/next-level.png"\n  height="600px"\n/>\n\nOn that setup, the Grafana UI and the configuration storage (which is NOT the same as application data storage) are separated and dwell in two segregated containers and/or hosts. When Grafana users make any changes (for instance, adding data sources and visualizations), these changes go into a separate entity, namely, configuration storage.\n\nYou can choose between databases\n\n- PostgreSQL.\n- MySQL.\n\nWe discussed how to update Grafana environment variables to use the PostgreSQL database in our recent video.\n\n<Video\n  src="https://www.youtube.com/embed/SbjIWnrMIgk"\n  title="PostgreSQL with Timescale is the ultimate storage partner for Grafana."\n/>\n\nThis architecture allows solving any challenging problems as long as developers are willing to think out of the box and do not tend to stay on the paved trail.\n\n### Skill level\n\nYour best bet is someone who knows Grafana deeply and is capable of following changes from one version to another.\n\n## High Availability\n\nLogically, this architecture should have at least two separate Grafana UI.\n\n<Image\n  title="High Availability setup to support the heavy 24/7 load with many users."\n  src="/img/blog/2023-01-22-grafana-setup/high-availability.png"\n  height="600px"\n/>\n\nIt is everything that the next level is, plus a load balancer. A load balancer will redirect the traffic between multiple Grafana UI depending on the load or other parameters.\n\nThe [High-Availability configuration](https://grafana.com/docs/grafana/latest/setup-grafana/set-up-for-high-availability/)\n\n- Allows connecting many Grafana UI to the same configuration storage. Therefore, to have a matching experience across all of Grafana UI.\n- Requires maintaining only one configuration database instance, regardless of the Grafana UI number.\n\n### Skill level\n\nIt would be best to have a whole team of tech pros to support the web application with high upstream/downstream traffic and unstoppable 24/7 user requests.\n\nAny feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!',
  },
  {
    id: "echarts-panel-4.1.0-20230113/",
    metadata: {
      permalink: "/blog/echarts-panel-4.1.0-20230113/",
      source: "@site/blog/2023-01-13-echarts-panel-4.1.0/index.mdx",
      title: "Apache ECharts Panel 4.1.0",
      description:
        "We are happy to announce the release of the Apache ECharts Panel 4.1.0 for Grafana. This release includes the following updates:",
      date: "2023-01-13T00:00:00.000Z",
      formattedDate: "January 13, 2023",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "echarts-panel-4.1.0-20230113/",
        tags: ["Apache ECharts", "Release Notes"],
        image: "/img/blog/2023-01-13-echarts-panel-4.1.0/banner.png",
        keywords: [
          "Apache ECharts",
          "Panel",
          "Chart",
          "Visualization",
          "Grafana",
        ],
        updated: "2023-09-06T00:00:00.000Z",
      },
      prevItem: {
        title: "From default Grafana setup to the real deal",
        permalink: "/blog/grafana-setup-20230122/",
      },
      nextItem: {
        title: "Observability without Data Manipulation is a lost opportunity",
        permalink: "/blog/data-manipulation-grafana-20230112/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Apache ECharts Panel 4.1.0 for Grafana. This release includes the following updates:\n\n- Added support for streaming for WebSockets and Grafana Live.\n- Added the Data Zoom feature updating a time range similar to the TimeSeries panel.\n- Updated the product documentation answering community questions.\n\n## Streaming\n\nStreaming enables real-time data updates using streaming data sources and Grafana Live. You can find examples and configurations in [our documentation](/plugins/volkovlabs-echarts-panel/streaming).\n\n### Grafana Live\n\nGrafana Live is a real-time messaging engine introduced in Grafana v8.0. With Grafana Live, you can push event data to a frontend as soon as an event occurs.\n\n<Image\n  title="Apache ECharts allows displaying messages from Grafana Live real-time engine."\n  src="/img/blog/2023-01-13-echarts-panel-4.1.0/live.png"\n  lazy={false}\n/>\n\n### WebSocket API\n\nTo stream real-time data, we used the [WebSocket data source for Grafana](https://grafana.com/grafana/plugins/golioth-websocket-datasource/).\n\n<Image\n  title="Streaming real-time events from the WebSocket data source."\n  src="/img/blog/2023-01-13-echarts-panel-4.1.0/websocket.png"\n/>\n\n## Data Zoom feature\n\nThe Data Zoom feature allows you to select a time period on the chart for zooming in. Once the time range is selected, the event can update the time range on the dashboard using the `locationService` parameter, similar to native Grafana behavior.\n\n<Image\n  title="In the Random Walk example, the Data Zoom feature allows you to zoom in a temporal time range within the defined range."\n  src="/img/blog/2023-01-13-echarts-panel-4.1.0/data-zoom.png"\n/>\n\nYou can find the code snippet in the [Event Handling](/plugins/volkovlabs-echarts-panel/events) section.\n\n## Getting Started\n\nYou can install Apache ECharts Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-echarts-panel\n```\n\n## YouTube Tutorial\n\nThe Apache ECharts Panel plugin is a data visualization extension for Grafana that allows you to integrate charts and graphs from the popular Apache ECharts library into your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\nOne of the three plugins that completes Grafana is Apache ECharts Panel. With Dynamic Text, Data Manipulation, and Apache ECharts Panel you can create fully functional web applications meeting your needs and expectations.\n\n<Video\n  src="https://www.youtube.com/embed/wPr4gZYzUVA"\n  title="Dynamic Text, Data Manipulation, and Apache ECharts Panel plugins."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Synchronized the README file with the product documentation (#111).\n- Added the Streaming support for WebSockets and Grafana Live (#113).\n- Moved the InfluxDB example to the guest blog post (#115).\n- Updated the documentation and tutorials in the README file (#116).\n- Added the data zooming to the default Line example (#117).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-echarts-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "data-manipulation-grafana-20230112/",
    metadata: {
      permalink: "/blog/data-manipulation-grafana-20230112/",
      source: "@site/blog/2023-01-12-data-manipulation/index.mdx",
      title: "Observability without Data Manipulation is a lost opportunity",
      description:
        "It was a rainy, gloomy day. Billy had been working on a presentation for an important customer since early in the morning. He spent hours carefully inspecting all formulas and resulting calculations. The presentation looked perfect. All numbers copied from the Grafana dashboard were added up adequately. To simplify the understanding of specific slides, Billy has added several visualizations. The only little component he did not comprehend completely was the coefficient that had to be applied to all formulas. Still, he did not appear concerned since the customer, in the prior communication, confirmed it was supposed to be 0.3.",
      date: "2023-01-12T00:00:00.000Z",
      formattedDate: "January 12, 2023",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "API",
          permalink: "/blog/tags/api",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["daria", "mikhail"],
        slug: "data-manipulation-grafana-20230112/",
        tags: ["Data Manipulation", "API"],
        image: "/img/blog/2023-01-12-data-manipulation/banner.png",
        keywords: ["Data Manipulation", "API", "Grafana", "Observability"],
        updated: "2023-09-21T00:00:00.000Z",
      },
      prevItem: {
        title: "Apache ECharts Panel 4.1.0",
        permalink: "/blog/echarts-panel-4.1.0-20230113/",
      },
      nextItem: {
        title: "Dynamic Text Panel 2.2.0",
        permalink: "/blog/dynamictext-panel-2.2.0-20230110/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nIt was a rainy, gloomy day. Billy had been working on a presentation for an important customer since early in the morning. He spent hours carefully inspecting all formulas and resulting calculations. The presentation looked perfect. All numbers copied from the Grafana dashboard were added up adequately. To simplify the understanding of specific slides, Billy has added several visualizations. The only little component he did not comprehend completely was the coefficient that had to be applied to all formulas. Still, he did not appear concerned since the customer, in the prior communication, confirmed it was supposed to be 0.3.\n\nThe rain outside kept up, and thunders added worrisome tunes to the late night. Yet, everything was ready. The clock showed 6 PM.\n\nAt 6:04 PM, the phone rang, and Peter, the client representative, without any excitement, said that it was a mistake. The coefficient should have always been 0.6. He expressed his hope that Billy had not started working on the deck just yet. Otherwise, Billy would have to redo everything. The rain started pouring, and the thunderclaps followed one another. After saying his goodbyes, Billy went back to his chair. The long night was ahead.\n\nBilly had to redo everything, but not before contacting a database developer for assistance in updating the coefficient value in the database.\n\nBilly\'s sole thought in the morning was how awesome it would have been if the client could have inserted a coefficient value directly into the database and triggered the recalculation of everything from the Grafana dashboard.\n\n## A new chapter\n\nIn general, data visualizations are secured against the users\' interventions. However, there are times when granting access to specific database items is helpful for performance, accuracy, and convenience.\n\nAfter the presentation the next day, Billy inadvertently learned about [Data Manipulation Panel for Grafana](/plugins/volkovlabs-form-panel), which started a new chapter in his life.\n\nGrafana is a fantastic tool for visualizing a broad spectrum of metrics. The Grafana journey began with observability. However, flexible architecture paved the road to many industrial and commercial domains that go well beyond providing system monitoring metrics.\n\n<Video\n  src="https://www.youtube.com/embed/HNCKbGfAU0Q"\n  title="How to create your business Grafana dashboard."\n/>\n\nGrafana, among other areas, is gaining popularity as a platform for software development. Many of the use cases that adopted Grafana interact directly with users. Aside from analyzing the Grafana dashboard to make informed analytical decisions, users anticipate the ability to interact with the database, enter data instantly, and have it appear on the dashboard right away.\n\nInitially, the Grafana inventors neither provisioned such functionality nor even had it on their roadmap. Regardless, they engineered the adaptable Grafana architecture, which enables full-fledged modifications implemented with plugins utilizing all of the latest advantages of the Grafana toolkit to go above and beyond observability.\n\nThe [Data Manipulation Panel plugin](/blog/data-manipulation-panel-plugin-for-grafana-97f9af2c67e0) was created in May-June of this year in response to the rapidly growing demand from the community. It is an open-source project distributed under [Apache License Version 2.0].(https://github.com/volkovlabs/volkovlabs-form-panel/blob/main/LICENSE).\n\n## Data Manipulation Panel\n\nThere are various ways to install it. The easiest one is to use the Plugins Configuration menu when you are in the Grafana Plugins catalog with admin permissions. You can also download the plugin from the Grafana website or [GitHub repository](https://github.com/VolkovLabs/volkovlabs-form-panel).\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entry and user input into dashboard."\n/>\n\nThe most adventurous method, however, is to study the [Data Manipulation Panel](/plugins/volkovlabs-form-panel) plugin page. You will definitely discover a lot of useful information as well as find effective tips and techniques there.\n\nThe Data Manipulation plugin allows you to insert and update data, as well as make configuration changes, directly from your Grafana dashboard.\n\n## API Server\n\nData Manipulation Panel requires the installation of the API server on the same server where the database runs or on a separate host.\n\n<Image\n  title="Data Manipulation panel uses GET and POST/PUT requests to interact with API server."\n  src="/img/blog/2023-01-12-data-manipulation/form-api.png"\n  lazy={false}\n/>\n\nThe API server is an effective approach to guarantee that only approved data operations are permitted.\n\n<Video\n  src="https://www.youtube.com/embed/SHN2S-dRIEM"\n  title="API Node.js server and Deno Deploy."\n/>\n\n### PostgreSQL\n\nLook at a simple API server, which returns submitted feedback from the PostgreSQL database.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-form-panel/blob/main/server-pg/server.ts"\n  language="js"\n/>\n\n### Deno\n\nThis is a great example of how to connect Deno (the easiest, most secure JavaScript runtime) with the panel.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-form-panel/blob/main/server-deno/server.ts"\n  language="js"\n/>\n\nYou can find more PostgreSQL and MySQL database examples in our [GitHub repository](https://github.com/VolkovLabs/volkovlabs-form-panel).\n\nFor an extra security layer, we recommend running Grafana behind an NGINX reverse proxy. The reverse proxy also lets you provision additional API endpoints and static files within the same domain, making them CORS-compliant. It is described in [How to Connect the Data Manipulation Plugin for Grafana to API Server](/blog/how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904).\n\n## Static and Dynamic forms\n\nData Manipulation Panel, like Grafana itself, was designed to embrace [flexibility](/plugins/volkovlabs-form-panel/code). You can get started with static forms and progress to dynamic ones.\n\n- A static form is hard-coded and constructed just once.\n- A dynamic form can be generated on the fly from a data source (such as a database or a CSV file) based on rules and parameters.\n\n<Video\n  src="https://www.youtube.com/embed/RSVH1bSBNl8"\n  title="Static and dynamic form elements of Data Manipulation Panel."\n/>\n\nFor instance, your application may display different forms depending on the logged-in user, time of the day, IP address, and so on.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/docs/volkovlabs-form-panel/js/dynamic-elements.js"\n  language="js"\n/>\n\nData Manipulation Panel is a brand-new Grafana plugin. It is the first plugin that allows you to insert and update application data, as well as modify settings, straight from your Grafana dashboard. You can find more details about it in our [product documentation](/plugins/volkovlabs-form-panel).\n\nAny suggestions and ideas are greatly appreciated. Please feel free to challenge us with your questions. They help us deliver the top-notch product!',
  },
  {
    id: "dynamictext-panel-2.2.0-20230110/",
    metadata: {
      permalink: "/blog/dynamictext-panel-2.2.0-20230110/",
      source: "@site/blog/2023-01-10-dynamictext-panel-2.2.0/index.mdx",
      title: "Dynamic Text Panel 2.2.0",
      description:
        "We're excited to announce the release of the Dynamic Text Panel 2.2.0. This feature release includes the following:",
      date: "2023-01-10T00:00:00.000Z",
      formattedDate: "January 10, 2023",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "dynamictext-panel-2.2.0-20230110/",
        tags: ["Dynamic Text", "Release Notes"],
        image: "/img/blog/2023-01-10-dynamictext-panel-2.2.0/banner.png",
        keywords: ["Dynamic Text", "Panel", "Data", "Grafana"],
        updated: "2023-09-15T00:00:00.000Z",
      },
      prevItem: {
        title: "Observability without Data Manipulation is a lost opportunity",
        permalink: "/blog/data-manipulation-grafana-20230112/",
      },
      nextItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 3.4.0",
        permalink: "/blog/image-panel-3.4.0-20230108/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe\'re excited to announce the release of the Dynamic Text Panel 2.2.0. This feature release includes the following:\n\n- Added the JavaScript code editor supporting Handlebars helpers and event handlers.\n- Completed the refactoring of internal components.\n- Migrated styles to Grafana Theme v2.\n- Added support for the `{{json @root}}` and `{{split String \',\'}}` helpers.\n- Updated CSS styles to fit images to the screen.\n- Added support for internationalization using custom helpers.\n\n## JavaScript code editor\n\nWe analyze requests from our community with a passion and appreciate the feedback. This time, we added support for Handlebars helpers and event handlers that you can add in the JavaScript code editor. For examples, please see our [documentation](/plugins/volkovlabs-dynamictext-panel/code).\n\n<Video\n  src="https://www.youtube.com/embed/lJqk5Gobec4"\n  title="JavaScript code in Dynamic Text Panel."\n/>\n\n### Define custom Handlebars helpers\n\nYou can add a custom Handlebars helper to replace the field\'s value according to some pattern.\n\n```handlebars\n{{replace Test "Pattern" "Replaced"}}\n```\n\nJavaScript Code:\n\n```js\nhandlebars.registerHelper("replace", (context, pattern, replacement) =>\n  context.replace(pattern, replacement)\n);\n```\n\n<Image\n  title="How to create a helper to replace text in the returned data."\n  src="/img/blog/2023-01-10-dynamictext-panel-2.2.0/replace.png"\n  lazy={false}\n/>\n\n### Add Internationalization\n\nGrafana 9 offers internationalization, which plugins do not yet have full access to. Meanwhile, you can use the `getLocale()` method to get a value for the chosen locale and display terms from a defined dictionary.\n\nContent:\n\n```handlebars\n{{translate "Hello"}}\n```\n\nDefault Content:\n\n```handlebars\n{{translate "Default"}}\n```\n\nJavaScript code:\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/docs/volkovlabs-dynamictext-panel/js/translate.js"\n  language="js"\n/>\n\n## Getting Started\n\nYou can install Dynamic Text Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-dynamictext-panel\n```\n\n## YouTube Tutorial\n\nDynamic Text Panel is a Grafana visualization plugin that converts plain text and table data into visually appealing, easy-to-read information cards. You can use variables, Markdown, and Handlebars to customize the look of the outputted cards.\n\nThe Dynamic Text Panel plugin allows you to construct a text visualization template from the values of a dataset returned by a data source query.\n\n<Video\n  src="https://www.youtube.com/embed/MpNZ4Yl-p0U"\n  title="Markdown, HTML and Handlebars to transform data visualizations."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Added the `JSON` helper to show objects and arrays (#121).\n- Added compatibility with Grafana 9.3.1 (#122).\n- Updated links in the product documentation (#130, #131).\n- Added the `Split` helper (#132).\n- Refactored the text component and styles (#133).\n- Added JavaScript code to add Handlebars helpers and event handlers (#134).\n- Updated the default content to `{{json @root}}` and the code editor\'s panel height to `200px` (#134).\n- Updated CSS to fit images into the screen area (#135).\n- Added the `getLocale()` parameter into JavaScript сode (#137).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "image-panel-3.4.0-20230108/",
    metadata: {
      permalink: "/blog/image-panel-3.4.0-20230108/",
      source: "@site/blog/2023-01-08-image-panel-3.4.0/index.mdx",
      title: "Base64 Image/Video/Audio/PDF Panel 3.4.0",
      description:
        "We are excited to announce the release of the Base64 Image/Video/Audio/PDF Panel 3.4.0. This maintenance release includes the following updates:",
      date: "2023-01-08T00:00:00.000Z",
      formattedDate: "January 8, 2023",
      tags: [
        {
          label: "Base64 Image/Video/Audio/PDF",
          permalink: "/blog/tags/base-64-image-video-audio-pdf",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "image-panel-3.4.0-20230108/",
        tags: ["Base64 Image/Video/Audio/PDF", "Release Notes"],
        image: "/img/blog/2023-01-08-image-panel-3.4.0/banner.png",
        keywords: ["Base64", "Panel", "PDF", "Images", "Video", "Audio"],
        updated: "2023-09-09T00:00:00.000Z",
      },
      prevItem: {
        title: "Dynamic Text Panel 2.2.0",
        permalink: "/blog/dynamictext-panel-2.2.0-20230110/",
      },
      nextItem: {
        title: "JSON API Data sources in Grafana",
        permalink: "/blog/json-api-data-sources-in-grafana-20230104/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are excited to announce the release of the Base64 Image/Video/Audio/PDF Panel 3.4.0. This maintenance release includes the following updates:\n\n- Added compatibility with Grafana 9.3.2.\n- Updated the README field and [plugin documentation](/plugins/volkovlabs-image-panel) to explain how to use the panel with data sources and supported formats.\n- "New Year" edition.\n\n<Image\n  title="How to use the plugin to display PNG images in the Base64 format."\n  src="/img/blog/2023-01-08-image-panel-3.4.0/image.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nYou can install Base64 Image/Video/Audio/PDF Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-image-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-image-panel\n```\n\n## YouTube Tutorial\n\nBase64 Image/Video/Audio/PDF Panel is a Grafana plugin that renders PNG, JPG, GIF, MP4, WEBM, MP3, OGG, and PDF files encoded in the Base64 format.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Video, Live Camera Feed on Grafana Dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Added compatibility with Grafana 9.3.2 (#60).\n- Added documentation links (#61).\n- Updated the README file and product documentation (#62).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-image-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "json-api-data-sources-in-grafana-20230104/",
    metadata: {
      permalink: "/blog/json-api-data-sources-in-grafana-20230104/",
      source: "@site/blog/2023-01-04-json-api-data-sources/index.mdx",
      title: "JSON API Data sources in Grafana",
      description:
        "Grafana is a powerful visualization tool with all the bells and whistles you can imagine. However, Grafana does not operate as a standalone application. It displays data, but neither generates or stores it (with some exceptions, like Static data source, storage function). Grafana always communicates with external systems, most commonly a data storage, regardless of the type or architecture it uses.",
      date: "2023-01-04T00:00:00.000Z",
      formattedDate: "January 4, 2023",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
        {
          label: "Analytics",
          permalink: "/blog/tags/analytics",
        },
        {
          label: "API",
          permalink: "/blog/tags/api",
        },
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "json-api-data-sources-in-grafana-20230104/",
        tags: ["Grafana Crash Course", "Analytics", "API", "Apache ECharts"],
        image: "/img/blog/2023-01-04-json-api-data-sources/banner.png",
        keywords: [
          "JSON",
          "API",
          "Data Source",
          "Infinity",
          "Simpod",
          "Grafana",
        ],
        updated: "2023-09-06T00:00:00.000Z",
      },
      prevItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 3.4.0",
        permalink: "/blog/image-panel-3.4.0-20230108/",
      },
      nextItem: {
        title: "Static Data Source 2.1.0",
        permalink: "/blog/static-datasource-2.1.0-20221229/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nGrafana is a powerful visualization tool with all the bells and whistles you can imagine. However, Grafana does not operate as a standalone application. It displays data, but neither generates or stores it (with some exceptions, like [Static data source, storage function](/plugins/volkovlabs-static-datasource)). Grafana always communicates with external systems, most commonly a data storage, regardless of the type or architecture it uses.\n\nAccess via API is one method by which a visualization tool can connect to data storages. In this article, I want to share my evaluation of the existing API data sources that Grafana can work with.\n\n## What is an API data source?\n\nLet\'s start with the basics to ensure we\'re all on the same page.\n\n> In Grafana, the data source acts as an interpreter between the data storage format and a Grafana data frame.\n\n> The Grafana data frame is a table-like data structure that you can refer to using column names when configuring your Grafana visualization panel or any other Grafana aspects. You can think of the Grafana data frame as a data table within Grafana.\n\nAPI (Application Programming Interface) is a widely used term in computer technologies, but for an inexperienced person its definition may see too vague and mysterious. Without ever trying API, you could feel some frustration and disorientation, but it\'s not so complicated as one can imagine.\n\nAPI is a technique that allows two systems to communicate data between each other (I know, it still sounds like a mystery). In terms of Grafana as a visualization tool, the API retrieves a file generated by another program (often a database extract) and then displays it on the Grafana dashboard.\n\nBasically, you tell Grafana to take a file created somewhere else (typically a URL) and read it according to the provided rules (generally by specifying the names of columns and/or data components).\n\nAll of this brings us to the API data source definition. In Grafana, an API data source is a plugin that downloads a file from a supplied link, reads it, and, finally, transforms it into a Grafana data frame by following the appropriate instructions.\n\n<Image\n  title="API Data Source use GET/POST request to retrieve data from external systems."\n  src="/img/blog/2023-01-04-json-api-data-sources/api-concept.png"\n  lazy={false}\n/>\n\nVoila! That was your API 101 crash course.\n\n## The most popular API data sources\n\nI have them on my schema above. They include\n\n- JSON API\n- Infinity\n- SimPod\n\nLet\'s explore them one by one.\n\n## [JSON API Data source](https://grafana.com/grafana/plugins/marcusolsson-json-datasource/)\n\nYeah, that\'s what it\'s called. It would be much simpler if it had a more unique name. Arugula seems like a good name for a data source, so why not go with that? However, we\'re stuck with two excessively used words combined together. So brilliant. Needless to say, it does not aid in online searches, but that\'s beside the point.\n\n<Image\n  title="A JSON API data source plugin for loading JSON APIs into Grafana using JSONPath."\n  src="/img/blog/2023-01-04-json-api-data-sources/json-api.png"\n/>\n\nMarcus Olsson is an author of this plugin. Grafana Labs acquired it a while ago and now controls and maintains it. Unfortunately, no new features are in the horizon.\n\n### Supported formats\n\nThe JSON API data source only supports the JSON format. So, without exceptions, the system from which you want to retrieve this file must generate a JSON file for you.\n\n### Access\n\nIf you\'re new to API, I have good news for you: we will skip over the topics of access and CORS restrictions. However, I must mention them because Grafana does not explicitly warn you when an external system rejects your request due to CORS restrictions. This can leave you in a compete state of disorientation as Grafana will act as if nothing is happening.\n\nOpen data sets, by definition, do not have CORS restrictions, which is why the JSON API data source is an excellent choice to work with them. This is especially true considering that the JSON API data source has fewer parameters and uses a straightforward interface.\n\nThere are various open datasets available to anyone looking for free data. Here are a few examples:\n\n- [U.S. Bureau of Labor Statistics](https://www.bls.gov/),\n- [American Economic Association](https://www.aeaweb.org/),\n- [NASA Open Data Portal](https://data.nasa.gov/).\n\n## [Infinity API data source](https://grafana.com/grafana/plugins/yesoreyeram-infinity-datasource/)\n\nIt has a fantastic name. It is one-of-a-kind, unforgettable, and meaningful.\n\n<Image\n  title="An Infinity data source plugin for loading JSON APIs into Grafana."\n  src="/img/blog/2023-01-04-json-api-data-sources/infinity.png"\n/>\n\nSriramajeyam Sugumaran created this plugin. He still maintains and supports it to this day.\n\n### Supported formats\n\nThis data source\'s name, I believe, stems from the idea of supporting an infinite variety of interchange file types. Let\'s make a data source that can function with any data structure, the author reasoned. That is purely speculative.\n\nIt supports a variety of formats, including JSON, CSV, XML, GraphQL, HTML, UQL, RSS, ATOM, and some others.\n\n### Access\n\nInfinity API, like the JSON API data source, may work with open data sets (no CORS constraints are applied). When CORS restrictions are enabled, Infinity API can sometimes circumvent them. And now, let\'s get a bit technical and dive a little deeper into Internet security.\n\nTo gain a better understanding of CORS, let\'s begin with the following concepts:\n\n**Same-Origin** is a policy that strictly restricts interaction with resources solely to the same domain, host, and port. For example, the `abc.com` domain can retrieve data from `abc.com/page1`, but cannot access any other domain such as `anyotherdomain.com`.\n\n**Cross-Origin Resource Sharing (CORS)** policy offers more flexibility by allowing interactions between different domains. When CORS restrictions are disabled, any domain can freely request data. On the other hand, when CORS restrictions are enabled, only certain domains designated in its allow list are permitted.\n\nHowever, there is a potential way to bypass this restriction using the Infinity API data source. Since CORS operates on the frontend layer, specifically within browsers, the Infinity API data source can access data from other domains through the backend.\n\nTo check for any rejection errors, you can monitor the Console tab of your browser.\n\n<Image\n  title="Rejection error in the browser\'s Console."\n  src="/img/blog/2023-01-04-json-api-data-sources/cors.png"\n/>\n\nGrafana, unfortunately, will remain silent. Nothing will hint to the error with CORS restrictions.\n\n## [SimPod API data source](https://grafana.com/grafana/plugins/simpod-json-datasource/)\n\nThis API data source is designed for advanced users and is closely integrated with the core functionality of Grafana, including tags, variables, range filters, and so on. To make all the cogwheels rotate properly, SimPod requires a specific data format. Therefore, it is necessary to set up an API server that can interact with external resources and retrieve data in its original format before converting it into the proprietary SimPod format.\n\nThe plugin was written by Šimon Podlipský, who still maintains and supports it.\n\n## Summary schema\n\nThe schema below compares the four data sources: JSON API, Infinity, SimPod, and all other specific data sources grouped within the specific data source category. Each data source is represented by a distinct color, indicating different scenarios.\n\n<Video\n  src="https://www.youtube.com/embed/h1Mx4UvtKGY"\n  title="JSON API, Infinity, Simpod compared."\n/>\n\n**Red** highlights the JSON API data source, showing that\n\n- This data source is fantastic for beginners.\n- Operates in an environment with no CORS constraints.\n- Only supports one format (JSON).\n- Excellent for working with public datasets.\n\n**Yellow** highlights the Infinity API data source, showing that\n\n- Infinity can operate in both CORS and non-CORS environments (since it can access data domains from the frontend and backend).\n- Supports a variety of formats.\n- Great to work with both open and corporate datasets.\n\nSimPod, shown as **Green**, offers additional features on top of the primary Grafana dashboard but requires your API server to deliver a specific data format (in my schema, I named it as `JSON+simpod`).\n\nWith **Purple**, we represent all business scenarios that allow direct access to the database.\n\n<Image\n  title="JSON API Data Sources schema compares all current solutions."\n  src="/img/blog/2023-01-04-json-api-data-sources/json-api-schema.png"\n/>\n\n## How to display the unemployment rate\n\nWatch this video to discover how to display data on your Grafana dashboard using the JSON API and Infinity API data sources.\n\n<Video\n  src="https://www.youtube.com/embed/B4Uj1n4Cr88"\n  title="How to use JSON Data Sources for Grafana."\n/>\n\nYour suggestions and comments are much welcomed. Please feel free to challenge us with your questions. They keep us focused and inspire us to deliver excellent results!',
  },
  {
    id: "static-datasource-2.1.0-20221229/",
    metadata: {
      permalink: "/blog/static-datasource-2.1.0-20221229/",
      source: "@site/blog/2022-12-29-static-datasource-2.1.0/index.mdx",
      title: "Static Data Source 2.1.0",
      description:
        "We are happy to announce the release of the Static Data Source 2.1.0. This release includes the following updates:",
      date: "2022-12-29T00:00:00.000Z",
      formattedDate: "December 29, 2022",
      tags: [
        {
          label: "Static Data Source",
          permalink: "/blog/tags/static-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "static-datasource-2.1.0-20221229/",
        tags: ["Static Data Source", "Release Notes"],
        image: "/img/blog/2022-12-29-static-datasource-2.1.0/banner.png",
        keywords: ["Data Source", "Static", "Storage", "Grafana"],
        updated: "2023-02-07T00:00:00.000Z",
      },
      prevItem: {
        title: "JSON API Data sources in Grafana",
        permalink: "/blog/json-api-data-sources-in-grafana-20230104/",
      },
      nextItem: {
        title: "Apache ECharts Panel 4.0.0",
        permalink: "/blog/echarts-panel-4.0.0-20221220/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Static Data Source 2.1.0. This release includes the following updates:\n\n- Finished refactoring.\n- Updated to the latest Grafana toolkit 9.3.2.\n- Introduced new features for the `Time`, `Number`, and `String` fields.\n\nThe Static Data Source was initially developed and positioned to emulate data for testing and developing new plugins. Still, there is another compelling use case for storing data inside the dashboard, which we see utilized by the community.\n\n<Image\n  title="Apache ECharts panel can visualize wind speed with direction."\n  src="/img/blog/2022-12-29-static-datasource-2.1.0/wind.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nThe Static Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-static-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install marcusolsson-static-datasource\n```\n\n## YouTube Tutorial\n\nThe Static Data Source is a plugin for Grafana that allows you to store and emulate any data.\n\n<Video\n  src="https://www.youtube.com/embed/QOV8ECOUjWs"\n  title="Mimic any data with Static data source."\n/>\n\n## Release Notes\n\n### Breaking changes\n\nRefactoring may introduce breaking changes. Please test before upgrading in Production.\n\n### Features / Enhancements\n\n- Update CI to upload signed artifacts (#23)\n- Add the "Static data source for Grafana | Mimic any data source | Tutorial and examples" video in README (#23)\n- Update to Grafana 9.3.2 (#24)\n- Refactoring and improving Test Coverage for the data source (#25)\n- Update Field and Values Editors to labels and fields structure (#27)\n- Remove Frame Reducer to simplify code (#28)\n- Refactoring frame, field utilities (#29)\n- Add Date, Time Picker, Number, and Text Area Inputs (#30)\n- Update Value Input component (#31)\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-static-datasource/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "echarts-panel-4.0.0-20221220/",
    metadata: {
      permalink: "/blog/echarts-panel-4.0.0-20221220/",
      source: "@site/blog/2022-12-20-echarts-panel-4.0.0/index.mdx",
      title: "Apache ECharts Panel 4.0.0",
      description:
        "We are happy to announce the release of the Apache ECharts Panel 4.0.0. This release includes the following updates:",
      date: "2022-12-20T00:00:00.000Z",
      formattedDate: "December 20, 2022",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "echarts-panel-4.0.0-20221220/",
        tags: ["Apache ECharts", "Release Notes"],
        image: "/img/blog/2022-12-20-echarts-panel-4.0.0/banner.png",
        keywords: [
          "Apache ECharts",
          "Panel",
          "Chart",
          "Visualization",
          "Grafana",
        ],
        updated: "2023-09-06T00:00:00.000Z",
      },
      prevItem: {
        title: "Static Data Source 2.1.0",
        permalink: "/blog/static-datasource-2.1.0-20221229/",
      },
      nextItem: {
        title: "Calendar Panel 1.1.0",
        permalink: "/blog/calendar-panel-1.1.0-20221212/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Apache ECharts Panel 4.0.0. This release includes the following updates:\n\n- Introduced breaking changes with loading GeoJSON maps, which are disabled by default.\n- Documentation and examples were updated and moved to our [documentation site](https://volkovlabs.io/plugins/volkovlabs-echarts-panel/) and [Plugin Demo site](https://echarts.volkovlabs.io).\n\nWe are very excited about the new release and will continue improving the plugin by adding support for annotations and custom themes.\n\n<Image\n  title="Apache ECharts visualizes a pie chart from a static data source."\n  src="/img/blog/2022-12-20-echarts-panel-4.0.0/pie-chart.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nYou can install Apache ECharts Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-echarts-panel\n```\n\n## YouTube Tutorial\n\nThe Apache ECharts Panel plugin is a data visualization extension for Grafana that allows you to integrate charts and graphs from the popular Apache ECharts library into your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\n## Release Notes\n\n### Breaking changes\n\n- World and U.S. GeoJSON maps are not loaded by default. Please select `JSON` in the Maps option.\n\n### Features / Enhancements\n\n- Update ECharts Examples at https://echarts.volkovlabs.io (#103).\n- Added the Calendar examples at https://echarts.volkovlabs.io (#105).\n- Updated the README file and moved the product documentation to the [documentation site](https://volkovlabs.io/plugins/) (#107).\n\n### Bug fixes\n\n- Fixed JavaScript code in the product documentation (#102).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-echarts-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "calendar-panel-1.1.0-20221212/",
    metadata: {
      permalink: "/blog/calendar-panel-1.1.0-20221212/",
      source: "@site/blog/2022-12-12-calendar-panel-1.1.0/index.mdx",
      title: "Calendar Panel 1.1.0",
      description:
        "We are happy to announce the release of the Calendar Panel 1.1.0. This release includes the following updates:",
      date: "2022-12-12T00:00:00.000Z",
      formattedDate: "December 12, 2022",
      tags: [
        {
          label: "Calendar",
          permalink: "/blog/tags/calendar",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "calendar-panel-1.1.0-20221212/",
        tags: ["Calendar", "Release Notes"],
        image: "/img/blog/2022-12-12-calendar-panel-1.1.0/banner.png",
        keywords: ["Calendar", "Panel", "Events", "Grafana"],
        updated: "2023-09-11T00:00:00.000Z",
      },
      prevItem: {
        title: "Apache ECharts Panel 4.0.0",
        permalink: "/blog/echarts-panel-4.0.0-20221220/",
      },
      nextItem: {
        title: "Dynamic Text Panel 2.1.0",
        permalink: "/blog/dynamictext-panel-2.1.0-20221127/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Calendar Panel 1.1.0. This release includes the following updates:\n\n- Added compatibility with Grafana 9.3.1.\n- Added support for annotations.\n- Refactored the legacy code and increased the test coverage for the plugin\'s functionality.\n\nWe\'ve already started working on the next version to complete the code refactoring and address the remained issues. We\'re looking forward to receiving your feedback.\n\n<Image\n  title="Calendar Panel displays the latest updates in the Grafana Plugins catalog."\n  src="/img/blog/2022-12-12-calendar-panel-1.1.0/panel.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nYou can install Calendar Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-calendar-panel\n```\n\n## YouTube Tutorial\n\nCalendar Panel is a Grafana plugin that displays events from various data sources.\n\n<Video\n  src="https://www.youtube.com/embed/iPJ122x0oos"\n  title="Display events from the JSON API data source."\n/>\n\n## Release Notes\n\n### Breaking changes\n\nRefactoring may introduce breaking changes. Please test before upgrading the plugin on production Grafana instances.\n\n### Features / Enhancements\n\n- Updated the plugin\'s options in the README file (#53).\n- Added a YouTube tutorial for Calendar Panel explaining how to display events from the JSON API data source (#54).\n- Updated CI to Node.js 16 and synchronized it with the release workflow (#56).\n- Added compatibility with Grafana 9.2.2 (#57).\n- Refactored the program code (#58).\n- Added compatibility with Grafana 9.3.1 (#59).\n- Updated CI to upload signed artifacts (#60).\n- Refactored the plugin options and increased the test coverage (#61).\n- Added support for annotations (#8).\n- Refactored the program code and removed the legacy code (#62).\n- Refactored the plugin options and added the annotation options (#63).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-calendar-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "dynamictext-panel-2.1.0-20221127/",
    metadata: {
      permalink: "/blog/dynamictext-panel-2.1.0-20221127/",
      source: "@site/blog/2022-11-27-dynamictext-panel-2.1.0/index.mdx",
      title: "Dynamic Text Panel 2.1.0",
      description:
        "We're excited to announce the release of the Dynamic Text Panel 2.1.0. This feature release includes the following updates:",
      date: "2022-11-27T00:00:00.000Z",
      formattedDate: "November 27, 2022",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "dynamictext-panel-2.1.0-20221127/",
        tags: ["Dynamic Text", "Release Notes"],
        image: "/img/blog/2022-11-27-dynamictext-panel-2.1.0/banner.png",
        keywords: ["Dynamic Text", "Panel", "Data", "Grafana"],
        updated: "2023-09-15T00:00:00.000Z",
      },
      prevItem: {
        title: "Calendar Panel 1.1.0",
        permalink: "/blog/calendar-panel-1.1.0-20221212/",
      },
      nextItem: {
        title: "Data Manipulation Panel 2.7.0",
        permalink: "/blog/form-panel-2.7.0-20221110/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe\'re excited to announce the release of the Dynamic Text Panel 2.1.0. This feature release includes the following updates:\n\n- Includes the community-submitted PRs and features.\n- Integrated Monaco Code Editor.\n- Refactored the plugin\'s code and increased test coverage to continue enhancing the plugin\'s functionality.\n\n<Image\n  title="Dynamic Text Panel visualizes cards with people information."\n  src="/img/blog/2022-11-27-dynamictext-panel-2.1.0/panel.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nYou can install Dynamic Text Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install marcusolsson-dynamictext-panel\n```\n\n## YouTube Tutorial\n\nDynamic Text Panel is a Grafana visualization plugin that converts plain text and table data into visually appealing, easy-to-read information cards. You can use variables, Markdown, and Handlebars to customize the look of the outputted cards.\n\nThe Dynamic Text Panel plugin allows you to construct a text visualization template from the values of a dataset returned by a data source query.\n\n<Video\n  src="https://www.youtube.com/embed/MpNZ4Yl-p0U"\n  title="Markdown, HTML and Handlebars to transform data visualizations."\n/>\n\n## Release Notes\n\n### Breaking changes\n\nMajor refactoring may introduce breaking changes. Please test before upgrading in Production.\n\n### Features / Enhancements\n\n- Fixed the broken link in the README file (#111).\n- Updated CI to upload signed artifacts (#113).\n- Added a feature parsing the time formatting syntax (#86).\n- Fixed the data rendering when using transformations (#98).\n- Updated the panel options to use Monaco Code Editor (#114).\n- Increased test coverage for the plugin\'s functionality (#114).\n- Refactored and updated images (#116).\n- Refactored alert messages and text options (#117).\n- Added support for the parameter regulating HTML sanitization in Grafana (#118).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "form-panel-2.7.0-20221110/",
    metadata: {
      permalink: "/blog/form-panel-2.7.0-20221110/",
      source: "@site/blog/2022-11-10-form-panel-2.7.0/index.mdx",
      title: "Data Manipulation Panel 2.7.0",
      description:
        "We are happy to announce the release of the Data Manipulation Panel 2.7.0. This release includes the following updates:",
      date: "2022-11-10T00:00:00.000Z",
      formattedDate: "November 10, 2022",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "form-panel-2.7.0-20221110/",
        tags: ["Data Manipulation", "Release Notes"],
        image: "/img/blog/2022-11-10-form-panel-2.7.0/banner.png",
        keywords: ["Data Manipulation", "Form Panel", "Data", "Grafana"],
        updated: "2023-09-21T00:00:00.000Z",
      },
      prevItem: {
        title: "Dynamic Text Panel 2.1.0",
        permalink: "/blog/dynamictext-panel-2.1.0-20221127/",
      },
      nextItem: {
        title:
          "Create Stacked Bars using the Apache ECharts visualization panel",
        permalink: "/blog/stacked-bar-graph-20221004/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe are happy to announce the release of the Data Manipulation Panel 2.7.0. This release includes the following updates:\n\n- Includes community-requested updates for the payload.\n- Updated request parameters.\n- Grafana-style success/error notifications.\n- The code editor for the initial and update requests was improved with suggestions for variables and parameters.\n\nWe are impressed by the ever-growing number of use cases from the community and look forward to receiving more feedback and enhancing the plugin.\n\n<Image\n  title="Data Manipulation Panel allows you to enter and edit all kinds of data."\n  src="/img/blog/2022-11-10-form-panel-2.7.0/panel.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nYou can install Data Manipulation Panel from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-form-panel/) or using the Grafana command line tool.\n\nFor the latter, please use the following command:\n\n```bash\ngrafana-cli plugins install volkovlabs-form-panel\n```\n\n## YouTube Tutorial\n\nData Manipulation Panel is a brand-new Grafana plugin. It is the first plugin that allows you to insert and update application data, as well as modify settings, straight from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entry and user input into dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Added compatibility with Grafana 9.2.2 (#113).\n- Update CI to upload signed artifacts (#116).\n- Allowed the passing of all or updated only values within the payload (#116).\n- Added the Initial values parameter into the Update Request parameters (#117).\n- Added the output of status notifications after the form submittal (#98).\n- Added suggestions in Monaco Code Editor for available parameters (#88).\n\n## Feedback\n\nWe\'re looking forward to hearing from you. You can use different ways to get in touch with us.\n\n- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-form-panel/issues).\n- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.\n- Sponsor our open-source plugins for Grafana at [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Support our project by starring the repository.',
  },
  {
    id: "stacked-bar-graph-20221004/",
    metadata: {
      permalink: "/blog/stacked-bar-graph-20221004/",
      source: "@site/blog/2022-10-04-stacked-bar-graph/index.mdx",
      title: "Create Stacked Bars using the Apache ECharts visualization panel",
      description:
        "Sineos opened an issue in the Apache ECharts repository asking for help with Stacked Bar Graph:",
      date: "2022-10-04T00:00:00.000Z",
      formattedDate: "October 4, 2022",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Sineos",
          image_url: "https://github.com/Sineos.png",
          title: "Community member.",
          imageURL: "https://github.com/Sineos.png",
        },
      ],
      frontMatter: {
        authors: [
          {
            name: "Sineos",
            image_url: "https://github.com/Sineos.png",
            title: "Community member.",
            imageURL: "https://github.com/Sineos.png",
          },
        ],
        slug: "stacked-bar-graph-20221004/",
        tags: ["Apache ECharts"],
        image: "/img/blog/2022-10-04-stacked-bar-graph/banner.png",
        keywords: ["Apache ECharts", "Grafana", "Visualization"],
        updated: "2023-02-13T00:00:00.000Z",
      },
      prevItem: {
        title: "Data Manipulation Panel 2.7.0",
        permalink: "/blog/form-panel-2.7.0-20221110/",
      },
      nextItem: {
        title:
          "Grafana variables at a glance, Environment data source explained",
        permalink:
          "/blog/grafana-variables-at-a-glance-environment-data-source-explained-102b8e05e1a5/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\n\n\n[Sineos](https://github.com/Sineos) opened an [issue in the Apache ECharts repository](https://github.com/VolkovLabs/volkovlabs-echarts-panel/issues/47) asking for help with Stacked Bar Graph:\n\n> "I have three queries returning aggregated monthly values, which I would like to display as a Stacked bar graph. Turning it into a simple bar graph works but dividing the data too differently styled bars just ends up with errors."\n\nThe issue was successfully resolved, and Sineos created this example and attached\n\n- Apache ECharts function,\n- InfluxDB queries to retrieve data,\n- Ready-to-go Dashboard using the Static Data Source.\n\n<Image\n  title="Energy balance visualized in Apache ECharts panel for Grafana."\n  src="/img/blog/2022-10-04-stacked-bar-graph/panel.png"\n  lazy={false}\n/>\n\n## InfluxDB Data Source\n\n- `createEmpty: true` makes sure that the data of the individual bar segments stay aligned when data is missing in the series.\n- `set(key: "Source", value: "Self Consumption")` manipulates the field used for naming the series.\n\n### Query A\n\n```sql\nfrom(bucket: "home")\n  |>  range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |>  filter(fn: (r)  => r["_measurement"] == "vzlogger")\n  |>  filter(fn: (r)  => r["Source"] == "SML_Energy_Out")\n  |>  filter(fn: (r)  => r["_field"] == "Energy")\n  |>  aggregateWindow(every: 1d, fn: sum, createEmpty: true)\n  |>  set(key: "Source",  value: "Grid Feed")\n```\n\n### Query B\n\n```sql\nfrom(bucket: "home")\n  |>  range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |>  filter(fn: (r)  => r["_measurement"] == "vzlogger")\n  |>  filter(fn: (r)  => r["Source"] == "SML_Energy_In")\n  |>  filter(fn: (r)  => r["_field"] == "Energy")\n  |>  aggregateWindow(every: 1d, fn: sum, createEmpty: true)\n  |>  set(key: "Source",  value: "Grid Consumption")\n```\n\n### Query C\n\n```sql\nfrom(bucket: "home")\n  |>  range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |>  filter(fn: (r)  => r["_measurement"] == "vzlogger")\n  |>  filter(fn: (r)  => r["Source"] == "SelfConsumption")\n  |>  filter(fn: (r)  => r["_field"] == "Energy")\n  |>  aggregateWindow(every: 1d, fn: sum, createEmpty: true)\n  |>  set(key: "Source",  value: "Self Consumption")\n```\n\n## Apache ECharts function\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2022-10-04-stacked-bar-graph/panel.js"\n  language="js"\n/>\n\n## Dashboard to Try\n\nThe following dashboard is a ready-to-go example that can be imported into Grafana as JSON. It requires\n\n- [Static data source](/plugins/volkovlabs-static-datasource/)\n- Apache ECharts visualization panel plugin.\n\nMake sure to install the Static data source via the Plugins Configuration and then add it to the Data Sources.\n\n### Import dashboard\n\nOnce the Static data source is installed and added and the Apache ECharts visualization panel is installed, go to the Dashboard menu and select Import.\n\nIn the Import dashboard window, insert the JSON code into the Import via the panel JSON field. Copy the JSON code from below.\n\n<Image\n  title="Import dashboard window."\n  src="/img/blog/2022-10-04-stacked-bar-graph/import-dashboard.png"\n/>\n\nSpecify the dashboard name and Static data source, and click Import.\n\n<Image\n  title="Provide Name and datasource in the import menu window."\n  src="/img/blog/2022-10-04-stacked-bar-graph/import-dashboard-step2.png"\n/>\n\nYou should see the visualization working right away.\n\n<Image\n  title="Apache ECharts and data sources configuration."\n  src="/img/blog/2022-10-04-stacked-bar-graph/dashboard.png"\n/>\n\n<details>\n  <summary>Dashboard</summary>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2022-10-04-stacked-bar-graph/dashboard.json"\n  language="json"\n/>\n\n</details>\n\nAny feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!',
  },
  {
    id: "grafana-variables-at-a-glance-environment-data-source-explained-102b8e05e1a5/",
    metadata: {
      permalink:
        "/blog/grafana-variables-at-a-glance-environment-data-source-explained-102b8e05e1a5/",
      source: "@site/blog/2022-09-13-grafana-variables/index.mdx",
      title: "Grafana variables at a glance, Environment data source explained",
      description:
        "After a brief acquaintance with Grafana in sandboxes, production application developers come to the need to work with variables serving different architectural levels. This article outlines three logical levels with corresponding variables and their purposes.",
      date: "2022-09-13T00:00:00.000Z",
      formattedDate: "September 13, 2022",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
        {
          label: "Environment Data Source",
          permalink: "/blog/tags/environment-data-source",
        },
        {
          label: "Variables",
          permalink: "/blog/tags/variables",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "grafana-variables-at-a-glance-environment-data-source-explained-102b8e05e1a5/",
        tags: ["Grafana Crash Course", "Environment Data Source", "Variables"],
        image: "/img/blog/2022-09-13-grafana-variables/banner.png",
        keywords: ["Variables", "Grafana", "Visualization"],
        updated: "2023-05-23T00:00:00.000Z",
      },
      prevItem: {
        title:
          "Create Stacked Bars using the Apache ECharts visualization panel",
        permalink: "/blog/stacked-bar-graph-20221004/",
      },
      nextItem: {
        title: "How to customize the Grafana user interface",
        permalink:
          "/blog/how-to-customize-the-grafana-user-interface-8d70a42dc2b6/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nAfter a brief acquaintance with Grafana in sandboxes, production application developers come to the need to work with variables serving different architectural levels. This article outlines three logical levels with corresponding variables and their purposes.\n\nLet\'s start with the schema below. It provides a fantastic summary of the subject.\n\nDashboard variables serve the analytical dashboards, and global Grafana variables rule in the Grafana instance. Environment variables help in configuring system processes where Grafana is installed.\n\n<Image\n  title="Three logical layers and their corresponding variable."\n  src="/img/blog/2022-09-13-grafana-variables/schema.png"\n  lazy={false}\n/>\n\nThe YouTube version of this article is on our YouTube channel.\n\n<Video\n  src="https://www.youtube.com/embed/sczRq2lI3e4"\n  title="Dashboard, Global and Environment variables in Grafana."\n/>\n\n## Dashboard variables\n\nAs the name implies, they are created for a dashboard. Only users with Edit permissions or higher can maintain them. The dashboard variables configuration menu is located in the Dashboard settings, Variables menu.\n\n<Image\n  title="How to access the Variables management panel in Grafana. Edit permission is required."\n  src="/img/blog/2022-09-13-grafana-variables/menu.png"\n/>\n\nOnce a variable is created, it is displayed on the top of your dashboard as a drop-down list unless you made it hidden. Multi-selection and Select All are optional and configurable in the Variable management panel.\n\n<Image\n  title="The dashboard variable is displayed as a drop-down list on the top of your dashboard."\n  src="/img/blog/2022-09-13-grafana-variables/dropdown.png"\n/>\n\nTo reference a dashboard variable in the queries and panels\' code, add a `$` (dollar sign) as a prefix.\n\n<Image\n  title="Add a dollar sign when referencing a dashboard variable in a panel\'s code."\n  src="/img/blog/2022-09-13-grafana-variables/prefix.png"\n/>\n\nMost of the time a dashboard variable plays a filter role to limit the displayed data on your panels. If that is the purpose, add it to all your dashboard queries accordingly.\n\n<Image\n  title="Types of Grafana dashboard variables."\n  src="/img/blog/2022-09-13-grafana-variables/edit.png"\n/>\n\nAny dashboard variable is a one-dimensional array of data elements.\n\n### Hard-coded\n\nMeaning set up when you create a variable. The types for these are:\n\n- Constant. It is one value. Example: `1`.\n- Custom. It is many values. Example: `1, 2, 3, 56`.\n- Interval. It is a built-in Grafana type designed to use as a time interval parameter. Examples are `500ms`, `30m`, `1h`, `6h`, `1d`, `14d`, etc.\n\n### Text box\n\nI am not aware of a good business case for the use of this one. If you do, please, share. This type of dashboard variable allows the user to enter any value in a text box.\n\nOne concerning issue with that it is not a foolproof concept. A dashboard creator would need to add an extra validation for any limitation of characters to ensure meaningful parameters.\n\nThe other concerning detail, this type also might give a wrong impression that the entered value can be stored in the data source. It is not true.\n\nThe time span of the entered value is limited until the next dashboard refresh. The text box is just plainly what it is, the values are not stored anywhere, and the user can not reuse the entered values without typing them again, nor could they be sent down the pipeline for processing.\n\n### Query\n\nThis is my favorite type of dashboard variable. They are populated from the connected data source according to your query.\n\n## Global variables\n\nGrafana Global variables are read-only and designed to store the statuses of the working Grafana instance. You can think of them as process indicators.\n\n| Variable          | Description                               |\n| ----------------- | ----------------------------------------- |\n| `${__dashboard}`  | Name of the current dashboard.            |\n| `${__from}`       | From of Time Range in epoch milliseconds. |\n| `${__interval}`   | Parameter to group by time.               |\n| `${__org.name}`   | Name of the current organization.         |\n| `${__org}`        | Id of the current organization.           |\n| `${__to}`         | To of Time Range in epoch milliseconds.   |\n| `${__user.email}` | Email for the current user.               |\n| `${__user.id}`    | Id of the current user.                   |\n| `${__user.login}` | Login handle of the current user.         |\n\nYou can find the complete list of all global variables in the [Grafana Documentation](https://grafana.com/docs/grafana/latest/variables/variable-types/global-variables/).\n\n## Environment variables\n\nGrafana could be installed in a Docker container or directly on the operating system. If you need more details, watch the following YouTube video demonstrating two types of Grafana installation in a Docker container and on Windows/Mac.\n\n<Video\n  src="https://www.youtube.com/embed/xTQpV7B700w"\n  title="How to Install Grafana for Data Analysts and Data Scientists."\n/>\n\nIn both types of installation, an environment variable is a key-value parameter that is designed to either capture a descriptive system element or value to impact the running process. In other words, those variables can keep the system configuration secrets and statuses. That imposes the need for extra caution while working with them.\n\n## Environment Data Source\n\nTo stay out of trouble, Grafana core chose not to support the environment variables at this time. Yet, many industrial cases require the ability to display environment variables, for instance, in cases where the goal is to manage numerous remote devices (ex, IoT networks).\n\nFollowing the community demand, we created an Environment data source to supplement that ability. Employing the Environment data source allows you to display and use the environment variables of all your devices in one spot, the Grafana dashboard.\n\n### Installation\n\nEnvironment Data Source is not included in the Grafana Catalog. It can be installed from our Private Repository or downloaded directly from GitHub.\n\n```bash\ngrafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource\n```\n\nMore information about features and installation can be found in the [documentation](/plugins/volkovlabs-env-datasource).\n\nFor demo purposes below, I use the standard Table panel. Here is what the list of all my environment variables looks like:\n\n<Image\n  title="The listing of all environment variables displayed in Grafana via the Environment data source."\n  src="/img/blog/2022-09-13-grafana-variables/dashboard.png"\n/>\n\n### Configuration\n\nTo make the environmental data source more secure, you can restrict the variables that are allowed to be shown in the Environment data source configuration. For the endless possibilities, the filter utilizes a regex pattern\n\n<Image\n  title="Use the Regex pattern to restrict the available environment variables."\n  src="/img/blog/2022-09-13-grafana-variables/regex.png"\n/>\n\nOne more exciting thing to point out. Any environment variable your dashboard gets access to via the Environment data source can be used as a dashboard variable!\n\nFor that, when you create a dashboard variable, select the Environment data source.\n\n<Image\n  title="How to use the environment variable as a dashboard variable."\n  src="/img/blog/2022-09-13-grafana-variables/variable.png"\n/>\n\nAny feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!',
  },
  {
    id: "how-to-customize-the-grafana-user-interface-8d70a42dc2b6/",
    metadata: {
      permalink:
        "/blog/how-to-customize-the-grafana-user-interface-8d70a42dc2b6/",
      source: "@site/blog/2022-08-14-customize-grafana/index.mdx",
      title: "How to customize the Grafana user interface",
      description:
        "This article collects various commands to help you play with the Grafana in your style. It's constantly updated with the latest version of Grafana.",
      date: "2022-08-14T00:00:00.000Z",
      formattedDate: "August 14, 2022",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "how-to-customize-the-grafana-user-interface-8d70a42dc2b6/",
        tags: ["Grafana Crash Course"],
        image: "/img/blog/2022-08-14-customize-grafana/banner.png",
        keywords: [
          "Business",
          "Grafana",
          "Visualization",
          "Customization",
          "Docker",
        ],
        updated: "2023-06-17T00:00:00.000Z",
      },
      prevItem: {
        title:
          "Grafana variables at a glance, Environment data source explained",
        permalink:
          "/blog/grafana-variables-at-a-glance-environment-data-source-explained-102b8e05e1a5/",
      },
      nextItem: {
        title:
          "The missing plugin to create business and industrial charts in Grafana",
        permalink:
          "/blog/the-missing-plugin-to-create-business-and-industrial-charts-in-grafana-1d8f7304229f/",
      },
    },
    content:
      'import BlogPost from "@theme/BlogPost";\nimport Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nThis article collects various commands to help you play with the Grafana in your style. It\'s constantly updated with the latest version of Grafana.\n\nIf you are here, you probably know what Grafana is and have already been playing with it for quite some time. And you are already quite aware that Grafana is a remarkable open-source tool for observability.\n\n## Installation\n\nThe installation of Grafana directly on the operating system takes a minute or two. However, working with Grafana in a Docker container is more advantageous.\n\nOnce installed, Grafana delivers a broad spectrum of built-in visualization panels and data sources. You most likely know that if the out-of-the-box features do not yet endure your use case, the friendly community has plenty of add-ons in the shape of plugins you can download from the Grafana Catalog.\n\nStarting from Grafana 8, access to Grafana Catalog was made a click away when the Plugins section was added under the Configuration menu. Following that path, you can find and install the extra functionality on top of the standard features in a blink of an eye.\n\n## Customization\n\nSo, here you are, at the point of knowing that Grafana architecture and functionality suit your needs and realizing the necessity to adjust the basic graphical elements to make your application look more like your own.\n\n<Image\n  title="Configuration, cleaning, visual and hands-on categories to Customize Grafana."\n  src="/img/blog/2022-08-14-customize-grafana/customization.png"\n  lazy={false}\n/>\n\nThe truth is the fundamental UI components are pre-defined. There is no straightforward way to adjust them.\n\n<Video\n  src="https://www.youtube.com/embed/ChI78v4UZc0"\n  title="How to customize Grafana 9.4. A cheat-sheet for Docker container and Windows."\n/>\n\nIn this article, we collected all commands that will help you to play with UI in style. Let\'s go!\n\n:::info Docker\n\nFirst and foremost, we recommend working with Grafana in a Docker container. Once it is settled, all that is left is to rebuild your current container, ensuring to include the following commands.\n\n:::\n\n## Default theme\n\nThere are two types of people in this world: people with the Light theme preference and the Dark one. Grafana started with dark colors, initially designed to provide for observability demand.\n\n<Image\n  title="You can set the default theme to be either Light or Dark."\n  src="/img/blog/2022-08-14-customize-grafana/theme.png"\n  lazy={false}\n/>\n\nThe Light option was introduced in version 7 and became equally famous as the Dark one. This is the only setting that is configurable in a user profile. You can, however, make the UI style coherent by specifying the default theme for the whole Docker container by clearly assigning a value to the following environment variable.\n\n```docker\nENV GF_USERS_DEFAULT_THEME=light\n```\n\n## Home Dashboard\n\n<Image\n  title="Balena application Home dashboard in Grafana."\n  src="/img/blog/2022-08-14-customize-grafana/home.png"\n/>\n\nTo set the dashboard of your choice as a Home dashboard, you would need to replace the `default.json` file located in `../usr/share/grafana/public/dashboards/default.json` with the file containing your JSON code.\n\nYou can do so by running the following command.\n\n```docker\nCOPY dashboards/home.json /usr/share/grafana/public/dashboards/default.json\n```\n\nIf the dashboard is ever modified, the Docker container has to be rebuilt with a new JSON file.\n\nIf your dashboard is a part of the Application plugin, you can override the environment variable to specify a new file.\n\n```docker\nENV GF_DASHBOARDS_DEFAULT_HOME_DASHBOARD_PATH=/var/lib/grafana/plugins/volkovlabs-app/dashboards/supervisor.json\n```\n\n## Disable Alerting and Explore\n\nMore and more applications are being built to utilize Grafana as a platform for data visualization. Those applications do not require Alerting nor Explore components.\n\nTo simplify your Grafana interface, consider disabling those features by including the following environment variables.\n\n```docker\n# Explore\nENV GF_EXPLORE_ENABLED=false\n\n# Alerting\nENV GF_ALERTING_ENABLED=false\nENV GF_UNIFIED_ALERTING_ENABLED=false\n```\n\n## Sanitize HTML\n\nHTML sanitizing is enabled by default. If you need to use the HTML tags in the panels, this command is for you.\n\n```docker\nENV GF_PANELS_DISABLE_SANITIZE_HTML=true\n```\n\n## Anonymous Authentication\n\nIn some cases, you might need to remove the login page completely and make a dashboard available for the public. For that, you would need to allow Anonymous access.\n\n```docker\nENV GF_AUTH_ANONYMOUS_ENABLED=true\nENV GF_AUTH_BASIC_ENABLED=false\n```\n\n## Bookmark Icon (Favicon)\n\nThe favicon is the icon next to the application title on the browser tab.\n\n<Image\n  title="The favicon is the icon next to the application title on the browser tab."\n  src="/img/blog/2022-08-14-customize-grafana/favicon.png"\n/>\n\nTo have your own, you can replace `fav32.png` and `apple-touch-icon.png` with the images of your choice.\n\nUse the following command for that.\n\n```docker\nCOPY img/fav32.png /usr/share/grafana/public/img/fav32.png\nCOPY img/fav32.png /usr/share/grafana/public/img/apple-touch-icon.png\n```\n\n## Logo\n\nThe logo on the Login page is the first graphical element that users want to change.\n\nThe big Grafana icon, the first image that draws users\' attention when they open the application, can be customized by substituting the `grafana_icon.svg` file located in `../usr/share/grafana/public/img/`.\n\n```docker\nCOPY img/logo.svg /usr/share/grafana/public/img/grafana_icon.svg\n```\n\n## Login Background\n\n<Image\n  title="The background image is configurable for Light and Dark themes."\n  src="/img/blog/2022-08-14-customize-grafana/background.png"\n/>\n\nWhen customizing the background image, replace images for both themes. You can go with the same picture, but both files need to be replaced.\n\n```docker\nCOPY img/background.svg /usr/share/grafana/public/img/g8_login_dark.svg\nCOPY img/background.svg /usr/share/grafana/public/img/g8_login_light.svg\n```\n\n## Grafana Server\n\n### Main Organization\n\nTo update the name of the Main Organization, update the binary file `grafana-server`. The new name should be exactly 9 letters to avoid memory issues.\n\n```docker\nRUN sed -i \'s|Main Org.|AwsomeOrg|g\' /usr/share/grafana/bin/grafana-server\n```\n\n### Help menu\n\nApplication name and version are hard-coded in the `grafana-server` and hard to replace in the Docker container. It can be replaced in JavaScript when rendering.\n\n```docker\nRUN sed -i "s|\\[\\[.NavTree\\]\\],|nav,|g; \\\n    s|window.grafanaBootData = {| \\\n    let nav = [[.NavTree]]; \\\n    nav[nav.length -1][\'subTitle\'] = \'Custom name version\'; \\\n    window.grafanaBootData = {|g" \\\n    /usr/share/grafana/public/views/index.html\n```\n\n### Update Navigation (Mega) Menu\n\nThe mega menu is the left-side menu added in Grafana 9.5. It\'s hard-coded and there is no way to update it in the UI.\n\n<Image\n  title="The mega menu updated with the new dashboard link."\n  src="/img/blog/2022-08-14-customize-grafana/menu.png"\n/>\n\nThe menu elements can be added using JavaScript when rendering.\n\n```docker\n## Add News to the Mega Menu\nRUN sed -i "s|window.grafanaBootData = {| \\\n    nav.push({\\"id\\":\\"my-dashboard\\",\\"text\\":\\"Volkov Labs News\\",\\"icon\\":\\"play\\",\\"url\\":\\"/d/O4tc_E6Gz\\",\\"sortWeight\\":-2000}); \\\n    window.grafanaBootData = {|g" \\\n    /usr/share/grafana/public/views/index.html\n```\n\n## Javascript\n\nThe application title (the name that appears on the browser tab), login page title, and bottom-page links are trickier than others. The files keeping those settings are scattered in various locations depending on the Grafana version.\n\nTo simplify customization, we use a Regex pattern to find all occurrences and alter them accordingly.\n\n### Application Title\n\n<Image\n  title="Application title (the name that appears in the browser tab)."\n  src="/img/blog/2022-08-14-customize-grafana/application-title.png"\n/>\n\n```docker\nRUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i \'s|"AppTitle","Grafana")|"AppTitle","Star Application")|g\' {} \\;\n```\n\n### Login Title\n\n<Image\n  title="The title on the Grafana login page."\n  src="/img/blog/2022-08-14-customize-grafana/login-title.png"\n/>\n\n```docker\nRUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i \'s|"LoginTitle","Welcome to Grafana")|"LoginTitle","Welcome to Star Application")|g\' {} \\;\n```\n\n### Login Footer\n\n<Image\n  title="The bottom-placed links are configurable (names/URLs). You as well can remove them altogether."\n  src="/img/blog/2022-08-14-customize-grafana/footer.png"\n/>\n\n```docker\nRUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i \'s|{target:"_blank",id:"documentation",text:(0,r.t)("nav.help/documentation","Documentation"),icon:"document-info",url:"https://grafana.com/docs/grafana/latest/?utm_source=grafana_footer"},{target:"_blank",id:"support",text:(0,r.t)("nav.help/support","Support"),icon:"question-circle",url:"https://grafana.com/products/enterprise/?utm_source=grafana_footer"},{target:"_blank",id:"community",text:(0,r.t)("nav.help/community","Community"),icon:"comments-alt",url:"https://community.grafana.com/?utm_source=grafana_footer"}||g\' {} \\;\n\nRUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i \'s|{target:"_blank",id:"version",text:`${e.edition}${s}`,url:t.licenseUrl}||g\' {} \\;\nRUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i \'s|{target:"_blank",id:"version",text:`v${e.version} (${e.commit})`,url:i?"https://github.com/grafana/grafana/blob/main/CHANGELOG.md":void 0}||g\' {} \\;\nRUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i \'s|{target:"_blank",id:"updateVersion",text:"New version available!",icon:"download-alt",url:"https://grafana.com/grafana/download?utm_source=grafana_footer"}||g\' {} \\;\n```\n\n## Native plugins\n\nIn the following article, we explained how to remove unnecessary native Grafana plugins from your build. It is an easy way to avoid clutter in the Grafana UI. Moreover, as a tempting bonus for keeping only operating parts, you will end up with a lighter package attuned to your needs only.\n\n<BlogPost\n  href="/blog/native-grafana-plugins-20230409/"\n  title="Spring cleaning in Grafana."\n  src="/img/blog/2023-04-09-native-grafana-plugins/banner.png"\n/>\n\n## Docker file\n\n:::info Grafana Version\n\nThe docker file was updated to Grafana 10.0.0 on June 17, 2023.\n\n:::\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-app/blob/main/Dockerfile"\n  language="docker"\n/>\n\nWe constantly update it with all the latest configuration commands we were able to identify.',
  },
  {
    id: "the-missing-plugin-to-create-business-and-industrial-charts-in-grafana-1d8f7304229f/",
    metadata: {
      permalink:
        "/blog/the-missing-plugin-to-create-business-and-industrial-charts-in-grafana-1d8f7304229f/",
      source: "@site/blog/2022-08-01-missing-plugin/index.mdx",
      title:
        "The missing plugin to create business and industrial charts in Grafana",
      description:
        "Grafana is without a doubt one of the best analytics and data visualization platforms, with a wide range of chart panels and a long list of community plugins like Plotly. Nonetheless, none of them can compete with the flexibility of Apache ECharts.",
      date: "2022-08-01T00:00:00.000Z",
      formattedDate: "August 1, 2022",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "the-missing-plugin-to-create-business-and-industrial-charts-in-grafana-1d8f7304229f/",
        tags: ["Apache ECharts", "Grafana Crash Course"],
        image: "/img/blog/2022-08-01-missing-plugin/banner.png",
        keywords: [
          "ECharts",
          "Business",
          "Industrial",
          "Charts",
          "Grafana",
          "Visualization",
        ],
        updated: "2023-09-06T00:00:00.000Z",
      },
      prevItem: {
        title: "How to customize the Grafana user interface",
        permalink:
          "/blog/how-to-customize-the-grafana-user-interface-8d70a42dc2b6/",
      },
      nextItem: {
        title: "Balena NFS Server Project",
        permalink: "/blog/balena-nfs-server-and-client-project-5d5de6dd47ca/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nGrafana is without a doubt one of the best analytics and data visualization platforms, with a wide range of chart panels and a long list of community plugins like Plotly. Nonetheless, none of them can compete with the flexibility of Apache ECharts.\n\nApache ECharts is a free but powerful charting and visualization library that allows you to create intuitive, interactive, and highly customizable charts in a matter of minutes. It is written entirely in JavaScript and is based on the zrender library.\n\n<Image\n  title="Apache ECharts Panel - Examples in Grafana."\n  src="https://github.com/VolkovLabs/volkovlabs-echarts-panel/raw/main/src/img/examples.png"\n  lazy={false}\n/>\n\nApache ECharts Panel is a plugin for Grafana that allows you to integrate the Apache ECharts library and its unlimited capabilities into your Grafana dashboard. The original plugin was developed for Grafana 6.3 and 7.0 and was based on Apache ECharts 4.9.0. It hasn\'t been updated since then.\n\nVolkov Labs adapted and upgraded it based on the most recent Grafana 9 with the integration of Apache ECharts 5.3.3, which allowed adding new features such as Monaco Code Editor and support for SVG and Canvas renderers.\n\nYou can install Apache ECharts Panel from the Grafana Plugins catalog (Plugins Configuration menu). Alternatively, you can set up it manually by [downloading from GitHub](https://github.com/volkovlabs/volkovlabs-echarts-panel).\n\n## Apache ECharts\n\nThe Apache ECharts library is a powerful and robust data visualization solution. To get started with building visually appealing and insightful data visualizations, you do not need to be a senior JavaScript developer. Furthermore, if your use case is pretty unique, Apache ECharts is a perfect tool for developing visualizations of any complexity and scale.\n\nApache ECharts Panel for Grafana is a much-anticipated bridge that has now become available. You can combine the top-notch advantages of two outstanding open-source solutions, Grafana and Apache ECharts, into a single solution tailored to your specific requirements.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\nAccording to the [press release](https://www.globenewswire.com/fr/news-release/2021/01/26/2164391/17401/en/The-Apache-Software-Foundation-Announces-Apache-ECharts-as-a-Top-Level-Project.html)\n\n> "Apache ECharts is in use at Alibaba, Amazon, Baidu, GitLab, Intel, and Tencent, among others, as well as solutions such as Apache Superset data visualization software."\n\nThe project\'s popularity is exponentially growing, with over 50,000 stars on GitHub and 450,000 weekly downloads at [npm](https://www.npmjs.com/package/echarts).\n\n## Wind Speed\n\nThe Wind Speed chart is one of many captivating uses of the Apache ECharts library.\n\n- Each data element is displayed using a custom arrow.\n- The speed is shown by the color of the arrow.\n- The direction of the arrow indicates the direction of the wind.\n\nA lot of insightful information is cleverly packed into a single visualization.\n\n<Image\n  title="Visualizing Wind Speed using custom Arrows on the Grafana dashboard."\n  src="/img/blog/2022-08-01-missing-plugin/wind-speed.png"\n/>\n\n## Directed Graph\n\nVolkov Labs spent some time investigating the various options for visualizing directed graphs. The Apache ECharts easily met every single requirement we had in mind.\n\nThe following video highlights the capabilities of Apache ECharts for building directed and undirected graphs.\n\n<Video\n  src="https://www.youtube.com/embed/BcW7iyTadWE"\n  title="Can Apache ECharts render a directed graph?"\n/>\n\n### Tutorial\n\nThe launch of our [Live Dashboard](https://live.volkovlabs.io/) caused an avalanche of how-to requests from the Grafana community. We developed the following two-part tutorial explaining how we created this project.\n\nIn this project, we took advantage of a directed graph visualization to track company activities across Blog (Medium), GitHub, YouTube, and various external resources.\n\n<Video\n  src="https://www.youtube.com/embed/e3VHgpuzEF0"\n  title="Build directional graph in Grafana using Apache ECharts. Tutorial part 1."\n/>\n\n<Video\n  src="https://www.youtube.com/embed/oM7XAVlsOio"\n  title="Build directional graph in Grafana using Apache ECharts. Tutorial part 2."\n/>\n\n## Live Dashboard\n\nThe [Live Dashboard](https://live.volkovlabs.io) is now fully operational. The directed graphs are generated dynamically. We refresh the underlying data on a daily basis so that the visualization always provides the most recent information on our articles, releases, videos, and other activities.\n\n<Image\n  title="The Live Dashboard project helps us track our activities across all mediums."\n  src="/img/blog/2022-08-01-missing-plugin/live.png"\n/>\n\nDirected graphs use the force layout to automatically alter the location of nodes. Furthermore, depending on their kind, nodes have varied icons and styles. By clicking the elements, you can view an external URL or zoom in on the subgraphs.\n\nThe preceding tutorial provides a comprehensive overview of the implemented functionality.\n\nAll of our GitHub projects are shown in the screenshot below. At the time this screenshot was taken, we were working on all these projects.\n\n- [Apache ECharts Panel](https://live.volkovlabs.io/d/tXQ9_367z/apache-echarts-panel?orgId=1)\n- [Calendar panel](https://live.volkovlabs.io/d/0fgJcb4Vz/calendar-panel?orgId=1)\n- [Dynamic Text panel](https://live.volkovlabs.io/d/2L2sYjVVz/dynamic-text-panel?orgId=1)\n- [Data Manipulation panel](https://live.volkovlabs.io/d/h5IJk66nk/data-manipulation-panel?orgId=1)\n- [Environment data source](https://live.volkovlabs.io/d/B0kLhzR4k/environment-data-source?orgId=1)\n- [RSS-Atom data source](https://live.volkovlabs.io/d/zUDs5zRVk/rss-atom-data-source?orgId=1)\n- [Static data source](https://live.volkovlabs.io/d/heM1lTN4z/static-data-source?orgId=1)\n\nYou can see all of the releases we\'ve made for each project.\n\n<Image\n  title="The directed graph for GitHub displays all major and minor releases for our Grafana plugins."\n  src="/img/blog/2022-08-01-missing-plugin/github.png"\n/>\n\nWe invite you to visit our [Live Dashboard](https://live.volkovlabs.io) to find out more about the plugins we develop.\n\n## Apache ECharts Panel in the wild\n\nWe have received a lot of encouraging feedback from the community since we adopted and upgraded Apache ECharts Panel. Thank you very much!\n\nOur clients gratefully welcomed our assistance in upgrading from an earlier version of the library.\n\nVolkov Labs also switched industrial Plotly dashboards to Apache ECharts. We were able to preserve all existing functionality while also adding all of the required extra features, such as a custom toolbox button (to dynamically change the charts) and multiple Y-axis support.',
  },
  {
    id: "balena-nfs-server-and-client-project-5d5de6dd47ca/",
    metadata: {
      permalink: "/blog/balena-nfs-server-and-client-project-5d5de6dd47ca/",
      source: "@site/blog/2022-07-04-balena-nfs/index.mdx",
      title: "Balena NFS Server Project",
      description:
        "A week ago, Volkov Labs and Theia Scientific published a blog post about using NFS (Network File System) Server as a solution to share external storage between containers on balenaCloud. This problem is long-standing, and this article demonstrates a solution.",
      date: "2022-07-04T00:00:00.000Z",
      formattedDate: "July 4, 2022",
      tags: [
        {
          label: "Balena",
          permalink: "/blog/tags/balena",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "balena-nfs-server-and-client-project-5d5de6dd47ca/",
        tags: ["Balena"],
        image: "/img/blog/2022-07-04-balena-nfs/banner.png",
        keywords: ["Balena", "NFS", "IoT"],
        updated: "2023-02-14T00:00:00.000Z",
      },
      prevItem: {
        title:
          "The missing plugin to create business and industrial charts in Grafana",
        permalink:
          "/blog/the-missing-plugin-to-create-business-and-industrial-charts-in-grafana-1d8f7304229f/",
      },
      nextItem: {
        title: "Our plugins are ready for Grafana 9",
        permalink: "/blog/our-plugins-are-ready-for-grafana-9-2bc257db92eb/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nA week ago, Volkov Labs and Theia Scientific published a [blog post about using NFS (Network File System) Server](https://www.balena.io/blog/using-nfs-server-to-share-external-storage-between-containers-balena/) as a solution to share external storage between containers on balenaCloud. This problem is long-standing, and this article demonstrates a solution.\n\n:::info Archived\n\nThe project was removed from the balenaHub and archived in the GitHub repository.\n\n:::\n\nLet\'s set the stage, aka the problem.\n\n> Following containerization best practices, the Theiascope™ platform is separated into containers deployed in host network mode and interacts with each other using TCP and/or UDP ports. The Theia web application running on the Theiascope™ hardware powered by balenaOS deals with massive data, where exporting results can reach gigabytes in size. To prevent caching and delay in transferring files between containers, each container should have access to the same storage.\n\n<Video\n  src="https://www.youtube.com/embed/_kyNSLeAT84"\n  title="Share external storage between containers in balenaCloud."\n/>\n\nThe blog post described a docker file with the entry point scripts we used to build containers for the NFS Server. We also explained how NFS clients indefinitely try to mount NFS exports to ensure that NFS storage is available before the application starts.\n\nWe encourage you to read the article before continuing.\n\n## balenaCloud and balenaHub\n\n[BalenaCloud](https://www.balena.io/cloud/) is the container-based platform for deploying IoT (The Internet of things) fleets. It allows you to develop and deploy IoT fleets quickly and remotely update and monitor your devices and code from anywhere in the world.\n\nBalena created a [balenaHub](https://hub.balena.io) a couple of years ago to make life easier for everyone working with IoT, edge, and physical computing. If you have never worked with balena before, please look at the video from Ayan Pahwa, Developer Advocate for balena.\n\n<Video\n  src="https://www.youtube.com/embed/1B2gyBSuvlE"\n  title="Getting started with balena. Add your first device to balenaCloud."\n/>\n\nbalenaHub provides plenty of community fleets for you to add your device for testing and experimenting. Some fleets are not joinable and are called Projects. You can easily fork them and start exploring as other fleets.\n\n## Architecture\n\nBalena NFS Server and client project consists of three containers and can be forked from the [GitHub repository](https://github.com/VolkovLabs/balena-nfs).\n\n<Image\n  title="PostgreSQL container has NFS Server. NGINX container utilizes NFS Client to connect and access files on the NFS drive."\n  src="/img/blog/2022-07-04-balena-nfs/balena-nfs.png"\n  lazy={false}\n/>\n\nFirst, the project includes an NFS Server built on top of the PostgreSQL Alpine image. It uses OpenRC (dependency-based init system) to manage NFS services, which is the recommended way to start NFS service for Alpine Linux.\n\nSecond, it includes NFS Client build on top of the NGINX Alpine image with a custom entry point script to mount NFS export and provide direct access to the files on the storage.\n\n## Environment variables\n\nThe project supports various environment variables to specify storage labels and mount points that are defined in the `balena.yml` configuration file:\n\n| Environment Variable | Value                     | Description                                                      |\n| -------------------- | ------------------------- | ---------------------------------------------------------------- |\n| STORAGE_LABEL        | storage                   | External Storage ID, if not found `tmpfs` will be used instead.  |\n| STORAGE_MOUNT_POINT  | /mnt/nvme                 | Local mount point to mount Storage or `tmpfs`.                   |\n| POSTGRES_PASSWORD    | postgres                  | Password for the PostgreSQL database.                            |\n| PGDATA               | /mnt/nvme/postgresql/data | PostgreSQL path on the Storage or `tmpfs` mount point.           |\n| NFS_HOST             | localhost                 | NFS host, should be `localhost` for the local container.         |\n| NFS_HOST_MOUNT       | /                         | NFS exported mount. Set full path `/mnt/nvme` for NFS version 3. |\n| NFS_MOUNT_POINT      | /mnt/nvme                 | Mount point to mount NFS export.                                 |\n| NFS_SYNC_MODE        | async                     | Async or Sync mode.                                              |\n| NFS_VERSION          | nfs                       | Set `nfs4` to force use NFS version 4.                           |\n\nWhen you fork the project, you will have a chance to update all environment variables.\n\n<Image\n  title="You can override provided environment variables according to your setup."\n  src="/img/blog/2022-07-04-balena-nfs/fleet.png"\n/>\n\n## Grafana Dashboard\n\nTo manage running services and display device configuration, we added Grafana with the Balena Application plugin. The developed dashboard displays journal logs in real-time and will help troubleshoot any issues.\n\nIt\'s comparable to the functionality of the balenaCloud UI and can be extremely valuable in a network-constrained environment when the device is not connected to the Internet.\n\n<Image\n  title="Grafana dashboard allows managing running services and displaying device configuration."\n  src="/img/blog/2022-07-04-balena-nfs/dashboard.png"\n/>\n\nYou can access Grafana from the local network or public URL if it\'s enabled in the device configuration.',
  },
  {
    id: "our-plugins-are-ready-for-grafana-9-2bc257db92eb/",
    metadata: {
      permalink: "/blog/our-plugins-are-ready-for-grafana-9-2bc257db92eb/",
      source: "@site/blog/2022-06-20-grafana-9/index.mdx",
      title: "Our plugins are ready for Grafana 9",
      description:
        "Grafana 9 was released at GrafanaCONline 2022 on June 14, and it's the best version so far. Our open-source and commercial plugins were successfully tested using the 9.0.0-beta3 released weeks ago and updated using the latest Grafana 9 toolkit on the day it was released.",
      date: "2022-06-20T00:00:00.000Z",
      formattedDate: "June 20, 2022",
      tags: [
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
        {
          label: "Volkov Labs",
          permalink: "/blog/tags/volkov-labs",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "our-plugins-are-ready-for-grafana-9-2bc257db92eb/",
        tags: ["Release Notes", "Volkov Labs"],
        image: "/img/blog/2022-06-20-grafana-9/banner.png",
        keywords: [
          "ECharts",
          "Business",
          "Industrial",
          "Charts",
          "Grafana",
          "Visualization",
        ],
        updated: "2023-05-23T00:00:00.000Z",
      },
      prevItem: {
        title: "Balena NFS Server Project",
        permalink: "/blog/balena-nfs-server-and-client-project-5d5de6dd47ca/",
      },
      nextItem: {
        title:
          "Using Grafana and machine learning for real-time microscopy image analysis",
        permalink:
          "/blog/using-grafana-and-machine-learning-for-real-time-microscopy-image-analysis-9e78e210cddb/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nGrafana 9 was released at GrafanaCONline 2022 on June 14, and it\'s the best version so far. Our open-source and commercial plugins were successfully tested using the 9.0.0-beta3 released weeks ago and updated using the latest Grafana 9 toolkit on the day it was released.\n\nOne of the topics I heard from the Grafana community it\'s the hesitation to use third-party plugins:\n\n- Community plugins are not updated constantly and stopped being maintained after a while.\n- It is better not to use them and stick to the plugins supported by the Grafana team.\n\nVolkov Labs regularly updates our open-source, commercial plugins and templates based on the latest version of Grafana to stay up-to-date. With every significant Grafana release, we increase the major number in the plugin\'s version.\n\nBelow I want to highlight the latest updates with tutorials on how to hit the ground running.\n\n## Base64 Image/Video/Audio/PDF panel\n\nThe Base64 Image/Video/Audio/PDF Panel is a plugin for Grafana that displays Base64 encoded files in PNG, JPG, GIF, MP4, WEBM, MP3, OGG, and PDF formats.\n\nThe popular plugin was recently updated to support Video and Audio files in modern formats. You can learn more about this plugin through the newly revamped video on our YouTube channel.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Video, Live Camera Feed on Grafana Dashboard."\n/>\n\nThe [Base64 panel version 3.0.0](/plugins/volkovlabs-image-panel/release) is updated in the Grafana Catalog and supports Grafana 8.5+.\n\n## RSS/Atom Data Source\n\nCreated to display a Blog news feed on our demo server, the RSS/Atom data source became popular when Grafana removed proxy support in the News panel.\n\nThe data source supports different RSS and Atom formats with logic to extract various fields making it the most straightforward plugin to visualize news and updates.\n\n<Video\n  src="https://www.youtube.com/embed/RAxqS2hpWkg"\n  title="News feed tutorial for Grafana Dashboard."\n/>\n\nThe [RSS/Atom Data Source 2.0.0](/plugins/volkovlabs-rss-datasource/release) is updated in the Grafana Catalog and supports Grafana 8.5+. For older versions of Grafana, please use version 1.7.0.\n\n## Environment Data Source\n\nThe Environment data source is a plugin for Grafana that returns environment variables to visualize or use as Dashboard Variables. It\'s a unique plugin we created for The Internet of Things (IoT) devices in the balenaCloud.\n\n<Video\n  src="https://www.youtube.com/embed/sczRq2lI3e4"\n  title="Dashboard, Global and Environment variables."\n/>\n\nBecause of security reasons, the Environment Data Source can not be included in the Grafana Catalog.\n\nIt can be installed from our private repository or downloaded directly from GitHub.\n\n```sh\ngrafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource\n```\n\nThe [Environment Data Source 2.0.0](/plugins/volkovlabs-env-datasource/release) supports Grafana 8.5+. For older versions of Grafana, please use version 1.2.0.\n\n## Data Manipulation Panel\n\nThe Data Manipulation Panel is a plugin for Grafana that can be used to insert, update application data, and modify configuration directly from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entering and User input into Dashboard."\n/>\n\nWe understand the risk of data manipulation and take security concerns seriously. We recently published an [article exploring three secure ways](/blog/how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904) to connect the Data Manipulation panel to the API Server.\n\nThe Data Manipulation panel is available in the Grafana Catalog.\n\nPlease let us know if you have any questions or feature requests for this plugin in the [GitHub Issues](https://github.com/VolkovLabs/volkovlabs-form-panel/issues).\n\n## Apache ECharts Panel\n\nApache ECharts is a free, powerful charting and visualization library offering easy ways to add intuitive, interactive, and highly customizable charts. It is written in pure JavaScript and based on zrender.\n\nThe ECharts panel is a plugin for Grafana that allows visualizing Apache ECharts on your Grafana dashboard.\n\n<Image\n  title="Apache ECharts Examples Grafana instance."\n  src="https://github.com/VolkovLabs/volkovlabs-echarts-panel/raw/main/src/img/examples.png"\n  lazy={false}\n/>\n\nThe original plugin was developed for Grafana 6.3/7.0 and ECharts 4.9.0. It has not been maintained since then. Volkov Labs adapted and updated it based on the Grafana 9 with ECharts 5.3.3, introducing new features like Monaco Code Editor and supporting SVG and Canvas renderer.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\nThe Apache ECharts panel is available in the Grafana Catalog.',
  },
  {
    id: "using-grafana-and-machine-learning-for-real-time-microscopy-image-analysis-9e78e210cddb/",
    metadata: {
      permalink:
        "/blog/using-grafana-and-machine-learning-for-real-time-microscopy-image-analysis-9e78e210cddb/",
      source: "@site/blog/2022-06-17-machine-learning/index.mdx",
      title:
        "Using Grafana and machine learning for real-time microscopy image analysis",
      description:
        "On June 15, 2022, Mikhail Volkov from Volkov Labs and Christopher Field from Theia Scientific headlined their innovative session on the second day of GrafanaCONline 2022.",
      date: "2022-06-17T00:00:00.000Z",
      formattedDate: "June 17, 2022",
      tags: [
        {
          label: "Machine Learning",
          permalink: "/blog/tags/machine-learning",
        },
        {
          label: "Volkov Labs",
          permalink: "/blog/tags/volkov-labs",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "using-grafana-and-machine-learning-for-real-time-microscopy-image-analysis-9e78e210cddb/",
        tags: ["Machine Learning", "Volkov Labs"],
        image: "/img/blog/2022-06-17-machine-learning/banner.png",
        keywords: [
          "Machine Learning",
          "Industrial",
          "Charts",
          "Grafana",
          "Visualization",
        ],
        updated: "2023-03-24T00:00:00.000Z",
      },
      prevItem: {
        title: "Our plugins are ready for Grafana 9",
        permalink: "/blog/our-plugins-are-ready-for-grafana-9-2bc257db92eb/",
      },
      nextItem: {
        title: "Connect Data Manipulation Panel for Grafana to API Server",
        permalink:
          "/blog/how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nOn June 15, 2022, Mikhail Volkov from Volkov Labs and Christopher Field from [Theia Scientific](https://www.theiascientific.com/) headlined their innovative session on the second day of GrafanaCONline 2022.\n\nA month ago, we published the article [How Theia Scientific and Volkov Labs used Grafana and AI to analyze scientific images](https://grafana.com/blog/2022/04/29/how-theia-scientific-and-volkov-labs-use-grafana-and-ai-to-analyze-scientific-images/) on Grafana Blog and were thrilled to showcase our work at GrafanaCONline 2022.\n\n## GrafanaCONline\n\nFor Mikhail, it was his third time presenting in front of the Grafana community, talking about his projects going beyond Observability by using Grafana as a platform to build modern applications.\n\n> "Theia\'s production team demonstrated the deployment of machine learning (ML) models on an edge computing device for real-time microscopy image analysis, using Balena for remote device management and Grafana for application control and visualization.\n>\n> Custom panel plugins and dashboards packaged as a Grafana application are combined with a container-based, multi-service architecture to present scientists and engineers using electron microscopes with a coherent and customizable platform for automated image analysis."\n\n<Image\n  title="The home dashboard of the Theiascope™ application includes Model and Job Management panels."\n  src="/img/blog/2022-06-17-machine-learning/dashboard.png"\n  lazy={false}\n/>\n\nWith the help of Grafana, the project cut labor costs by 80%, reduced training time and operational expertise needed, and accelerated the delivery of unbiased results from years, months, and days to just seconds.\n\n## Presentation\n\nYou can watch the presentation with a live demonstration on Grafana\'s Youtube channel.\n\n<Video\n  src="https://www.youtube.com/embed/WRPnTFBX4rg"\n  title="Using Grafana and machine learning for real-time microscopy image analysis."\n/>\n\nVolkov Labs continues to work closely with Theia Scientific to improve the Theiascope™ platform and has already updated the application to the latest Grafana 9 introduced at GrafanaCONline 2022.',
  },
  {
    id: "how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904/",
    metadata: {
      permalink:
        "/blog/how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904/",
      source: "@site/blog/2022-06-12-data-manipulation-api/index.mdx",
      title: "Connect Data Manipulation Panel for Grafana to API Server",
      description:
        "We acknowledge the risks of data manipulation and consider security concerns seriously. This blog post explores three secure ways to connect Data Manipulation Panel to an API server.",
      date: "2022-06-12T00:00:00.000Z",
      formattedDate: "June 12, 2022",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "API",
          permalink: "/blog/tags/api",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904/",
        tags: ["Data Manipulation", "API"],
        image: "/img/blog/2022-06-12-data-manipulation-api/banner.png",
        keywords: ["Grafana", "Data Manipulation", "Forms"],
        updated: "2023-09-21T00:00:00.000Z",
      },
      prevItem: {
        title:
          "Using Grafana and machine learning for real-time microscopy image analysis",
        permalink:
          "/blog/using-grafana-and-machine-learning-for-real-time-microscopy-image-analysis-9e78e210cddb/",
      },
      nextItem: {
        title:
          "PyTorch in Ray Docker container with NVIDIA GPU support on Google Cloud",
        permalink:
          "/blog/we-tried-pytorch-in-docker-container-with-nvidia-gpu-support-on-google-cloud-5e30c49d9864/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe acknowledge the risks of data manipulation and consider security concerns seriously. This blog post explores three secure ways to connect Data Manipulation Panel to an API server.\n\nOur [recent post](/blog/data-manipulation-panel-plugin-for-grafana-97f9af2c67e0) and YouTube tutorial showcased various use cases to bring your Grafana dashboard to the next level using Data Manipulation Panel. This plugin can insert and update application data, as well as modify configuration directly from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entry and user input into dashboard."\n/>\n\nBefore moving forward, we recommend reading the introductory article to become familiar with Data Manipulation Panel and its capabilities.\n\n## Architecture\n\nData Manipulation Panel options allow you to specify the URL for the `GET` requests to receive initial values and the `POST`, `PUT`, or `PATCH` requests to update values sent in the JSON format.\n\n<Image\n  title="Data Manipulation Panel uses GET and POST/PUT requests to interact with API Server."\n  src="/img/blog/2022-06-12-data-manipulation-api/form-api.png"\n  lazy={false}\n/>\n\nYou can use any of the three methods to connect the plugin to an API server:\n\n- Publicly available server with additional header parameters (CORS restrictions).\n- API served using NGINX in the same domain as the Grafana server (CORS ready).\n- Custom data source using an HTTP proxy.\n\nLet\'s take a look at each of them closely.\n\n## Publicly available server\n\nIf your server is publicly available or resides within a private network, the simplest and easiest way is to directly connect it to the API server. Header parameters can be added to secure your REST API calls.\n\nThe disadvantage of this method is that API requests are visible to end-users. The REST API server should allow Cross-Origin Resource Sharing (CORS).\n\n> Cross-Origin Resource Sharing (CORS) is an HTTP-header-based method that enables a server to specify any origins (domain, scheme, or port) other than its own from which a browser should allow the loading of resources.\n\n### Example\n\nWe already explained how to configure the plugin in the video mentioned above. If this method works for your use case, you can find server code examples in the plugin\'s GitHub repository.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-form-panel/blob/main/server-json/server.ts"\n  language="js"\n/>\n\n## NGINX reverse proxy\n\nWe recommend that you run Grafana behind an NGINX reverse proxy for an additional security layer. The reverse proxy also allows you to provision additional API endpoints and static files in the same domain, which makes it CORS-ready.\n\n<Image\n  title="Grafana and Server API behind NGINX reverse proxy."\n  src="/img/blog/2022-06-12-data-manipulation-api/form-nginx-api.png"\n/>\n\nTo learn how to configure Grafana to run behind a reverse proxy, take a look at the Grafana tutorial [Run Grafana behind a reverse proxy](https://grafana.com/tutorials/run-grafana-behind-a-proxy/).\n\n### Configuration\n\nYou can add a section to redirect requests `/api/data-form` to the Docker container or server process in the NGINX configuration file. The rest of the requests should be redirected to Grafana.\n\nThe API server operates on the specific IP address and port accessible by NGINX, and end-users have no direct access to it.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2022-06-12-data-manipulation-api/nginx.conf"\n  language="nginx"\n/>\n\nThis option is CORS-ready as an endpoint is a part of the same domain, and API can be secured using Grafana or any other authentication method.\n\n## Custom Data Source\n\nThe last method is to use a custom data source with an HTTP proxy, which you can create following the Grafana tutorial [Add authentication for data source plugins](https://grafana.com/docs/grafana/latest/developers/plugins/add-authentication-for-data-source-plugins/#add-a-dynamic-proxy-route-to-your-plugin) and [our data source template](https://github.com/volkovlabs/volkovlabs-abc-datasource).\n\n> Grafana sends the proxy route to the server, where the data source proxy decrypts any sensitive data and interpolates the template variables with the decrypted data before making a request.\n\n### HTTP Proxy\n\nData sources with an HTTP proxy keep authentication information hidden from an end-user performing server-side requests.\n\nTo retrieve and update data using the HTTP Proxy, the required endpoint should be defined in the `routes` section of the `plugin.json` configuration file.\n\n```json\n{\n  "method": "GET",\n  "path": "feedback",\n  "reqRole": "Viewer",\n  "url": "{{ .JsonData.url }}/api/feedback"\n},\n{\n  "method": "POST",\n  "path": "feedback",\n  "reqRole": "Viewer",\n  "url": "{{ .JsonData.url }}/api/feedback"\n},\n```\n\n### Configuration\n\nEvery data source configured in Grafana has a sequential number and unique string identifiers. In our case, the API has an identifier `2` which we will use for proxying requests.\n\n<Image\n  title="Data Sources are provisioned in our Grafana as a part of the custom Application plugin."\n  src="/img/blog/2022-06-12-data-manipulation-api/datasources.png"\n/>\n\nLet\'s set up the Update Request options for Data Manipulation Panel. We set the URL `/api/datasources/proxy/2/feedback/submissions` to proxy requests to the API server instead of accessing directly.\n\n<Image\n  title="Update request configuration for the data source using HTTP proxy."\n  src="/img/blog/2022-06-12-data-manipulation-api/update.png"\n/>\n\nWe keep enhancing Data Manipulation Panel and collecting user feedback in search of fresh and challenging use cases.\n\nThe upcoming version of the plugin will be based on the Grafana 9 toolkit but will still preserve support for Grafana 8.5+.',
  },
  {
    id: "we-tried-pytorch-in-docker-container-with-nvidia-gpu-support-on-google-cloud-5e30c49d9864/",
    metadata: {
      permalink:
        "/blog/we-tried-pytorch-in-docker-container-with-nvidia-gpu-support-on-google-cloud-5e30c49d9864/",
      source: "@site/blog/2022-06-10-pytorch-nvidia-gpu/index.mdx",
      title:
        "PyTorch in Ray Docker container with NVIDIA GPU support on Google Cloud",
      description:
        "One of the commercial projects we are working on is based on Ray and uses PyTorch to process data using AI models. To create a development environment for the Grafana Application plugin, we built Docker images for the Backend. One of the requirements was to support PyTorch with CPU and NVIDIA GPU in the same image.",
      date: "2022-06-10T00:00:00.000Z",
      formattedDate: "June 10, 2022",
      tags: [
        {
          label: "Machine Learning",
          permalink: "/blog/tags/machine-learning",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "we-tried-pytorch-in-docker-container-with-nvidia-gpu-support-on-google-cloud-5e30c49d9864/",
        tags: ["Machine Learning"],
        image: "/img/blog/2022-06-10-pytorch-nvidia-gpu/banner.png",
        keywords: ["PyTorch", "GPU"],
        updated: "2023-04-30T00:00:00.000Z",
      },
      prevItem: {
        title: "Connect Data Manipulation Panel for Grafana to API Server",
        permalink:
          "/blog/how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904/",
      },
      nextItem: {
        title: "Data Manipulation plugin for Grafana",
        permalink:
          "/blog/data-manipulation-panel-plugin-for-grafana-97f9af2c67e0/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nOne of the commercial projects we are working on is based on Ray and uses PyTorch to process data using AI models. To create a development environment for the Grafana Application plugin, we built Docker images for the Backend. One of the requirements was to support PyTorch with CPU and NVIDIA GPU in the same image.\n\nProcessing AI models with CPU in PyTorch works out of the box and can be an option for the Development environment. Still, it\'s slow and not applicable for real-time operations or performance testing. To test NVIDIA GPU, we used one of the Google Cloud instances with GPU support.\n\nThis article will share our experience building Docker images with [Ray](https://www.ray.io/) and PyTorch on Google Cloud instances with GPU support. Ray is an open-source project that makes it simple to scale any compute-intensive Python workload from deep learning to production model serving.\n\n[PyTorch](https://pytorch.org/) is an open-source machine learning framework that accelerates the path from research prototyping to production deployment.\n\n## Google Cloud instances\n\nIf you have never used Google Cloud instances with GPU support in your organization, you will need to increase the quota to start any instances. The default quota for GPU instances is 0. You can learn more about GPU quota and how to increase it in the [Documentation](https://cloud.google.com/compute/resource-usage#gpu_quota).\n\nDifferent regions and zones provide various NVIDIA GPU models, and some of them are not available when you try to start a new instance. It took us a couple of retries to choose the right mix of GPU model and region to create a new instance.\n\nWe selected:\n\n- US Central region, Zone A.\n- 1 x NVIDIA Tesla K80.\n- Type N1-Standard-1 with one vCPU and 3.75Gb memory, which we can upgrade at any time for performance testing up to 8 vCPU.\n- Ubuntu 20.04 LTS with 30Gb Size.\n\n<Image\n  title="Creating a new Google Cloud instance with NVIDIA Tesla K80 GPU."\n  src="/img/blog/2022-06-10-pytorch-nvidia-gpu/configuration.png"\n  lazy={false}\n/>\n\n### Installation\n\nWe followed the [Google Cloud documentation](https://cloud.google.com/compute/docs/gpus/install-drivers-gpu#verify-windows) for installing GPU drivers. Installation using automated scripts took a while, and drivers could not load after a restart.\n\nMost of the installed packages are not required for our deployment. We use Docker containers and have no plans to run applications on the host machine.\n\nInstead of using provided scripts, we installed the latest version of NVIDIA Drivers for Tesla K80 from the repository.\n\n```sh\nsudo apt update\nsudo apt install nvidia-driver-470\n```\n\nAfter the installation was completed, the command `nvidia-smi` displayed information about the GPU:\n\n<Image\n  title="Command `nvidia-smi` can locate NVIDIA GPU after NVIDIA drivers installation."\n  src="/img/blog/2022-06-10-pytorch-nvidia-gpu/nvidia-smi.png"\n/>\n\n## Support GPU in Docker\n\nAfter NVIDIA drivers are installed on the host and the command `nvidia-smi` was able to locate GPU, we could move forward to install Docker, Docker Compose, and NVIDIA Toolkit.\n\n```sh\nsudo apt install docker-compose\ndistribution=$(. /etc/os-release;echo $ID$VERSION_ID) \\\n   && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \\\n   && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list\n\nsudo apt update\nsudo apt-get install -y nvidia-docker2\n\nsudo systemctl restart docker\n```\n\nAt this point, a working setup could be tested by running a base CUDA container and you should see the same output:\n\n```sh\ndocker run --rm --runtime=nvidia nvidia/cuda:11.0-base nvidia-smi\n```\n\n<Image\n  title="Running the `nvidia-smi` command in the Docker container."\n  src="/img/blog/2022-06-10-pytorch-nvidia-gpu/docker.png"\n/>\n\nYou can learn more about the NVIDIA Container toolkit installation in the [Documentation](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html).\n\n## Docker Compose with GPU support\n\nThe Docker-compose version 1.25 does not support NVIDIA runtime configuration and should be upgraded to version 1.27 or later.\n\nThe latest version of Docker Compose can be downloaded from GitHub.\n\n```sh\nsudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n```\n\nFor our tests, we created a file `docker-compose.yml` to run `nvidia-smi` command and image based on Ray with a test PyTorch application.\n\nThe environment variable `NVIDIA_VISIBLE_DEVICES: all` is essential for PyTorch to see all GPU devices.\n\n```yaml\nversion: "2"\nservices:\n  nvidia:\n    image: nvidia/cuda:11.0-base\n    runtime: nvidia\n    command: nvidia-smi\n  app:\n    container_name: app\n    build:\n      context: ./app\n    runtime: nvidia\n    environment:\n      NVIDIA_VISIBLE_DEVICES: all\n```\n\n### Configuration\n\nTo build a Docker image based on the latest version of Ray, we created a Docker file:\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2022-06-10-pytorch-nvidia-gpu/Dockerfile"\n  language="docker"\n/>\n\nFile `requirements.txt` to install the 1.10.0 version of the PyTorch:\n\n```python\ntorch==1.10.0\n```\n\nHere is the application we used to test PyTorch with CUDA support:\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2022-06-10-pytorch-nvidia-gpu/torch.py"\n  language="python"\n/>\n\n### Docker container\n\nLet\'s build and test created application container:\n\n```sh\nroot@gpu:/app# docker-compose build app\nBuilding app\nSending build context to Docker daemon  4.096kB\nStep 1/6 : FROM rayproject/ray:1.10.0-py38\n---> 2f51f6f631dd\nStep 2/6 : WORKDIR /app\n---> Using cache\n---> bd1c46292a36\nStep 3/6 : COPY requirements.txt ./\n---> Using cache\n---> 360bbc5e895d\nStep 4/6 : RUN pip3 install -r requirements.txt\n---> Using cache\n---> 3379070d95d2\nStep 5/6 : COPY ./app.py ./\n---> 5661ce1b61fc\nStep 6/6 : CMD ["python3", "./app.py"]\n---> Running in 75c604e59d9f\nRemoving intermediate container 75c604e59d9f\n---> cdd7582c3ee2\nSuccessfully built cdd7582c3ee2\nSuccessfully tagged app_app:latest\n\nroot@gpu:/app# docker-compose up app\nRecreating app ... done\nAttaching to app\napp        | CUDA Available: True\napp        | CUDA Devices count: 1\napp        | CUDA Version:  10.2\napp exited with code 0\n```\n\n## Summary\n\nWe successfully tested PyTorch with CUDA 10.2 and 11.4 in the Docker containers on the Google Cloud instance with GPU.\n\nAt this point, we are ready to add the actual application with additional Python requirements and build a full-featured Backend image.',
  },
  {
    id: "data-manipulation-panel-plugin-for-grafana-97f9af2c67e0/",
    metadata: {
      permalink:
        "/blog/data-manipulation-panel-plugin-for-grafana-97f9af2c67e0/",
      source: "@site/blog/2022-05-19-data-manipulation-panel/index.mdx",
      title: "Data Manipulation plugin for Grafana",
      description:
        "The Data Manipulation Panel plugin evolved from a commercial project we were working on. This solution allowed you to import and update application data, as well as modify settings, straight from your Grafana dashboard.",
      date: "2022-05-19T00:00:00.000Z",
      formattedDate: "May 19, 2022",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "API",
          permalink: "/blog/tags/api",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "data-manipulation-panel-plugin-for-grafana-97f9af2c67e0/",
        tags: ["Data Manipulation", "API"],
        image: "/img/blog/2022-05-19-data-manipulation-panel/banner.png",
        keywords: ["Grafana", "Data Manipulation", "Forms"],
        updated: "2023-09-21T00:00:00.000Z",
      },
      prevItem: {
        title:
          "PyTorch in Ray Docker container with NVIDIA GPU support on Google Cloud",
        permalink:
          "/blog/we-tried-pytorch-in-docker-container-with-nvidia-gpu-support-on-google-cloud-5e30c49d9864/",
      },
      nextItem: {
        title: "Installing Grafana plugins from a Private repository",
        permalink:
          "/blog/installing-grafana-plugins-from-a-private-repository-805b54a1add3/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nThe Data Manipulation Panel plugin evolved from a commercial project we were working on. This solution allowed you to import and update application data, as well as modify settings, straight from your Grafana dashboard.\n\nThe Grafana community had been looking for this solution, so one day we decided to make it open-source and submitted it for evaluation to the Grafana team for inclusion into the Grafana Plugins catalog.\n\nData Manipulation Panel is our brand-new Grafana plugin that our community was anticipating, and we are pretty confident that it will provide you with powerful capabilities to modify data in Grafana the way you want.\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entry and user input into dashboard."\n/>\n\n## Architecture\n\nThe plugin\'s options allow you to specify the URL for the `GET` requests to receive initial values and the `POST`, `PUT`, or `PATCH` requests to update values sent in the JSON format. Header parameters can be added to secure your REST API calls.\n\n<Image\n  title="Data Manipulation Panel uses GET and POST/PUT requests to interact with API Server."\n  src="/img/blog/2022-05-19-data-manipulation-panel/form-api.png"\n  lazy={false}\n/>\n\nThe plugin supports dashboard variables in the URL and header parameters.\n\nFor example, `http://localhost:3001/${var}`, where `${var}` is a dashboard variable.\n\n<Image\n  title="Plugin\'s options enable specifying URL, header parameters, and custom code."\n  src="/img/blog/2022-05-19-data-manipulation-panel/panel.png"\n/>\n\n## JavaScript Code\n\nYou can add custom JavaScript code snippets that will be executed after the browser\'s various requests, e.g. `GET`, `POST`, `PUT`, and `PATCH`.\n\nFor example, we added the browser\'s location reload in the provided screenshot after a successful `POST` request.\n\nThe custom code has access to the following:\n\n- panel options\n- response from the REST API call\n- form elements\n- Grafana services\n- variables that are replaced automatically.\n\nCheck out our [documentation](/plugins/volkovlabs-form-panel/code) for the available parameters.\n\n## Form Elements\n\nThe Data Manipulation Form plugin already supports the following form elements:\n\n| Element                          | Description                                                                          |\n| -------------------------------- | ------------------------------------------------------------------------------------ |\n| Date and time                    | Time picker to set and adjust date and time.                                         |\n| Disabled                         | Display values that can\'t be changed.                                                |\n| Number input                     | Field to enter numbers with minimum and maximum options.                             |\n| Number slider                    | Slider for numbers with minimum, maximum, and step options.                          |\n| Password input                   | Field to enter sensitive information.                                                |\n| Radio group with Boolean options | Select box with the `True` and `False` options.                                      |\n| Radio group with custom options  | Provide custom options.                                                              |\n| Select box with custom options   | Similar to a radio group visualized as a drop-down box.                              |\n| String input                     | Field to enter any alphanumeric values.                                              |\n| Text area                        | Multiline text area with an adjustable number of rows for comments and descriptions. |\n\n<Image\n  title="Form elements can be reordered and provide individual options."\n  src="/img/blog/2022-05-19-data-manipulation-panel/elements.png"\n/>\n\nWe plan to include the code editor and form elements for file and image upload in upcoming versions.\n\nIf you are interested in additional form elements, please [open an issue in our repository](https://github.com/volkovlabs/volkovlabs-form-panel).\n\n## Customization\n\nThe form provides the Submit and Reset buttons, which can be customized to use the following:\n\n- theme-specific sizes\n- types\n- icons\n- a flexible combination of background and foreground colors.\n\n<Image\n  title="Submit and Reset buttons can be customized to use theme-specific types and icons."\n  src="/img/blog/2022-05-19-data-manipulation-panel/buttons.png"\n/>\n\nForm elements can be displayed in a single column or split into multiple columns, and each element can be assigned to a specific column. This feature will be available in the upcoming version. The current version allows splitting editable and disabled form elements only.\n\n## Feedback dashboard\n\nLet\'s take a look at the example of using Data Manipulation Panel to submit comments, issues, and feature requests integrated directly into the plugin.\n\n<Image\n  title="Feedback dashboard with Data Manipulation Panel and native Grafana visualizations."\n  src="/img/blog/2022-05-19-data-manipulation-panel/feedback.png"\n/>\n\nFor a seamless user experience, the feedback form allows you to provide us with valuable feedback about the plugin\'s functionality. All reported requests are stored in the database and sent out using various communication channels.',
  },
  {
    id: "installing-grafana-plugins-from-a-private-repository-805b54a1add3/",
    metadata: {
      permalink:
        "/blog/installing-grafana-plugins-from-a-private-repository-805b54a1add3/",
      source: "@site/blog/2022-03-14-private-repository/index.mdx",
      title: "Installing Grafana plugins from a Private repository",
      description:
        "The Grafana Catalog application is one of our favorite features introduced in Grafana 8. It allows installing registered plugins from the official Grafana repository when connected to the Internet, but how do you upgrade and manage Grafana plugins without access to the external network?",
      date: "2022-03-14T00:00:00.000Z",
      formattedDate: "March 14, 2022",
      tags: [
        {
          label: "Development",
          permalink: "/blog/tags/development",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "installing-grafana-plugins-from-a-private-repository-805b54a1add3/",
        tags: ["Development"],
        image: "/img/blog/2022-03-14-private-repository/banner.png",
        keywords: ["Grafana", "Private Repository", "Plugins"],
        updated: "2023-02-14T00:00:00.000Z",
      },
      prevItem: {
        title: "Data Manipulation plugin for Grafana",
        permalink:
          "/blog/data-manipulation-panel-plugin-for-grafana-97f9af2c67e0/",
      },
      nextItem: {
        title:
          "Environment Variables for Configuration, Provisioning, and Dashboards in Grafana",
        permalink:
          "/blog/using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416/",
      },
    },
    content:
      'The Grafana Catalog application is one of our favorite features introduced in Grafana 8. It allows installing registered plugins from the official Grafana repository when connected to the Internet, but how do you upgrade and manage Grafana plugins without access to the external network?\n\nWith an increasing number of companies moving to the Cloud, there are still many use cases when Grafana instances are deployed offline, have firewall restrictions, and cannot connect to the official repository. Working on such a project, we examined various options to install Grafana plugins.\n\nThis article will talk about installing plugins using Grafana CLI (Command-Line Interface) and explain how to create a Private repository.\n\n## Manual installation\n\nThe easiest way to distribute the plugin to a single Grafana instance is\n\n- Download from the Grafana or GitHub repository.\n- Extract it to the particular folder specified in the configuration.\n- Restart Grafana.\n\nThe advantage of this method is its simplicity. Deploying multiple Grafana instances with various plugins will require custom procedures to install and upgrade utilizing this solution.\n\n## Grafana CLI\n\nGrafana CLI is a tool bundled with the Grafana server, which allows the performing of various administrative tasks and managing plugins.\n\nBefore Grafana 8, it was the most convenient way to install plugins on Grafana instances from the Grafana repository. It is also used for automated installation.\n\nThe general syntax for commands in Grafana CLI is:\n\n```sh\ngrafana-cli [global options] command [command options] [arguments...]\n```\n\nGrafana CLI allows overriding\n\n- Location of the plugin\'s archive.\n- Repository URL to download from.\n- Plugins folder, etc.\n\nYou can learn more about all those options in the [Documentation](https://grafana.com/docs/grafana/latest/cli/).\n\n### Update from URL\n\nInstalling a plugin by overriding the location of the plugin\'s archive is the most effortless way, which requires copying the plugin\'s archive to the HTTP(S) server reachable from the Grafana instance and repeating the same step to upgrade in the future.\n\n```sh\ngrafana-cli --insecure --pluginUrl https://company.com/plugins/<plugin-id>-<plugin-version>.zip plugins install <plugin-id>\n```\n\n### Update from Repository\n\nThe ultimate solution is to create a Private repository with a list of available plugins and versions. Overriding the repository URL allows installing and updating all plugins with the latest versions at once.\n\nThe syntax is:\n\n```sh\ngrafana-cli --repo "https://example.com/plugins" plugins install <plugin-id>\n```\n\n## Private Repository\n\nLooking around, we couldn\'t find any information on creating a Private repository so decided to share this information with the community.\n\nGrafana CLI looks for the `/plugins/repo` subfolder when setting a repository location. If plugins are found, it will display their names with the latest versions.\n\n```sh\n$ grafana-cli --repo https://volkovlabs.io/plugins plugins list-remote\nid: volkovlabs-env-datasource version: 2.2.0\nid: volkovlabs-rss-datasource version: 2.3.0\nid: volkovlabs-image-panel version: 3.3.0\nid: volkovlabs-form-panel version: 2.7.0\nid: volkovlabs-echarts-panel version: 4.0.0\nid: marcusolsson-calendar-panel version: 1.1.0\nid: marcusolsson-dynamictext-panel version: 2.1.0\nid: marcusolsson-static-datasource version: 2.1.0\n```\n\nThe format for the index file is to create a JSON array with the definition of the plugin and the latest version.\n\n```json\n{\n  "plugins": [\n    {\n      "id": "volkovlabs-env-datasource",\n      "type": "datasource",\n      "url": "https://github.com/VolkovLabs/volkovlabs-env-datasource",\n      "versions": [\n        {\n          "version": "2.2.0"\n        }\n      ]\n    }\n  ]\n}\n```\n\n### Versions\n\nTo list available versions for the specific plugin, provide the plugin\'s name for the `list-versions` command.\n\n```sh\n$ grafana-cli --repo https://volkovlabs.io/plugins plugins list-versions volkovlabs-env-datasource\n2.2.0\n2.1.0\n2.0.0\n1.2.0\n1.1.0\n```\n\nGrafana CLI will request a file `/plugins/repo/volkovlabs-env-datasource` and display available versions.\n\nBackend plugins can be stored as separate files for each architecture build or specified as any for an archive with all supporting architecture.\n\n```json\n{\n  "versions": [\n    {\n      "arch": {\n        "any": {}\n      },\n      "version": "2.2.0"\n    },\n    {\n      "arch": {\n        "any": {}\n      },\n      "version": "2.1.0"\n    },\n    {\n      "arch": {\n        "any": {}\n      },\n      "version": "2.0.0"\n    },\n    {\n      "arch": {\n        "any": {}\n      },\n      "version": "1.2.0"\n    },\n    {\n      "arch": {\n        "any": {}\n      },\n      "version": "1.1.0"\n    }\n  ]\n}\n```\n\n### Download\n\nThe next step is to upload plugins to specific locations and install them. To install the latest version of the `volkovlabs-env-datasource` plugin Grafana CLI will look for the download file in the particular location.\n\n```sh\n/plugins/volkovlabs-env-datasource/versions/1.1.0/download\n```\n\nHere is an example of how to install the plugin from the Private repository we just created.\n\n```sh\n$ grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource\n✔ Downloaded volkovlabs-env-datasource v2.2.0 zip successfully\nPlease restart Grafana after installing plugins.\n```\n\nTo update all plugins at once, execute.\n\n```sh\n$ grafana-cli --repo https://volkovlabs.io/plugins plugins update-all\n```\n\n## Environment Data Source\n\nIf not used correctly, the Environment Data Source plugin might expose environment variables with sensitive information (password, access token, etc.). That limits it from being a part of the official Grafana repository.\n\nAs discussed in [our previous article](/blog/using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416), we utilize it for our IoT (Internet of Things) projects, and our Private repository helps us install and update this plugin.\n\nWe are constantly updating and improving our Grafana plugins. A private repository has become a part of our workflow to verify and test plugins on our demo server and projects.',
  },
  {
    id: "using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416/",
    metadata: {
      permalink:
        "/blog/using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416/",
      source: "@site/blog/2022-02-20-environment-datasource/index.mdx",
      title:
        "Environment Variables for Configuration, Provisioning, and Dashboards in Grafana",
      description:
        "The number of use cases operating Grafana as a platform to build modern applications is increasing. Compared to a single central Grafana instance, we are looking at multiple distributed installations with new data sources.",
      date: "2022-02-20T00:00:00.000Z",
      formattedDate: "February 20, 2022",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
        {
          label: "Environment Data Source",
          permalink: "/blog/tags/environment-data-source",
        },
        {
          label: "Variables",
          permalink: "/blog/tags/variables",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416/",
        tags: ["Grafana Crash Course", "Environment Data Source", "Variables"],
        image: "/img/blog/2022-02-20-environment-datasource/banner.png",
        keywords: ["Variables", "Grafana", "Visualization"],
        updated: "2023-05-23T00:00:00.000Z",
      },
      prevItem: {
        title: "Installing Grafana plugins from a Private repository",
        permalink:
          "/blog/installing-grafana-plugins-from-a-private-repository-805b54a1add3/",
      },
      nextItem: {
        title: "How to create your first Grafana Dashboard",
        permalink:
          "/blog/how-to-create-your-first-grafana-dashboard-bd0f68d631bd/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nThe number of use cases operating Grafana as a platform to build modern applications is increasing. Compared to a single central Grafana instance, we are looking at multiple distributed installations with new data sources.\n\nOne example is the Environment Data Source, which we created for our customer, who uses balenaCloud, the container-based platform for deploying Internet of Things (IoT) fleets of connected Linux devices.\n\nIn balenaCloud each IoT device is independent of its own Grafana instance, and each device can be uniquely identified by environment variables exposed within the project.\n\nWatch this video about the dashboard, global, and environment variables in Grafana.\n\n<Video\n  src="https://www.youtube.com/embed/sczRq2lI3e4"\n  title="Dashboard, Global and Environment variables."\n/>\n\nBefore looking at the Environment Data Source, let\'s examine how you can utilize environment variables in Grafana.\n\n## Configuration\n\nGrafana has default and custom configuration files. You can customize your Grafana instance by modifying the configuration file or using environment variables.\n\nTo override an option, use a predefined pattern `GF_<SectionName>_<KeyName>` to name exported variables.\n\n```sh\nexport GF_DEFAULT_INSTANCE_NAME=my-instance\nexport GF_SECURITY_ADMIN_USER=owner\nexport GF_AUTH_GOOGLE_CLIENT_SECRET=newS3cretKey\n```\n\n### Docker\n\nIf you are using Docker and Docker Compose, then environment variables can be set in the command line or the `docker-compose.yml` file.\n\n```docker\ngrafana:\n  container_name: grafana\n  image: grafana/grafana:latest\n  ports:\n    - 3000:3000\n  environment:\n    - GF_AUTH_ANONYMOUS_ORG_ROLE=Admin\n    - GF_AUTH_ANONYMOUS_ENABLED=true\n    - GF_AUTH_BASIC_ENABLED=false\n    - GF_ENABLE_GZIP=true\n    - GF_USERS_DEFAULT_THEME=light\n```\n\nYou can find all available configuration options in the [Documentation](https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/).\n\n## Provisioning\n\nIt is possible to use environment variable interpolation in all three provisioning configuration types. The allowed syntax is either `$ENV_VAR_NAME` or `${ENV_VAR_NAME}` and can be used only for values.\n\nDashboard\'s definition files do not support environment variables, just in the dashboard provisioning configuration.\n\nExample of using environment variables for data source provisioning.\n\n```yaml\ndatasources:\n  - name: Example\n    url: http://localhost:$PORT\n    user: $USER\n    secureJsonData:\n      password: $PASSWORD\n```\n\n## Display Environment Variables\n\nSurprisingly, we could not find a solution on how to display environment variables on the dashboard and decided to create a backend data source plugin that retrieves environment variables exposed to the Grafana instance.\n\n<Image\n  title="The Environment Data Source allows retrieving environment variables exposed to the Grafana instance."\n  src="/img/blog/2022-02-20-environment-datasource/dashboard.png"\n  lazy={false}\n/>\n\n### Configuration\n\nIn Settings, the data source has the Filter option to avoid exposing unnecessary or secured variables.\n\n<Image\n  title="The Data Source can filter out unnecessary or secured variables."\n  src="/img/blog/2022-02-20-environment-datasource/configuration.png"\n/>\n\n## Dashboard Variables\n\nDashboard variables allow you to create more interactive and dynamic dashboards. Instead of hard-coding things like server, application, and sensor names in your metric queries, you can use variables in their place. Variables are displayed as dropdown lists at the top of the dashboard.\n\nThe Environment Data Source supports querying environment variables and returns its value to retrieve metric queries or display them on the dashboard.\n\n<Image\n  title="The Environment Data Source supports querying environment variables."\n  src="/img/blog/2022-02-20-environment-datasource/variables.png"\n/>\n\n## balenaCloud\n\nBalena is a complete set of tools for building, deploying and managing fleets of connected Linux devices. As we mentioned, each IoT device in our project provides Grafana with a custom application plugin for end-users.\n\nVariables can be added to the device and assigned to a specific service or all services running on the device. You can use environment variables to store secrets and other sensitive values out of your codebase and configure them when needed.\n\n<Image\n  title="In balenaCloud, variables can be added to the device or fleet-wide."\n  src="/img/blog/2022-02-20-environment-datasource/balena-cloud.png"\n/>\n\nEmploying the Environment Data Source, you can retrieve custom and generic environment variables configured for the IoT device and display them on Grafana\'s Home page and improve other dashboards.\n\n<Image\n  title="Balena\'s environment variables configured for the IoT device and displayed in Grafana."\n  src="/img/blog/2022-02-20-environment-datasource/balena-variables.png"\n/>\n\n## Grafana Catalog\n\nBecause of the security risk, the Environment data source can not be included in the Grafana Catalog.\n\nIt can be installed from our Private Repository or downloaded directly from [GitHub](https://github.com/volkovlabs/volkovlabs-env-datasource).\n\n```sh\ngrafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource\n```\n\nAny feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!',
  },
  {
    id: "how-to-create-your-first-grafana-dashboard-bd0f68d631bd/",
    metadata: {
      permalink:
        "/blog/how-to-create-your-first-grafana-dashboard-bd0f68d631bd/",
      source: "@site/blog/2022-01-26-first-dashboard/index.mdx",
      title: "How to create your first Grafana Dashboard",
      description:
        "We all heard that to get a better grasp of something. It is better to see it once than to hear about it a thousand times. Could anything be better than seeing? Creating it yourself!",
      date: "2022-01-26T00:00:00.000Z",
      formattedDate: "January 26, 2022",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
        {
          label: "Analytics",
          permalink: "/blog/tags/analytics",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "how-to-create-your-first-grafana-dashboard-bd0f68d631bd/",
        tags: ["Grafana Crash Course", "Analytics"],
        image: "/img/blog/2022-01-26-first-dashboard/banner.png",
        keywords: ["Business", "Charts", "Grafana", "Visualization"],
        updated: "2023-02-14T00:00:00.000Z",
      },
      prevItem: {
        title:
          "Environment Variables for Configuration, Provisioning, and Dashboards in Grafana",
        permalink:
          "/blog/using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416/",
      },
      nextItem: {
        title: "Grafana 101 - What, Why, Who?",
        permalink: "/blog/grafana-101-what-why-who-6b25f0d0fd11/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe all heard that to get a better grasp of something. It is better to see it once than to hear about it a thousand times. Could anything be better than seeing? Creating it yourself!\n\nThe satisfying AHA moment, a.k.a. \'Now I get it\' moment sparks up just after you personally iron all little wrinkles along the way.\n\nLet\'s get started. After reading my article and following along, I hope you will arrive at the same results as I did.\n\n<Video\n  src="https://www.youtube.com/embed/HNCKbGfAU0Q"\n  title="How to create your Business Grafana dashboard."\n/>\n\nSuppose your brain works like mine and requires a high-level picture first, then before proceeding, I recommend you to take a look at [my previous article](/blog/grafana-101-what-why-who-6b25f0d0fd11). It lays out all key Grafana concepts and talks about\n\n- What Grafana is.\n- What components it consists of.\n- How they interact.\n\nIf you can not wait any longer, let\'s get to it!\n\n## Choose a dataset\n\nStart with deciding what exactly you will display on your first Grafana Dashboard. That question ventured me to the [Kaggle.com](https://kaggle.com) website. It is the largest online community for data scientists, which also provides a ton of datasets for free download.\n\nI was intrigued by the electric vehicle charging station locations dataset as I immediately imagined using the Geomap Grafana visualization. It takes latitude and longitude as parameters to draw data points on the world map. The dataset set has more than 50K entries and promises to look impressive on the map.\n\n<Image\n  title="Geomap Visualization in Grafana dropdown selection."\n  src="/img/blog/2022-01-26-first-dashboard/geomap.png"\n  lazy={false}\n/>\n\nThe Geomap visualization is currently in the Beta version. Should that have been a concern? Maybe for shy and hesitant, but I felt lucky that day! Adventure is my middle name, as they say.\n\nAfter I downloaded and eyeballed the dataset, I realized it might have had too many columns for a quick experiment. I went ahead and removed the columns that did seem unnecessary. It does not mean that the ones I kept are all important. The absolute must are only two of them: Latitude and Longitude. The rest is up to you. The list of what I kept is below.\n\n- Fuel Type Code\n- Station Name\n- Street Address\n- City\n- State\n- ZIP\n- Plus4\n- Status Code\n- Groups With Access Code\n- Access Days Time\n- Latitude\n- Facility Type\n- Longitude\n\nStep 1 is complete if you have your dataset ready. In my case, I had an `ev_locations.csv` file with described columns and the header row removed.\n\n## Choose a data storage\n\nFor the first Grafana Dashboard, I recommend using one of the standard data sources, meaning those already a part of the Grafana Platform and are installed automatically with the Grafana installation package.\n\nThe [CSV data source](https://grafana.com/grafana/plugins/marcusolsson-csv-datasource/) is not installed by default and does require a couple of extra steps in setting it up. You are indeed welcome to explore that route.\n\n### PostgreSQL\n\nMy idea was to perform as few steps as possible. Therefore, I chose the PostgreSQL database as a backend storage technology. It already has a data source embedded into the Grafana Platform, free and easy to use. It sounded like a good fit.\n\n<Video\n  src="https://www.youtube.com/embed/SbjIWnrMIgk"\n  title="PostgreSQL with Timescale is the ultimate storage partner for Grafana."\n/>\n\nBefore I continue, I have to mention something important. While preparing this article, I utilized Docker containers technology which essentially imitates multiple environments in one host. I used PostgreSQL in a Docker container, which means I have not directly installed it on my machine. The Docker approach is optional, I am fond of Docker since it keeps my workstation clean.\n\nThe question is open if I should write a Docker 101 article with all key concepts. Let me know if that interests you, and I will jot it down for you real quick. You do not have to use Docker, the good old ways of installing everything on your local machine directly also work just fine for this experiment.\n\n### Setup\n\nAlright, let\'s get back to where we left off. After I installed PostgreSQL, I ran two commands. The first command was to create a table.\n\n```sql\ncreate table ev_locations\n(\nFuel_Type_Code           varchar(400) NULL,\nStation_Name             varchar(400) NULL,\nStreet_Address           varchar(400) NULL,\nCity                     varchar(400) NULL,\nState                    varchar(400) NULL,\nZIP                      varchar(400) NULL,\nPlus4                    varchar(400) NULL,\nStatus_Code              varchar(400) NULL,\nGroups_With_Access_Code  varchar(400) NULL,\nAccess_Days_Time         varchar(400) NULL,\nLatitude                 varchar(400) NULL,\nFacility_Type            varchar(400) NULL,\nLongitude                varchar(400) NULL\n);\n```\n\nThe second command was to populate it with data from the `ev_locations.csv` file I had created earlier.\n\n```sql\ncopy ev_locations from \'/tmp/ev_locations.csv\' delimiter\',\' CSV header;\n```\n\nStep 2 is complete when you have loaded your data file into the PostgreSQL database.\n\n## Install Grafana\n\nLike PostgreSQL, you can install it directly on your machine or use Grafana in the Docker container. Either way works. The latter is cleaner to my taste.\n\n<Video\n  src="https://www.youtube.com/embed/xTQpV7B700w"\n  title="How to Install Grafana for Data Analysts and Data Scientists."\n/>\n\nDownload the Grafana Installation package of your choice. It could be Linux, Windows, Mac, or a Docker Container.\n\n<Image\n  title="Grafana can be installed on Linux, Windows, Mac, Docker, and ARM platforms."\n  src="/img/blog/2022-01-26-first-dashboard/download.png"\n/>\n\nOnce Grafana is installed, go to your browser and enter the following URL. That should open the Grafana web application with full functionality.\n\n```\nhttp://localhost:3000\n```\n\nStep 3 is complete when you can open Grafana on local port 3000.\n\n## Geomap visualization\n\nI will provide concise instructions to make it easier to follow. On the left-hand side, I saw the main menu, hovered the plus sign, and selected Create Dashboard. Next, I chose to add a new panel. Below is the window where I arrived at that moment.\n\n<Image\n  title="Navigate to Query Editor and update SQL to visualize data in the panel."\n  src="/img/blog/2022-01-26-first-dashboard/new-panel.png"\n/>\n\nThe screen looked overwhelming, but the more time I spent playing around with different options, the more comfortable I got. My usual preference is to write my SQL queries from scratch. I do not favor any helpers since I am a SQL champ and always "know better."\n\nFor that reason, I clicked Edit SQL and entered the simple `SELECT` statement that would be needed. I also changed Format As to Table. Another thing to point out is `limit 5` in my query. Since I was learning, I wanted to limit the volume of the fetched data. Once I had everything set up, I removed the limit.\n\n<Image\n  title="Query Editor with final SQL statement to retrieve data for Geomap."\n  src="/img/blog/2022-01-26-first-dashboard/sql.png"\n/>\n\nFinally, the time came for the fun part. On the right-hand side, under the Search for element, there are three tabs, and one is called Visualization. Yes! That was it. I chose it and reviewed the list of all available visualizations.\n\n<Image\n  title="I chose it and reviewed the list of all available visualizations."\n  src="/img/blog/2022-01-26-first-dashboard/panels.png"\n/>\n\nYou bet I hit the Geomap one. Every Grafana visualization has many properties to modify optionally. I did the bare minimum to complete this project swiftly. Here is what I altered. I chose North America for a Map View.\n\n<Image\n  title="I chose North America for a Map View."\n  src="/img/blog/2022-01-26-first-dashboard/map-view.png"\n/>\n\n## Dashboard variable\n\nThe little cherry on top was a filter by facility type. That is done via variables. I went to the gear icon for Dashboard Settings on the top right corner and then into the Variables menu.\n\nBelow is the picture showing how I set it up.\n\n- Following the naming convention best practice, I used the `v_` prefix since it was a variable name.\n- The label is how the filter is called on the dashboard.\n- Query determines what values for the filter are going to be.\n- Sort is to make sure the values are sorted in the filter.\n\n<Image\n  title="Add variables to filter data by State and facility type."\n  src="/img/blog/2022-01-26-first-dashboard/variables.png"\n/>\n\nThe last step is to save the Dashboard by clicking the Save button in the upper right corner. Vuala. The dashboard is ready.\n\nStep 4 is complete when you have a working dashboard on your local machine.\n\n## Let others access your Grafana dashboard\n\nThat step might be tricky, depending on how hard it is for you to access the user-facing server. You might likely need help from your Network teammates to help with setting this up. Web Servers are far beyond the scope of this article. I only can tell that I am lucky enough to have my Grafana Servers where I can experiment as I please.\n\nHowever, there is one trick that I would like to share with you. It is pretty easy to transfer the dashboard from one Grafana application to other.\n\nIn my case, from my local Grafana to the Grafana running on Google Cloud and powering our demo server. I clicked on the Share icon. It can be found in the View mode to the right of the Dashboard title.\n\n<Image\n  title="Click on the Share icon to export the dashboard."\n  src="/img/blog/2022-01-26-first-dashboard/share.png"\n/>\n\nThen I went to Export, next to the View JSON. I copied the JSON file from my local Grafana and pasted it into the Grafana on the demo server. That\'s all. BOOM! I did not have to recreate a new dashboard from scratch. I just copied the description file.\n\nHere how the dashboard looks like.\n\n<Image\n  title="Geomap visualization for Electric Vehicle Charging Station."\n  src="/img/blog/2022-01-26-first-dashboard/final.png"\n/>\n\nAny feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!',
  },
  {
    id: "grafana-101-what-why-who-6b25f0d0fd11/",
    metadata: {
      permalink: "/blog/grafana-101-what-why-who-6b25f0d0fd11/",
      source: "@site/blog/2022-01-21-grafana-101/index.mdx",
      title: "Grafana 101 - What, Why, Who?",
      description:
        "The Grafana community is constantly growing, and we are happy to welcome new professionals onboard this flexible and powerful tool. Grafana has been of interest to deep technology experts in the recent past. Although, lately, more and more people from different backgrounds and skill sets are turning heads toward it.",
      date: "2022-01-21T00:00:00.000Z",
      formattedDate: "January 21, 2022",
      tags: [
        {
          label: "Grafana Crash Course",
          permalink: "/blog/tags/grafana-crash-course",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title: "Creative Director at Volkov Labs, Grafana Champion",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "grafana-101-what-why-who-6b25f0d0fd11/",
        tags: ["Grafana Crash Course"],
        image: "/img/blog/2022-01-21-grafana-101/banner.png",
        keywords: ["Business", "Charts", "Grafana", "Visualization"],
        updated: "2023-04-09T00:00:00.000Z",
      },
      prevItem: {
        title: "How to create your first Grafana Dashboard",
        permalink:
          "/blog/how-to-create-your-first-grafana-dashboard-bd0f68d631bd/",
      },
      nextItem: {
        title: "Keep up with the most recent news while working in Grafana",
        permalink:
          "/blog/do-you-want-to-be-on-top-of-the-latest-news-staying-in-grafana-9abb064ed449/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nThe Grafana community is constantly growing, and we are happy to welcome new professionals onboard this flexible and powerful tool. Grafana has been of interest to deep technology experts in the recent past. Although, lately, more and more people from different backgrounds and skill sets are turning heads toward it.\n\nThis article answers basic questions about Grafana and is designed to be the first step in your from zero to hero Grafana adventure. Let\'s discover together what made Grafana to be installed over 700.000 times across the world.\n\nWhat is Grafana? After researching publications, and documentation, and picking the brains of the renowned Grafana experts, it turned out it was a million-dollar question. This tool has so many facets that there is no one definite straightforward answer in the community. I took some liberty and came up with my definition and the basic explanations of Grafana architecture.\n\n## All key concepts to know\n\nGrafana is open-source software that allows you to combine many different data sources converting your data into graphical visualizations for observability. Observability is a new buzzword that means visualizations to help with answering ambiguously defined questions, providing enough analysis to make critical decisions quickly.\n\nIn its nutshell, Grafana consists of 3 logical components or layers\n\n- Grafana Platform\n- Data Source\n- Visualization\n\nData Sources and Visualizations are also widely called plugins. You can have Data Sources and Visualizations forged together into one plugin. In that case, it is called an Application plugin.\n\n### Grafana Platform\n\nThe Grafana Platform takes care of user authentication, authorization, and deployment on various operations systems and provides you with a venue where any number of plugins can be installed, managed, and shared with users according to your security policies.\n\n### Data Source\n\nData Source allows the Grafana Platform to talk with your data storage. For example, the PostgreSQL plugin allows the Grafana Platform to retrieve data from the PostgreSQL database and send it to Visualization components.\n\nWatch the video where I explain why PostgreSQL is the ultimate storage partner for Grafana.\n\n<Video\n  src="https://www.youtube.com/embed/SbjIWnrMIgk"\n  title="PostgreSQL with Timescale is the ultimate storage partner for Grafana."\n/>\n\nSupported Data Sources can be categorized:\n\n- Time-series: Prometheus, Graphite, OpenTSDB, InfluxDB\n- Logging & Document: Loki, Elasticsearch\n- Distributed Tracing: Jaeger, Zipkin, Tempo\n- SQL: MySQL, PostgreSQL, Microsoft SQL Server\n- Cloud: AWS CloudWatch, Azure Monitor, Google Cloud Monitoring\n\n### Visualizations\n\nVisualizations convert retrieved data frames into dynamic graphical representations such as histograms, geo maps, bars, and candlestick charts, to name a few.\n\n<Image\n  title="Website analytics using Apache ECharts, Bar chart, stats panels in Grafana."\n  src="/img/blog/2022-01-21-grafana-101/visualization.png"\n  lazy={false}\n/>\n\nTwo more key Grafana concepts are Panels and Dashboards. To me, they are the easiest of all. A Grafana Panel is a working visualization connected to your data source. A Grafana Dashboard is a combination of panels.\n\n## Plugins Dashboard\n\nEnthusiasts of the Grafana Community create new Data Sources and Visualizations every day. We at Volkov Labs created [an information dashboard](https://release.volkovlabs.io/d/hHK1qmpnk/grafana-catalog?orgId=1) with the number of downloads for all Grafana plugins.\n\n<Image\n  title="The information dashboard with the number of downloads for all Grafana plugins."\n  src="/img/blog/2022-01-21-grafana-101/dashboard.png"\n/>\n\nIt is a one-stop listing to simplify your Grafana plugin search. Such a simple solution made a big difference, especially given that there are no equivalents out there.\n\nYou can download any plugin as a code from GitHub or install it from the Grafana Catalog and easily mount it on top of the preinstalled Grafana. All plugins have been verified and went through rigorous peer review. This dashboard updates in real time.\n\n## How to get started with Grafana\n\nIf we sum up all key concepts in one workflow, here is what we get. You install the Grafana Platform and add the Grafana plugins for your data storage if it is not yet installed by default.\n\nNext, you create a Dashboard, add a Panel, connect it to the Data Source, choose a Visualization, configure it by composing your queries, adjust visuals (colors, sizes, title, etc.), save it and share the link with your peers. Boom! You can get as creative as humanely possible. This is the outstanding beauty of Grafana.\n\n## Quick facts to complete the picture\n\n- Super light-weighted software.\n- Presently, Grafana is primarily a read-only tool. Yet, that might change in the future. Check out the [Data Manipulation](/plugins/volkovlabs-form-panel) panel.\n- The visualizations could be refreshed as often as every 100 milliseconds. That, in particular, makes Grafana the ideal tool for monitoring any processes in real time.\n- Grafana does not store any data. Instead, it provides a secure path from your database and data storage to the visualization directly.\n- Grafana allows the dashboard creators to utilize the languages they are already familiar with. The queries that are used by the Grafana dashboards are transmitted to the databases in their native semantics.\n\n## Grafana Use Cases\n\nGrafana dashboards could be placed:\n\n- Locally. For instance, that could be a screen attached to a wall in the office or laboratory.\n- In Intranet. For internal use of the company\'s employees to display important KPIs like performance metrics, the progress of the current sprint, and real-time sales volumes for the just-launched merchandise.\n- On the Internet. To provide analytical services to the company\'s clients or share real-time analytics with fellow researchers in scientific communities.',
  },
  {
    id: "do-you-want-to-be-on-top-of-the-latest-news-staying-in-grafana-9abb064ed449/",
    metadata: {
      permalink:
        "/blog/do-you-want-to-be-on-top-of-the-latest-news-staying-in-grafana-9abb064ed449/",
      source: "@site/blog/2021-12-28-rss-datasource/index.mdx",
      title: "Keep up with the most recent news while working in Grafana",
      description:
        "When you open Grafana, what is the first panel you see? It's most likely the News panel on the Home dashboard, which contains the most recent blog entries from the Grafana team and community. The News panel directly loads the RSS feed into the browser, and while it works for some feeds, it has numerous restrictions.",
      date: "2021-12-28T00:00:00.000Z",
      formattedDate: "December 28, 2021",
      tags: [
        {
          label: "RSS/Atom Data Source",
          permalink: "/blog/tags/rss-atom-data-source",
        },
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "do-you-want-to-be-on-top-of-the-latest-news-staying-in-grafana-9abb064ed449/",
        tags: ["RSS/Atom Data Source", "Dynamic Text"],
        image: "/img/blog/2021-12-28-rss-datasource/banner.png",
        keywords: ["Image", "PDF", "Base64", "Visualization"],
        updated: "2023-09-16T00:00:00.000Z",
      },
      prevItem: {
        title: "Grafana 101 - What, Why, Who?",
        permalink: "/blog/grafana-101-what-why-who-6b25f0d0fd11/",
      },
      nextItem: {
        title: "Display large PDF documents in Grafana",
        permalink:
          "/blog/using-grafana-to-display-large-pdf-documents-weve-got-you-covered-4e654e8d4bce/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWhen you open Grafana, what is the first panel you see? It\'s most likely the News panel on the Home dashboard, which contains the most recent blog entries from the Grafana team and community. The News panel directly loads the RSS feed into the browser, and while it works for some feeds, it has numerous restrictions.\n\nLooking around, we discovered several open conversations and issues related to updating the News panel or creating an RSS and Atom data source. The question is, how to display data from such data sources? Time series or table panels are not appropriate alternatives for displaying news in a custom layout.\n\nYou can find a video version of this post on our YouTube channel.\n\n<Video\n  src="https://www.youtube.com/embed/RAxqS2hpWkg"\n  title="News feed tutorial for Grafana Dashboard."\n/>\n\nWe maintain [Dynamic Text Panel](/plugins/volkovlabs-dynamictext-panel), which displays data frames on a custom layout built with Markdown, HTML, and Handlebars.\n\nAn RSS data source was implemented with the recently released [Data Source Template](https://github.com/volkovlabs/volkovlabs-abc-datasource). This template is similar to the panel plugin template introduced in the previous articles. RSS/Atom Data Source retrieves a feed and returns data frames to display news in the Dynamic Text Panel plugin or other custom panels.\n\n## Data source plugin\n\n> Data source plugins can communicate with external data sources and return the data in a format that Grafana can understand. You can immediately display the data in any of your current dashboards by adding a data source plugin.\n\nThe Grafana Plugins catalog now lists 120 data source plugins, 22 of which were added this year. There are several questions you need to address when thinking about developing a new data source plugin:\n\n- Is it possible to retrieve the data via the HTTP(S) protocol?\n- Does a standard HTTP(S) application backend meet your requirements and provide all necessary options for authentication?\n- Does the data source need support for alerting?\n\nThe HTTP(S) protocol can be used to read RSS and Atom feeds, and in most circumstances, no authentication is required. Authentication can be introduced in a future release, and the default authentication options in the HTTP(S) backend should be sufficient.\n\nWe decided to develop RSS/Atom Data Source without the backend using [our data source plugin template](https://github.com/volkovlabs/volkovlabs-abc-datasource). Similar to the panel plugin template, this template comes preconfigured with Docker Compose, initial provisioning, and continuous integration with test coverage settings.\n\n## Add Data Source\n\nLet\'s add a new RSS data source to the Grafana blog and create a panel to display the latest news similar to the News Panel plugin.\n\nYou can add the RSS/Atom Data Source manually in the Data Sources Configuration menu or provision it through configuration files.\n\n<Image\n  title="We are adding an RSS/Atom data source for showing a newsfeed in Grafana."\n  src="/img/blog/2021-12-28-rss-datasource/datasource.png"\n  lazy={false}\n/>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2021-12-28-rss-datasource/provisioning.yml"\n  language="yaml"\n/>\n\n## Dynamic Text panel\n\nThe next step is to add a Dynamic Text panel on the dashboard and set content with Markdown, HTML, and Handlebars.\n\n<Image\n  title="Adding a new Dynamic Text panel on the Dashboard for showing a newsfeed in Grafana."\n  src="/img/blog/2021-12-28-rss-datasource/dashboard.png"\n/>\n\nTo correctly display the date, it should be of the `Time` type. All fields returned by the data source should be of the `String` type and can be transformed by converting a field type with a specified input format to `Time` or `Number`.\n\n<Image\n  title="Convert field type transformation for the pubDate field as Time."\n  src="/img/blog/2021-12-28-rss-datasource/transformation.png"\n/>\n\nHere is the content of the panel to imitate the look of the News panel:\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2021-12-28-rss-datasource/table.html"\n  language="html"\n/>\n\nYou can find more information about the Dynamic Text Panel plugin and various helpers in our [documentation](/plugins/volkovlabs-dynamictext-panel).\n\n## AWS feed\n\nIf AWS experiences an unexpected outage, you can track the status directly on your Grafana dashboard.\n\n<Image\n  title="AWS CloudFront Service Status on the Grafana dashboard."\n  src="/img/blog/2021-12-28-rss-datasource/aws.png"\n/>\n\n## Redis Status page\n\nThe Redis Status page is based on the Atom format and can be displayed using this data source.\n\n<Image\n  title="Redis Status page based on the Atom format feed."\n  src="/img/blog/2021-12-28-rss-datasource/redis.png"\n/>\n\nUsing the RSS/Atom data source, you can combine your system and application metrics with newsfeeds from AWS, Redis, and other providers to stay up to date on any issues on their side.',
  },
  {
    id: "using-grafana-to-display-large-pdf-documents-weve-got-you-covered-4e654e8d4bce/",
    metadata: {
      permalink:
        "/blog/using-grafana-to-display-large-pdf-documents-weve-got-you-covered-4e654e8d4bce/",
      source: "@site/blog/2021-12-17-display-large-pdf/index.mdx",
      title: "Display large PDF documents in Grafana",
      description:
        "In the recent article on our blog, we delved into the advantages of utilizing Docker containers and initial provisioning when crafting our panel plugin template for Grafana. This approach has proven to be valuable when implementing the current feature request for Base64 Image/Video/Audio/PDF Panel and letting us swiftly provide solutions for long-term plugin support.",
      date: "2021-12-17T00:00:00.000Z",
      formattedDate: "December 17, 2021",
      tags: [
        {
          label: "Base64 Image/Video/Audio/PDF",
          permalink: "/blog/tags/base-64-image-video-audio-pdf",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "using-grafana-to-display-large-pdf-documents-weve-got-you-covered-4e654e8d4bce/",
        tags: ["Base64 Image/Video/Audio/PDF"],
        image: "/img/blog/2021-12-17-display-large-pdf/banner.png",
        keywords: ["Image", "PDF", "Base64", "Visualization"],
        updated: "2023-09-09T00:00:00.000Z",
      },
      prevItem: {
        title: "Keep up with the most recent news while working in Grafana",
        permalink:
          "/blog/do-you-want-to-be-on-top-of-the-latest-news-staying-in-grafana-9abb064ed449/",
      },
      nextItem: {
        title: "Our panel plugin template for Grafana",
        permalink:
          "/blog/we-created-our-own-panel-plugin-template-for-grafana-665f7e6760d1/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nIn the [recent article](/blog/display-base64-encoded-images-from-any-data-source-on-your-dashboard-398a99ba5b5e) on our blog, we delved into the advantages of utilizing Docker containers and initial provisioning when crafting our panel plugin template for Grafana. This approach has proven to be valuable when implementing the current feature request for Base64 Image/Video/Audio/PDF Panel and letting us swiftly provide solutions for long-term plugin support.\n\nDuring the creation of Base64 Image/Video/Audio/PDF Panel for one of our projects, we also included support for displaying PDF documents. It\'s satisfying to see that the plugin is now used to display PDF files stored in databases such as PostgreSQL.\n\nFor an in-depth overview of the plugin, feel free to check out the video on our YouTube channel.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Video, Live Camera Feed on Grafana Dashboard."\n/>\n\n## PDF documents\n\nPDF documents are classified into four categories based on their size:\n\n- small (10-100kb)\n- medium (100-1MB)\n- large (1-16MB)\n- huge (16-128MB)\n\nOur plugin was designed to support small and medium-sized PDF documents that you can easily test without setting up a separate database for storage. For this purpose, we have used the static data source and stored the data in the dashboard.\n\nTo validate and assess the plugin\'s performance when showcasing large PDF documents, we followed these steps:\n\n1. Installed PostgreSQL.\n2. Loaded PDF documents into the database.\n3. Created a data source and dashboard to facilitate validation and performance checks.\n\nFurthermore, it is essential to verify that the script is easily deployable for continuous integration and development purposes.\n\n## PostgreSQL\n\nFrom Grafana\'s perspective, all data sources are the same because they return data frames. We received a feature request for the plugin to enable display of large PDF documents retrieved from a PostgreSQL database.\n\n<Image\n  title="Large PDF document retrieved from a PostgreSQL database and displayed in Grafana."\n  src="/img/blog/2021-12-17-display-large-pdf/panel.png"\n  lazy={false}\n/>\n\nTo install PostgreSQL, we added a container with the latest version of the `postgres` image. We specified a volume for the folder `/docker-entrypoint-initdb.d`, which takes care of creating necessary tables and permissions when starting.\n\n```yaml\npostgres:\n  image: postgres\n  restart: always\n  environment:\n    POSTGRES_PASSWORD: postgres\n  ports:\n    - 5432:5432\n  volumes:\n    - ./postgres:/docker-entrypoint-initdb.d\n```\n\nIn our case, it was a table with the `bytea` fields to store binary data with unique names. When images and PDF documents are retrieved from the database, they can be stored in the Base64 format or transformed using the `encode()` command.\n\n```sql\nCREATE TABLE images (name text, img bytea, UNIQUE(name));\n```\n\n## Loading PDF files into the database\n\nTo load PDF documents and test images into the database, we created a Node.js script:\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-image-panel/blob/main/postgres/load.ts"\n  language="js"\n/>\n\n## Provisioning\n\nThe initial provisioning configuration that adds a new dashboard for PostgreSQL is already present in our plugin template.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-image-panel/blob/main/provisioning/dashboards/default.yaml"\n  language="yaml"\n/>\n\nWe have included a configuration to provision a PostgreSQL data source with SSL disabled, as well as a specific login, password, and URL pertaining to the database setup.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-image-panel/blob/main/provisioning/datasources/postgres.yaml"\n  language="yaml"\n/>\n\nYou can find more information about the PostgreSQL data source in the [official documentation](https://grafana.com/docs/grafana/latest/datasources/postgres/).\n\n## Load data\n\nThe final step is to start containers and load data. When they start, Grafana and PostgreSQL will be automatically provisioned and ready for use.\n\nIt takes around 1-2 seconds to load a 13-megabyte PDF document with 2,990 pages. The user who requested this feature was pretty happy with results, therefore we passed the plugin to the Grafana team for review and approval, and it was later added to the Grafana Plugins catalog.\n\nPlease check the [plugin\'s repository](https://github.com/VolkovLabs/volkovlabs-image-panel) and let us know if you have any questions or suggestions for future improvements.',
  },
  {
    id: "we-created-our-own-panel-plugin-template-for-grafana-665f7e6760d1/",
    metadata: {
      permalink:
        "/blog/we-created-our-own-panel-plugin-template-for-grafana-665f7e6760d1/",
      source: "@site/blog/2021-12-10-panel-template/index.mdx",
      title: "Our panel plugin template for Grafana",
      description:
        "Grafana has excellent tutorials on building panel plugins, but we found ourselves repeating the same steps when creating custom plugins for our customers. Eventually, we decided to create our template for a panel plugin, which I hope can be helpful for the community.",
      date: "2021-12-10T00:00:00.000Z",
      formattedDate: "December 10, 2021",
      tags: [
        {
          label: "Development",
          permalink: "/blog/tags/development",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "we-created-our-own-panel-plugin-template-for-grafana-665f7e6760d1/",
        tags: ["Development"],
        image: "/img/blog/2021-12-10-panel-template/banner.png",
        keywords: ["Template", "Panel", "Grafana", "Visualization"],
        updated: "2023-02-15T00:00:00.000Z",
      },
      prevItem: {
        title: "Display large PDF documents in Grafana",
        permalink:
          "/blog/using-grafana-to-display-large-pdf-documents-weve-got-you-covered-4e654e8d4bce/",
      },
      nextItem: {
        title: "Display Base64 images from any data source",
        permalink:
          "/blog/display-base64-encoded-images-from-any-data-source-on-your-dashboard-398a99ba5b5e/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nGrafana has excellent tutorials on building panel plugins, but we found ourselves repeating the same steps when creating custom plugins for our customers. Eventually, we decided to create our template for a panel plugin, which I hope can be helpful for the community.\n\nGrafana\'s tutorial [Build a panel plugin](https://grafana.com/tutorials/build-a-panel-plugin/) provides information on setting up the environment, creating a new plugin, and explaining the basics of a panel development using data frames and options control. It\'s a great starting point, and we recommend reading it before continuing with this article.\n\nAs I mentioned before, we wanted to have a template, which can be used as a base for a new panel with everything in place and updated to the latest version of Grafana. We called it the [Abc panel](https://github.com/VolkovLabs/volkovlabs-abc-panel).\n\n## Panel plugins\n\nPanels allow visualizing of data received from data sources. While Grafana has several built-in panels like Table, Time Series, and Text, you can also create your custom panels.\n\n<Image\n  title="Panel plugins are registered in the Grafana Catalog and provide many visualization options and features."\n  src="/img/blog/2021-12-10-panel-template/panels.png"\n  lazy={false}\n/>\n\nThere are a lot of use cases that require custom visualization with additional logic implemented on the front end, which goes beyond standard and available panels.\n\n## Docker container\n\nFor all of our developments, we use Docker and Docker Compose to orchestrate containers. [Compose](https://docs.docker.com/compose/) is a tool for defining and running multi-container Docker applications.\n\nHere are some benefits of using Docker containers compared to locally installed Grafana.\n\n- Easy to deploy and share configuration with team members and customers.\n- Allows testing plugins against multiple versions and the main branch to be prepared for the upcoming release.\n- Docker always starts from a fresh configuration with initial Provisioning done automatically (more information below).\n\nOur typical configuration for Grafana is included in the template.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-abc-panel/blob/main/docker-compose.yml"\n  language="yaml"\n/>\n\nIn this configuration, Grafana starts in Anonymous mode and does not require authentication. Any plugins can be installed at the start-up automatically.\n\nWe use the [Static Data Source](/plugins/volkovlabs-static-datasource/) to prototype the idea and then include additional services to Docker Compose and corresponding data sources to Grafana.\n\n## Building and Signing\n\nBefore starting the Grafana container, the plugin should be built and signed in the `/dist` folder. The other option is to enable the development mode.\n\nThe `/dist` folder is mounted to the Grafana container in the provided configuration. Plugin signing was introduced in Grafana 7.0 and became mandatory for Grafana 8.0. Take a look at the [Documentation](https://grafana.com/docs/grafana/latest/developers/plugins/sign-a-plugin/) about different signing levels.\n\nTo build and sign plugins as Private we use scripts configured in the `package.json` file. When the plugin is ready to release, the signature can be updated by the Grafana team to Community or Commercial and the parameter `rootUrls` can be removed.\n\n```json\n"scripts": {\n    "build": "grafana-toolkit plugin:build --coverage",\n    "sign": "grafana-toolkit plugin:sign --rootUrls http://localhost:3000/",\n  },\n```\n\n### Visual Studio Code\n\nScripts can be executed using the command line or Visual Studio Code, which is our preferred UI for development, and we recommend it to our clients who want to contribute and follow the process.\n\n<Image\n  title="Run build, sign script from the Visual Studio Code, our preferred UI for development."\n  src="/img/blog/2021-12-10-panel-template/vscode.png"\n/>\n\nYou may notice special `--coverage` flag added to the build command to generate coverage files, which are uploaded and reviewed as a part of Continuous Integration (CI).\n\n## Provisioning\n\nTo make the development process repeatable, transferrable, and easier for the Grafana team to Review, we create provisioning files to add data sources, application plugins, and dashboards in the `/provisioning` folder.\n\nHere is an example of how to add a Static Data Source:\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-abc-panel/blob/main/provisioning/datasources/datasources.yaml"\n  language="yaml"\n/>\n\nTo add or update dashboards, they should be exported as Global and placed in the `/provisioning/dashboards` folder. Detailed information can be found in the Grafana [Documentation](https://grafana.com/docs/grafana/latest/administration/provisioning/).\n\n## Testing and Continuous Integration\n\nValidating test coverage is included in the CI workflow. To track coverage, we use CodeCov - the leading Code Coverage solution.\n\n<Image\n  title="We are tracking and reviewing code coverage with the CodeCov."\n  src="/img/blog/2021-12-10-panel-template/codecov.png"\n/>\n\nOn every commit, GitHub CI Action checks the plugin\'s functionality by running tests and submitting coverage to CodeCov. With additional functionality, overall test coverage can decrease, and the action fails. The CodeCov can track it and help you keep the test coverage at an acceptable level.\n\nHere is a part of the GitHub Action to submit coverage to CodeCov.\n\n```yaml\n- name: Upload coverage to Codecov\n        uses: codecov/codecov-action@v2\n        with:\n          directory: ./coverage/\n          files: ./coverage/lcov.info\n          env_vars: OS,PYTHON\n          fail_ci_if_error: true\n```\n\n## Long-term Support\n\nEvery release of Grafana introduces new features, breaking changes, and minor updates. Depending on the features and complexity of the custom plugin, some tests can fail, and parts of the code should be replaced or improved with every major Grafana release.\n\nWe recommend doing manual testing of custom plugins and applications for each new release. As mentioned before, Docker with Provisioning and CI included in the template makes it effortless.',
  },
  {
    id: "display-base64-encoded-images-from-any-data-source-on-your-dashboard-398a99ba5b5e/",
    metadata: {
      permalink:
        "/blog/display-base64-encoded-images-from-any-data-source-on-your-dashboard-398a99ba5b5e/",
      source: "@site/blog/2021-09-27-image-panel/index.mdx",
      title: "Display Base64 images from any data source",
      description:
        "Base64 Image/PDF panel plugin was recently upgraded and has everything you need to display images from any data source on your dashboards.",
      date: "2021-09-27T00:00:00.000Z",
      formattedDate: "September 27, 2021",
      tags: [
        {
          label: "Base64 Image/Video/Audio/PDF",
          permalink: "/blog/tags/base-64-image-video-audio-pdf",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Founder at Volkov Labs, Grafana Champion",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "display-base64-encoded-images-from-any-data-source-on-your-dashboard-398a99ba5b5e/",
        description:
          "Base64 Image/PDF panel plugin was recently upgraded and has everything you need to display images from any data source on your dashboards.",
        tags: ["Base64 Image/Video/Audio/PDF"],
        image: "/img/blog/2021-09-27-image-panel/banner.png",
        keywords: ["Image", "PDF", "Base64", "Visualization"],
        updated: "2023-09-09T00:00:00.000Z",
      },
      prevItem: {
        title: "Our panel plugin template for Grafana",
        permalink:
          "/blog/we-created-our-own-panel-plugin-template-for-grafana-665f7e6760d1/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nThe Base64 Image/PDF Panel plugin has recently been upgraded in the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-image-panel/) and now has everything you need to display images from any data source on your dashboards.\n\nThe initial version of the Grafana plugin was designed for the project analyzing a camera feed in real-time and simplified the original project by displaying AI-analyzed images on the Grafana dashboard.\n\n<Image\n  title="Analyzing camera feeds in real-time using RedisAI, OpenCV-Python, and Redis plugins for Grafana."\n  src="/img/blog/2021-09-27-image-panel/bat-camera.png"\n  lazy={false}\n/>\n\n## Updates\n\nSince the original version, the Base64 Image/PDF Panel plugin has achieved the following:\n\n- Support for Grafana 8.\n- More than 45,000 downloads.\n- Featured in the [Grafana Community Plugin Showcase (August 2021)](https://grafana.com/blog/2021/08/10/grafana-community-plugin-showcase-august-2021/).\n- Used for various projects, such as security camera monitoring.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Live Camera Feed on Grafana Dashboard."\n/>\n\n## Getting Started\n\nYou can install Base64 Image/PDF Panel from the command line or directly in the Grafana Cloud with the `grafana-cli` tool.\n\n```sh\ngrafana-cli plugins install volkovlabs-image-panel\n```\n\nIn the latest version of Grafana 8.1, you can install standalone plugins from the Grafana Plugins catalog.\n\n<Image\n  title="Grafana Plugins catalog allows installing plugins directly from the dashboard without restarting the application."\n  src="/img/blog/2021-09-27-image-panel/installation.png"\n/>\n\n## Panel Features\n\nThe values returned from the data source can be Base64 encoded with or without definition in the format like `data:image/jpg;base64,ENCODED-CONTENT` or `data:application/pdf;base64,ENCODED-CONTENT`.\n\nIf no definition is provided, the file type is automatically determined based on the first Base64 symbol.\n\n<Image\n  title="Base64 Image/PDF panel displays an image using the static data source."\n  src="/img/blog/2021-09-27-image-panel/panel.png"\n/>\n\nIf the data source returns more than one field of the `string` type, you can choose the field name in the plugin\'s options. If the data source returns multiple rows, the image from the last row is displayed in the panel.\n\nThe image\'s dimensions can be automatically adjusted, left as-is, or changed based on the values you specify in the panel settings.\n\nPlease check the [plugin\'s repository](https://github.com/VolkovLabs/volkovlabs-image-panel) and let us know if you have any questions or suggestions for future improvements.',
  },
];
