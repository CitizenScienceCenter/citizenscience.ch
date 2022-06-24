import Swal from "sweetalert2";
import { i18n } from "@/i18n.js";

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

// This function send event occurence to google analytics
export function trackEvent(_this, info = undefined) {
  if (info) {
    _this.$gtag.event(info.action, {
      event_category: info.category,
      event_label: info.label,
      event_value: 1,
    });
  }
}


//CMS section for remote data requests

// Class for manage the cms client
class SingletonCMS {
  constructor() {
    this.cmsClient = null;
  }
  setClient(cmsClient) {
    if (!this.cmsClient) {
      this.cmsClient = cmsClient;
    }
  }
  getClient() {
    return this.cmsClient;
  }
}
export const cmsClient = new SingletonCMS();

// Documents in CMS with slice
const slicedCMS = ["people"];

// Get data content from CMS retrieved
export const getCMSData = async (docName = "_", schema) => {
  if(!schema){
    return null
  }
  /* Client for CMS interactions. */
  const client = cmsClient.getClient();
  const args = _getCMSParameters(docName);
  let res = await client.getSingle(...args);
  if (res === undefined) {
    return null;
  }
  if ("data" in res) {
    res =
      docName in res.data && res.data[docName].length
        ? res.data[docName]
        : slicedCMS.includes(docName) && "body" in res.data
        ? res.data.body
        : [];
  } else {
    res = [];
  }
  if (res.length) {
    return res.map((x) => schema(x));
  }
  return null;
};

export const getCMSDataUID = async (docName ="_", uid)=>{
  /* Client for CMS interactions. */
  const client = cmsClient.getClient();
  let res = await client.getByUID(docName, uid, _getCMSLanguage());
  return res
}

// Form the parameters for CMS query
const _getCMSParameters = (document) => {
  if (document) return [document, _getCMSLanguage()].filter((x) => x);
};

const _getCMSLanguage = (_) => {
  const lang = i18n.locale;
  return lang !== "en" ? { lang: `${lang}-${lang}` } : null;
};
