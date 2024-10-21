"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import faqs from "@/assets/faqs.json";

export default function FAQAccordion() {
  return (
    <Accordion
      itemClasses={{
        title: "text-sm sm:text-base",
        content: "text-sm sm:text-base",
      }}
      variant="shadow"
    >
      {faqs.map((faq, idx) => (
        <AccordionItem key={idx} aria-label={faq.title} title={faq.title}>
          {faq.description}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
