import emailjs from "emailjs-com";
import './privateEvents.css'

const EventInquiryForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cmf9gyg",
      "template_qp7dx7l",
      e.target,
      "ZTdHO7ZRJhl-Rwhsq"
    )
    .then(() => {
      alert("Thank you! Your inquiry has been sent.");
      e.target.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <div className="page-center">
  
      <div className="private-events-container">
  
        {/* TOP CONTENT */}
        <div className="private-events-content">
          <h1>Private Events</h1>
  
          <p>
            Looking for an exclusive space to host your next event?
            Our private dining room at <strong>Brulee</strong> offers the
            perfect ambiance for intimate gatherings, corporate meetings, and
            celebrations.
          </p>
  
          <h3>Perfect for:</h3>
          <ul>
            <li>🎉 Birthday Parties & Anniversaries</li>
            <li>🎤 Corporate Meetings & Business Dinners</li>
            <li>🥂 Bridal Showers & Rehearsal Dinners</li>
            <li>🎊 Holiday Gatherings & Special Celebrations</li>
          </ul>
  
          <p className="buyout-text">
            Please email us and we will send you more information on booking our space.
          </p>
        </div>
  
        <form onSubmit={sendEmail} className="event-form">
  
          <input type="text" name="first_name" placeholder="First Name (Required)" required />
          <input type="text" name="last_name" placeholder="Last Name (Required)" required />
          <input type="email" name="email" placeholder="Email Address (Required)" required />
          <input type="tel" name="phone" placeholder="Phone Number (Required)" required />
  
          <label>Start Date and Time (Required)</label>
          <input type="datetime-local" name="start_datetime" required />
  
          <input type="number" name="party_size" placeholder="Size of Party (Required)" required />
  
          <textarea name="comments" placeholder="Additional Comments" rows="4" />
  
          <button type="submit">Submit</button>
        </form>
  
      </div>
    </div>
  );
};

export default EventInquiryForm;
