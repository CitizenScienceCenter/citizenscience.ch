export function getTranslation(textContent, lang = "en") {
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
