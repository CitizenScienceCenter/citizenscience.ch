export const partnershipInterface = (payload) => {
  return {
    name: payload.name,
    description: payload.description,
    button: {
      link: payload.link ? payload.link.url : null,
      icon: payload.icon,
      text: payload.button,
    },
  };
};
