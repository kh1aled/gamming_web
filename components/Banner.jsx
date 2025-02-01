"use client";
import "./styles/banner.css";
const Banner = () => {
  return (
    <section className="banner flex-center">
        <ul className="brand_lists">
          <li>
            <img
              width="90"
              height="90"
              alt="this is brand 1"
              src={"/images/brand-1.png"}
            />
          </li>
          <li>
            <img
              width="90"
              height="90"
              alt="this is brand 2"
              src={"/images/brand-2.png"}
            />
          </li>
          <li>
            <img
              width="90"
              height="90"
              alt="this is brand 3"
              src={"/images/brand-3.png"}
            />
          </li>
          <li>
            <img
              width="90"
              height="90"
              alt="this is brand 4"
              src={"/images/brand-4.png"}
            />
          </li>
          <li>
            <img
              width="90"
              height="90"
              alt="this is brand 5"
              src={"/images/brand-5.png"}
            />
          </li>
          <li>
            <img
              width="90"
              height="90"
              alt="this is brand 6"
              src={"/images/brand-6.png"}
            />
          </li>
        </ul>
    </section>
  );
};

export default Banner;
