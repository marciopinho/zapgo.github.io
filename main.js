
// import { sendMessage } from "./src/send_message";

const phoneForm = document.getElementById('phone-form');

const sendMessage = (phone) => {
  window.open(`https://wa.me/55${phone}`);
};

console.log('sendMessage loaded');

export { sendMessage };

phoneForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let phone = document.getElementById('inputPhone').value.replace(/\D/g, '');

  while (phone.charAt(0) === '0') {
    phone = phone.substring(1);
  }

  sendMessage(phone);
});
