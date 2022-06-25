export const newsInterface = (payload) => {
    return {
      title: payload.title,
      description: payload.description,
      date: payload.date
    };
  };