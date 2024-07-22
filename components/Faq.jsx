import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  { id: 1, title: "What is the cost of a mobile application?" },
  { id: 2, title: "How long will development take?" },
  { id: 3, title: "Do you provide a guarantee for the mobile application?" },
  {
    id: 4,
    title: "I will not tell my idea, do you guarantee confidentiality?",
  },
];
const Faq = () => {
  return (
    <section className="container  max-auto p-8 md:p-16 ">
      <h2 className="text-4xl font-bold ">FAQ</h2>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {faq.map((f) => (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg  font-semibold hover:no-underline">
                <p className="text-start ">{f.title}</p>
              </AccordionTrigger>
              <AccordionContent className="font-normal text-base">
                <p className="pb-4">
                  Development terms directly depend on the requirements for the
                  mobile application, the characteristics of the company, as
                  well as the wishes of the customer.
                </p>
                <p>
                  Average development time from start to finished application:
                </p>
                <p>Medium projects up to 3 months.</p>
                <p>Large projects about 4-6 months.</p>
                To get a more accurate estimate of the project completion time,
                it is necessary to determine{" "}
                <p>
                  the main task of the application, think over its logic and
                  functionality.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Faq;
