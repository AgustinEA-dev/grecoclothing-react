import "./contact.styles.scss";

const Contact = () => {
  return (
    <div className="contact-section-container">
      <div className="contact-image-container">
        <div className="image"></div>
      </div>
      <div className="contact-form-container">
        <form className="contact-form" action="">
          <input type="text" />
          <input type="text" />
          <input type="email" />
          <textarea name="" id=""></textarea>
        </form>
      </div>
    </div>
  );
};
export default Contact;
