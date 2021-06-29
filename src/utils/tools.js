import { animateScroll as scroll } from "react-scroll";

export function formatCPF(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

export function formatPhone(value) {
  value = value.replace(/\D/g, "").replace(/(\(|\)|-)/g, "");
  if (value.length === 11) {
    return `${value}`.replace(/(\d{2})(\d{5})(\d{4})/g, "($1)$2-$3");
  }
  return `${value}`.replace(/(\d{2})(\d{4})(\d{4})/g, "($1)$2-$3");
}

export function removeMask(value) {
  return value.replace(/\D+/g, "");
}

export function nameMask(value) {
  const regEx = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]/;
  return value.split("").map((char) => (regEx.test(char) ? regEx : ""));
}
export function phoneMask(value) {
  const onlyNumber = value.replace(/\D/g, "");
  if (onlyNumber && onlyNumber.length > 10) {
    return [
      "(",
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  }
  return [
    "(",
    /\d/,
    /\d/,
    ")",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
}
export function cpfMask() {
  return [
    /\d/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];
}
export function dateMask() {
  return [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];
}
export function phoneValidation(phone) {
  return /^\([1-9]{2}\)\s[7-9]{1}\d{4}-\d{4}$/.test(phone);
}
export function cpfValidation(strCpf) {
  const cpf = removeMask(strCpf);
  if (!/[0-9]{11}/.test(cpf)) return false;
  if (cpf === "00000000000") return false;
  if (cpf === "11111111111") return false;
  if (cpf === "22222222222") return false;
  if (cpf === "33333333333") return false;
  if (cpf === "44444444444") return false;
  if (cpf === "55555555555") return false;
  if (cpf === "66666666666") return false;
  if (cpf === "77777777777") return false;
  if (cpf === "88888888888") return false;
  if (cpf === "99999999999") return false;

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i += 1)
    soma += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10), 10)) return false;

  soma = 0;
  for (let i = 1; i <= 10; i += 1)
    soma += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11), 10)) return false;
  return true;
}

export function scrollTop() {
  scroll.scrollToTop();
}

export function scrollBottom() {
  scroll.scrollToBottom();
}
// BI
export function pageView(data) {
  const { pageType, city, state, perfil, tipoPessoa, userId, pagePath } = data;
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "pageview",
      pagepath: pagePath || window.location.pathname,
      pageType,
      city,
      state,
      perfil,
      tipoPessoa,
      userId,
    });
  }
}

export function sendError(message) {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "sendEvent",
      "event-action": "etapa-erro",
      "event-value": message,
    });
  }
}
