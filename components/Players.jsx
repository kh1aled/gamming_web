"use client";


const Players = () => {
  return (
    <section className="live-match-player">
      <figure className="player player-1 img-holder">
        <img
          src="/images/live-match-player-1.png"
          alt="this is live match player 1"
          loading="lazy"
          className="w-full"
        />
        
      </figure>
      <div className="live-match-details">
        <div className="live-match-subtitle">upcoming live matches</div>
        <time  className="live-match-time">
          08:30
        </time>
      </div>
      <figure className="player player-2 img-holder">
        <img
          src="/images/live-match-player-2.png"
          alt="this is live match player 2"
          loading="lazy"
          className="w-full"
        />
      </figure>
    </section>
  );
};

export default Players;
