import { Card } from "flowbite-react";
import { services } from "../constants/services";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section id="services" className="py-16 bg-gray-100 ">
      <div
        ref={ref}
        className={`container mx-auto ${
          inView
            ? "animate__animated animate__slideInUp animate__delay--0.5s"
            : "opacity-0"
        }`}
      >
        <h2 className="mb-8 text-3xl font-bold text-center text_text_dark">
          Our Services
        </h2>

        <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative w-full max-w-xs overflow-hidden transition-transform border-none cursor-pointer sm:max-w-lg md:max-w-xs xl:max-w-sm 2xl:max-w-md bg-light dark:bg-light transform-gpu hover:scale-105"
              imgAlt="service images"
              imgSrc={service.imgSrc}
            >
              <h5 className="text-2xl font-bold tracking-tight text- text_dark">
                {service.title}
              </h5>
              <p className="pb-6 font-normal text-gray-700">
                {service.description}
              </p>
              <button className="hover:underline">Know more &rarr;</button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
