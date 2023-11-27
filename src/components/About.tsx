import { Carousel } from "flowbite-react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section id="about" className="pb-8 pt-80 md:pt-36 bg-light">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-start gap-8 md:items-start md:flex-row md:justify-center">
          <div
            ref={ref}
            className={`w-full mx-auto overflow-hidden ${
              inView ? "animate__zoomIn animate__animated" : "opacity-0"
            } md:w-2/3 lg:w-3/4 xl:w-4/5 aspect-video rounded-xl md:self-center`}
          >
            <div className="self-end h-56 sm:h-60 xl:h-80 2xl:h-96">
              <Carousel>
                <img src="/image2.jpg" alt="construction site" />
                <img src="/image3.jpg" alt="construction site" />
                <img src="/image4.jpg" alt="construction site" />
              </Carousel>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 md:space-y-0 md:w-1/2 animate__slideInUp animate__animated">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter text-text_dark sm:text-4xl md:text-3xl">
                About Us
              </h2>
              <div className="underline h-0.5 w-1/2 mx-auto md:mx-0 bg-primary my-2 md:my-0" />
            </div>

            <div className="pt-2">
              <p className="text-lg text-gray-700 md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                Maharashtra Ltd. is a leading construction company focused on
                delivering high-quality infrastructure projects. Our team of
                experts is dedicated to ensuring customer satisfaction and
                delivering projects on time and within budget.
              </p>

              <div className="pt-2 text-sm xl:pt-8">
                <div>
                  <span>&#10003;</span> High-quality infrastructure projects
                </div>
                <div>
                  <span>&#10003;</span> Customer satisfaction
                </div>
                <div>
                  <span>&#10003;</span> Projects delivered on time and within
                  budget
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
