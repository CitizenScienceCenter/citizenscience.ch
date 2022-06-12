export const eventsInterface = (payload) => {
  return {
    path: payload.path,
    image:
      payload.image && payload.image.hasOwnProperty("url") ? payload.image.url : "/img/cs_event_default.jpg",
    title: payload.title,
    content: payload.content,
    abstract: payload.abstract,
    speakers: payload.speakers,
    location: payload.location,
    start: payload.start,
    end: payload.end,
    state: payload.state
  };
};
