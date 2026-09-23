// 67. Validate email using regular expression
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log(isValidEmail("student@example.com"));
console.log(isValidEmail("invalid-email"));
