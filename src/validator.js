export default class Validator {
  static validateUsername(userName) {
    if (/[а-яА-Я]/.test(userName)) {
      return false;
    }
    if (/[^\w-]/.test(userName)) {
      return false;
    }
    if (/[\d]{4,}/.test(userName)) {
      return false;
    }
    if (/(^\d|\d$)/.test(userName)) {
      return false;
    }
    // eslint-disable-next-line no-useless-escape
    if (/^[\_\-]|[\_\-]$/.test(userName)) {
      return false;
    }
    if (!(/[0-9]/.test(userName))) {
      return true;
    }
    return true;
  }
}
