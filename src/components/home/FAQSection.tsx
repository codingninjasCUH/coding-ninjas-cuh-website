import FAQAccordion from "@/components/home/FAQAccordion";

export default function FAQSection() {
  return (
    <section id={"faqs"} className="mt-24 space-y-4">
      <h1 className={"text-2xl sm:text-3xl font-semibold text-center"}>
        Frequently Asked Questions
      </h1>

      <FAQAccordion />
    </section>
  );
}
