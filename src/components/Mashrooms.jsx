import { mashroom, shroomie, Eye } from "@/assets";
import { Container } from "./Container";

export const Mashrooms = () => {
  return (
    <section
      style={{
        background: `linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #a259ff 100%), url(${mashroom})`,
      }}
      className="w-93.75 h-148 pt-30"
    >
      <Container>
        <div className="flex rounded-[20px] px-5 py-2.5 bg-(--background---secondary) w-37.75 h-11 mb-7.5 gap-x-3">
          <img src={shroomie} alt="shroomie" />
          <p>Shroomie</p>
        </div>
        <h2 className="font-work font-semibold text-xl capitalize">Magic Mashrooms</h2>

        <div className="rounded-[20px] p-7.5 w-78.75 h-36 backdrop-filter-[blur(10px)] bg-[rgba(59,59,59,0.5)] mt-7.5">
          <p className="font-space font-normal text-xs">Auction ends in:</p>
          <div className="flex mt-2.5">
            <p className="flex flex-col font-space font-bold text-xl capitalize w-14.75">
              59 <span className="font-space font-normal text-xs">Hours</span>
            </p>
            <span className="font-space font-bold text-[28px]/[1.4] capitalize mx-2.5">:</span>
            <p className="flex flex-col font-space font-bold text-xl capitalize w-14.75">
              59 <span className="font-space font-normal text-xs">Minutes</span>
            </p>
            <span className="font-space font-bold text-[28px]/[1.4] capitalize mx-2.5">:</span>
            <p className="flex flex-col font-space font-bold text-xl capitalize w-14.75">
              59 <span className="font-space font-normal text-xs">Seconds</span>
            </p>
          </div>
        </div>

        <button className="center rounded-[20px] px-12.5 py-5.5 w-78.75 h-15 bg-white title text-sm text-(--background) gap-x-3 mt-7.5">
          <Eye className="fill-[#A259FF]" />
          See NFT
        </button>
      </Container>
    </section>
  );
};
