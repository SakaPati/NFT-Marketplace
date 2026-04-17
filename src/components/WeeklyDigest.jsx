import { cosmonaft, Email } from "@/assets";
import { Container } from "./Container";

export const WeeklyDigest = () => {
  return (
    <section>
      <Container>
        <img src={cosmonaft} alt="cosmonaft" />
        <h2 className="title text-lg">Join our weekly digest</h2>
        <p className="font-work font-normal text-sm">Get exclusive promotions & updates straight to your inbox.</p>
        <input
          type="email"
          placeholder="Enter your email here"
          className="border border-solid border-(--caption-label-text) rounded-[20px] mt-10 px-5 py-4 w-78.75 h-11.5 bg-white placeholder:font-work placeholder:font-normal placeholder:text-sm placeholder:text-(--background)"
        />
        <button className="center rounded-[20px] px-12.5 w-78.75 h-11.5 bg-(--call-to-action) gap-x-3 title text-sm mt-4">
          <Email className="fill-white" />
          Subscribe
        </button>
      </Container>
    </section>
  );
};
