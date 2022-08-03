import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7451nyc",
      "template_ts1n5yk",
      form.current,
      "gAcERPu8FNN0V42n3"
    );

    form.current.reset();
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contactez Moi</h2>
      <span className="section__subtitle">Prenons contact ! :)</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact__icon"></i>

            <div>
              <h3 className="contact__title">Appeler moi !</h3>
              <span className="contact__subtile">0695132746</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>

            <div>
              <h3 className="contact__title">Mail</h3>
              <span className="contact__subtile">xlabarbe.cesi@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtile">
                6 Sente des Morutiers <br /> 33300 - Bordeaux
              </span>
            </div>
          </div>
        </div>

        <form className="contact__form grid" ref={form} onSubmit={sendEmail}>
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Nom
              </label>
              <input type="text" name="user_name" className="contact__input" />
            </div>

            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Mail
              </label>
              <input
                type="email"
                name="user_email"
                className="contact__input"
              />
            </div>
          </div>

          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Raison
            </label>
            <input type="text" name="reason" className="contact__input" />
          </div>

          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Message
            </label>
            <textarea
              name="message"
              cols="0"
              rows="7"
              className="contact__input"
            ></textarea>
          </div>

          <div>
            <button type="submit" className="button button--flex">
              Envoyez le message
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
