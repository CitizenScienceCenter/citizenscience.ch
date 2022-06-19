const _people_list = (items) => {
  if (!Array.isArray(items)) return [];
  return items.map((p) => ({
    name: p.name,
    position: p.position,
    email: p.email,
    photo: p.image && p.image.hasOwnProperty("url") ? p.image.url : "/img/people_default.png",
  }));
};

export const peopleInterface = (payload) => {
  if (!payload.primary || !payload.primary.category) return null;
  return {
    category: payload.primary.category,
    people_list: _people_list(payload.items),
  };
};
