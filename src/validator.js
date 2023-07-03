export default class Validator {
  static validateUsername(userName) {
    let result = false;
    if (/[а-яА-Я]/.test(userName)) {
      return result;
    }
    if (/[^\w-]/.test(userName)) {
      return result;
    }
    if (/[\d]{4,}/.test(userName)) {
      return result;
    }
    if (/(^\d|\d$)/.test(userName)) {
      return result;
    }
    // eslint-disable-next-line no-useless-escape
    if (/^[\_\-]|[\_\-]$/.test(userName)) {
      return result;
    }
    if (/[0-9]/.test(userName)) {
      result = true;
    }
    return result;
  }
}
