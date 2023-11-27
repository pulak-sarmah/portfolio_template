import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import { dummyClients } from "../constants/clients";

const OurClients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <section id="clients" ref={ref} className="py-16 bg-light">
      <div
        className={`container mx-auto ${
          inView
            ? "animate__animated animate__slideInLeft animate__slow"
            : "opacity-0"
        }`}
      >
        <h2 className="mb-2 text-3xl font-bold text-center text_text_dark">
          Our Clients
        </h2>
        <h3 className="mb-8 text-sm text-center md:text-lg text-slate-700">
          Here are some of the companies we've had the pleasure to work with.
        </h3>

        <Marquee pauseOnHover direction="right">
          {dummyClients.map((client, index) => (
            <img
              key={index}
              src={client}
              alt={`Client ${index + 1}`}
              className="object-contain w-24 h-24 mx-4 my-8 transition-transform transform hover:scale-105"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default OurClients;
