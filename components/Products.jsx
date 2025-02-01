"use client";
import "./styles/products.css";
const Products = () => {
  return (
    <section id="products" className="section products flex-center">
      <div className="container">

      <div className="title_container text-center flex-center flex-col gap-y-2">
        <h2 className="h2 section-title">
          Gaming Product <br />
          <span className="span">Corner</span>
        </h2>
        <p>
          Compete with 100 players on a remote island for winner takes showdown
          known issue where certain skin strategic
        </p>
      </div>
      <ul className="has-scrollbar myImage">
        <li className="scrollbar-item">
          <div className="shop-game-card">
            <figure className="card-banner img-holder">
              <img
                src="/images/shop-img-1.jpg"
                alt=""
                loading="lazy"
                className="img-cover"
              />
            </figure>
            <div className="card-content flex-start flex-col">
              <a href="" className="card-badge skewBg">
                T-SHIRT
              </a>
              <h3 className="h3">
                <a href="" className="card-title">
                  Women Black T-Shirt
                </a>
              </h3>
              <div className="card-wrapper flex-between w-full align-center">
                <p className="card-price">$29.00</p>

                <button className="card-btn">
                  <ion-icon name="basket"></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="scrollbar-item">
          <div className="shop-game-card">
            <figure className="card-banner img-holder">
              <img
                src="/images/shop-img-2.jpg"
                alt=""
                loading="lazy"
                className="img-cover"
              />
            </figure>
            <div className="card-content flex-start flex-col">
              <a href="" className="card-badge skewBg">
                x-box
              </a>
              <h3 className="h3">
                <a href="" className="card-title">
                  Gears 5 Xbox Controller
                </a>
              </h3>
              <div className="card-wrapper flex-between w-full align-center">
                <p className="card-price">$29.00</p>

                <button className="card-btn">
                  <ion-icon name="basket"></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="scrollbar-item">
          <div className="shop-game-card">
            <figure className="card-banner img-holder">
              <img
                src="/images/shop-img-3.jpg"
                alt=""
                loading="lazy"
                className="img-cover"
              />
            </figure>
            <div className="card-content flex-start flex-col">
              <a href="" className="card-badge skewBg">
                Graphics
              </a>
              <h3 className="h3">
                <a href="" className="card-title">
                  GeForce RTX 2070
                </a>
              </h3>
              <div className="card-wrapper flex-between w-full align-center">
                <p className="card-price">$29.00</p>

                <button className="card-btn">
                  <ion-icon name="basket"></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="scrollbar-item">
          <div className="shop-game-card">
            <figure className="card-banner img-holder">
              <img
                src="/images/shop-img-4.jpg"
                alt=""
                loading="lazy"
                className="img-cover"
              />
            </figure>
            <div className="card-content flex-start flex-col">
              <a href="" className="card-badge skewBg">
              VR-Box
              </a>
              <h3 className="h3">
                <a href="" className="card-title">
                Virtual Reality Smiled
                </a>
              </h3>
              <div className="card-wrapper flex-between w-full align-center">
                <p className="card-price">$29.00</p>

                <button className="card-btn">
                  <ion-icon name="basket"></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      </div>
    </section>
  );
};

export default Products;
