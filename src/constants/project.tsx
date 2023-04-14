import React from "react";
import { PluginItem } from "../types";

/**
 * Project List
 */
export const ProjectList: PluginItem[] = [
  {
    title: "Balena Application",
    name: "volkovlabs-balena-app",
    description: (
      <>
        Display device information and manage services using Balena Supervisor
        API.
      </>
    ),
    href: "/plugins/volkovlabs-balena-app/",
    badge:
      "https://img.shields.io/static/v1?label=balena&message=Hub&labelColor=gray&color=black&style=for-the-badge",
  },
  {
    title: "Grafana Dev Templates",
    name: "template",
    description: <>Start from well-constructed template.</>,
    href: "/blog/development-templates-2.2.0-20230216/",
    badge: "https://img.shields.io/badge/Development-black?style=for-the-badge",
  },
  {
    title: "Volkov Labs Application",
    name: "volkovlabs-app",
    description: <>Custom Docker image with Grafana.</>,
    href: "/plugins/volkovlabs-app/",
    badge: "https://img.shields.io/badge/Development-black?style=for-the-badge",
  },
];
