export const staticProjectInterface = (payload) => {
  return {
    id: payload.id,
    img_background:
      payload.img_background && payload.img_background.hasOwnProperty("url")
        ? payload.img_background.url
        : "/img/no_image.png",
    img_project:
      payload.img_project && payload.img_project.hasOwnProperty("url")
        ? payload.img_project.url
        : "/img/no_image.png",
    name: payload.name,
    topic: payload.topic,
    description: payload.description,
    button: payload.button,
    url: payload.link ? payload.link.url : null,
    color_gradient: {
      start: payload.start_gradient,
      end: payload.end_gradient,
    },
  };
};
