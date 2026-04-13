import heroImg from "../assets/img/hero.png";
import animalkid from "../assets/img/animakid.png";
import Rocket from "../assets/svg/rocket.svg?react";

export const HeroSection = () => {
  return (
    <section>
      <h1>Discover digital art & Collect NFTs</h1>
      <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>

      <div className="bg-[var(--background---secondary)]">
        <img src={heroImg} alt="Space Walking" />
        <h2>Space Walking</h2>
        <div className="flex">
          <img src={animalkid} alt="animakid" />
          <p>Animakid</p>
        </div>
      </div>

      <button type="button">
        <Rocket />
        Get Started
      </button>

      <ul className="flex">
        <li>
          <p>240k+</p>
          <p>Total Sale</p>
        </li>
        <li>
          <p>100k+</p>
          <p>Auctions</p>
        </li>
        <li>
          <p>240k+</p>
          <p>Artists</p>
        </li>
      </ul>
    </section>
  );
};
