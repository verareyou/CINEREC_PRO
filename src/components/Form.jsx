import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function Form() {
  const [state, handleSubmit] = useForm("mknarvbo");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="text-[#454d59] z-[99] " onSubmit={handleSubmit}>
      <div className="email flex flex-col ">
        <label className="mb-4" htmlFor="email  ">
          Email Address
        </label>
        <input
          placeholder="@email.com"
          className=" bg-[#41474c] max-sm:w-full rounded-sm font-light text-[white] outline-none p-1 "
          id="email"
          type="email"
          name="email"
        />
      </div>
      <div className="message  flex flex-col ">
        <label className="my-4" htmlFor="message">
          Message
        </label>
        <textarea
          className=" bg-[#41474c] max-sm:w-full rounded-sm font-light text-[white] outline-none p-1 "
          id="message"
          name="message"
        />
      </div>
      <button
        className=" bg-[#41474c] px-4 py-1 backdrop-blur-sm text-[white] rounded-full max-lg:hover:bg-[#8895a322] duration-150 hover:text-white z-[99999] mt-[10%]
        max-sm:mt-[20%]
        "
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
