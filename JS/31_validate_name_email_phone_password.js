// 31. Validate name, email, phone, and password
function validate(name, email, phone, password) {
  const nameOK = /^[A-Za-z ]+$/.test(name);
  const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneOK = /^\d{10}$/.test(phone);
  const passwordOK = password.length >= 8;
  return { nameOK, emailOK, phoneOK, passwordOK };
}
console.log(validate("Rahul", "rahul@example.com", "9876543210", "password123"));
