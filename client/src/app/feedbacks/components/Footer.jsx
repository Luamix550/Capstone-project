import React from "react";
import { TbPhone, TbMail } from "react-icons/tb";

export const Footer = () => {
  return (
    <>
      <footer className="backdrop-blur-xl bg-white/30 flex flex-wrap p-3 justify-between gap-5 ">
        <div className="flex flex-wrap gap-2">
          <div className="grid place-content-center">
            <button className="bg-green-100 grid place-content-center p-3 hover:bg-green-200 text-green-800 font-bold rounded text-sm">
              Visit Out Page
            </button>
          </div>

          <div className="grid place-content-center">
            <div>
              <h3 className="font-bold">Apply to our job openings</h3>
              <p className="text-sm">
                At Smart Talent, we want to help you find the ideal job through
                challenges aligned with industry needs.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-1">
          <div className="flex flex-col gap-1">
            <h3 className="text-start font-bold">I'm a talent</h3>
            <div className="flex flex-row gap-2 hover:bg-green-100 pt-1 pb-1 pl-2 pr-2 rounded cursor-pointer">
              <div className="grid place-content-center">
                <TbPhone className="text-green-700" />
              </div>
              <p className="text-sm">+57 322 516 4187</p>
            </div>

            <div className="flex flex-row gap-2 hover:bg-green-100 pt-1 pb-1 pl-2 pr-2 rounded cursor-pointer">
              <div className="grid place-content-center">
                <TbMail className="text-green-700" />
              </div>
              <a href="mailto:info@smartalentit.com" className="text-sm">
                info@smartalentit.com
              </a>
            </div>

            <div className="flex flex-row gap-2 hover:bg-green-100 pt-1 pb-1 pl-2 pr-2 rounded cursor-pointer">
              <div className="grid place-content-center">
                <TbMail className="text-green-700" />
              </div>
              <a href="mailto:info@smartranks.co" className="text-sm">
                info@smartranks.co
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-start font-bold">I'm a talent</h3>
            <div className="flex flex-row gap-2 hover:bg-green-100 pt-1 pb-1 pl-2 pr-2 rounded cursor-pointer">
              <div className="grid place-content-center">
                <TbPhone className="text-green-700" />
              </div>
              <a href="mailto:info@smartalentit.com" className="text-sm">
                info@smartalentit.com
              </a>
            </div>

            <div className="flex flex-row gap-2 hover:bg-green-100 pt-1 pb-1 pl-2 pr-2 rounded cursor-pointer">
              <div className="grid place-content-center">
                <TbMail className="text-green-700" />
              </div>
              <p className="text-sm">+57 322 516 4187</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
