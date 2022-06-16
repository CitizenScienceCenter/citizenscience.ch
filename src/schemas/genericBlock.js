export const genericBlockInterface = (payload) => {
  return {
    heading: payload.heading,
    title: payload.title,
    subtitle: payload.subtitle,
    image:
      payload.image && payload.image.hasOwnProperty("url")
        ? payload.image.url
        : null,
    description: payload.description,
    button: {
      link: payload.link_1 && !payload.route_1 ? payload.link_1.url : null,
      route: payload.route_1,
      icon: payload.icon_1,
      selfwindow: payload.selfwindow_1,
      text: payload.button_1,
    },
    second_button: {
      link: payload.link_2 && !payload.route_2 ? payload.link_2.url_2 : null,
      route: payload.route_2,
      icon: payload.icon_2,
      selfwindow: payload.selfwindow_2,
      text: payload.button_2,
    },
    toggle_img_style: !!payload.toggle_img_style,
    reverse: !!payload.reverse,
  };
};
