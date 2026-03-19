import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">

        <h2 className="contact-title">Contact Us</h2>

        <p className="contact-text">
          For employment opportunities, please send your resume to:
        </p>

        <a href="mailto:Jobs@bruleechicago.com" className="contact-email">
          Jobs@bruleechicago.com
        </a>


        <p className="contact-text">
          For general inquiries, feel free to reach out to us at:
        </p>

        <a href="tel:13127633147" className="contact-phone">
          (312) 763-3147
        </a>

      </div>
    </div>
  );
};

export default ContactUs;