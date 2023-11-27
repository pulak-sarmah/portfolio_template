import { useInView } from "react-intersection-observer";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Spinner } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_5rqmqpy",
        "template_nkphvib",
        form.current!,
        "OCZLiT3sLTnJLaaow"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current!.reset();
          setLoading(false);
          toast.success("Email send successfully!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          toast.error("Error while sending email!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full py-12 mx-auto overflow-hidden bg-gray-100 md:py-24 lg:py-32 xl:py-48"
    >
      <div
        className={`container px-4 mx-auto md:px-6 ${
          inView ? "animate__animated animate__zoomIn" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 text-center lg:flex-row lg:items-start lg:space-y-0 lg:space-x-10 lg:text-left">
          <div className="space-y-2 lg:w-1/2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto pb-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              If you have any questions or want to work together, feel free to
              reach out.
            </p>
          </div>
          <div className="w-full max-w-sm mx-auto space-y-2 lg:max-w-full lg:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="flex w-full h-10 px-3 py-2 text-sm placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  id="name"
                  placeholder="Enter your name"
                  required
                  name="user_name"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex w-full h-10 px-3 py-2 text-sm placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                  name="user_email"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="flex w-full h-10 px-3 py-2 text-sm placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  id="subject"
                  placeholder="Enter the subject"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="flex w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px]"
                  id="message"
                  placeholder="Enter your message"
                  required
                  name="message"
                ></textarea>
              </div>
              <button
                value="Send"
                className={`px-4 py-2 h-[40px] w-[100px] text-white rounded-lg hover:bg-onHover bg-primary active:bg-primary`}
              >
                {loading ? (
                  <Spinner aria-label="Default status example" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
