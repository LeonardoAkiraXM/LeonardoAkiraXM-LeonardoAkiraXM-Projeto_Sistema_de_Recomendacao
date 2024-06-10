"use strict";
import { Text, Img } from "../../components";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem
} from "react-accessible-accordion";

export default function AccordionPage() {
  return (
    <>
      {/* registration section */}
      <div className="flex w-full justify-center bg-light_blue-100 p-7">
        <div className="mb-235 flex w-95% flex-col items-start gap-111 md:w-full md:gap-83 sm:gap-55">
          {/* image gallery section */}
          <div className="flex w-57% items-center justify-between gap-5 md:w-full sm:flex-col">
            <a href="https://www.youtube.com/embed/bv8Fxk0527I" target="_blank">
              <Img
                src="img_rectangle1.png"
                width={212}
                height={124}
                alt="primary image"
                className="h-124 w-27% self-end rounded-30 object-cover sm:w-full"
              />
            </a>
            <Img
              src="img_rectangle6.png"
              width={289}
              height={138}
              <img src="img_rectangle_6.png"
              alt="secondary image"
              className="h-[138px] w-[37%] rounded-[30px] object-cover sm:w-full" />
            />
        </div>
        <div className="flex w-full justify-center bg-light_blue-100 p-7">
        <div className="container-xs md:p-5">
            {/* user details form section */}
            <Accordion className="flex flex-col gap-29">
             {[...Array(5)].map((_, i) => (
              <AccordionItem uuid={i} key={`Expandable List${i}`}>
                <AccordionItemHeading className="w-full">
                 <AccordionItemButton>
                  <AccordionItemState>
                   {(props) => (
                     <div className="ml-7 flex flex-1 rounded-31 bg-blue-200 p-15 md:ml-0">
                      <Text size="lg" as="p" className="mb-21 ml-1.5 md:ml-0">
                       NOME DE USUARIO:
                    </Text>
                  </div>
                )}
              </AccordionItemState>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div>Dummy Content</div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</div>
</div>
</>
);
}
