import { cosmonaft, Email } from "@/assets";

export const WeeklyDigest = () => { 
    return (
      <section className="bg-[var(--background---secondary)]">
        <img src={cosmonaft} alt="cosmonaft" />
        <h2>Join our weekly digest</h2>
        <p>Get exclusive promotions & updates straight to your inbox.</p>
        <input type="email" placeholder="Enter your email here" />
        <button>
          <Email />
          Subscribe
        </button>
      </section>
    );
}