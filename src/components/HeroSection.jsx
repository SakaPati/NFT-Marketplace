import heroImg from "../assets/img/hero.png";
import animalkid from "../assets/img/animakid.png";
import Rocket from "../assets/svg/rocket.svg?react";
import { nanoid } from "nanoid";

const stats = [
  { label: "Total Sale", value: "240k+" },
  { label: "Auctions", value: "100k+" },
  { label: "Artists", value: "240k+" },
];

export const HeroSection = () => {
  return (
    <section className="my-10">
      <h1 className="font-work font-semibold text-[28px]/[1.4] mb-2.5 capitalize">
        Discover digital art & Collect NFTs
      </h1>
      <p className="font-work font-normal text-[16px]/[1.4]">
        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
      </p>

      <div className="bg-(--background---secondary) rounded-[20px] mt-10">
        <img src={heroImg} alt="Space Walking" />
        <h2 className="font-work font-semibold text-[22px]/[1.4] pt-5.5 pl-5 capitalize">Space Walking</h2>
        <div className="flex ml-5 pt-2.5 pb-5.5">
          <img src={animalkid} alt="animakid" className="pr-3" />
          <p className="font-work font-normal text-[16px]/[1.4]">Animakid</p>
        </div>
      </div>

      <button
        type="button"
        className="flex justify-center items-center rounded-[20px] bg-(--call-to-action) p-[0px 50px] w-78.75 h-15 my-10 gap-x-3 font-semibold text-[16px]/[1.4]"
      >
        <Rocket className="fill-white w-5 h-5" />
        Get Started
      </button>

      <ul className="flex gap-7.5">
        {stats.map(({ label, value }) => (
          <li key={nanoid()} className="w-21.25">
            <p className="font-space text-stat font-bold capitalize leading-stat">{value}</p>
            <p className="font-work font-normal">{label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
