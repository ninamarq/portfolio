export default function sendEmail(
  name: string,
  email: string,
  subject: string,
  message: string,
) {
  const URL = 'https://dopster-email.dopster.io/api/Email/EnviarEmail';

  const emailToSend = {
    to: 'marina.marqueso@outlook.com',
    body: `<html><body>Nome: ${name} <br /> ${message} </body></html>`,
    subject,
    from: email,
    isHTML: true,
    authorize: 'FDWR$#%Y&HF%$#@$#¨%$&%HTV%$',
  };
  console.log('enviando', emailToSend);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(emailToSend),
  };

  return fetch(URL, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
