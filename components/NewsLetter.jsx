"use client";
import "./styles/newsLetter.css";

const NewsLetter = () => {
  return (
    <section className="newsletter flex-center" aria-label="newsletter">
      <div className="container">
        <div className="newsletter-card">
          <h2 className="h2">
            Our <span className="span">Newsletter</span>
          </h2>

          <form action="" className="newsletter-form">
            <div className="input-wrapper skewBg">
              <input
                type="email"
                name="email_address"
                aria-label="email"
                placeholder="Enter your email..."
                required=""
                className="email-field"
              />

              <ion-icon
                name="mail-outline"
                className="md hydrated"
                aria-label="mail outline"
              ></ion-icon>
            </div>

            <button type="submit" className="btn newsletter-btn skewBg">
              <span className="span">Subscribe</span>

              <ion-icon
                name="paper-plane"
                aria-hidden="true"
                className="md hydrated"
              ></ion-icon>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
