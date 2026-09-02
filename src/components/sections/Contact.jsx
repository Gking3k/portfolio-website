import {
  useState,
} from "react";

import contact from "../../data/contact";


function Contact() {
  const [
    formData,
    setFormData,
  ] = useState({
    name: "",
    business: "",
    projectType: "Basic Website",
    budget: "",
    message: "",
  });


  function handleChange(
    event
  ) {
    const {
      name,
      value,
    } = event.target;

    setFormData(
      (current) => ({
        ...current,
        [name]: value,
      })
    );
  }


  function handleSubmit(
    event
  ) {
    event.preventDefault();

    const message = `
Hello, I'd like to discuss a website project.

Name: ${formData.name}

Business / Brand: ${formData.business}

Project Type: ${formData.projectType}

Budget: ${formData.budget || "Not specified"}

Project Details:
${formData.message}
    `.trim();

    const whatsappUrl =
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }


  function handleEmailClick() {
    const subject =
      encodeURIComponent(
        "Website Project Enquiry"
      );

    const body =
      encodeURIComponent(
        "Hello, I'd like to discuss a website project."
      );

    window.location.href =
      `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }


  return (
    <section
      className="section contact-section"
      id="contact"
    >
      <div className="container">

        <div className="contact-intro">

          <p className="eyebrow">
            START A PROJECT
          </p>

          <h2>
            Have an idea?
            Let's build it.
          </h2>

          <p>
            Tell me a little about what
            you're looking to build and
            I'll get back to you to
            discuss the project.
          </p>

        </div>


        <div className="contact-grid">

          {/* =====================================
              CONTACT FORM
          ===================================== */}

          <form
            className="contact-form"
            onSubmit={
              handleSubmit
            }
          >

            <div className="contact-form-row">

              <label>
                Your Name

                <input
                  type="text"
                  name="name"
                  value={
                    formData.name
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Your name"
                  required
                />
              </label>


              <label>
                Business / Brand

                <input
                  type="text"
                  name="business"
                  value={
                    formData.business
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Your business"
                  required
                />
              </label>

            </div>


            <div className="contact-form-row">

              <label>
                Project Type

                <select
                  name="projectType"
                  value={
                    formData.projectType
                  }
                  onChange={
                    handleChange
                  }
                >
                  <option>
                    Basic Website
                  </option>

                  <option>
                    E-commerce Website
                  </option>

                  <option>
                    Custom Web Application
                  </option>

                  <option>
                    Website Redesign
                  </option>

                  <option>
                    Not Sure Yet
                  </option>
                </select>
              </label>


              <label>
                Estimated Budget

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">
                    Select a range
                  </option>

                  <option>
                    Under ₦100,000
                  </option>

                  <option>
                    ₦100,000 – ₦200,000
                  </option>

                  <option>
                    ₦200,000 – ₦250,000
                  </option>

                  <option>
                    ₦250,000 – ₦500,000
                  </option>

                  <option>
                    ₦500,000 – ₦1,000,000
                  </option>

                  <option>
                    ₦1,000,000 – ₦2,000,000
                  </option>

                  <option>
                    ₦2,000,000+
                  </option>

                  <option>
                    Not sure yet
                  </option>
                </select>
              </label>

            </div>


            <label>
              Tell Me About Your Project

              <textarea
                name="message"
                value={
                  formData.message
                }
                onChange={
                  handleChange
                }
                rows="7"
                placeholder="What does your business do? What would you like the website to do?"
                required
              />
            </label>


            <button
              type="submit"
              className="btn btn-dark"
            >
              Send Project Enquiry
              <span>↗</span>
            </button>

            <p className="form-note">
              This enquiry will open WhatsApp
              with your project details
              already prepared.
            </p>

          </form>


          {/* =====================================
              CONTACT OPTIONS
          ===================================== */}

          <aside className="contact-options">

            <div className="contact-option">

              <span>
                WHATSAPP
              </span>

              <h3>
                Let's talk
              </h3>

              <p>
                The fastest way to discuss
                your project and ask questions.
              </p>

              <a
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="contact-option-link"
              >
                Message on WhatsApp →
              </a>

            </div>


            <div className="contact-option">

              <span>
                EMAIL
              </span>

              <h3>
                Prefer email?
              </h3>

              <p>
                Send a project brief or any
                questions you'd like to discuss.
              </p>

              <button
                type="button"
                className="contact-option-link contact-option-button"
                onClick={
                  handleEmailClick
                }
              >
                Send an Email →
              </button>

            </div>


            {contact.fiverrUrl && (
              <div className="contact-option">

                <span>
                  FIVERR
                </span>

                <h3>
                  Hire me on Fiverr
                </h3>

                <p>
                  Prefer using Fiverr?
                  You can also find my
                  freelance services there.
                </p>

                <a
                  href={
                    contact.fiverrUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="contact-option-link"
                >
                  View Fiverr Profile →
                </a>

              </div>
            )}

          </aside>

        </div>

      </div>
    </section>
  );
}

export default Contact;