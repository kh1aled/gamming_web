"use client";

import "./styles/shop.css";
import Image from "@node_modules/next/image";
import Players from "./Players";
const Live = () => {
  return (
    <section
      id="live"
      className="section  live myImage flex-start  w-full"
    >
      <div className="container">
        <div className="title_container text-center flex-center flex-col gap-y-2">
          <h2 className="h2 section-title">
          watch live <span className="span">match</span>
          </h2>
        </div>
        <div className="live-match">
          <figure className="live-match-banner">
            <Image
              width={700}
              height={700}
              src="/images/live-match-banner.jpg"
              alt="this is image"
              className="mt-16"
            />
            <button className="play-btn" aria-label="play video">
              <ion-icon name="play" className="play-icon"></ion-icon>
            </button>
          </figure>
        </div>

        <Players />
      </div>
    </section>
  );
};

export default Live;
