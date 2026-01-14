"use client";
import { useState } from "react";
import EnrollModal from "./EnrollModal";

export default function EarlyBird() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="text-center bg-[#171D20] pb-20 text-[#FEFEFE] relative"
      id="pricing"
    >
      <div className="flex flex-col items-center pt-48 md:pt-28">
        <p className="text-3xl md:text-4xl xl:text-5xl font-normal text-center leading-none md:leading-[100%] tracking-[-2px] mb-6 ">
          Early bird discount extended
        </p>
        <h1 className="text-[60px] md:text-[128px] xl:text-[150px] font-medium ">
          ₦55,000
        </h1>
        <h5 className=" text-[#FEFEFEE5]/90 text-4xl md:text-[58px] xl:text-[70px] relative mb-5">
          ₦75,000
          <span className="absolute border-2 border-[#ED421B] w-full left-0 top-1/2"></span>
        </h5>

        <h6 className="text-[#848181] text-2xl leading-none md:text-[32px] xl:text-[36px] md:leading-[1.3] tracking-[-2px]  mt-8">
          Includes portfolio and CV reviews*
        </h6>
        <h6 className="italic mb-8 md:mb-10 xl:mb-16 text-[#848181]">
          *Available upon request
        </h6>
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer py-4 font-medium text-xs md:text-sm leading-6 tracking-[0.5px]  bg-[#F1B130] text-black outline-0 rounded-lg w-[336px] md:w-[754px] xl:w-[805px] hover:bg-[#E2E3E3] hover:text-black transition-colors duration-500"
        >
          ENROLL NOW
        </button>

        <EnrollModal open={open} onClose={() => setOpen(false)} />
      </div>
    </section>
  );
}
