import variables from "@/styles/theme.scss";
import { coverListInterface } from "./coverList";
import { genericBlockInterface } from "./genericBlock";

export const partnerProjectsDetailsInterface = (payload) => {
  try {
    if (payload.hasOwnProperty("body")) {
      const covers = payload["cover"];
      const content = payload["content"];
      return {
        name: payload.name,
        color: {
          gradient_start: payload.gradient_start || variables.gradient_start,
          gradient_end: payload.gradient_end || variables.gradient_end,
        },
        covers: covers.length ? covers.map((x) => coverListInterface(x)) : null,
        content: content.length
          ? content.map((x) => genericBlockInterface(x))
          : null,
      };
    } else throw new Error("Invalid payload");
  } catch (error) {
    console.log(error);
    return null;
  }
};
