"use client";
import "./styles/shop.css";

const Shop = () => {
  return (
    <section id="shop" className="shop myImage flex-start  w-full">
      <div className="container">
        <div className="flex-center pt-10 flex-col">
          <div className="title_container text-center flex-center flex-col gap-y-2">
            <h2 className="h2 section-title">
              latest releases <span className="span">manage</span>
            </h2>
          </div>
          <ul className="has-scrollbar">
            <li className="scrollbar-item">
              <div className="latest-game-card">
                <figure className="card-banner img-holder">
                  <img
                    src="/images/latest-game-1.jpg"
                    alt=""
                    loading="lazy"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content flex-center flex-col">
                  <a href="" className="card-badge skewBg">
                    Zompie
                  </a>
                  <h3 className="h3">
                    <a href="" className="card-title">
                      White Walker <span className="span">Daily</span>
                    </a>
                  </h3>
                  <p className="card-price">
                    Entry Fee : <span className="span">Free</span>
                  </p>
                </div>
              </div>
            </li>
            <li className="scrollbar-item">
              <div className="latest-game-card">
                <figure className="card-banner img-holder">
                  <img
                    src="/images/latest-game-2.jpg"
                    alt=""
                    loading="lazy"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <a href="" className="card-badge skewBg">
                    Zompie
                  </a>
                  <h3 className="h3">
                    <a href="" className="card-title">
                      White Walker <span className="span">Daily</span>
                    </a>
                  </h3>
                  <p className="card-price">
                    Entry Fee : <span className="span">Free</span>
                  </p>
                </div>
              </div>
            </li>
            <li className="scrollbar-item">
              <div className="latest-game-card">
                <figure className="card-banner img-holder">
                  <img
                    src="/images/latest-game-3.jpg"
                    alt=""
                    loading="lazy"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <a href="" className="card-badge skewBg">
                    Zompie
                  </a>
                  <h3 className="h3">
                    <a href="" className="card-title">
                      White Walker <span className="span">Daily</span>
                    </a>
                  </h3>
                  <p className="card-price">
                    Entry Fee : <span className="span">Free</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Shop;
