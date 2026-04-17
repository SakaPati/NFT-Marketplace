import { keepitreal, digilab, gravity, juanie, bluewhale, Rocket } from "@/assets";
import { nanoid } from "nanoid";
import { Container } from "./Container";

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
      <Container>
        <h2 className="title text-lg">Top creators</h2>
        <p className="font-work font-normal text-sm">Checkout Top Rated Creators on the NFT Marketplace</p>
        <ul className="flex flex-col gap-y-5 my-10">
          {creators.map(({ img, name, sales }, i) => (
            <li key={nanoid()} className="flex rounded-[20px] bg-(--background---secondary) p-5 relative">
              <div className="absolute top-3 left-3 bg-(--background) rounded-[20px] w-7.5 h-7.5 center font-space font-normal text-sm text-(--caption-label-text)">
                {i + 1}
              </div>
              <img src={img} alt={name} />
              <div className="pl-5">
                <h2 className="title text-md">{name}</h2>
                <p className="font-space font-normal text-sm">
                  <span className="font-work font-normal text-sm text-(--caption-label-text)">Total Sales:</span>{" "}
                  {sales} ETH
                </p>
              </div>
            </li>
          ))}
        </ul>
        <button className="rounded-[20px] border-2 border-solid border-(--call-to-action) w-79 h-15 center">
          <Rocket className="fill-[#A259FF] w-5 h-5 mr-3" />
          View Rankings
        </button>
      </Container>
    </section>
  );
};
