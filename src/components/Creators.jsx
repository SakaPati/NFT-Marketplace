import { keepitreal, digilab, gravity, juanie, bluewhale, Rocket } from "@/assets";
import { nanoid } from "nanoid";

const creators = [
  { img: keepitreal, name: "Keepitreal", sales: 34.53 },
  { img: digilab, name: "DigiLab", sales: 32.13 },
  { img: gravity, name: "GravityOne", sales: 28.93 },
  { img: juanie, name: "Juanie", sales: 25.3 },
  { img: bluewhale, name: "BlueWhale", sales: 22.22 },
];

export const Creators = () => {
  return (
    <section>
      <h2>Top creators</h2>
      <p>Checkout Top Rated Creators on the NFT Marketplace</p>
      <ul>
        {creators.map(({ img, name, sales }, i) => (
          <li key={nanoid()}>
            <div>{i + 1}</div>
            <img src={img} alt={name} />
            <p>
              <span>Total Sales:</span> {sales} ETH
            </p>
          </li>
        ))}
      </ul>
      <button className="rounded-[20px] border-2 border-solid border-[var(--call-to-action)] w-79 h-15 flex justify-center items-center">
        <Rocket className="fill-[#A259FF] w-[20px] h-[20px] mr-3" />
        View Rankings
      </button>
    </section>
  );
};
