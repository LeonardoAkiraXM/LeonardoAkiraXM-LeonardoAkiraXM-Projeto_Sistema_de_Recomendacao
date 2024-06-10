import { Text, Img } from "../../components";
import React from "react";

export default function LoginPage() {
  return (
    /* login section */
    <div className="flex w-full flex-col items-start gap-[53px] bg-light_blue-100_91_01 p-[25px] sm:gap-[26px] sm:p-5">
      /* Image gallery section */
      <div className="flex w-[59%] items-center justify-between gap-5 md:w-full md:flex-col">
        <a href="https://www.youtube.com/embed/bvBFxkosz71" target="_blank">
          <Img
            src="img_rectangle_1.png"
            width={212}
            height={124}
            alt="primary image"
            className="h-[124px] w-[26%] rounded-[30px] object-cover md:w-full"
          />
        </a>
        <a href="https://www.youtube.com/embed/bv8Fxkesz71" target="_blank">
          <Img
            src="img_rectangle_6.png"
            width={212}
            height={124}
            alt="secondary image"
            className="h-[124px] w-[26%] rounded-[30px] object-cover md:w-full"
          />
        </a>
        <Img
          src="img_rectangle_17.png"
          width={250}
          height={119}
          alt="tertiary image"
          className="h-[119px] w-[30%] rounded-[30px] object-cover md:w-full"
        />
      </div>// credentials form section
<div className="flex w-[97%] flex-col md:flex-row md:full">
  <div className="container mx-5 mb-[50px] md:mx-5 md:p-5">
    <div className="flex flex-col bg-blue-200 p-[3px] pl-[30px] pr-[30px] pt-3.5 pb-sm:pb-5 sm:p-5">
      <Text as="h2" className="rounded bg-blue-200 p-[3px] pl-[30px] pr-[30px] pt-4 pb-sm:pb-5 sm:p-5">
        EMAIL:
      </Text>
      {/* Text input */}
    </div>
    <div className="flex flex-col bg-blue-200 p-[3px] pl-[30px] pr-[30px] pt-3.5 pb-sm:pb-5 sm:p-5">
      <Text as="h2" className="rounded bg-blue-200 p-[3px] pl-[30x0 pr=[30x0 pt=4 pb-sm:pb=5 sm:p-5">
        SENHA:
      </Text>
      {/* Text input */}
    </div>
  </div>
</div>

