import emailjs from "@emailjs/browser";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Send form data to luxconsultee@gmail.com
    const templateParams = {
      from_name: data.fullName,
      message: `${data.message} \n\n Phone number: ${data.phoneNumber} \n Email: ${data.email}`,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully");
        reset();
      })
      .catch((error) => {
        toast.error("Message not sent");
      });
  };

  return (
    <div className="relative py-28 bg-[#0a0a0a]">
      <div className="relative z-10  mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <h3 className="text-cyan-400 font-semibold">Contact</h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className="text-gray-300">
            We’d love to hear from you! Please fill out the form bellow.
          </p>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-md sm:px-8 sm:rounded-xl">
          <ToastContainer />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                {...register("fullName", { required: true })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
              {errors.fullName && <span>This field is required</span>}
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full lowercase mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                  <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                    <option>KE</option>
                  </select>
                </div>
                <input
                  type="number"
                  placeholder="+254 700 000 000"
                  {...register("phoneNumber", { required: true })}
                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
                {errors.phoneNumber && <span>This field is required</span>}
              </div>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="w-full normal-case mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </div>
  );
}

export default ContactForm;
