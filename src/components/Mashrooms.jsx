import { mashroom, shroomie, Eye } from "@/assets";

export const Mashrooms = () => {
  return (
    <section
      style={{
        background: `linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #a259ff 100%), url(${mashroom})`,
      }}
      className="w-94 h-148"
    >
      <div>
        <img src={shroomie} alt="shroomie" />
        <p>Shroomie</p>
      </div>
      <h2>Magic Mashrooms</h2>

      <div>
        <p>Auction ends in:</p>
        <div>
          <p>
            59 <span>Hours</span>
          </p>
          :
          <p>
            59 <span>Minutes</span>
          </p>
          :
          <p>
            59 <span>Seconds</span>
          </p>
        </div>
      </div>

      <button>
        <Eye />
        See NFT
      </button>
    </section>
  );
};
