import React, { Fragment, useState } from "react";
import "./Join.css";

import icon_linkedin from "./icon_linkedin.svg";
import icon_instagram from "./icon_instagram.svg";
import icon_email from "./icon_email.svg";

function Join() {
  const [form, setForm] = useState({
    name: {
      text: "",
      valid: false,
    },
    email: {
      text: "",
      valid: false,
    },
    message: {
      text: "",
      valid: false,
    },
  });

  function validateName() {
    const element = document.getElementById("name");

    var valid = element.value.length > 0 && element.value.includes(" ");

    document.getElementById("nameError").style.opacity = valid ? "0" : "1";

    setForm({
      ...form,
      name: {
        text: element.value,
        valid: valid,
      },
    });
  }

  function validateEmail() {
    const element = document.getElementById("email");

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var valid = re.test(element.value);

    document.getElementById("emailError").style.opacity = valid ? "0" : "1";

    setForm({
      ...form,
      email: {
        text: element.value,
        valid: valid,
      },
    });
  }

  function validateMessage() {
    const element = document.getElementById("message");

    var valid = element.value.length > 0;

    document.getElementById("messageError").style.opacity = valid ? "0" : "1";

    setForm({
      ...form,
      message: {
        text: element.value,
        valid: valid,
      },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);

    if (form.name.valid && form.email.valid && form.message.valid) {
      fetch("http://localhost:3002/send", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status === "success") {
            alert("Message Sent.");
            resetForm();
          } else if (response.status === "fail") {
            alert("Message failed to send.");
          }
        });
    }
  }

  function resetForm() {
    setForm({
      name: {
        text: "",
        valid: false,
      },
      email: {
        text: "",
        valid: false,
      },
      message: {
        text: "",
        valid: false,
      },
    });
  }

  return (
    <Fragment>
      <div id="join">
        <h1>Join Us</h1>
        <h2>Follow us on social media and join our program today!</h2>

        <div className="content">
          <form onSubmit={handleSubmit.bind(this)}>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={form.name.text}
              onChange={validateName}
            />
            <label id="nameError">Please enter your name</label>
            <input
              type="text"
              id="email"
              placeholder="Your email"
              value={form.email.text}
              onChange={validateEmail}
            />
            <label id="emailError">Please enter a valid email</label>
            <textarea
              id="message"
              type="text"
              name="comment"
              placeholder="Type your message or question here..."
              value={form.message.text}
              onChange={validateMessage}
            />
            <label id="messageError">Please enter a message</label>
            <button type="submit">Send</button>
          </form>
          <div className="links">
            <a href="mailto:lawyerupinternship@gmail.com">
              <img src={icon_email} alt="logo" /> lawyerupinternship@gmail.com
            </a>
            <a href="https://www.instagram.com/lawyerupinternship/?hl=en">
              <img src={icon_instagram} alt="logo" /> @lawyerupinternship
            </a>
            <a href="http://www.linkedin.com/company/lawyerupinternship">
              <img src={icon_linkedin} alt="logo" />
              @LawyerUpInternship
            </a>
            <a>Apply to be an Intern or Scholar here!</a>
          </div>
        </div>
        <footer>
          Copyright &copy; 2020 LawyerUp | Developed by Brett Severin, Umeesha
          D'Alwis, and Deepanshu Gupta
        </footer>
      </div>
    </Fragment>
  );
}

export default Join;
