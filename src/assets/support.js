import Swal from "sweetalert2";

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
  self
    ? window.open(url, "_self", "noopener")
    : window.open(url, "_blank", "noopener");
}
// Function to find the value of nested parameter
export function getNested(obj, ...args) {
  return args.reduce((obj, level) => obj && obj[level], obj);
}

//Function to launch toast notifications
export function throwAlert({
  type = "info",
  time = 2500,
  okButton = false,
  message,
} = {}) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: okButton,
    timer: time,
    stopKeydownPropagation: false,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: type,
    title: message,
  });
}
