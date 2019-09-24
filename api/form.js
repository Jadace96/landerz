const URL = "https://emaildb-611d.restdb.io/mail";
const data = { username: "Exmple" };
const MANDRILL_API_KEY = "fee72af928fc841ad67e45e741d187f6";

const sendEmail = () =>
  fetch(URL, {
    method: "POST",
    body: {
      to: "jadace96@gmail.com",
      subject: "Your order is ready",
      html: "<p>Lorem ipsum dolor..., <b>vel</b> luctu.</p>",
      company: "Acme Inc",
      sendername: "Jorge Daniel"
    },
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => console.log("Success:", response));
