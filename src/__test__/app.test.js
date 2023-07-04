import Validator from '../validator';

describe('Check in the validity', () => {
  test('invalid characters in userName', () => {
    const receiverLowerCase = Validator.validateUsername('qweшенre');
    const receiverUpperCase = Validator.validateUsername('qweШЕНre');
    expect(receiverLowerCase).toBeFalsy();
    expect(receiverUpperCase).toBeFalsy();
  });
  test('invalid symbol in userName', () => {
    const receiver = Validator.validateUsername('qwere$#%!@');
    expect(receiver).toBeFalsy();
  });
  test('no more than 3 digits in userName', () => {
    const receiver = Validator.validateUsername('qwere34567');
    expect(receiver).toBeFalsy();
  });
  test('userName should not begin or end digits', () => {
    const receiver = Validator.validateUsername('123qwere');
    expect(receiver).toBeFalsy();
  });
  test('userName should not begin or end symbol(\\_, \\-)', () => {
    const receiver = Validator.validateUsername('-qwere_');
    expect(receiver).toBeFalsy();
  });
  test('should return  reverse digit false', () => {
    const receiver = Validator.validateUsername('qwer432ty');
    expect(receiver).toBeTruthy();
  });
  // test('should return true', () => {
  //   const receiver = Validator.validateUsername('qwe-re232z');
  //   expect(receiver).toBeTruthy();
  // });
});
