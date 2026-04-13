import { dog, cat, bear , fox} from "@/assets";

export const Treding = () => {
  return (
    <section>
      <h2>Trending Collection</h2>
      <p>Checkout our weekly updated trending collection.</p>

      <div>
        <img src={dog} alt="" />
        <img src={cat} alt="" />
        <img src={bear} alt="" />
        <button>1025+</button>
        <p>DSGN Animals</p>
        <div>
          <img src={ fox} alt="" />
          <p>MrFox</p>
        </div>
      </div>
    </section>
  );
};
