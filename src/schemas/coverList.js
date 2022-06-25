export const cover_list = {
  en: [
    {
      image: "cover.jpg",
      title: "Citizen Science Center Zurich",
      lead: "Next Generation Citizen Science",
    },
  ],
  de: [
    {
      image: "cover.jpg",
      title: "Citizen Science Center Zürich",
      lead: "Bürgerwissenschaft der nächsten Generation",
    },
  ],
};

for (let lang in cover_list) {
  cover_list[lang][0] = {
    ...cover_list[lang][0],
    ...{
      expiration: null,
      path: null,
      button: null,
      extra_path: null,
      extra_button: null,
      extra_logos: {
        logo_right: null,
        logo_left: null,
      },
    },
  };
}

export const coverListInterface = (payload) => {
  return {
    image:
      payload.image && payload.image.hasOwnProperty("url")
        ? payload.image.url
        : "cover.jpg",
    title: payload.title,
    lead: payload.lead,
    expiration: payload.expiration,
    path: payload.path ? payload.path.url : null,
    button: payload.button,
    extra_path: payload.extra_path ? payload.extra_path.url : null,
    extra_button: payload.extra_button,
  };
};
