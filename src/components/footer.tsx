import { createPortal } from "react-dom";
import Brand from "./brand";

export default function Footer() {
  return (
    <div className="py-6">
      <div className=" flex flex-row justify-between">
        <Brand />
        <div className="max-w-[672px]">
          <p className="w-auto text-wrap text-lg font-normal leading-normal tracking-wide text-gray-800">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
      </div>
      {createPortal(
        <>
          <div className="my-1 mb-6 h-[1px] w-full bg-gray-200" />
          <div className="container mx-auto pb-12">
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Copyright 2023 Codemasters.id | All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </>,
        document.body,
      )}
    </div>
  );
}
