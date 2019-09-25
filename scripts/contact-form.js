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
    label: "Message",
    textAreaMessage: "Write your notes or questions here..."
  },
  {
    id: "submitFormButton",
    type: "submit",
    value: "Send Message"
  }
];

class ContactForm extends HTMLElement {
  renderLabel({ label, id = "" }) {
    if (label) {
      return `<label class="label-form-input" for="${id}">${label}</label>`;
    }
    return "";
  }

  renderTextField({
    id = "",
    value = "",
    label = "",
    type = "text",
    textAreaMessage = ""
  }) {
    if (type === "textArea") {
      return `<textarea class="form-input" id="${id}" 
                name="comment" form="usrform">${textAreaMessage}
              </textarea>`;
    }
    return `
    <input class="${type === "submit" ? "primary-button" : "form-input"}" 
      type="${type}" name="${id}" value="${value}" id="${id}">
    `;
  }

  connectedCallback() {
    const formFields = formFieldsData.map(
      item =>
        `<div class="input-container">
          ${this.renderLabel({ ...item })}
          ${this.renderTextField({ ...item })}
        </div> `
    );

    this.innerHTML += `
      <form id="contactForm" action="../controllers/contact.php" method="post">
        <h4>Contact Form</h4>
        ${formFields.join(" ")}                
      </form>
    `;
  }
}

window.customElements.define("contact-form", ContactForm);
