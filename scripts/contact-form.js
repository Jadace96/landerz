const formFieldsData = [
  {
    id: "firstName",
    type: "text",
    label: "First Name"
  },
  {
    id: "lastName",
    type: "text",
    label: "Last Name"
  },
  {
    id: "email",
    type: "email",
    label: "Email"
  },
  {
    id: "subject",
    type: "text",
    label: "Subject"
  },
  {
    id: "textAreaMessage",
    type: "textArea",
    label: "Message"
  },
  {
    id: "submitFormButton",
    type: "submit",
    value: "Send Message"
  }
];

class ContactForm extends HTMLElement {
  renderLabel({ label }) {
    if (label) {
      return `<label class="label-form-input">${label}</label>`;
    }
    return "";
  }

  renderTextField({ id = "", value = "", type = "text" }) {
    if (type === "textArea") {
      return `<textarea class="form-input" name="${id}"></textarea>`;
    }
    return `
    <input class="${type === "submit" ? "primary-button" : "form-input"}"
      type="${type}" name="${id}" value="${value}">
    `;
  }

  connectedCallback() {
    const formFields = formFieldsData.map(
      item =>
        `<div id="${item.id}InputContainer" class="input-container">
          ${this.renderLabel({ ...item })}
          ${this.renderTextField({ ...item })}
        </div> `
    );

    this.innerHTML += `
      <form id="contactForm" action="./controllers/contact.php" method="post">
        <h3>Contact Form</h3>
        ${formFields.join(" ")}
      </form>
    `;
  }
}

window.customElements.define("contact-form", ContactForm);
