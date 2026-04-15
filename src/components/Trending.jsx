import { dog, cat, bear, fox } from "@/assets";

export const Treding = () => {
  return (
    <section>
      <h2 className="font-work font-semibold text-[28px]/[1.4] capitalize">Trending Collection</h2>
      <p className="font-work font-normal text-[16px]/[1.4] mt-2.5 mb-10">
        Checkout our weekly updated trending collection.
      </p>

      <div>
        <div className="flex flex-wrap gap-3.75">
          <img src={dog} alt="dog" />
          <img src={cat} alt="cat" />
          <img src={bear} alt="bear" />
          <button className="rounded-[20px] bg-(--call-to-action) w-23.75 h-23.75 font-space font-bold text-[16px]/[1.4]">
            1025+
          </button>
        </div>

        <div className="mt-3.75">
          <p className="font-work font-semibold text-[22px]/[1.4] capitalize">DSGN Animals</p>
          <div className="flex mt-2.5 gap-x-3">
            <img src={fox} alt="MrFox" />
            <p>MrFox</p>
          </div>
        </div>
      </div>
    </section>
  );
};
