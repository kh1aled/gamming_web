"use client";
import "./styles/footer.css";

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="container footer-top">
        <div className="top">
          <h2 className="h2">Gamics</h2>
          <ul className="game-list">
            <li className="game-item">
              Gamics marketplace the relase etras thats sheets continig passag.
            </li>
            <li className="game-item">
              <ion-icon name="location"></ion-icon> Address : PO Box W75 Street
              lan West new queens
            </li>
            <li className="game-item">
              <span>
                <ion-icon
                  name="headset"
                  className="md hydrated"
                  aria-label="headset"
                ></ion-icon>{" "}
                Phone : +24 1245 654 235
              </span>
            </li>
            <li className="game-item">
              <span>
                <ion-icon
                  name="mail-open"
                  className="md hydrated"
                  aria-label="mail open"
                ></ion-icon>{" "}
                Email : info@exemple.com
              </span>
            </li>
          </ul>
        </div>
        <div className="products">
          <h3 className="h3">PRODUCTS</h3>
          <ul>
            <li>Graphics (26)</li>
            <li>Background (11)</li>
            <li>Fonts (9)</li>
            <li>Music (3)</li>
            <li>Photography (3)</li>
          </ul>
        </div>
        <div className="help">
          <h3 className="h3">Need Help?</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Affiliate</li>
            <li>Use Cases</li>
          </ul>
        </div>
        <div className="news_and_social">
        <div className="follow">
          <h3 className="h3">Follow Us</h3>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link facebook">
                <ion-icon
                  name="logo-facebook"
                  className="md hydrated"
                  aria-label="logo facebook"
                ></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link twitter">
                <ion-icon
                  name="logo-twitter"
                  className="md hydrated"
                  aria-label="logo twitter"
                ></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link pinterest">
                <ion-icon
                  name="logo-pinterest"
                  className="md hydrated"
                  aria-label="logo pinterest"
                ></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link linkedin">
                <ion-icon
                  name="logo-linkedin"
                  className="md hydrated"
                  aria-label="logo linkedin"
                ></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        <div className="news">
          <h3 className="h3">Newsletter Sign Up</h3>
          <form action="" className="footer-newsletter">
            <input
              type="email"
              name="email_address"
              aria-label="email"
              placeholder="Enter your email"
              required=""
              className="email-field"
            />

            <button type="submit" className="footer-btn" aria-label="submit">
              <ion-icon
                name="rocket"
                className="md hydrated"
                aria-label="rocket"
              ></ion-icon>
            </button>
          </form>
        </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © 2025 Gamics. All Right Reserved by{" "}
            <a href="#" className="copyright-link">
              khaled.dev
            </a>
          </p>

          <img
            src="images/footer-bottom-img.png"
            loading="lazy"
            alt=""
            className="footer-bottom-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
