"use client";
import "./styles/articles.css";

const Articles = () => {
  return (
    <section id="blog" className="section articles p-2 flex-center">
      <div className="container">

      <div className="title_container text-center flex-center flex-col gap-y-2">
        <h2 className="h2 section-title">
          Latest News & <span className="span"> Articles </span>
        </h2>
        <p className="section-text">
          Compete with 100 players on a remote island for winner takes showdown
          known issue where certain skin strategic
        </p>
      </div>
      <ul className="blog-list">
        <li>
          <div className="blog-card">
            <figure
              className="card-banner img-holder"
            >
              <img
                src="images/blog-1.jpg"
                width="400"
                height="290"
                loading="lazy"
                alt="Shooter Action Video"
                className="img-cover"
              />
            </figure>

            <div className="card-content">
              <ul className="card-meta-list">
                <li className="card-meta-item">
                  <ion-icon name="person-outline"></ion-icon>

                  <a href="#" className="item-text">
                    Admin
                  </a>
                </li>

                <li className="card-meta-item">
                  <ion-icon name="calendar-outline"></ion-icon>

                  <time className="item-text">
                    September 19, 2022
                  </time>
                </li>
              </ul>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Shooter Action Video
                </a>
              </h3>

              <p className="card-text">
                Compete With 100 Players On A Remote Island Thats Winner Takes
                Showdown Known Issue.
              </p>

              <a href="#" className="card-link">
                <span className="span">Read More</span>

                <ion-icon name="caret-forward"></ion-icon>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="blog-card">
            <figure
              className="card-banner img-holder"
            >
              <img
                src="images/blog-2.jpg"
                width="400"
                height="290"
                loading="lazy"
                alt="Shooter Action Video"
                className="img-cover"
              />
            </figure>

            <div className="card-content">
              <ul className="card-meta-list">
                <li className="card-meta-item">
                  <ion-icon name="person-outline"></ion-icon>

                  <a href="#" className="item-text">
                    Admin
                  </a>
                </li>

                <li className="card-meta-item">
                  <ion-icon name="calendar-outline"></ion-icon>

                  <time className="item-text">
                    September 19, 2022
                  </time>
                </li>
              </ul>

              <h3 className="h3">
                <a href="#" className="card-title">
                Defense Of The Ancients
                </a>
              </h3>

              <p className="card-text">
                Compete With 100 Players On A Remote Island Thats Winner Takes
                Showdown Known Issue.
              </p>

              <a href="#" className="card-link">
                <span className="span">Read More</span>

                <ion-icon name="caret-forward"></ion-icon>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="blog-card">
            <figure
              className="card-banner img-holder"
            >
              <img
                src="images/blog-3.jpg"
                width="400"
                height="290"
                loading="lazy"
                alt="Shooter Action Video"
                className="img-cover"
              />
            </figure>

            <div className="card-content">
              <ul className="card-meta-list">
                <li className="card-meta-item">
                  <ion-icon name="person-outline"></ion-icon>

                  <a href="#" className="item-text">
                    Admin
                  </a>
                </li>

                <li className="card-meta-item">
                  <ion-icon name="calendar-outline"></ion-icon>

                  <time className="item-text">
                    September 19, 2022
                  </time>
                </li>
              </ul>

              <h3 className="h3">
                <a href="#" className="card-title">
                The Walking Dead
                </a>
              </h3>

              <p className="card-text">
                Compete With 100 Players On A Remote Island Thats Winner Takes
                Showdown Known Issue.
              </p>

              <a href="#" className="card-link">
                <span className="span">Read More</span>

                <ion-icon name="caret-forward"></ion-icon>
              </a>
            </div>
          </div>
        </li>
      </ul>
      </div>
    </section>
  );
};

export default Articles;
