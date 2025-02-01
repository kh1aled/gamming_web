"use client";
import "./styles/games.css";
const Games = () => {
  return (
    <section
      className="section featured-game w-full flex-center"
      id="featured"
      aria-label="featured game"
    >
      <div className="container flex-center pt-10 flex-col">
        <div className="title_container text-center flex-center flex-col gap-y-2">
          <h2 className="h2 section-title">
            All Released <span className="span">Games</span>
          </h2>
        </div>
        <ul className="has-scrollbar">
          <li className="scrollbar-item">
            <div className="featured-game-card">
              <figure className="card-banner card-banner">
                <img
                  src="images/featured-game-1.jpg"
                  alt="this is featured game"
                  loading="lazy"
                  className="img-holder"
                />
              </figure>
            <div className="card-content">
              <h3 className="h3">
                <a tabIndex={"-1"} href="" className="card-title">
                  Just for <span className="span">Gamers</span>
                </a>
              </h3>

              <span className="card-meta">
                <icon-ion name="notifications"></icon-ion>
                <span className="span"> Playstation 5 , Xbox</span>
              </span>
            </div>
            <div className="card-content-overlay">
              <img src="images/featured-game-icon.png" alt="" />
              <h3 className="h3">
                <a href="" className="card-title">
                  Just for <span className="span">Gamers</span>
                </a>
              </h3>

              <span className="card-meta">
                <icon-ion name="notifications"></icon-ion>
                <span className="span"> Playstation 5 , Xbox</span>
              </span>
            </div>

            </div>

          </li>
          <li className="scrollbar-item">
            <div className="featured-game-card">
              <figure className="card-banner card-banner">
                <img
                  src="images/featured-game-2.jpg"
                  alt="need for speed"
                  loading="lazy"
                  className="img-holder"
                />
              </figure>
            <div className="card-content">
              <h3 className="h3">
                <a tabIndex={"-1"} href="" className="card-title">
                  Need for <span className="span">Speed</span>
                </a>
              </h3>

              <span className="card-meta">
                <icon-ion name="notifications"></icon-ion>
                <span className="span"> Playstation 5 , Xbox</span>
              </span>
            </div>
            <div className="card-content-overlay">
              <img src="images/featured-game-icon.png" alt="" />
              <h3 className="h3">
                <a href="" className="card-title">
                  Just for <span className="span">Gamers</span>
                </a>
              </h3>

              <span className="card-meta">
                <icon-ion name="notifications"></icon-ion>
                <span className="span"> Playstation 5 , Xbox</span>
              </span>
            </div>
            </div>

          </li>
      
        <li className="scrollbar-item">
            <div className="featured-game-card">
              <figure className="card-banner card-banner">
                <img
                  src="images/featured-game-3.jpg"
                  alt="need for speed"
                  loading="lazy"
                  className="img-holder"
                />
              </figure>
            <div className="card-content">
              <h3 className="h3">
                <a tabIndex={"-1"} href="" className="card-title">
                  Egypt Hunting <span className="span">Gamers</span>
                </a>
              </h3>

              <span className="card-meta">
                <icon-ion name="notifications"></icon-ion>
                <span className="span"> Playstation 5 , Xbox</span>
              </span>
            </div>
            <div className="card-content-overlay">
              <img src="images/featured-game-icon.png" alt="" />
              <h3 className="h3">
                <a href="" className="card-title">
                Egypt Hunting <span className="span">Gamers</span>
                </a>
              </h3>

              <span className="card-meta">
                <icon-ion name="notifications"></icon-ion>
                <span className="span"> Playstation 5 , Xbox</span>
              </span>
            </div>
            </div>

          </li>
        <li className="scrollbar-item">
            <div className="featured-game-card">
              <figure className="card-banner card-banner">
                <img
                  src="images/featured-game-4.jpg"
                  alt="need for speed"
                  loading="lazy"
                  className="img-holder"
                />
              </figure>
            <div className="card-content">
              <h3 className="h3">
                <a tabIndex={"-1"} href="" className="card-title">
                  Just For <span className="span">Gamers</span>
                </a>
              </h3>

              <span className="card-meta">
                <icon-ion name="notifications"></icon-ion>
                <span className="span"> Playstation 5 , Xbox</span>
              </span>
            </div>
            <div className="card-content-overlay">
              <img src="images/featured-game-icon.png" alt="" />
              <h3 className="h3">
                <a href="" className="card-title">
                Just For <span className="span">Gamers</span>
                </a>
              </h3>

              <span className="card-meta">
                <icon-ion name="notifications"></icon-ion>
                <span className="span"> Playstation 5 , Xbox</span>
              </span>
            </div>
            </div>

          </li>
        </ul>
      </div>
    </section>
  );
};

export default Games;
