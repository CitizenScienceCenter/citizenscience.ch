export function getTranslation(textContent, lang = "en") {
  if (!textContent) {
    return null;
  }
  if (typeof textContent == "string") {
    return textContent;
  }
  // Recieves the text content in multiple languages and return the selected
  return textContent[lang] || textContent.en;
}
export function openUrl(url, self) {
  if (!url) {
    return;
  }
  let win = self ? "_self" : "_blank";
  window.open(url, win).focus();
}
// Function to find the value of nested parameter
export function getNested(obj, ...args) {
  return args.reduce((obj, level) => obj && obj[level], obj);
}
