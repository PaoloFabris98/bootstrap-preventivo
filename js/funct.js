export function isString(word) {
  return typeof word === "string";
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function getRandomNumber(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}