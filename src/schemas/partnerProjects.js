import { router } from "../router/router";

export const partnerProjectsInterface = (payload) => {
  return {
    id: payload.id,
    image:
      payload.image && payload.image.hasOwnProperty("url")
        ? payload.image.url
        : "/img/no_image.png",
    name: payload.name,
    description: payload.description,
    button: {
      link: payload.link && !payload.route.uid ? payload.link.url : null,
      route: payload.route && payload.route.uid ? `partner_project/${payload.route.uid}` : null,
      icon: payload.icon,
      selfwindow: payload.selfwindow,
      text: payload.button,
    },
  };
};
